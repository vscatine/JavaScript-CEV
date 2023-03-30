var idade = 71
resp = console.log(`Com ${idade} anos `)
if (idade < 16) {
    resp += console.log('você NÃO pode votar!')
} else if (idade < 18 || idade > 70) {
    resp += console.log('o voto é opcional.')
} else {
    resp += console.log('o voto é OBRIGATÓRIO!')
}