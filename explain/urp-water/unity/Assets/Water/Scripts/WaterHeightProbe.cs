using UnityEngine;

namespace Water
{
    // 測試與除錯用：每一格把這個物件的 Y 設成它所在位置的水面高度，X、Z 不動。
    // 掛在一顆小球上按 Play，小球應該一直貼著水面起伏。不在任何一片湖的範圍內時不動。
    public class WaterHeightProbe : MonoBehaviour
    {
        void Update()
        {
            Vector3 position = transform.position;
            if (WaterBody.TryFind(position, out WaterBody body))
            {
                position.y = body.GetSurfaceHeight(position);
                transform.position = position;
            }
        }
    }
}
