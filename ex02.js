function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txt_ano')
    var result = document.getElementById('res')
    
    if(f_ano.value.length == 0 || Number(f_ano.value)> ano){
        window.alert('ERRO!campos invalidos')
    }else{
        var f_gen = document.getElementsByName('radgen')
        var idade = ano - Number(f_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.borderRadius = '50%'
        img.style.marginTop = '20px'
        if(f_gen[0].checked){
            genero = 'Masculino'
            if(idade > 0 && idade <= 10){
                img.setAttribute('src','img_dia.png')
            }
            else if(idade > 10 && idade <= 21){
                img.setAttribute('src','img_dia.png')
            }
            else if(idade > 21 && idade <= 50){
                img.setAttribute('src','img_dia.png')
            }
            else{
                img.setAttribute('src','img_dia.png')
            }
            
        }
        else{
            genero = 'Feminino'
            if(idade > 0 && idade <= 10){
                img.setAttribute('src','img_dia.png')
            }
            else if(idade > 10 && idade <= 21){
                img.setAttribute('src','img_dia.png')
            }
            else if(idade > 21 && idade <= 50){
                img.setAttribute('src','img_dia.png')
            }
            else{
                img.setAttribute('src','img_dia.png')
            }
            
        }
        result.style.textAlign = 'center'
        
        result.innerHTML = `genero: ${genero} idade: ${idade} anos`
        result.appendChild(img)
        
        
    }
    
}
