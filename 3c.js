const aluno1 = {
    nome: 'Aluno 1',
    notas: [Math.floor(Math.random()*10+1), Math.floor(Math.random()*10+1), Math.floor(Math.random()*10+1)],
}

const aluno2 = {
    nome: 'Aluno 2',
    notas: [Math.floor(Math.random()*10+1), Math.floor(Math.random()*10+1), Math.floor(Math.random()*10+1)],
}

function calcularMedia(notas) {
    return notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
}

const mediaAluno1 = calcularMedia(aluno1.notas);
const mediaAluno2 = calcularMedia(aluno2.notas);
const mediaTurma = (mediaAluno1 + mediaAluno2) / 2;

console.log(aluno1);
console.log(aluno2);

console.log(mediaAluno1.toFixed(2));
console.log(mediaAluno2.toFixed(2));
console.log(mediaTurma.toFixed(2));