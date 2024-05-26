let primeiro = document.querySelector("#primeiro");
let segundo = document.querySelector("#segundo");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function operacoes(){
    let vlr1 = Number(primeiro.value);
    let vlr2 = Number(segundo.value);
    let soma = vlr1 + vlr2;
    let subtracao = vlr1 - vlr2; 
    let multiplicacao = vlr1 * vlr2;
    let divisao = vlr1 / vlr2;

    resultado.innerHTML = "SOMA: " + soma +"<br> SUBTRAÇÃO: " + subtracao + "<br>MULTIPLICAÇÃO: " + multiplicacao + "<br>DIVISÃO:  " + divisao;

}

calcular.onclick = function(){
    operacoes();
}