btncont = window.document.querySelector('button#btn_cont')
btncont.addEventListener('click', contar)
function contar() {
    var tini = window.document.querySelector('input#ini')
    var tfim = window.document.querySelector('input#fim')
    var tpas = window.document.querySelector('input#pas')
    var res = window.document.querySelector('div#res')
    if (tini.value.length == 0 || tfim.value.length == 0 || tpas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    }
    var ini = Number(tini.value)
    var fim = Number(tfim.value)
    var pas = Number(tpas.value)
    
    for(var c = ini; c <= fim; c += pas) {
        res.innerHTML += `${c} `
    }

}

