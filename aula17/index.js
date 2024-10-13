console.log('Ola Mundo')
document.write(`<p> ola mundo</p>`)
let mensagem = "bem vindo"
console.log(`${mensagem}`)

let v1 = parseInt(prompt('Valor 1'))
let v2 = parseInt(prompt('Valor 2'))
document.getElementById('resultado').innerText = ` A soma é igual a ${v1 + v2}`

for(i = 1; i <= 475; i++){
    r = Math.floor(Math.random()* 256)
    g = Math.floor(Math.random()* 256)
    b = Math.floor(Math.random()* 256)
    document.write(`<div style="background-color: rgb(${r}, ${g}, ${b});"></div>`)
}



