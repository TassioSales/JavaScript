# valor1 = 5, e valor2 = 3 faça os seguintes testes:
valor1 = 5
valor2 = 3

# a) Imprima o maior número
# b) Imprima o menor número 
# c) Imprima se valor1 é igual a valor2, senão imprima “É diferente” 

if valor1 > valor2:
    print(f"O valor {valor1} e maior que o valor {valor2}")
    print(f"E o valor {valor2} e menor que o valor {valor1}")
    print(f"E são diferentes")
elif valor1 < valor2:
    print(f"O valor {valor2} e maior que o valor {valor1}")
    print(f"E o valor {valor1} e menor que o valor {valor2}")
    print(f"E são diferentes")
else:
    print(f"O valor {valor1} e valor {valor2} são iguais")