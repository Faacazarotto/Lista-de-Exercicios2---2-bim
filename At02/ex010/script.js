let valor = document.querySelector("#valor");
let meta = document.querySelector("#meta");
let min = document.querySelector("#metaMin");
let resultadometa = document.querySelector("#resultadometa");
let gerar = document.querySelector("#gerar");
let pam = document.querySelector("#pam");
let pamM = document.querySelector("#pamM");

function calcMeta(){
    let Valor = parseFloat(valor.value);
    let Meta  = parseFloat(meta.value);
    let Min = parseFloat(min.value);


    //META ATINGIDA OU NÃO
    if(Valor > Meta){
        resultadometa.innerHTML = "A meta foi passada para esse mês. BOM TRABALHO!!";
    }
    else if(Valor == Meta){
        resultadometa.innerHTML = "Meta atingida com sucesso. EXCELENTE!!";
    }
    else if(Valor < Meta && Valor > Min){
        resultadometa.innerHTML = "Meta não foi alcançada, mas estamos bem!";
    }
    else if(Valor === Min){
        resultadometa.innerHTML = "Meta min atingida, próximo mês atingiremos a meta MÁXIMA";
    }
    else{
        resultadometa.innerHTML = "Não atingimos a Meta Minima ;-;";
    }


    //PERCENTUAL META MIN
    let calcMetaMin = Valor / Min;

    pamM.innerHTML = "O Percentual da meta Minima é: " + calcMetaMin.toFixed(0) + "%";


    //PERCENTUAL META
    let calcMeta = Valor / Meta;

    pam.innerHTML = "O Percentual da meta é: " + calcMeta.toFixed(0) + "%";


}
gerar.onclick = function(){
    calcMeta();
}