var btncont = window.document.querySelector('button#cont')
btncont.addEventListener('click', clicou)

function clicou() {
    var tini = window.document.querySelector('input#tini')
    var tfim = window.document.querySelector('input#tfim')
    var tpas = window.document.querySelector('input#tpas')
    var res = window.document.querySelector('div#res')

    if (tini.value.length == 0 || tfim.value.length == 0 || tpas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Dados incompletos!')
    } else {
        res.innerHTML = 'Contando:<br>'
        var ini = Number.parseInt(tini.value)
        var fim = Number.parseInt(tfim.value)
        var pas = Number.parseInt(tpas.value)
        if (pas <= 0) {
            pas = 1
            window.alert('Pulando 1!')
        }
        if (ini < fim) {
            // Contagem crescente
            if (pas > fim) {
                pas = 1 
                window.alert('Pulando 1!')
            }
            for(var c = ini; c <= fim; c += pas) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else if (ini > fim) {
            if (pas > ini){
                pas = 1
                window.alert('Pulando 1!')
            }
            // contagem decrescente
            for(var c = ini; c >= fim; c-=pas) {
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += ' \u{1F3C1}'
    } 
}
    
