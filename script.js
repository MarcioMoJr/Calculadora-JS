var valor1 = Number(window.prompt('Digite o 1° valor'))
var valor2 = Number(window.prompt('Digite o 2° valor'))

var soma = document.getElementById ('soma')
var subtracao = document.getElementById ('subtracao')
var multiplicacao = document.getElementById ('multiplicacao')
var divisao = document.getElementById ('divisao')

s = valor1 + valor2
soma.innerHTML = `O resultado de ${valor1} + ${valor2} é: <strong>${s}</strong>`

sub = valor1 - valor2
subtracao.innerHTML = `O resultado de ${valor1} - ${valor2} é: <strong>${sub}</strong>`

m = valor1 * valor2
multiplicacao.innerHTML = `O resultado de ${valor1} x ${valor2} é: <strong>${m}</strong>`

d = valor1 / valor2
divisao.innerHTML = `O resultado de ${valor1} / ${valor2} é: <strong>${d}</strong>`
