function check() {
    var now = new Date()
    var year = now.getFullYear()
    var borntxt = window.document.querySelector('#year')
    var born = Number.parseInt(borntxt.value)
    var old = year - born
    var fgender = window.document.getElementsByName('gender')
    var gender = ''
    var title = ''
    var art = ''
    var resp = window.document.querySelector('#resp')

    if (born > year || borntxt.value.length == 0 || born < 0) {
        window.alert('[ERRO] Digite um ano válido!')
    }

    if (fgender[0].checked) {
        gender = 'fem'
        if (born <)
    } else {
        gender = 'mas'
    }
   

    if (gender == 'fem') {
        art = 'uma'
        
    } else {
        art = 'um'
    } 

    if (born < 3) {
        title = 'bebê'
    } else if (born < 13) {
        title = 'criança'
    } else if (born < 18) {
        title = 'adolescente'
    }
    
    
}