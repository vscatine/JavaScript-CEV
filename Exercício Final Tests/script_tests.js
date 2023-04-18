var tnum = document.querySelector('input#num')
var valsel = document.querySelector('select#values')
var vals = []

function numcheck(x) {
    if (Number(x) >= 1 && Number(x) <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function empty(x) {
    if (x.length == 0 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    var item = document.createElement('option')
    if (numcheck(tnum.value) && !inlist(tnum.value, vals)) {
        vals.push(Number(tnum.value))
        item.text = `${tnum.value} foi adicionado.`
        item.value = `${tnum.value}`
        valsel.appendChild(item)
        tnum.value = ''
    } else if (empty(tnum.value)) {
        alert('[ERRO] Insira um número!')
        tnum.value = ''
    } else if (inlist(tnum.value, vals)){
        alert(`${tnum.value} já foi adicionado.`)
        tnum.value = ''
    } else {
        alert('[ERRO] Apenas números de 1 a 100!')
        tnum.value=''
    }
}
