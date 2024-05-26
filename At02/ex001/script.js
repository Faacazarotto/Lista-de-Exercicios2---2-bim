let dolar = document.querySelector("#dolar");
let porcentagem = document.querySelector("#porcentagem");
let btcalcular = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

function calcular(){

    let vlr = parseFloat(dolar.value);
    let multiplicar = vlr + (porcentagem.value/100 * vlr);

    resultado.innerHTML = "A cotação do dólar com " + porcentagem.value + "% é R$" + multiplicar.toFixed(2);

}

btcalcular.onclick  = function(){
    calcular();
}
