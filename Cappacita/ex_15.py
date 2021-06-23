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
    print("O nome da cidade e {}".format(listaClientes[x]["cidade"]))