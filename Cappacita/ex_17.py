# 2) Crie as funções parametrizadas a seguir:

# a) Uma função que receba dois valores por parâmetro e multiplique um pelo
# outro

def multiplique(valor1, valor2):
    multiplicar =  valor1 * valor2
    print(multiplicar)


# b) Uma função que receba dois valores e retorne o menor deles, se forem
# iguais retorne que são iguais

def menorValor(valor1, valor2):
    if valor1 > valor2:
        print(f"O valor {valor2} e o menor valor entre {valor1} e {valor2}")
    elif valor1 < valor2:
        print(f"O valor {valor1} e o menor valor entre {valor1} e {valor2}")
    else:
        print(f"O valor {valor1} e valor {valor2} são iguais")

# c) Uma função que receba um array e imprima todos os itens na tela

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

# d) Uma função que receba um o array listaDadosCliente e retorne outro array
# contendo somente os endereços destes clientes


def novoArray_end(array):
    lista_endecos = []
    for end in range(len(array)):
        enderecos = {}
        enderecos["endereco"] = array[end]['endereco']
        lista_endecos.append(enderecos)
    print(lista_endecos)
    
# Uma função que receba um o array listaDadosCliente e retorne outro array
# contendo somente os nomes desses clientes


def novoArray_nome(array):
    lista_nome = []
    for end in range(len(array)):
        nome = {}
        nome["nome"] = array[end]['nome']
        lista_nome.append(nome)
    print(lista_nome)


multiplique(2, 5)
menorValor(5, 5)
menorValor(6, 7)
menorValor(9, 10)
lerArray(listaDadosClientes)
novoArray_end(listaDadosClientes)
novoArray_nome(listaDadosClientes)