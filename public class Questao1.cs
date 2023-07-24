public class Questao1
{
    public static void Swap(ref int d1, ref int d2)
    {
        (d1, d2) = (d2, d1);
    }

    public static void InvertMatrizDiagonal(int[,] matriz)
    {
        if (matriz.GetLength(0) != matriz.GetLength(1)) {
            throw new ArgumentException("A matriz deve ser quadrada");
        }

        int n = matriz.GetLength(0) - 1;
        for (int i = 0; i <= n; i++) {
            Swap(ref matriz[i, i], ref matriz[i, n - i]);
        }
    }
}