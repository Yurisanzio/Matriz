/**
 * Função para contar submatriz encontrada dentro de uma matriz
 * @param {string|int} matriz 
 * @param {string|int} submatriz 
 * @returns 
 */
function contarSubmatriz(matriz, submatriz) {
    const linhasMatriz = matriz.length;
    const colunasMatriz = matriz[0].length;
    const linhasSubmatriz = submatriz.length;
    const colunasSubmatriz = submatriz[0].length;

    let count = 0;

    A.forEach((linhaA, i) => {
        if (i <= linhasMatriz - linhasSubmatriz) {
            linhaA.forEach((elementoA, j) => {
                if (j <= colunasMatriz - colunasSubmatriz) {
                    let found = true;

                    B.forEach((linhaB, k) => {
                        linhaB.forEach((elementoB, l) => {
                            if (A[i + k][j + l] !== B[k][l]) {
                                found = false;
                            }
                        });
                    });

                    if (found) {
                    count++;
                    }
                }
            });
        }
    });

    return count;
}