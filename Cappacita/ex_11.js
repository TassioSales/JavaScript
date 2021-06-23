// Faça um loop que procure no array doces a palavra pirulito e troque por doce de
// leite

doces = ["bala", "pirulito", "chiclete", "jujuba", "chocolate"]

console.log("Antes: " + doces)
for (doce in doces){
    if(doces[doce] == "pirulito"){
        doces[doce] = "doce de leite"
    }   
}
console.log("Depois: " + doces)
