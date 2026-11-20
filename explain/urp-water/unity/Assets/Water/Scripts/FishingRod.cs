using UnityEngine;
using UnityEngine.InputSystem;

namespace Water
{
    // 掛在竿尖 (角色底下的空物件，藍色的 Z 軸朝角色前方)，配一個掛著 Buoyancy 的浮標。
    //   拋竿：按 castKey，浮標從竿尖往前上方飛出去，落水後由 Buoyancy 讓它浮著。
    //   收線：按住 reelKey，沿著釣線把浮標拉向竿尖；拉到離竿尖水平 reelDoneDistance 以內就收回竿尖。
    //   咬鉤：浮標在水裡、沒在收線時，依「等待 → 試咬 → 咬鉤」往下走；咬鉤時沒收線，魚就跑掉，回到等待。
    //   釣線：LineRenderer 從竿尖畫到浮標頂端；鬆的時候往下垂，收線、魚在拉、浮標在飛時拉直。
    [RequireComponent(typeof(LineRenderer))]
    public class FishingRod : MonoBehaviour
    {
        enum State { Idle, Flying, Waiting, Nibbling, Biting }

        [SerializeField] Rigidbody bobber;                              // 掛著 Buoyancy 的浮標
        [SerializeField] Vector3 bobberTop = new Vector3(0f, 1f, 0f);   // 浮標頂端 (綁線的地方)，浮標自己的座標

        [Header("Input")]
        [SerializeField] Key castKey = Key.F;     // 按一下拋竿
        [SerializeField] Key reelKey = Key.R;     // 按住收線

        [Header("Cast and Reel")]
        [SerializeField] float castSpeed = 8f;          // 拋出去的速度，公尺 / 秒
        [SerializeField] float castAngle = 30f;         // 拋出去的方向往上抬幾度
        [SerializeField] float reelSpeed = 2f;          // 收線的速度，公尺 / 秒
        [SerializeField] float reelStrength = 10f;      // 1 / 秒；越大越快追上收線的速度
        [SerializeField] float reelDoneDistance = 1f;   // 拉到離竿尖水平多近就收回竿尖，公尺

        [Header("Bite")]
        [SerializeField] Vector2 waitTime = new Vector2(3f, 8f);            // 等多久才有魚來，秒 (最短、最長)
        [SerializeField] Vector2Int nibbleCount = new Vector2Int(2, 4);     // 試咬幾下 (最少、最多)
        [SerializeField] float nibbleInterval = 0.8f;   // 試咬每一下相隔多久，秒
        [SerializeField] float nibbleDuration = 0.15f;  // 試咬每一下拉多久，秒
        [SerializeField] float nibblePull = 1f;         // 試咬的拉力，浮標重量的幾倍
        [SerializeField] float biteDuration = 1.5f;     // 咬鉤後等你收線多久，秒
        [SerializeField] float bitePull = 1.2f;         // 咬鉤的拉力，浮標重量的幾倍

        [Header("Line")]
        [SerializeField] float lineWidth = 0.02f;       // 線寬，公尺
        [SerializeField] int lineSegments = 20;         // 釣線分成幾段
        [SerializeField] float slackSag = 0.04f;        // 線鬆的時候，中間垂下「竿尖到浮標距離」的幾倍
        [SerializeField] float tightenSpeed = 4f;       // 鬆緊切換的速度，1 / 秒；4 是 0.25 秒從鬆到緊

        LineRenderer line;
        Vector3[] linePoints;
        State state;
        float stateStartTime;   // 進入目前狀態的時間 (Time.time)
        float waitDuration;     // 這一次要等多久
        int nibblesLeft;        // 還要試咬幾下
        bool pulling;           // 這一步物理有沒有東西在拉線 (收線或魚)
        float tightness;        // 釣線的鬆緊：0 是鬆，1 是拉直

        void Awake()
        {
            line = GetComponent<LineRenderer>();
            line.useWorldSpace = true;
            line.widthMultiplier = lineWidth;
            linePoints = new Vector3[Mathf.Max(lineSegments, 1) + 1];
        }

        void Start()
        {
            ReturnToTip();
        }

        // 讀「這一格剛按下」的按鍵：它以畫面的格為單位，所以在 Update 讀。
        void Update()
        {
            Keyboard keyboard = Keyboard.current;
            if (keyboard == null)
            {
                return;
            }
            if (state == State.Idle && keyboard[castKey].wasPressedThisFrame)
            {
                Cast();
            }
        }

