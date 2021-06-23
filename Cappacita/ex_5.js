// 4) Vimos que os operadores lógicos ajudam a testar mais de uma condição ao mesmo
// tempo. Escreva os algoritmos que realizam os seguintes testes:
// a) Receber um valor e dizer se é maior que 10 e menor que 50, se não for diga “Insira
// um valor entre 10 e 50”. Use o operador &&

var numero = 45;

if(numero > 10 && numero < 50){
    console.log('O numero esta dentro dos paramentros exigidos')

}else{
    console.log('o numero não esta entre 10 e 50')
}
// b) Para entrar no cinema Tabajara é preciso ter idade maior que a idade de censura (14
// anos) e ter o ingresso. Faça um algoritmo que receba idade e ingresso, idade recebe
// um number e ingresso um boolean, se a idade for maior que 14 e ingresso true
// escreva “Pode entrar”, se a idade for menor ou igual a 14 e ingresso true escreva
// “Você não tem a idade mínima”, se a idade for maior que 14 e ingresso false escreva
// “Você precisa ter o ingresso”

var idade = 13;
var ingresso = false;

if (idade > 14 && ingresso === true){
    console.log('Pode entrar')
}else if (idade > 14 && ingresso === false){
    console.log('Você precisa ter o ingresso')
}else{
    console.log('Você não pode entrar')
}


// c) Receber um valor e dizer se é maior que 10 ou menor que 50, se não for diga “Insira
// um valor entre 10 e 50”. Use o operador ||


var numero_2 = 60;

if(numero_2 > 10 || numero_2 < 50){
    console.log('O numero esta dentro dos paramentros exigidos')

}else{
    console.log('o numero não esta entre 10 e 50')
}
