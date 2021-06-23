// Faça um loop que imprima somente as cidades dos clientes da variável listaClientes

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
        console.log("O nome da cidade e " + listaClientes[cliente]["cidade"])
    }