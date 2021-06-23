// Faça um loop que multiplique por 2 somente os números pares do array numeros =
// [1,2,3,4,5,6,7,8,9,10]

numeros = [1,2,3,4,5,6,7,8,9,10]
console.log("Antes: " + numeros)
for (numero in numeros){
    if (numeros[numero] % 2 == 0){
        numeros[numero] = numeros[numero] * 2
    }
}
console.log("Depois:  " + numeros)
