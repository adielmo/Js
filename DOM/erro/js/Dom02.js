(function(){

var trs = document.querySelectorAll('.tabela-js tbody .aluno');
var x =0;
var condicaoAluno ='Aprovado';

while(trs[x]){
	let linhaAluno = trs[x];
	/*console.log(linhaAluno);*/


	// var n1, n2, n3, n4, media;
	var tds = linhaAluno.querySelectorAll('td');

  var notas = recuperarNumerosDeColunas(tds);


 /*  n1 = pegaNota(tds[1]);
   n2 = pegaNota(tds[2]);
   n3 = pegaNota(tds[3]);
   n4 = pegaNota(tds[4]);*/

   var media = calcularMedia.apply(this, notas);

   var verif = verificarStatus(media);
   linhaAluno.querySelector('.aluno-m').innerHTML = '<b>' + media + '</b>';
   linhaAluno.querySelector('.aluno-status').innerHTML = condicaoAluno;
	x++;
}

/*function pegaNota(td){
	return parseFloat(td.textContent);
}*/

function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    return total / qtd;
    }

    function recuperarNumerosDeColunas(tds) {
    var x = 0;
    var arr = [];

    while(tds[x]){
          
          if (!isNaN(tds[x].textContent) && 
            tds[x].textContent !== ''){

            arr.push(parseFloat(tds[x].textContent));
          }


      x++;
        }



        return arr;
                    }

     function verificarStatus(media) {

             if (media >= 7) {
              condicaoAluno='Aprovado'.fontcolor('blue');

             } else{
              condicaoAluno='Reprovado'.fontcolor('red');
             }

             return condicaoAluno;
        }

}());