        // 力都在 FixedUpdate 加，每一步物理一次。
        void FixedUpdate()
        {
            pulling = false;
            if (state == State.Idle)
            {
                return;
            }

            Keyboard keyboard = Keyboard.current;
            if (keyboard != null && keyboard[reelKey].isPressed)
            {
                if (state == State.Biting)
                {
                    Debug.Log("FishingRod: hooked!", this);
                }
                if (state != State.Flying)
                {
                    StartWaiting();   // 收線會把魚嚇跑：放開之後重新等
                }
                Reel();
                return;
            }

            switch (state)
            {
                case State.Flying:
                    if (InWater())
                    {
                        StartWaiting();
                    }
                    break;

                case State.Waiting:
                    if (Time.time - stateStartTime >= waitDuration)
                    {
                        nibblesLeft = Random.Range(nibbleCount.x, nibbleCount.y + 1);
                        Enter(State.Nibbling);
                    }
                    break;

                case State.Nibbling:
                    float sinceTap = Time.time - stateStartTime;
                    if (sinceTap < nibbleDuration)
                    {
                        PullDown(nibblePull);
                    }
                    else if (sinceTap >= nibbleInterval)
                    {
                        nibblesLeft--;
                        Enter(nibblesLeft > 0 ? State.Nibbling : State.Biting);
                    }
                    break;

                case State.Biting:
                    if (Time.time - stateStartTime < biteDuration)
                    {
                        PullDown(bitePull);
                    }
                    else
                    {
                        Debug.Log("FishingRod: the fish got away", this);
                        StartWaiting();
                    }
                    break;
            }
        }

        // 物理與角色的動畫都更新完之後，才把浮標放回竿尖、畫釣線，兩者才會對齊竿尖這一格的位置。
        void LateUpdate()
        {
            if (state == State.Idle)
            {
                HoldAtTip();
            }
            float target = (pulling || state == State.Flying) ? 1f : 0f;
            tightness = Mathf.MoveTowards(tightness, target, tightenSpeed * Time.deltaTime);
            DrawLine();
        }

        void Enter(State next)
        {
            state = next;
            stateStartTime = Time.time;
        }

        void StartWaiting()
        {
            waitDuration = Random.Range(waitTime.x, waitTime.y);
            Enter(State.Waiting);
        }

        // 交給物理，往竿尖面對的水平方向、往上抬 castAngle 度飛出去。
        void Cast()
        {
            HoldAtTip();
            bobber.isKinematic = false;
            Vector3 flat = transform.forward;
            flat.y = 0f;
            flat.Normalize();
            float angle = castAngle * Mathf.Deg2Rad;
            bobber.linearVelocity = (flat * Mathf.Cos(angle) + Vector3.up * Mathf.Sin(angle)) * castSpeed;
            bobber.angularVelocity = Vector3.zero;
            Enter(State.Flying);
        }

        // 沿著竿尖方向拉：速度比收線速度慢多少就拉多大；已經夠快就不拉 (線只能拉，不能推)。
        void Reel()
        {
            Vector3 toTip = transform.position - bobber.transform.TransformPoint(bobberTop);
            Vector3 flat = new Vector3(toTip.x, 0f, toTip.z);
            if (flat.magnitude < reelDoneDistance)
            {
                ReturnToTip();
                return;
            }
            Vector3 direction = toTip.normalized;
            float along = Vector3.Dot(bobber.linearVelocity, direction);
            float pull = Mathf.Max(0f, reelSpeed - along) * reelStrength;
            // 加在浮點的高度 (物體的原點)：水的阻力也在這個高度，浮標不會被拉翻
            bobber.AddForceAtPosition(direction * (bobber.mass * pull), bobber.transform.position, ForceMode.Force);
            pulling = true;
        }

        // 魚往下拉：拉力是浮標重量的 times 倍，加在重心，只往下沉、不會被拉歪。
        void PullDown(float times)
        {
            bobber.AddForce(Physics.gravity * (bobber.mass * times), ForceMode.Force);
            pulling = true;
        }

        bool InWater()
        {
            Vector3 p = bobber.transform.position;
            return WaterBody.TryFind(p, out WaterBody water) && p.y < water.GetSurfaceHeight(p);
        }

        void ReturnToTip()
        {
            bobber.isKinematic = true;
            Enter(State.Idle);
            HoldAtTip();
        }

        // 浮標直立掛在竿尖下方，頂端對齊竿尖。
        void HoldAtTip()
        {
            Transform b = bobber.transform;
            b.rotation = Quaternion.identity;
            b.position = transform.position - b.TransformVector(bobberTop);
        }

        // 從竿尖到浮標頂端，直線往下扣掉 4 · sag · t(1 − t)：兩端不動，中間垂得最多。
        void DrawLine()
        {
            Vector3 start = transform.position;
            Vector3 end = bobber.transform.TransformPoint(bobberTop);
            float sag = slackSag * Vector3.Distance(start, end) * (1f - tightness);
            for (int i = 0; i < linePoints.Length; i++)
            {
                float t = i / (linePoints.Length - 1f);
                linePoints[i] = Vector3.Lerp(start, end, t) + Vector3.down * (4f * sag * t * (1f - t));
            }
            line.positionCount = linePoints.Length;
            line.SetPositions(linePoints);
        }
    }
}
