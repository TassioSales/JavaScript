# 3) Utilize a função .map() no array a seguir e retorne a raiz quadrada de cada
# elemento usando também a função Math.sqrt (exemplo no slide no slide), não
# esqueça de imprimir na tela para ver o resultado.
from math import sqrt

numerosAleatorios = [12, 47, 66, 35, 142, 71, 14, 6]


numeros = map(sqrt, numerosAleatorios)

numeros = list(numeros)

print(f'{numeros}')