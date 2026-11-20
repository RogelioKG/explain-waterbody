using UnityEngine;

namespace Water
{
    // 掛在有 Rigidbody 的物體上，讓它浮在水面上，跟著波浪起伏、傾斜。
    // 每個浮點代表物體裡一根垂直的柱子 (高 columnHeight，中心在浮點)：
    //   浮力：柱子泡進水裡幾成，就往上推幾成；全部泡進去時，所有浮點加起來是重量的 buoyancyRatio 倍。
    //   阻力：和浮點的速度反向、成正比，也乘上泡進水裡的比例，讓物體停下來，不一直彈跳、搖晃。
    // 每個浮點各自查水面高度，力加在各自的位置上，所以浮點泡得深淺不同時，物體自然傾斜。
    // 水面高度來自 WaterBody (TryFind 找出所在的湖，GetSurfaceHeight 查高度)；不在任何一片湖上時只受重力。
    [RequireComponent(typeof(Rigidbody))]
    public class Buoyancy : MonoBehaviour
    {
        // 浮點的位置，物體自己的座標。預設是 1 公尺方塊半高處的四個角
        [SerializeField] Vector3[] points =
        {
            new Vector3(-0.5f, 0f, -0.5f),
            new Vector3(0.5f, 0f, -0.5f),
            new Vector3(-0.5f, 0f, 0.5f),
            new Vector3(0.5f, 0f, 0.5f),
        };
        [SerializeField] float columnHeight = 1f;    // 每根柱子的高度，公尺；通常是物體的高度
        [SerializeField] float buoyancyRatio = 2f;   // 全部泡進水裡時，浮力是重量的幾倍；靜止時泡進水裡 1 / buoyancyRatio
        [SerializeField] float waterDrag = 8f;       // 水的阻力，1 / 秒；越大越快停下來

        Rigidbody body;

        void Awake()
        {
            body = GetComponent<Rigidbody>();
        }

        void FixedUpdate()
        {
            if (points.Length == 0 || !WaterBody.TryFind(transform.position, out WaterBody water))
            {
                return;
            }
            float height = Mathf.Max(columnHeight, 0.01f);   // 保險：柱高是 0 時會除以 0
            float share = 1f / points.Length;                // 每個浮點分到的份量

            for (int i = 0; i < points.Length; i++)
            {
                Vector3 point = transform.TransformPoint(points[i]);
                float bottom = point.y - 0.5f * height;
                float submerged = Mathf.Clamp01((water.GetSurfaceHeight(point) - bottom) / height);
                if (submerged <= 0f)
                {
                    continue;
                }
                Vector3 lift = -Physics.gravity * (body.mass * buoyancyRatio * share * submerged);
                Vector3 drag = -body.GetPointVelocity(point) * (body.mass * waterDrag * share * submerged);
                body.AddForceAtPosition(lift + drag, point, ForceMode.Force);
            }
        }

        // 選取物體時在 Scene 視窗畫出浮點 (青色小球)。只在 Editor 畫。
        void OnDrawGizmosSelected()
        {
            Gizmos.color = Color.cyan;
            for (int i = 0; i < points.Length; i++)
            {
                Gizmos.DrawSphere(transform.TransformPoint(points[i]), 0.05f);
            }
        }
    }
}
