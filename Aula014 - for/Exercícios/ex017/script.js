var btnmult = window.document.querySelector('button#mult')
btnmult.addEventListener('click', clicou)

function clicou() {
    var tn = window.document.querySelector('input#tnum')
    var res = window.document.querySelector('div#res')
    res.innerHTML = ''
    if(tn.value.length == 0) {
        res.innerHTML = '[ERRO] Digite um número!'
    } else {
        var n = Number(tn.value)
        var f = 1
        for(f; f<=10; f++) {
            res.innerHTML += `${n} x ${f} = ${n*f} <br>`
        }
    } 
}