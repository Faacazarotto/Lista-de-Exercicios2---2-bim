let nota = document.querySelector("#nota");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function media(){
    let nt = Number(nota.value);
    if(nt <= 6 && nt >= 4){
        resultado.innerHTML = "Precisa fazer prova SUBSTITUTIVA"
    }
    else if(nt > 6){
        resultado.innerHTML = "APROVADO!!"
    }
    else{
        resultado.innerHTML = "REPROVADO!!"
    }
}

gerar.onclick = function(){
    media();
}