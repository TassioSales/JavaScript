// 1) Crie as funções sem parâmetro a seguir:
// a) Uma função que calcule a multiplicação de dois valores (uma função sem
// parâmetro, ou seja, atribua os valores dentro da função)

function multiplicacao(valor1, valor2) {
    subtrair = valor1 * valor2;
    console.log(subtrair)    
}

// b) Uma função que calcule a subtração de dois valores, crie essas variáveis
// dentro da sua função

function subtracao(valor1, valor2) {
    subtrair = valor1 - valor2;
    console.log(subtrair)
}

// Uma função que imprima todos os itens do array (você pode definir esta
// variável dentro da função):

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

// d) Uma função que imprima somente os nomes dos clientes no array
// listaDadosClientes (você pode definir esta variável dentro da função)

function lerNomeCliente(array) {
    for(cliente in array){
        console.log("O nome do cliente e " + array[cliente]['nome'])
    }
}

   

multiplicacao(3, 100)
subtracao(6, 2)
lerArray(listaDadosClientes)
lerNomeCliente(listaDadosClientes)

