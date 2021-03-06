// Você foi contratado por uma empresa de seguro de vida para criar uma função que retorna
// uma lista com todos os clientes que possuem idade entre 18 e 26 anos.
// Crie uma função que receba um array no modelo a seguir:

dadosClientes = [
    {
    nome: "Lucas",
    sobrenome: "da Silva",
    idade: 21,
    genero: "Masculino",
    plano: "full",
    carencia: false,
    aquisicao: "12/01/2019"
    },
    {
    nome: "Ana",
    sobrenome: "Lima",
    idade: 17,
    genero: "Feminino",
    plano: "medium",
    carencia: false,
    aquisicao: "17/03/2019"
    },
    {
    nome: "Adriana",
    sobrenome: "Menezes",
    idade: 27,
    genero: "Feminino",
    plano: "full",
    carencia: true,
    aquisicao: "14/09/2020"
    }
    ]


module.exports.retornaLista= (array) => {
    var listaIdade = []
    for (var i=0; i < array.length; i++){ 
        if (array[i].idade>=18 && array[i].idade<=26){
            listaIdade.push(array[i])
        }
    }
    return listaIdade
}

console.log(retornaLista(dadosClientes))
