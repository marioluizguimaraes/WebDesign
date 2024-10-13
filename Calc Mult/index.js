document.getElementById(`calcular`).addEventListener(`click`, calcular)
document.getElementById('verificar').addEventListener(`click`, verificar);

function calcular(){
    let a = parseFloat(document.getElementById(`a`).value)
    let b = parseFloat(document.getElementById(`b`).value)
    document.getElementById(`resultado`).innerText = a*b
}

function verificar(){
    let a = parseFloat(document.getElementById(`a`).value);
    let b = parseFloat(document.getElementById(`b`).value);
    if (a==b){
        document.getElementById(`a`).style.border = `2px solid green`
        document.getElementById(`b`).style.border = `2px solid green`
    }
    else{
        document.getElementById(`a`).style.border = `2px solid red`
        document.getElementById(`b`).style.border = `2px solid red`
    }
}