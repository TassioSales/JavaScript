doces = ["bala", "pirulito", "chiclete", "jujuba", "chocolate"]

print(f'Antes: {doces}')
for num, doce in enumerate(doces):
    if doces[num] == "pirulito":
        doces[num] = "doce de leite"    
print(f'Depois: {doces}')

