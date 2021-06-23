// Altere o conteúdo chiclete do array doces para doce de coco

doces = ["bala", "pirulito", "chiclete", "jujuba", "chocolate"]

console.log("Antes: " + doces)
for (doce in doces){
    if(doces[doce] == "pirulito"){
        doces[doce] = "doce de leite"
    }else if(doces[doce] == "chiclete"){
        doces[doce] = "doce de coco"
    } 
}
console.log("Depois: " + doces)