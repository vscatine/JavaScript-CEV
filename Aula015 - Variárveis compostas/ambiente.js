let  valores = [7, 0, 4, 2, 6, 10]
console.log(valores)
console.log(valores[2])
console.log(`O vetor valores possui ${valores.length} posições.`)
valores.sort() 
valores.push(33)
console.log(valores)

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`Posição ${pos} = ${valores[pos]}`)
}
