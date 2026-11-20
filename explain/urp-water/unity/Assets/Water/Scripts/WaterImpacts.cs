using UnityEngine;

namespace Water
{
    // 記住最近 Capacity 筆入水事件 (位置、時間、強度)，寫進全域 shader 變數 _WaterImpacts；
    // 水面 shader (ImpactRipples.hlsl) 依它畫出往外擴散的漣漪。
    // 任何程式都可以呼叫 WaterImpacts.Add；格子用完就蓋掉最舊的一筆。
    public static class WaterImpacts
    {
        public const int Capacity = 32;   // 和 ImpactRipples.hlsl 的 IMPACT_COUNT 相同

        static readonly int WaterImpactsId = Shader.PropertyToID("_WaterImpacts");
        static readonly Vector4[] impacts = new Vector4[Capacity];
        static int next;   // 下一筆要寫進哪一格

        // 新增一筆入水事件。position 只用 x、z；strength 0 到 1，越大漣漪越明顯，0 以下不記。
        // foam = false 時只有起伏、沒有白色環帶 (例如涉水時每走一段記的那幾筆)。
        public static void Add(Vector3 position, float strength, bool foam = true)
        {
            if (strength <= 0f)
            {
                return;
            }
            // 沒有白色環帶的事件，強度存成負數：shader 用絕對值當強度，正負號決定要不要白色環帶
            float w = foam ? Mathf.Clamp01(strength) : -Mathf.Clamp01(strength);
            // 時間用 Time.time：Play 中 WaterBody 寫進 _WaterTime 的也是它，shader 才算得出事件過了多久
            impacts[next] = new Vector4(position.x, position.z, Time.time, w);
            next = (next + 1) % Capacity;
            Shader.SetGlobalVectorArray(WaterImpactsId, impacts);
        }

        // 每次進入 Play 都清空。全域 shader 變數在 Play 結束後可能還留著 (官方文件沒寫)，
        // 留著的話，上一次 Play 的事件會在 Time.time 重新走到那個時間時又冒出來。
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        static void Clear()
        {
            System.Array.Clear(impacts, 0, Capacity);
            next = 0;
            Shader.SetGlobalVectorArray(WaterImpactsId, impacts);
        }
    }
}
