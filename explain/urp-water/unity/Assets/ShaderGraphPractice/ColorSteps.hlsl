//UNITY_SHADER_NO_UPGRADE
#ifndef PRACTICE_COLOR_STEPS_INCLUDED
#define PRACTICE_COLOR_STEPS_INCLUDED

void ColorSteps_float(float Seconds, float Speed, float Steps, float4 ColorA, float4 ColorB,
                      out float3 Color)
{
    float pulse = sin(Seconds * Speed) * 0.5 + 0.5;

    float steps = max(floor(Steps), 2.0);
    float level = min(floor(pulse * steps), steps - 1.0);

    float t = level / (steps - 1.0);
    Color = lerp(ColorA.rgb, ColorB.rgb, t);
}

#endif
