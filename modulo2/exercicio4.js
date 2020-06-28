//exercício4
    /*
        Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

        <input type="text" name="nome">
        <button onClick="adicionar()">Adicionar</button>

        Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
    */

//resolução
    //<input type="text" name="nome"> (esse button deve fica no seu .html)
    //<button onClick="adicionar()">Adicionar</button> (esse button deve fica no seu .html)

        var nomes = ["Diego", "Gabriel", "Lucas"];

        var listElement = document.createElement('ul');

        for(var i = 0; i < 3; i++) {
            var optionElement = document.createElement('li');
            optionElement.appendChild(document.createTextNode(nomes[i]));
            listElement.appendChild(optionElement);
        };
        
        document.body.appendChild(listElement);

        var inputElement = document.querySelector('input[name=nome]');
    
        function adicionar() {
            var optionElement = document.createElement('li');
            var valor = inputElement.value;

            optionElement.appendChild(document.createTextNode(valor));
            listElement.appendChild(optionElement);
            inputElement.value = "";
        }
