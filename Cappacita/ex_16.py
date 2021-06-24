#  Crie as funções sem parâmetro a seguir:

# Uma função que calcule a multiplicação de dois valores (uma função sem
# parâmetro, ou seja, atribua os valores dentro da função)

def multiplicacao(valor1, valor2):
    multiplicar = valor1 * valor2
    print(multiplicar)
    
#  Uma função que calcule a subtração de dois valores, crie essas variáveis
# dentro da sua função

def subtracao(valor1, valor2):
    subtrair = valor1 - valor2
    print(subtrair)
    
# Uma função que imprima todos os itens do array (você pode definir esta
# variável dentro da função):
listaDadosClientes = [{
'nome': 'Daiane',
'idade': 24,
'endereco': 'Rua Freire, 24, Consolação, São Paulo'
},
{
'nome': 'Gabriel',
'idade': 19,
'endereco': 'Rua Armando sá, 47, Perdizes, São Paulo'
},
{
'nome': 'Bruno',
'idade': 37,
'endereco': 'Av. Santos Dumont, 978, Belo Horizonte, Minas Gerais'
}]

def lerArray(array):
    for nome in range(len(array)):
        print("O nome do cliente e {}, ele tem {} anos , mora em {}".format(array[nome]['nome'], array[nome]['idade'], array[nome]['endereco'])) 
    


# d) Uma função que imprima somente os nomes dos clientes no array
# listaDadosClientes (você pode definir esta variável dentro da função)

def nomeClient(Array):
    for nome in range(len(Array)):
        print("O nome do cliente e {}". format(Array[nome]["nome"]))


multiplicacao(3,100)
subtracao(5, 2)        
lerArray(listaDadosClientes)
nomeClient(listaDadosClientes)
