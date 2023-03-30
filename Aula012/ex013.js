var agora = new Date()
diasem = agora.getDay()

/* 
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
*/

console.log(diasem)

switch(diasem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda-feira')
        break
    case 2:
        console.log('terça-feira')
        break
    case 3:
        console.log('quarta-feira')
        break
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('sexta-feira')
        break
    case 6:
        console.log('sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
}

console.log(`escrevendo que hoje é ${diasem} depois do switch.`)