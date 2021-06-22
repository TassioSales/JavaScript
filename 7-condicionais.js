console.log('Trabalhando com listas');
// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de janeiro';

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de janeiro'
);

listaDeDestinos.push('Curitiba');//Adicionando um item a minha lista de destinos
listaDeDestinos.push('Brasilia')
console.log('Destinos possiveis');

const idadeComprador = 17;
console.log(listaDeDestinos);

if (idadeComprador >=  18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1)
}else {
    console.log("Não e maior de idade, Não posso vender")
}

console.log(listaDeDestinos)

