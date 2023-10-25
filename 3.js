//3. Crie um objeto para colocar nome e duas notas. Atribua nome e duas notas para o primeiro objeto, que será nosso primeiro aluno. Agora crie mais um objeto para colocar informações do nosso segundo aluno. Mostre as informações de cada aluno no console. Mostre também a média do primeiro aluno e a média do segundo aluno. Por fim mostre a média desta turma de 2 alunos.

const aluno1 = {
    nome: 'Aluno 1',
    notas: [Math.floor(Math.random()*10+1), Math.floor(Math.random()*10+1), Math.floor(Math.random()*10+1)],
}

const media1 = aluno1.notas.reduce((acc, nota) => acc + nota, 0) / aluno1.notas.length;

const aluno2 = {
    nome: 'Aluno 2',
    notas: [Math.floor(Math.random()*10+1), Math.floor(Math.random()*10+1), Math.floor(Math.random()*10+1)],
}

const media2 = aluno2.notas.reduce((acc, nota) => acc + nota, 0) / aluno2.notas.length;

const mediaTurma = (media1+media2)*0.5

console.log(aluno1, aluno2);
console.log(media1, media2, mediaTurma);