//exercicio2
    /*
        Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

        function pares(x, y) {
            // código aqui
        }

        pares(32, 321);
    */

//resolução
    //usando for
        function pares(x, y) {
            for(i = x; i <= y; i++) {
                if(i % 2 === 0) {
                    console.log(i);
                };
            };
        }

        pares(32, 321);

    //usando while
        function pares(x, y) {
            var i = x
            while(i <= y) {
                if(i % 2 === 0) {
                    console.log(i);
                };
                i++
            };
        }

        pares(32, 321);
