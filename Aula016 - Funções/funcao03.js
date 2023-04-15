var v = function(x) {
    return x*2 
}

console.log(v(5))


function fat(n) {
    var fat = 1
    for (var c = n; c > 1; c--) {
        fat *= c
        
    }
    return fat
}

console.log(fat(5))


function fatw(n) {
    var fat = 1
    var c = n
    while(c>1) {
        fat *= c
        c--
    }
    return fat
}
var n0 = 8
var fat1 = fatw(n0)
console.log(`${n0}! = ${fat1}`)