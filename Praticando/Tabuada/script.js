var btn = document.querySelector('button#calc')
btn.addEventListener('click', tabuada)

function tabuada() {
    num = Number(document.querySelector('input#num').value)
    if (num == '') {
        alert('[ERRO] Insira um número válido!')
    } else {
        var tab = document.querySelector('select#tab')
        for (let c=1; c <=10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c} `
            item.value = `${num*c}`
            tab.appendChild(item)
        }
    }
}