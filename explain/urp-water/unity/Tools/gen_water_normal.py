# /// script
# requires-python = ">=3.10"
# dependencies = ["numpy", "pillow"]
# ///
"""產生細波紋用的 normal map：可以無縫平鋪的切線空間 normal map (綠色 channel 朝貼圖的 +V)。

做法：依 Phillips 海浪頻譜給每個波長、方向一個隨機振幅，用 FFT 疊成一片週期性的高度場，
再由高度的斜率算出每個像素的 normal。FFT 的結果本身就是週期的，所以左右、上下邊緣接得起來。

用法：uv run Tools/gen_water_normal.py
輸出：Assets/Water/Textures/WaterNormal.png (1024 × 1024，8-bit RGB)
"""

from pathlib import Path

import numpy as np
from PIL import Image

SIZE = 1024              # 貼圖邊長 (像素)
SEED = 7                 # 固定 seed，每次產生的圖都相同
PATCH_M = 40.0           # 模擬時一張貼圖代表的海面邊長 (公尺)
WIND_SPEED = 4.0         # 風速 (公尺 / 秒)，決定最長的那些波有多長 (Phillips L = V² / g)
WIND_DIR_DEG = 30.0      # 風向 (度，0 = 貼圖 +U，逆時針)
SPREAD = 4.0             # 方向集中度：|cos(波的方向, 風向)|^SPREAD，越大越像一條條平行的波
SPREAD_FLOOR = 0.10      # 側向與逆風的波保留的比例，打散條紋
SMALL_WAVE_M = 0.35      # 短波截斷長度 (公尺)，壓掉比幾個像素還小的波
TARGET_MEAN_XY = 0.42    # normal 的強度：所有像素 normal 的 xy 長度平均
G = 9.81
OUTPUT = Path(__file__).resolve().parent.parent / "Assets" / "Water" / "Textures" / "WaterNormal.png"


def generate():
    n = SIZE
    rng = np.random.default_rng(SEED)
    k1 = 2 * np.pi * np.fft.fftfreq(n, PATCH_M / n)
    kx, ky = np.meshgrid(k1, k1)
    k = np.hypot(kx, ky)
    k[0, 0] = 1.0
    L = WIND_SPEED ** 2 / G
    a = np.radians(WIND_DIR_DEG)
    # 影像的列往下，貼圖的 V 往上：ky 取負才是貼圖上的方向
    cosw = (kx * np.cos(a) - ky * np.sin(a)) / k
    direc = SPREAD_FLOOR + (1 - SPREAD_FLOOR) * np.abs(cosw) ** SPREAD
    P = np.exp(-1.0 / (k * L) ** 2) / k ** 4 * direc * np.exp(-(k * SMALL_WAVE_M) ** 2)
    P[0, 0] = 0.0
    xi = (rng.standard_normal((n, n)) + 1j * rng.standard_normal((n, n))) / np.sqrt(2)
    H = xi * np.sqrt(P)
    hx = np.real(np.fft.ifft2(1j * kx * H))      # 高度沿 U 的斜率
    hrow = np.real(np.fft.ifft2(1j * ky * H))    # 高度沿影像列 (往下) 的斜率 = 沿 V 的斜率取負

    def normal(s):
        nx, ny, nz = -hx * s, hrow * s, np.ones_like(hx)
        l = np.sqrt(nx * nx + ny * ny + nz * nz)
        return np.stack([nx / l, ny / l, nz / l], -1)

    # 二分搜尋高度的倍數，讓 normal 的 xy 長度平均等於 TARGET_MEAN_XY
    lo, hi = 1e-6, 1e9
    for _ in range(80):
        mid = np.sqrt(lo * hi)
        m = np.hypot(*normal(mid)[..., :2].transpose(2, 0, 1)).mean()
        lo, hi = (mid, hi) if m < TARGET_MEAN_XY else (lo, mid)
    nrm = normal(mid)
    return np.clip(np.round((nrm * 0.5 + 0.5) * 255), 0, 255).astype(np.uint8)


if __name__ == "__main__":
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(generate(), "RGB").save(OUTPUT)
    print(f"wrote {OUTPUT}")
