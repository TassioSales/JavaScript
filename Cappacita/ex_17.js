// 2) Crie as funções parametrizadas a seguir:

// a) Uma função que receba dois valores por parâmetro e multiplique um pelo
// outro

function multiplicacao(valor1, valor2) {
    subtrair = valor1 * valor2;
    console.log(subtrair)    
}

// b) Uma função que receba dois valores e retorne o menor deles, se forem
// iguais retorne que são iguais
function menorValor(num1, num2) {
    if (num1 > num2){
        console.log("Valor " + num2 + " e menor")
    }else if (num1 < num2){
        console.log("Valor " + num1 + " e menor")
    }else{
        console.log("O valores são iguais")
    }
    
}
// c) Uma função que receba um array e imprima todos os itens na tela

var listaDadosClientes = [
    {
    nome: 'Daiane',
    idade: 24,
    endereco: 'Rua Freire, 24, Consolação, São Paulo'
    },
    {
    nome: 'Gabriel',
    idade: 19,
    endereco: 'Rua Armando sá, 47, Perdizes, São Paulo'
    },
    {
    nome: 'Bruno',
    idade: 37,
    endereco: 'Av. Santos Dumont, 978, Belo Horizonte, Minas Gerais'
    }
    ]
    
function lerArray(array) {
    for(cliente in array){
        console.log(array[cliente])
    }
};
// d) Uma função que receba um o array listaDadosCliente e retorne outro array
// contendo somente os endereços destes clientes

function retornaEndereco(array) {
    lista_end = []
    for (end in array){
        lista_end[end] = array[end].endereco
    }
   return lista_end
}
// Uma função que receba um o array listaDadosCliente e retorne outro array
// contendo somente os nomes desses clientes

function retornaNome(array) {
    lista_end = []
    for (end in array){
        lista_end[end] = array[end].nome
    }
   return lista_end
}

multiplicacao(2, 6)
menorValor(2,2)
menorValor(7,8)
menorValor(9,6)
lerArray(listaDadosClientes)
console.log(retornaEndereco(listaDadosClientes))
console.log(retornaNome(listaDadosClientes))