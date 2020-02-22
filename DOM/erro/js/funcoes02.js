

(function(){

	function desafio(){

let x =0;
let total = 0;
let vet = new Array();
let med = 0;
let valido = false;	
let verdadeiro = false;	
let qtd = arguments.length;

	while(typeof arguments[x] === 'number' 
		  && arguments.length === 4){

         total +=arguments[x];
         vet[x] = arguments[x];
         verdadeiro = true;

         x++;

	}

med = total / x;

if (med >= 6) {
 valido = true;
}

if (verdadeiro) {

console.log('Total: ', total);
console.log('Média: ', med);
console.log('Qdt: ', arguments.length );
console.log('Todos valores: ', vet);
console.log(valido ? 'Aprovado' : 'Reprovado');
}

if (!verdadeiro) {

console.log('Quantidade de notas menor que quatro!: ');
console.log('Quantidade de notas enseridas', arguments.length);

}


};

var somar = desafio(7, 9, 3, 4);
console.log('------------------------------');
var somar02 = desafio(5, 10, 7);
console.log('------------------------------');
var somar02 = desafio(0, 8, 7, 9);
console.log('------------------------------');
var somar02 = desafio(0, 10);

})();

