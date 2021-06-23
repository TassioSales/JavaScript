# Faça um loop que imprima somente os nomes dos clientes no array de objetos
listaClientes = [{
"nome": "Larissa",
"cidade": "Sumaré"},
{
"nome": "Hugo",
"cidade": "São vicente"
},
{
"nome": "André",
"cidade": "Osasco"
}]

for x, clientes in enumerate(listaClientes):
    print("O nome do cliente e {}".format(listaClientes[x]["nome"]))
