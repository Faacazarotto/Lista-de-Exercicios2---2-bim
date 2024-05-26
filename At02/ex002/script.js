let pessoas = document.querySelector("#pessoas");
let calcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function quantidade(){
    let ovos = pessoas.value * 2;
    let queijo = pessoas.value * 50;

    resultado.innerHTML = "<h3>Para " + pessoas.value + " pessoas</h3>" +  "Será necessário " + ovos + " ovo(s) <br>E um total de " + queijo + " gramas de queijo"

}

calcular.onclick = function(){
    quantidade();
}