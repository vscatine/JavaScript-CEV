function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var saudacao = ''
    hora = 0
    if (hora < 12) {
        if (hora < 6) {
            saudacao = 'Boa Madrugada!'
        }
        saudacao = 'Bom dia!'
        img.src = 'imagens/morning_250.png'
        window.document.body.style.backgroundColor = '#f9b86f'
    } else if (hora <= 17) {
        saudacao= 'Boa tarde!'
        img.src = 'imagens/afternoon_250.png'
        window.document.body.style.backgroundColor = '#905b62'
    } else {
        saudacao = 'Boa noite!'
        img.src = 'imagens/night_250.png'
        window.document.body.style.backgroundColor = '#0c1719'
    }
    msg.innerHTML = `${saudacao} agora são ${hora}h${min}`
}