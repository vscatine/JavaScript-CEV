var num = document.querySelector('input#num')
var sel = document.querySelector('select#val')
var res = document.querySelector('div#res')
var vals = []
var high = 0
var low = 100
var sum = 0
var btnadd = document.querySelector('input#btnadd')
btnadd.addEventListener('click', add)
var btnend = document.querySelector('button#end')
btnend.addEventListener('click', end)


function add() {
    var n = Number(num.value)
    var item = document.createElement('option')
    if (numcheck(n) && !inlist(n, vals)) {
        vals.push(n)
        item.text = `${n} foi adicionado.`
        item.value = n
        sel.appendChild(item)
        
        if (n > Number(high)) {
            high = n
        }
        
        if (n < Number(low)) {
            low = n 
        }

    } else if (inlist(n, vals)) {
        window.alert(`${n} já foi adicionado.`)
    } else {
        window.alert('Digite um número entre 1 e 100!')
    }
    num.value = ''
    res.innerHTML = ''
    sum = 0
    num.focus()
}

function numcheck(x) {
    if (x >= 1 && x <= 100) {
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

function end() {
    zerar()
    quant = vals.length
    if (quant == 0) {
        window.alert('Digite um número!')
    } else if (quant == 1) {
        res.innerHTML = `Foi digitado ${quant} valor.`
    } else {
        var cont = 0
        while (cont < quant) {
            sum += vals[cont]
            cont ++
        }
        
        res.innerHTML = `Foram digitados ${quant} valores.<br>`
        res.innerHTML += `${high} é o maior valor.<br>`
        res.innerHTML += `${low} é o menor valor.<br>`
        res.innerHTML += `A soma dos valores é igual a ${sum}.`
    }
}

function zerar() {
    if (sum != 0) {
        sum = 0
    }
}

function clean() {
    if (window.confirm('Limpar os valores?')) {
        vals = []
        sel.innerHTML = ''
        res.innerHTML = ''
        high = 0
        low = 100
    } 
    num.focus() 
}