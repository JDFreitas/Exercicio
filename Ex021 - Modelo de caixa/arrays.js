// Cria uma matriz com 4 linhas e 5 colunas
var matriz = new Array(4);

for (var i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(5);
}

// Preenche a matriz com os múltiplos
for (var linha = 0; linha < matriz.length; linha++) {
  for (var coluna = 0; coluna < matriz[linha].length; coluna++) {
    matriz[linha][coluna] = (linha + 2) * (coluna + 1);
  }
}

// Imprime a matriz no console
for (var linha = 0; linha < matriz.length; linha++) {
  console.log(matriz[linha]);
}