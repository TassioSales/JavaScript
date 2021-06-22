// valor1 = 5, e valor2 = 3 faça os seguintes testes:
const valor1 = 7
const valor2 = 8
// a) Imprima o maior número
if (valor1 > valor2) {
    console.log(`O valor ${valor1} e maior`) 
}else if(valor1 < valor2) {
    console.log(`O valor ${valor2} e maior`)
}
// b) Imprima o menor número  
if (valor1 < valor2) {
    console.log(`O valor ${valor1} e menor`)
}else if (valor2 < valor1) {
    console.log(`O valor ${valor2} e menor`)
}

// c) Imprima se valor1 é igual a valor2, senão imprima “É diferente”
if (valor1 == valor2) {
    console.log(`O valor ${valor1} e igual ao valor ${valor2} `)
}else{
    console.log(`O valor ${valor1} e diferente do valor  ${valor2} `)
} 
