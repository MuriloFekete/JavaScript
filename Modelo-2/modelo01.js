function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '150px'
        img.style.height = '150px'
        img.style.borderRadius = '50%'
        img.style.display = 'block'
        img.style.textAlign = 'center'
        img.style.margin = 'auto'
        img.style.backgroundSize = "contain";
        img.style.backgroundPosition = "center center";
        if (fsex[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/children-man.jpg')
            } else if (idade >= 11 && idade <= 22) {
                img.setAttribute('src', 'img/young-man.jpg')
            } else if (idade >= 23 && idade <= 35) {
                img.setAttribute('src', 'img/man-35.jpg')

            } else if (idade >= 36 && idade <= 49 ) {
                img.setAttribute('src', 'img/man-49.jpg')
            } 
            else if (idade >= 50) {
                img.setAttribute('src', 'img/man-50.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"

            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/children-girl.jpg')
            } else if (idade >= 11 && idade <= 22) {
                img.setAttribute('src', 'img/young-girl.jpg')
            } else if (idade >= 23 && idade <= 35) {
                img.setAttribute('src', 'img/woman-35.jpg')

            } else if (idade >= 36 && idade <= 49 ) {
                img.setAttribute('src', 'img/woman-49.jpg')
            } 
            else if (idade >= 50) {
                img.setAttribute('src', 'img/woman-50.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}