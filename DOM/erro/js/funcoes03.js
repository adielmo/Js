/*(function(){

	function imc(peso, altura) {
		
		return peso / (altura * altura);

	}

	function media(imc) {

		if (imc <= 16.9){
			return'Muito abaixo do peso ';

		}else if(imc > 17 || imc <= 18.4){

			return'Abaixo do peso, ';

		}else if(imc > 18.5 || imc <= 24.9){

			return'Peso normal';

		}else if(imc > 25 || imc <= 29.9){

			return'Acima do peso';

		}else{
			return'Nenhuma das alternativas!';
		}
		
	}

	let peso = imc(65, 1.80);
	let classif = media(imc);
	console.log('Classificação IMC: ', classif);


})();*/



	const numbs = [4, 5,78, 98, 2, 6,154, 8, 52, 105];

	const asc = numbs.sort((a,b) => a - b);
	console.log('Na ordem CRESCENTE',asc);
	console.log();
     
     numbs.push(155, 1, 144, 187);
	const desc = numbs.sort((a, b)=>b - a);
      console.log('NA ordem DECRECENTE', desc);
