function Contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    
    let result = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        result.innerHTML = `Impossível Contar !`
    } else {
        result.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert(`Passo inválido! Considerando PASSO 1`)
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                result.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (let c = i; c >= f; c -=p ) {
                result.innerHTML += `${c} \u{1F449} `

            }
        }
        
        result.innerHTML += `\u{1F3C1}`
        }


}