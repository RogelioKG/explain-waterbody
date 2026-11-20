//UNITY_SHADER_NO_UPGRADE
#ifndef WATER_IMPACT_RIPPLES_INCLUDED
#define WATER_IMPACT_RIPPLES_INCLUDED

// 入水的漣漪：每筆入水事件一圈往外擴散、慢慢淡掉的環。只改 normal 與泡沫遮罩，不移動 vertex。
// 事件由 C# 的 WaterImpacts 用 Shader.SetGlobalVectorArray 寫進 _WaterImpacts (全域變數，所有湖共用)。
// 每筆一個 float4：x、y = 入水的位置 (世界的 X、Z)，z = 入水的時間 (和 _WaterTime 同一個時鐘)，w = 強度 (0 是空格；負數是只有起伏、沒有白色環帶的事件，強度取絕對值)
#define IMPACT_COUNT 32   // 和 WaterImpacts.Capacity 相同
float4 _WaterImpacts[IMPACT_COUNT];

// Shape：x = 往外擴散的速度 (公尺 / 秒)，y = 壽命 (秒)，z = 環的半寬 (公尺)，w = 強度 1 時最陡處沿半徑方向的斜率
// FoamWidth：強度 1 時白色環帶的半寬 (公尺)
// Foam：白色環帶的遮罩 (0 或 1)；NormalTS：所有環疊起來的 normal (tangent space)
void ImpactRipples_float(float3 PositionWS, float WaterTime, float4 Shape, float FoamWidth,
                         out float Foam, out float3 NormalTS)
{
    float2 slope = float2(0, 0);   // 所有環在這一點的 gradient (∂h/∂x, ∂h/∂z) 加總
    Foam = 0;

    for (int i = 0; i < IMPACT_COUNT; i++)
    {
        float4 impact = _WaterImpacts[i];
        float age = WaterTime - impact.z;
        if (impact.w == 0 || age < 0 || age >= Shape.y)
        {
            continue;   // 空格、還沒發生、已經消失
        }
        float strength = abs(impact.w) * (1 - age / Shape.y);   // 這一環現在的強度：壽命內從 |impact.w| 線性降到 0
        float2 offset = PositionWS.xz - impact.xy;
        float r = length(offset);
        float delta = r - Shape.x * age;                     // 離環的中線多遠：正的在外側

        float foam = impact.w > 0 ? step(abs(delta), FoamWidth * strength) : 0;   // 負數的事件沒有白色環帶
        Foam = max(Foam, foam);

        if (abs(delta) < Shape.z)
        {
            float dhdr = -strength * Shape.w * sin(3.14159265 * delta / Shape.z);   // 沿半徑方向的斜率
            slope += dhdr * offset / max(r, 0.0001);                             // 分到 x、z
        }
    }

    NormalTS = normalize(float3(-slope.x, -slope.y, 1));
}

#endif // WATER_IMPACT_RIPPLES_INCLUDED
