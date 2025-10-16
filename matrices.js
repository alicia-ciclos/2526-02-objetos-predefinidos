"use strict"

function matrizIdentidad(N) {
    let matriz = []

    for(let i = 0; i < N; i++) {
        matriz[i] = []
    }

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            // este operador ternario:
            matriz[i][j] = (i == j) ? 1 : 0

            // equivale a:
            if(i == j) {
                matriz[i][j] = 1
            } else {
                matriz[i][j] = 0
            }
        }
    }

    return matriz
}

// Generar matriz triangular superior
// que tiene como entradas
//          1  2  3  ...
//          0  1  2  ...
//          0  0  1  ...
//               ...
//          0  0   ... 1

function matrizTriangularSuperior(N) {
    let matriz = []

    for(let i = 0; i < N; i++) {
        matriz[i] = []
    }

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            if(i > j) {
                matriz[i][j] = 0
            } else {
                matriz[i][j] = j - i + 1;
            }
        }
    }

    return matriz
}

// toma como parametro una matriz cuadrada
// (asumimos que es cuadrada)
// devuelve una cadena con la matriz pintada
// ej: si matriz es [[1, 0], [0, 1]]
// obtengo:
// " 1  0\n 0  1\n"
// (o similar)
function pintarMatrizCuadrada(matriz) {}