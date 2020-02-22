//document.querySelector('#dom').textContent = 'Titulo do JavaScript , via JS ';

var nome = document.querySelector('#entrada');



function escreve() {
    let nome2 = nome.value;
    document.querySelector('#saida').innerHTML = `Seu é <strong> ${nome2} </strong>`;
    //  document.querySelector('#entrada').value = ' ';
    nome.value = ' ';



}