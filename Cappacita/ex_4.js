// 3) Considere os problemas a seguir e escreva o código
// a) Um professor precisa dizer se um aluno foi aprovado ou reprovado, para isso ele
// recebe duas notas. Se a média das duas notas for maior que 5 escreva “Aprovado”
// se for menor escreva “Reprovado”
const nota1 =  5;
const nota2 =  4;

var media = (nota1 + nota2) / 2;

console.log(`A media do aluno foi ${media}`)
if(media > 5) {
    console.log("E esta Aprovado");
} else if(media <= 5){
    console.log("E esta Reprovado");
};
// b) Faça um algoritmo que recebe um valor e diz “É par” ou “É ímpar”. Use % 2.
var valor = 10;
if (valor % 2 == 0){
    console.log(`O numero ${valor} e PAR`)
}else{
    console.log(`O numero ${valor} e IMPAR`)
}

// c) Precisamos testar se uma pessoa é obrigada a votar. Faça um algoritmo que teste
// se a idade é maior que 18, se for escreva “Você deve votar” senão “Você ainda não
// é obrigado a votar”

const idade = 16;
if (idade >= 18){
    console.log(`Voce tem ${idade} e Você de votar`);
}else if (idade < 18){
    console.log(`Você tem ${idade} e deve esperar mais ${18 - idade} anos para pode votar `);
}
// d) Precisamos dizer para o usuário se a conta dele está positiva ou não, para isso faça
// um algoritmo que receba o valor disponível na conta e verifique se é igual a 0, se for
// escreva “Você não possui saldo”, se for maior que 0 escreva “Seu está positivo”,
// senão escreva “Seu saldo está negativo”

let saldo = -200;

if (saldo == 0) {
    console.log(`Seu saldo atual e ${saldo}`);
    console.log("Você não possui saldo");

}else if (saldo > 0){
    console.log(`Seu saldo atual e ${saldo}`);
    console.log("Você esta com saldo positivo");
}else {
    console.log(`Seu saldo atual e ${saldo}`);
    console.log("Você esta com saldo negativo");
};

// e) Precisamos dizer ao usuário se ele tem idade para se aposentar ou não,
// considerando que a idade mínima é 65 anos, faça um algoritmo que receba uma
// idade, se for maior ou igual a 65 diga “Você pode se aposentar” senão diga “Você
// ainda não tem a idade mínima”

const Idade = 30;
if (Idade >= 65){
    console.log(`Sua idade atual e ${Idade} e ja pode se aposentar`);    
}else{
    console.log(`Sua idade atual e ${Idade} e ainda falta ${65 - Idade} para poder se aposentar`);
};