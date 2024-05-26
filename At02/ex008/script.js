let numero = document.querySelector("#numero");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function calcular(){
    let parimpar = numero.value % 2;

    if(parimpar == 0){
        resultado.innerHTML = "PAR!"
    }else{
        resultado.innerHTML = "IMPAR!"
    }

}
gerar.onclick = function(){
    calcular();
}
