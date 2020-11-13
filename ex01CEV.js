function carregar(){
    var msg = window.document.getElementById('msg')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerText = `Agora são ${hora} horas`
    msg.style.fontSize = '20px'

    var img = window.document.getElementById('img')
    img.style.margin = '10px'
    img.style.width = '250px'
    img.style.height = '250px'
    img.style.borderRadius ='50%'

    if(hora > 4 && hora <= 12){
        img.src = 'img_dia.png'
        document.getElementById('body').style.background = '#e2cd9f'
    }
    else if(hora > 12 && hora <= 18){
        img.src = 'img_tarde.jpg'
        document.getElementById('body').style.background = '#b9846f'
    }
    else{
        img.src = 'img_noite.jpg'
        document.getElementById('body').style.background = '#515154'
    }
}
