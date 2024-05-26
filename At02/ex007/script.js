let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function calculo(){
    let primeiro = Number(n1.value);
    let segundo = Number(n2.value);

    if(primeiro > segundo){
        resultado.innerHTML = "O primeiro resultado é maior que o segundo: " + primeiro + " > " + segundo;
    }else{
        resultado.innerHTML = "O primeiro resultado é menor que o segundo: " + segundo  + " > " + primeiro;
    }

}

gerar.onclick = function(){
    calculo();
}
