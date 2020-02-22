var trs = document.querySelectorAll('.js-tabela .aluno');
let notas = document.querySelectorAll('.js-tabela .aluno_media');
const final = notas.values;

var x = 0;

while (trs[x]) {
    var linhaAluno = trs[x];
    console.log(linhaAluno);

    var n1, n2, n3, n4, media;
    var tds = linhaAluno.querySelectorAll('td');
    // console.log(tds);
    n1 = pegaNota(tds[1]);
    n2 = pegaNota(tds[2]);
    n3 = pegaNota(tds[3]);
    n4 = pegaNota(tds[4]);

    media = calcularMedia(n1, n2, n3, n4);

    linhaAluno.querySelector('.aluno_media').textContent = media;
    x++;

}

function pegaNota(td) {
    return parseFloat(td.textContent);
}

console.log(final);