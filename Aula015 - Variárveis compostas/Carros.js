/*let carros = []
carros.push('Carro01')
carros.push('Não vai entrar')
carros[1] = 'Carro02'
carros[10] = 'algo'

console.log(carros)
console.log(`O vetor tem ${carros.length} posições.`)*/

/*var num = [13, 33, 01, 07,25]
for (var c = 0; c < num.length; c++) {
    console.log(`A posição ${c} do vetor tem o valor ${num[c]}`)
}*/

var ord = [98,05,33,79,68]
/*var cont = 0
while (cont < ord.length) {
    console.log(`${cont+1}° pos - ${ord[cont]}`)
    cont++
}

for(let pos in ord) {
    console.log(`${pos} - Valor ${ord[pos]}`)
}*/

let valores = [8, 1, 3, 151,4]
for(let pos in valores) {
		console.log(`Posição ${pos} - Valor ${valores[pos]}`)
}

valores.indexOf(8)