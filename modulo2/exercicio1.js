//exercício1
    /*
        Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve aparecer na tela.
    */

//resolução
    //<button id="botao">Me Clique</button> (esse button deve fica no seu .html)

        var btnElement = document.querySelector('#botao');
        var square = document.createElement('div');
        
        btnElement.onclick = function() {
            square = document.createElement('div');
            square.setAttribute('onmouseover', 'getRandomColor()');

            square.style.width = '100px';
            square.style.height = '100px';
            square.style.backgroundColor = 'red';

            document.body.appendChild(square);
        }
