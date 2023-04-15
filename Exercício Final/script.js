function add() {
    var nt = document.querySelector('input#num')
    var n = Number.parseInt(nt.value)
    if (n <1 || n >100 || nt.value.length == 0) {
        alert('[ERRO] Valor inválido!')
        nt.value = ''
    } else {
        alert(`N ${n}`)
        nt.value = ''
    }
} 
