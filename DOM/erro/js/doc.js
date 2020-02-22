//literal
            function somar(n1, n2) {
                // corpor da funcao
                return n1 + n2;
            }
            
            var soma = somar(10, 20);
            console.log('Resultado: ', soma);
            
            somar.teste = 'propriedade da funcao';
            
            console.log(somar.teste);
            
            var teste = function(f){
                f();
            };
            
            teste(function(){
                console.log('funcao passada por parametro');
            });
            
            console.log('------------------');
            
            
            var x = 0;
            var y;
            
            function mostraX(){
                var x = 10; //escopo local
                var y = 20;
                console.log("mostra x dentro: " , x);
                console.log("mostra y dentro: " , y);
            }
            mostraX()
            
            console.log("mostra x fora: " , x);
            console.log("mostra y fora: " , y);
            
            
            //IIFE - Immediately-invoked function expression
            (function(){
                'use strict';
                var isValid = false;
                console.log(isValid);
                
                function somar(){
                    console.log(arguments);
                    var result = 0;
                    var x = 0;
                    
                    while(arguments[x]){
                        //result = result + arguments[x];
                        result += arguments[x];
                        //x = x + 1;
                        x++;
                    }
                    console.log('result: ', result);
                }
                
                somar(20, 20, 10, 5, 5, 15);
            })();
            