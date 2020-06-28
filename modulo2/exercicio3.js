//exercício3
    /*
        A partir do seguinte vetor:

        var nomes = ["Diego", "Gabriel", "Lucas"];

        Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:

        ● Diego
        ● Gabriel
        ● Lucas
    */

//resolução
    var nomes = ["Diego", "Gabriel", "Lucas"];

    var listElement = document.createElement('ul');

    for(var i = 0; i < 3; i++) {
        var optionElement = document.createElement('li');

        optionElement.appendChild(document.createTextNode(nomes[i]));
        listElement.appendChild(optionElement);
    };
    
    document.body.appendChild(listElement);
