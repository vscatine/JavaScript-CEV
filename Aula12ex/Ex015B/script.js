function check() {
    var datual = new Date()
    var atual = datual.getFullYear()
    var nasc = window.document.querySelector('#year')
    if (nasc.value.length == 0 || Number.parseInt(nasc.value) < 0 || Number.parseInt(nasc.value) > atual) {
        window.alert('[ERRO] Digite um ano válido!')
    }
    var idade = atual - Number.parseInt(nasc.value)
    var sexrad = window.document.getElementsByName('gender')
    var resp = window.document.querySelector('#resp')
    var img = window.document.querySelector('#img')
    if (sexrad[0].checked) {
        resp.innerHTML = `Identificamos uma mulher de ${idade} anos.`
        if (idade <= 3) {
            img.src = 'imagens/mulher_00.jpg'
        } else if (idade < 13) {
            img.src = 'imagens/mulher_01.jpg'
        } else if (idade < 18) {
            img.src = 'imagens/mulher_02.jpg'
        } else if (idade < 40) {
            img.src = 'imagens/mulher_03.jpg'
        } else if (idade < 65) {
            img.src = 'imagens/mulher_04.jpg'
        } else {
            img.src = 'imagens/mulher_05.jpg'
        }
    } else if (sexrad[1].checked) {
        resp.innerHTML = `Identificamos um homem de ${idade} anos.`
        if (idade <= 3) {
            img.src = 'imagens/homem_00.jpg'
        } else if (idade < 13) {
            img.src = 'imagens/homem_01.jpg'
        } else if (idade < 18) {
            img.src = 'imagens/homem_02.jpg'
        } else if (idade < 40) {
            img.src = 'imagens/homem_03.jpg'
        } else if (idade < 65) {
            img.src = 'imagens/homem_04.jpg'
        } else {
            img.src = 'imagens/homem_05.jpg'
        }
    } else {
        window.alert('[ERRO!] Escolha uma opção válida!')
    }
}