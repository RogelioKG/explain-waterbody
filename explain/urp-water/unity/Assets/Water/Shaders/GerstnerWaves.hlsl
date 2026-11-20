//UNITY_SHADER_NO_UPGRADE
#ifndef WATER_GERSTNER_WAVES_INCLUDED
#define WATER_GERSTNER_WAVES_INCLUDED

// 4 個 Gerstner 波疊加。所有位置與方向都是 world space。
// 每個波是一個 float4：x、y = 前進方向 (世界的 X、Z，長度不拘)，z = 陡度，w = 波長 (公尺)
// HeightScale 是浪高總控，乘在每個波的陡度上 (也就是乘在振幅上)。
void GerstnerWaves_float(float3 PositionWS, float WaveTime,
                         float4 Wave0, float4 Wave1, float4 Wave2, float4 Wave3,
                         float HeightScale,
                         out float3 PositionOut, out float3 NormalOut, out float3 TangentOut)
{
    float4 waves[4] = { Wave0, Wave1, Wave2, Wave3 };

    float3 offset = float3(0, 0, 0);     // 4 個波的位移加總
    float3 tangentX = float3(1, 0, 0);   // 沿 x 的切線 ∂P/∂x，平面時是 (1, 0, 0)
    float3 tangentZ = float3(0, 0, 1);   // 沿 z 的切線 ∂P/∂z，平面時是 (0, 0, 1)

    for (int i = 0; i < 4; i++)
    {
        float2 d = normalize(waves[i].xy);
        float steepness = waves[i].z * HeightScale;
        float k = 6.28318530 / waves[i].w;
        float omega = sqrt(9.81 * k);
        float phi = k * dot(d, PositionWS.xz) - omega * WaveTime;
        float a = steepness / k;
        float s = sin(phi);
        float c = cos(phi);

        offset += float3(d.x * a * c, a * s, d.y * a * c);
        tangentX += float3(-d.x * d.x * steepness * s, d.x * steepness * c, -d.x * d.y * steepness * s);
        tangentZ += float3(-d.x * d.y * steepness * s, d.y * steepness * c, -d.y * d.y * steepness * s);
    }

    PositionOut = PositionWS + offset;
    NormalOut = normalize(cross(tangentZ, tangentX));
    TangentOut = normalize(tangentX);
}

#endif // WATER_GERSTNER_WAVES_INCLUDED
