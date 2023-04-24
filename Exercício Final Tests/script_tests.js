var num = document.querySelector('input#num')
var valsel = document.querySelector('select#values')
var res = document.querySelector('div#res')
var vals = []
var high = 0
var low = 100
var sum = 0
var average = 0


function numcheck(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(x, l) {
    if (l.indexOf(x) != -1) {
        return true
    } else {
        return false
    }
}

function empty(x) {
    if (x.length == 0) {
        return true
    } else {
        return false
    }
}

function add() {
    var n = Number(num.value)
    var item = document.createElement('option')
    if (numcheck(n) && !inlist(n, vals)) {
        item.text = `${n} foi inserido.`
        item.value = `${n}`
        valsel.appendChild(item)
        vals.push(n)
        if (Number(high) < n) {
            high = n
        }

        if (n < Number(low)) {
            low = n
        }
        num.value = ''
        res.innerHTML = ''
    } else if (empty(num.value) || !numcheck(n)) {
        alert('[ERRO] Digite um número entre 1 e 100')
        num.value = ''
    } else if (inlist(n, vals)) {
        alert(`${n} já foi inserido!`)
        num.value = ''
    }
}

function end() {
    res.innerHTML = `<br>Foram digitados ${vals.length} números.<br>O maior número digitado foi ${high}.<br>O menor número digitado foi ${low}.`
}