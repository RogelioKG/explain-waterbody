using UnityEngine;

namespace Water
{
    // 掛在會穿過水面的物體上 (方塊、你的角色、丟進湖裡的石頭)，在這些時候新增入水事件 (WaterImpacts.Add)：
    //   底端或頂端穿過水面 (落水、整個沉下去、浮上來、離開水面)：強度看上下的速度，foam 決定有沒有白色環帶；從水面上方落水時再噴一次水花。
    //   水面在底端與頂端之間 (半泡在水裡) 時：水平每移動 stepDistance 新增一筆，只有起伏、沒有白色環帶。
    // 底端、頂端是物體的位置往上幾公尺 (world Y)，不跟著物體旋轉。
    public class WaterSplash : MonoBehaviour
    {
        [SerializeField] float bottom = -0.5f;           // 底端：位置往上幾公尺 (在位置下方就填負數)
        [SerializeField] float top = 0.5f;               // 頂端：位置往上幾公尺

        [Header("Ripples")]
        [SerializeField] bool foam = true;               // 穿過水面時有沒有白色環帶 (角色可以取消勾選)
        [SerializeField] float minStrength = 0.3f;       // 穿過水面時的最小強度 (慢慢走進水裡)
        [SerializeField] float fullStrengthSpeed = 5f;   // 上下的速度到幾公尺 / 秒時強度是 1
        [SerializeField] float stepDistance = 0.75f;     // 半泡在水裡時，水平每移動幾公尺新增一筆
        [SerializeField] float stepStrength = 0.4f;      // 這種事件的強度 (只有起伏，沒有白色環帶)

        [Header("Splash")]
        [SerializeField] ParticleSystem splash;          // 噴水花的 Particle System；空的就不噴
        [SerializeField] int splashParticles = 30;       // 強度 1 時噴幾顆

        Rigidbody body;         // 有的話，上下的速度直接讀它
        int endsBelow;          // 底端、頂端有幾個在水面下：0、1、2
        Vector3 lastPosition;
        float moved;            // 半泡在水裡時，上一筆之後水平走了多遠

        void Awake()
        {
            body = GetComponent<Rigidbody>();
        }

        void Start()
        {
            lastPosition = transform.position;
            endsBelow = CountEndsBelow(lastPosition, out _);
        }

        void Update()
        {
            Vector3 position = transform.position;
            int below = CountEndsBelow(position, out float surface);
            Vector3 point = new Vector3(position.x, surface, position.z);

            if (below != endsBelow)
            {
                float strength = Mathf.Lerp(minStrength, 1f, VerticalSpeed(position) / fullStrengthSpeed);
                WaterImpacts.Add(point, strength, foam);
                if (endsBelow == 0)
                {
                    Splash(point, strength);
                }
                moved = 0f;
            }
            else if (below == 1)
            {
                Vector3 step = position - lastPosition;
                moved += new Vector2(step.x, step.z).magnitude;
                if (moved >= stepDistance)
                {
                    WaterImpacts.Add(point, stepStrength, false);
                    moved = 0f;
                }
            }

            endsBelow = below;
            lastPosition = position;
        }

        // 底端、頂端有幾個低於這裡的水面；不在任何一片湖上時是 0。surface 是這裡的水面高度。
        int CountEndsBelow(Vector3 position, out float surface)
        {
            surface = position.y;
            if (!WaterBody.TryFind(position, out WaterBody water))
            {
                return 0;
            }
            surface = water.GetSurfaceHeight(position);
            int count = 0;
            if (position.y + bottom < surface)
            {
                count++;
            }
            if (position.y + top < surface)
            {
                count++;
            }
            return count;
        }

        // 有 Rigidbody 就讀它的速度；沒有 (例如用 CharacterController 走的角色) 就用這一格移動的距離算。
        float VerticalSpeed(Vector3 position)
        {
            if (body != null)
            {
                return Mathf.Abs(body.linearVelocity.y);
            }
            return Time.deltaTime > 0f ? Mathf.Abs(position.y - lastPosition.y) / Time.deltaTime : 0f;
        }

        // 把 Particle System 移到入水的地方，一次噴出一批；強度越大噴越多。
        void Splash(Vector3 point, float strength)
        {
            if (splash == null)
            {
                return;
            }
            splash.transform.position = point;
            splash.Emit(Mathf.RoundToInt(splashParticles * strength));
        }
    }
}
