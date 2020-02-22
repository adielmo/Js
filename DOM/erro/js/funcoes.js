var x = 0;
var result = 0;
var med = 0;
var vet = new Array();
var valido = false;

function somar() {
	console.log(arguments);

	while(arguments[x] >= 0 || arguments[x]){
		//for(var i=0; i < arguments[x]; i++){
	
       result +=arguments[x];
       vet[x]=arguments[x];
       
       x++;

       //break;
     }	

	med = result / x;

	console.log('Valor:', result);
	console.log('Média:', med);
	console.log("Qtd:", vet.length);

for(var i = 0; i < vet.length; i++){

	console.log(vet[i] + ' ');
			}
		}

somar(10, 0, -5, 52, 5, 34, 5, 8, 0, 98, 78, 1, 3);

(function teste(){

isValid = true;

})();

console.log(isValid);
