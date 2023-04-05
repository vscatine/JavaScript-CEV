var btnmult = window.document.querySelector('button#mult')
//btnmult.addEventListener('click', tabuada)
btnmult.addEventListener('click', tabuwhile)

function tabuada() {
    var tn = window.document.querySelector('input#tnum')
    var tab = window.document.querySelector('select#seltab')
    if (tn.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    } else {
        tab.innerHTML = ''
        n = Number(tn.value)
        for(var c=1; c<=10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` 
            tab.appendChild(item)
        }
    }
}

function tabuwhile() {
    var tn = window.document.querySelector('input#tnum')
    var tab = window.document.querySelector('select#seltab')
    if (tn.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    } else {
        var n = Number(tn.value)
        tab.innerHTML = ''
        var c = 1
        while(c<=10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}