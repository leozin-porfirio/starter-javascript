//tipos de variáveis
    var nome = "Diego"; //string (texto)
    var idade = 23; //integer (inteiro)
    var peso = 80.5; //float (decimal)
    var humano = true; //boolean (v/f)
    var alunos = ['Diego', 'Gabriel', 'Lucas']; //array (lista/vetores)
    var aluno = {
        nome: 'Diego',
        idade: 23,
        peso: 80.5,
        humano: true,
    }; //object (objeto)

//operações matemáticas
    var x = 10
    var y = 5
    //ou var x = 10, y = 5;
    var soma = x + y;
    var subtracao = x - y;
    var multiplicacao = x * y;
    var divisao = x / y;
    var resto = x % y; //resto da divisão x/y
    
        //operadores de atribuição
            var a = 2;
            var b = 4;
            a += b; //a = a + b;
            a -= b; //a = a - b;
            a *= b; //a = a * b;
            a /= b; //a = a / b;

        //operadores de comparação
            var igualdade_restrita = a === b;
            var nao_igualdade_restrita = a !== b;
            var menor_que = a < b;
            var maior_que = a > b;
            var menor_ou_igual_que = a <= b;
            var maior_ou_igual_que = a >+ b;

//funções  
    //function nome-da-função(argumentos) {declarações}
        function somando(numero1, numero2) {
            var resultado = numero1 + numero2;
            return resultado;
        }
        
        var resultado = somando(1, 2);
        console.log(resultado);

//condicionais
    //if/ else
        function retornaSexo1(sexo1) {
            if (sexo1 === 'M') {
                return 'Masculino'
            } else if (sexo1 === 'F') {
                return 'Feminino'
            } else {
                return 'Outro'
            };
        }

        var resultadoSexo1 = retornaSexo1('M');
        console.log(resultadoSexo1);

    //switch
        function retornaSexo2(sexo2) {
            switch (sexo2) {
                case 'M':
                    return 'Masculino'
                case 'F':
                    return 'Feminino'
                default:
                    return 'Outro'
            };
        }

        var resultadoSexo2 = retornaSexo2('M');
        console.log(resultadoSexo2);

//operadores lógicos
    var sexo1 = 'M', idade1 = 23;

    //AND (os dois valores precisam ser verdadeiros)
        if (sexo1 === 'M' && idade1 <= 23) {
            console.log('ok');
        };
    
    //OR (apenas um valor precisa ser verdadeiro)
        if (sexo1 === 'M' || idade1 === 32) {
            console.log('ok');
        };

    //NOT
        if (sexo1 !== 'F') {
            console.log('erro');
        };

//condição ternária
    var sexo2 = 'M';
    
    //if/ else (normal)
        /* if (sexo2 === 'M') {
            return 'Masculino';
        } else {
            return 'Feminino';
        } */

    //if/ else (condição ternária)
        var retorno = (sexo2 === 'M') ? 'Masculino' : 'Feminino'
        console.log(retorno);
        
//estruturas de repetição
    //for
        for(var i = 0; i <= 100; i++) {
            console.log(i);
        };

    //while
        var j = 0;
        while (j <= 100) {
            console.log(j);
            j++;
        };

//intervalo
    function exibeAlgo1() {
        console.log('Hello World');
    }
    setInterval(exibeAlgo1, 1000);
    //executa a função repetidas vezes depois de um determinado intervalo de tempo

//timeout
    function exibeAlgo2() {
        console.log('Hello World');
    }
    setTimeout(exibeAlgo2, 5000);
    //executa a função apenas uma vez depois de um determinado tempo de delay
