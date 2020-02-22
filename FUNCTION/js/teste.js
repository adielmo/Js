var teste = {
    nome: 'Adielmo',
    idade: 34,
    estado: 'Rio de Janeiro',
    endereco: {
        cep: '23073-500',
        numero: 36,
        funcao: {
            cargo: 'Analista',
            ativo: true
        }
    }
};


(function() {

    function calcularImc(peso, altura, callback) {
        let imc = peso / (altura * altura);
        if (typeof callback === 'function') {
            return callback(imc);
        }
        console.log('Não passou callBack');
        return imc;
    }

    function classificarImc(imc) {
        if (imc <= 16.9) {
            return 'Muito abaixo do peso';
        } else if (imc <= 18.4) {
            return 'Abaixo do peso';
        } else if (imc < 24.9) {
            return 'Peso normal';
        } else if (imc < 29.9) {
            return 'Acima do peso';
        } else if (imc < 34.9) {
            return 'Obsidade de Grau 1';
        } else if (imc < 40) {
            return 'Obsidade de Grau 2';
        } else {
            return 'Obsidade de Grau 3';
        }
    }

    //var imc = calcularImc(65, 1.75);
    var imc = calcularImc(65, 1.75);
    //console.log('Imc: ', imc);
    console.log('Total: ', imc);

    /* function somar(s1, s2) {
         console.log(s1 * s2);
     }*/

    /*
     function calcular(vls) {
    let total = 0;
    let i = 0;
    let cont = 0;
    let arr = arguments;

    for (let val in arr) {

        if (arr[val] > 0) {
            total += arr[val];
            console.log('Nota', val, ':', arr[val])
            cont++;
        }

    }
    console.log('Total: ', total);
    console.log('Total de notas: ', cont);
    console.log('Média: ', total / cont);
    */
    /*
         
                while (arr[i]) {
                    total += arr[i];
                    console.log('Posição do Array ', i, ':', arr[i]);
                    i++;
                }
                Total:  1337
                Média:  95.5
         

    }
    calcular(7, 2, 5, 10);
    */

    // calcular(15, 10, 5, 1, 25, 3, 56, 71, 14, 20, 02, 451, 487, 177);
    /*function somar(aa) {
        let soma = 0;
        console.log(arguments);
        for (let i = 0; i < arguments.length; i++) {
            soma += arguments[i];
            console.log('Posição', i + 1, ':', arguments[i]);
        }
        return console.log('Total:', soma, 'Média:', (soma / arguments.length));
    }

    somar(15, 10, 5, 1, 25, 3, 56, 71, 14, 20, 02, 451, 487); */

})();

//console.log(teste);

//somar(5, 5);





/*function calcular(n1, n2) {
    console.log(n1 + n2);
}

var soma = calcular(10, 20);

function ler(args) {
    console.log('Teste de', args);
}

ler('JavaScript'); */