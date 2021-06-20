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
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1)
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[2])