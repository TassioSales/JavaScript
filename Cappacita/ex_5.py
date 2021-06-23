# 4) Vimos que os operadores lógicos ajudam a testar mais de uma condição ao mesmo
# tempo. Escreva os algoritmos que realizam os seguintes testes:

# a) Receber um valor e dizer se é maior que 10 e menor que 50, se não for diga “Insira
# um valor entre 10 e 50”. Use o operador &&

valor = 35

if valor > 10 and valor < 50:
    print("Esta entre 10 e 50")
else:
    print("Insira uma valor entre 10 e 50")
 
 
# b) Para entrar no cinema Tabajara é preciso ter idade maior que a idade de censura (14
# anos) e ter o ingresso. Faça um algoritmo que receba idade e ingresso, idade recebe
# um number e ingresso um boolean, se a idade for maior que 14 e ingresso true
# escreva “Pode entrar”, se a idade for menor ou igual a 14 e ingresso true escreva
# “Você não tem a idade mínima”, se a idade for maior que 14 e ingresso false escreva
# “Você precisa ter o ingresso”

idade = 13
tem_ingresso = True

if idade > 14 and tem_ingresso == True:
    print("Tudo dentro dos conforme você pode assistir o filme")
elif idade > 14 and tem_ingresso == False:
    print("Voce precisa de um ingresso para poder entrar")
else:
    print('Voce nao pode assistir ao filmes')
    
    
