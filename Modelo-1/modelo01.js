function load () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getUTCMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${min} horas <br> `

    if (hora >= 0 && hora < 12) {
        img.src = 'img/morning.jpg'
        msg.innerHTML += "Bom Dia !"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/afternoon.jpg'
        msg.innerHTML += "Boa Tarde !"
        document.body.style.background = '#b9846f'

    } else {
        img.src = 'img/night.jpg'
        document.body.style.background = '#515154'
        msg.innerHTML += "Boa Noite !"


    }
}