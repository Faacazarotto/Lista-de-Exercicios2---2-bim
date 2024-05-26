let alunos = document.querySelector("#alunos");
let gerar = document.querySelector("#gerar");
let turmas = document.querySelector("#turmas");
let resultado = document.querySelector("#resultado");

function divisao(){

    let aluno = Number(alunos.value);
    let turma = Number(turmas.value);

    let calculo = aluno / turma;

    resultado.innerHTML = "Os " + aluno + " serão divididos em " + calculo.toFixed(0) + " alunos por turma.";
}
gerar.onclick = function(){
    divisao();
}