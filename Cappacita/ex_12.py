doces = ["bala", "pirulito", "chiclete", "jujuba", "chocolate"]

print(f'Antes: {doces}')
for num, doce in enumerate(doces):
    if doces[num] == "pirulito":
        doces[num] = "doce de leite"
    elif doces[num] == "chiclete":
        doces[num] = "doce de coco"    
print(f'Depois: {doces}')