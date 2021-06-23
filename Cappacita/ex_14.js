// Faça um loop que imprima somente os nomes dos clientes no array de objetos
listaClientes = [
    {
    nome: "Larissa",
    cidade: "Sumaré"
    },
    {
    nome: "Hugo",
    cidade: "São vicente"
    },
    {
    nome: "André",
    cidade: "Osasco"
    }
    ]
    
    for (cliente in listaClientes){
        console.log("O nome do cliente e " + listaClientes[cliente]["nome"])
    }