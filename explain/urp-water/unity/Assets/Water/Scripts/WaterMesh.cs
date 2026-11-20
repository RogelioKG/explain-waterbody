using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Rendering;

namespace Water
{
    // 產生一片平的、格數可調的水面網格。
    // 網格的中心就是物件的位置，水面高度等於物件的 Y。
    // 在 Edit mode 也會執行，改 Inspector 的數值後 Scene 視窗立刻更新。
    [ExecuteAlways]
    [RequireComponent(typeof(MeshFilter), typeof(MeshRenderer))]
    public class WaterMesh : MonoBehaviour
    {
        const int MaxCellsPerSide = 1000;

        [SerializeField] Vector2 size = new Vector2(60f, 60f);          // 水面的寬 (X) 與長 (Z)，公尺
        [SerializeField] Vector2Int cells = new Vector2Int(200, 200);   // X 與 Z 方向各切幾格
        [SerializeField] bool logBuildInfo = true;                      // 重建時在 Console 印出格數與頂點數

        Mesh mesh;
        bool dirty;

        void OnEnable()
        {
            Build();
        }

        void OnValidate()
        {
            // OnValidate 只做標記，真正的重建留到下一次 Update
            dirty = true;
        }

        void Update()
        {
            if (dirty)
            {
                dirty = false;
                Build();
            }
        }

        void Build()
        {
            if (mesh == null)
            {
                mesh = new Mesh();
                mesh.name = "WaterMesh (generated)";
            }

            int cellsX = Mathf.Clamp(cells.x, 1, MaxCellsPerSide);
            int cellsZ = Mathf.Clamp(cells.y, 1, MaxCellsPerSide);
            int vertsX = cellsX + 1;
            int vertsZ = cellsZ + 1;
            int vertexCount = vertsX * vertsZ;

            // 先決定索引格式：這一行同時會清空舊的三角形，後面縮小格數時不會有索引超出範圍
            mesh.indexFormat = vertexCount > 65535 ? IndexFormat.UInt32 : IndexFormat.UInt16;

            var vertices = new List<Vector3>(vertexCount);
            var uvs = new List<Vector2>(vertexCount);
            for (int z = 0; z < vertsZ; z++)
            {
                for (int x = 0; x < vertsX; x++)
                {
                    float u = (float)x / cellsX;
                    float v = (float)z / cellsZ;
                    vertices.Add(new Vector3((u - 0.5f) * size.x, 0f, (v - 0.5f) * size.y));
                    uvs.Add(new Vector2(u, v));
                }
            }

            var triangles = new int[cellsX * cellsZ * 6];
            int t = 0;
            for (int z = 0; z < cellsZ; z++)
            {
                for (int x = 0; x < cellsX; x++)
                {
                    int bottomLeft = z * vertsX + x;
                    int bottomRight = bottomLeft + 1;
                    int topLeft = bottomLeft + vertsX;
                    int topRight = topLeft + 1;

                    // 從上方 (+Y) 往下看是順時針
                    triangles[t++] = bottomLeft;
                    triangles[t++] = topLeft;
                    triangles[t++] = bottomRight;

                    triangles[t++] = bottomRight;
                    triangles[t++] = topLeft;
                    triangles[t++] = topRight;
                }
            }

            mesh.SetVertices(vertices);
            mesh.SetUVs(0, uvs);
            mesh.SetTriangles(triangles, 0, true, 0);
            mesh.RecalculateNormals();

            // 切線沿 +X (U 增加的方向)。shader 會用 Gerstner 的切線取代 xyz，只有 w 留下來。
            // B = w × cross(N, T)；平面上 cross((0, 1, 0), (1, 0, 0)) = (0, 0, -1)，w = -1 才會讓 B 朝 +Z (V 增加的方向)。
            var tangents = new Vector4[vertexCount];
            for (int i = 0; i < vertexCount; i++)
            {
                tangents[i] = new Vector4(1f, 0f, 0f, -1f);
            }
            mesh.tangents = tangents;

            GetComponent<MeshFilter>().sharedMesh = mesh;

            if (logBuildInfo)
            {
                Debug.Log($"WaterMesh: {cellsX} x {cellsZ} cells, {vertexCount} vertices, index format {mesh.indexFormat}", this);
            }
        }
    }
}
