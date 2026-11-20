# /// script
# requires-python = ">=3.10"
# dependencies = []
# ///
"""產生泡沫用的 noise 貼圖：可以無縫平鋪的灰階 gradient noise。

用法：uv run Tools/gen_foam_noise.py
輸出：Assets/Water/Textures/FoamNoise.png (8-bit 灰階)
"""

import math
import random
import struct
import zlib
from pathlib import Path

SIZE = 256                       # 貼圖邊長 (像素)
BASE_CELLS = 8                   # 第一個 octave 每邊幾格；之後每個 octave 格數加倍
OCTAVES = 3                      # 疊幾層
PERSISTENCE = 0.5                # 每多一層，振幅乘上多少
SEED = 20261121                  # 固定 seed，每次產生的圖都相同
OUTPUT = Path(__file__).resolve().parent.parent / "Assets" / "Water" / "Textures" / "FoamNoise.png"


def make_gradients(cells, rng):
    """每個格點一個長度 1 的隨機方向。格點編號對 cells 取餘數，所以右邊緣接回左邊緣。"""
    grads = []
    for _ in range(cells * cells):
        a = rng.uniform(0.0, 2.0 * math.pi)
        grads.append((math.cos(a), math.sin(a)))
    return grads


def fade(t):
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0)


def periodic_gradient_noise(x, y, cells, grads):
    """x、y 在 0 到 1 (一張貼圖)；回傳約 -0.7 到 0.7。"""
    px, py = x * cells, y * cells
    ix, iy = math.floor(px), math.floor(py)
    fx, fy = px - ix, py - iy

    def corner(ox, oy):
        gx, gy = grads[((iy + oy) % cells) * cells + (ix + ox) % cells]
        return gx * (fx - ox) + gy * (fy - oy)

    d00, d10, d01, d11 = corner(0, 0), corner(1, 0), corner(0, 1), corner(1, 1)
    sx, sy = fade(fx), fade(fy)
    top = d00 + (d10 - d00) * sx
    bottom = d01 + (d11 - d01) * sx
    return top + (bottom - top) * sy


def generate():
    rng = random.Random(SEED)
    layers = []
    for o in range(OCTAVES):
        cells = BASE_CELLS * 2 ** o
        layers.append((cells, make_gradients(cells, rng), PERSISTENCE ** o))

    values = []
    for j in range(SIZE):
        for i in range(SIZE):
            x, y = i / SIZE, j / SIZE
            values.append(sum(amp * periodic_gradient_noise(x, y, cells, grads)
                              for cells, grads, amp in layers))

    lo, hi = min(values), max(values)
    return [round((v - lo) / (hi - lo) * 255) for v in values]


def write_gray_png(path, size, pixels):
    raw = b"".join(b"\x00" + bytes(pixels[j * size:(j + 1) * size]) for j in range(size))

    def chunk(kind, data):
        body = kind + data
        return struct.pack(">I", len(data)) + body + struct.pack(">I", zlib.crc32(body) & 0xFFFFFFFF)

    png = b"\x89PNG\r\n\x1a\n"
    png += chunk(b"IHDR", struct.pack(">IIBBBBB", size, size, 8, 0, 0, 0, 0))
    png += chunk(b"IDAT", zlib.compress(raw, 9))
    png += chunk(b"IEND", b"")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(png)


if __name__ == "__main__":
    write_gray_png(OUTPUT, SIZE, generate())
    print(f"wrote {OUTPUT}")
