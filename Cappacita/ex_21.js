// Utilize a função .map() na variável numerosAleatorios com o seguinte callback:
// function(num){
// return num / 2;}


var numerosAleatorios = [12, 47, 66, 35, 142, 71, 14, 6]

var divisao_por_2 = numerosAleatorios.map(function(num){
    return num / 2
})

console.log(divisao_por_2)

