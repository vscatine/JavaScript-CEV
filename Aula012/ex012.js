agora = new Date()
hora = agora.getHours()
saudacao = ''

if (hora <= 12) {
    saudacao = 'Bom dia!'
    if (hora < 6) {
        saudacao = 'Boa madrugada!'
    }
} else if (hora <= 17) {
    saudacao = 'Boa tarde!'
} else {
    saudacao = 'Boa noite!'
} 

console.log(`${saudacao} são exatamente ${hora} horas.`)