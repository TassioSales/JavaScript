# Faça um loop que multiplique por 2 somente os números pares do array numeros =
# [1,2,3,4,5,6,7,8,9,10]

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(f"Antes: {numeros}")

for x ,num in enumerate(numeros):
    if num % 2 == 0:
        numeros[x] = numeros[x] * 2

print(f"Depois: {numeros}")