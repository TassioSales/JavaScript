# 2) Execute os seguintes comandos no console:
# a) Crie a variável valor e atribua o número 10.

valor =  10
print(f'Valor antes: {valor}')

# if (valor < 12) {
# console.log(‘É menor’)
# }

if valor < 12:
    print("E menor")
    
# b) Altere o conteúdo da variável valor para 8 e execute. O que imprime?

valor = 8

print(f"Valor depois: {valor}")

# c) Faça o seguinte comando com a mesma variável:
# if (valor < 5) {
# console.log(‘É menor’)
# } else {
# console.log(‘É maior’)
# }

if valor < 5:
    print("E menor")
else:
    print("E maior")
    
# d) Com a mesma variável teste o seguinte:
# if (valor < 5) {
# console.log(‘É menor’)
# } else if (valor == 8 {
# console.log(‘É igual’)
# } else {
# console.log(‘É maior’)
# }

if valor < 5:
    print("E menor")
elif valor == 8:
    print("E igual")
else:
    print('E maior')
