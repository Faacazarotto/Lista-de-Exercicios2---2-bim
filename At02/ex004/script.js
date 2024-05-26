let primeiro = document.querySelector("#primeiro");
let segundo = document.querySelector("#segundo");
let terceiro = document.querySelector("#terceiro");
let refrigerante = document.querySelector("#refrigerante");
let quarto = document.querySelector("#quarto");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function montarPizza(){
    let Refri = Number(refrigerante.value);
    let pizza = primeiro.value +"<br>"+ segundo.value +"<br>"+ terceiro.value +"<br>"+ quarto.value;
    let valor = 57 + (Refri * 7);


    resultado.innerHTML = "Os sabores foram: " + pizza + "<br>Mais " + Refri + " refrigerante(s)" + "<br>Totalizando um valor de R$" + valor; 

}

gerar.onclick = function(){
    montarPizza();
}