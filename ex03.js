function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.value.length == 0||fim.value.length == 0||passo.value.length == 0){
        alert('ERRO!faltam dados')
    }
    else{
        res.innerHTML = 'Contando : <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo : Inválido , passo = 1')
            p = 1

        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} > `
            }    
        }
        else{
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} > ` 
            }
        }
        res.innerHTML += 'Fim'
    }
}

