function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade <10) {
            //kid
            img.setAttribute('src', 'img//gokukid.png')
        } else if (idade < 21) {
            //teen
            img.setAttribute('src', 'img//gohan.png')
        } else if (idade < 50) {
            //Adult
            img.setAttribute('src', 'img//goku.png')
        } else {
            //old
            img.setAttribute('src', 'img//kame.png')
        }    
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade <10) {
            //kid
            img.setAttribute('src', 'img//kidchi.png')
        } else if (idade < 21) {
            //teen
            img.setAttribute('src', 'img//videl.png')
        } else if(idade < 50) {
            //Adult
            img.setAttribute('src', 'img//a18.png')
        } else {
            //old
            img.setAttribute('src', 'img//uranai.png')
        }    
    }
    res.textAlign = 'start'    
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img) = 'end'
}
}