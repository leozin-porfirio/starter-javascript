//exercício2
    /*
        Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

        function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";

            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        var newColor = getRandomColor(); // #E943F0
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

        function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            };
            square.style.backgroundColor = color;
        }
