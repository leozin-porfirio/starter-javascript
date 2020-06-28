//exercício1
    /* 
        Crie uma função que dado o objeto a seguir: 

        var endereco = {
            rua: "Rua dos pinheiros",
            numero: 1293,
            bairro: "Centro",
            cidade: "São Paulo",
            uf: "SP"
        };

        Retorne o seguinte conteúdo:
        O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.
     */

//resolução
    var endereco = {
            rua: "Rua dos Pinheiros",
            numero: 1293,
            bairro: "Centro",
            cidade: "São Paulo",
            uf: "SP"
        };

    function home() {
        return(
            "O usuário mora em " + 
            endereco.cidade + 
            " / " + 
            endereco.uf + 
            ", no bairro " + 
            endereco.bairro + 
            ", na rua " + 
            endereco.rua + 
            " com nº " + 
            endereco.numero + 
            "."
        );
    }

    console.log(home());

    //primeira maneira que pensei em fazer
        function lar(rua, numero, bairro, cidade, uf) {
            return(
                "O usuário mora em " + 
                cidade + 
                " / " + 
                uf + 
                ", no bairro " + 
                bairro + 
                ", na rua " + 
                rua + 
                " com nº " + 
                numero + 
                "."
            );
        }

        var texto = lar(
            endereco.rua, 
            endereco.numero, 
            endereco.bairro, 
            endereco.cidade, 
            endereco.uf
        );
            
        console.log(texto);
