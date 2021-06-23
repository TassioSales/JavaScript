# 3) Considere os problemas a seguir e escreva o código
# a) Um professor precisa dizer se um aluno foi aprovado ou reprovado, para isso ele
# recebe duas notas. Se a média das duas notas for maior que 5 escreva “Aprovado”
# se for menor escreva “Reprovado”

nota_1 = 8
nota_2 = 6

media = (nota_1 + nota_2) / 2

print(f'A primeira nota do aluno foi {nota_1}')
print(f'A segunda nota do aluno foi {nota_2}')
print(f'A sua media foi {media}')

if media > 5:
    print(f'O aluno esta aprovado')
else:
    print(f'O aluno esta reprovado')
    
#b) Faça um algoritmo que recebe um valor e diz “É par” ou “É ímpar”. Use % 2.

valor = 6

if valor % 2 == 0:
    print('O numero e PAR')
else:
    print('O numero e IMPAR')
    
# c) Precisamos testar se uma pessoa é obrigada a votar. Faça um algoritmo que teste
# se a idade é maior que 18, se for escreva “Você deve votar” senão “Você ainda não
# é obrigado a votar”

idade_votar = 17

if idade_votar >= 18:
    print(f"Você ja tem {idade_votar} e ja pode voltar")
elif idade_votar < 18:
    print(f"Você tem {idade_votar} e ainda falta {18 - idade_votar} anos para votar")

print("#" * 40)
    
from datetime import date

data_atual = date.today()
ano_atual = data_atual.year

ano_nascimento = int(input("Digite o ano do seu nascimento: "))

idade_para_votar =  18

idade_atual = ano_atual - ano_nascimento

if idade_atual >= idade_para_votar:
    print(f"Você ja tem {idade_atual} anos  e ja pode voltar")
elif idade_atual < idade_para_votar:
    print(f"Você tem {idade_atual} anos  e ainda falta {idade_para_votar - idade_atual} anos para voce votar")
else:
    print(f"Você digitol um ano incorreto")
    
# d) Precisamos dizer para o usuário se a conta dele está positiva ou não, para isso faça
# um algoritmo que receba o valor disponível na conta e verifique se é igual a 0, se for
# escreva “Você não possui saldo”, se for maior que 0 escreva “Seu está positivo”,
# senão escreva “Seu saldo está negativo”

saldo_em_conta = 200

if saldo_em_conta == 0:
    print(f'Seu saldo atual e {saldo_em_conta}')
    print('Você nao possui saldo na sua conta')
elif saldo_em_conta > 0:
    print(f'Seu saldo atual e {saldo_em_conta}')
    print('Você esta com saldo positivo')
else:
    print(f'Seu saldo atual e {saldo_em_conta}')
    print("Você esta com saldo negativo")
    

# e) Precisamos dizer ao usuário se ele tem idade para se aposentar ou não,
# considerando que a idade mínima é 65 anos, faça um algoritmo que receba uma
# idade, se for maior ou igual a 65 diga “Você pode se aposentar” senão diga “Você
# ainda não tem a idade mínima”

idade_do_requerinte = 55
idade_minima_para_aposentar = 65

if idade_do_requerinte >= idade_minima_para_aposentar:
    print(f"Sua idade atual e {idade_do_requerinte} e ja pode se aposentar")
else:
    print(f"Sua idade atual e {idade_do_requerinte} e ainda nao pode se aposentar")
    print(f"Ainda falta {idade_minima_para_aposentar - idade_do_requerinte} anos")
    
