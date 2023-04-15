function parimp(n) {
    if (n%2 == 0) {
        return(`${n} é par.`)
    } else {
        return(`${n} é ímpar.`)
    }
}

var pi = parimp(3)
console.log(pi)