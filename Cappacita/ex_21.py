#  Utilize a função .map() na variável numerosAleatorios com o seguinte callback:
# function(num){
# return num / 2;}

numerosAleatorios = [12, 47, 66, 35, 142, 71, 14, 6]

divisao_por_2 = map(lambda x: x / 2, numerosAleatorios)

divisao_por_2 = list(divisao_por_2)

print(divisao_por_2)