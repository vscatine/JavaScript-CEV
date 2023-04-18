var nt = document.querySelector('input#num')

var vals = []

function numcheck(x) {
    if (Number(x) > 0 && Number(x) < 101) {
        return true
    } else {
        return false
    }
}

function inlista(x, l) {
    if (l.indexOf(x) == -1) {
        return false
    } else {
        return true
    }
}


function add() {
    if (numcheck(nt.value) && !inlista(nt.value, vals)) {
        vals.push(Number(nt.value))
        nt.value = ''
    } else {
        alert('[ERRO] alguma coisa')
        nt.value = ''
    }
}
