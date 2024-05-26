let ps1 = document.querySelector("#ps1");
let ps2 = document.querySelector("#ps2");
let ps3 = document.querySelector("#ps3");
let idadeps1 = document.querySelector("#idadeps1");
let idadeps2 = document.querySelector("#idadeps2");
let idadeps3 = document.querySelector("#idadeps3");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function idade(){
    let data1 = Number(idadeps1.value);
    let data2 = Number(idadeps2.value);
    let data3 = Number(idadeps3.value);
    
    let anos1 = 2024 - data1;
    let anos2 = 2024 - data2;
    let anos3 = 2024 - data3;
    
    if(anos1 > anos2 && anos1 > anos3){
        if(anos2 > anos3){
            resultado.innerHTML = "Pessoa mais velha: " + ps1.value + " - idade: " + anos1 + "<br>Segunda pessoa mais velha: " + ps2.value + " - idade: " + anos2 + "<br>Terceira pessoa mais velha: " + ps3.value + " - idade: " + anos3;  
        }else{
            resultado.innerHTML = "Pessoa mais velha: " + ps1.value + " - idade: " + anos1 + "<br>Segunda pessoa mais velha: " + ps3.value + " - idade: " + anos3 + "<br>Terceira pessoa mais velha: " + ps2.value + " - idade: " + anos2; 
        }
    }else if(anos2 > anos1 && anos2 > anos3){
        if(anos1 > anos3){
            resultado.innerHTML = "Pessoa mais velha: " + ps2.value + " - idade: " + anos2 + "<br>Segunda pessoa mais velha: " + ps1.value + " - idade: " + anos1 + "<br>Terceira pessoa mais velha: " + ps3.value + " - idade: " + anos3;  
        }else{
            resultado.innerHTML = "Pessoa mais velha: " + ps2.value + " - idade: " + anos2 + "<br>Segunda pessoa mais velha: " + ps3.value + " - idade: " + anos3 + "<br>Terceira pessoa mais velha: " + ps1.value + " - idade: " + anos1; 
        }        
    }else{
        if(anos1 > anos2){
            resultado.innerHTML = "Pessoa mais velha: " + ps3.value + " - idade: " + anos3 + "<br>Segunda pessoa mais velha: " + ps1.value + " - idade: " + anos1 + "<br>Terceira pessoa mais velha: " + ps2.value + " - idade: " + anos2;  
        }else{
            resultado.innerHTML = "Pessoa mais velha: " + ps3.value + " - idade: " + anos3 + "<br>Segunda pessoa mais velha: " + ps2.value + " - idade: " + anos2 + "<br>Terceira pessoa mais velha: " + ps1.value + " - idade: " + anos1; 
        }
    }

}

gerar.onclick = function(){
    idade();
}