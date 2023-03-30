function carregar() {
    var now = new Date()
    var hr = now.getHours()
    var min = now.getMinutes()
    var msg = window.document.querySelector('div h2#msg')
    var img = window.document.querySelector('div img#img')
    var greet = ''
    if (hr < 12) {
        greet = 'Bom dia!'
        window.document.body.style.backgroundColor = '#efa95f'
        img.src = 'imagens/morning_250.png'
        if (hr < 6) {
            greet = 'Boa madrugada!'
            window.document.body.style.backgroundColor = '#0a181b'
            img.src = 'imagens/night_250.png'
        } 
    } else if (hr < 18) {
        greet ='Boa tarde!'
        window.document.body.style.backgroundColor = '#673b45'
        img.src = 'imagens/afternoon_250.png'
    } else {
        greet = 'Boa noite!'
        window.document.body.style.backgroundColor = '#0a181b'
        img.src = 'imagens/night_250.png'
    }
    msg.innerHTML = `${greet} agora são ${hr}h${min}`
    
}