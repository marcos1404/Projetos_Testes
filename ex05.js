var vet = []
var maior = []
var menor = []

function adicionar(){
    var input_add_num = document.getElementById('input_addnum')
    var select_valores = document.getElementById('select_valores')
    
    //se o input estiver vazio ou invalido(maior que 100)
    if(input_add_num.value.length == 0 ||input_add_num.value > 100 ){
        alert('valor invalido ou ja encontrado!')
    }
    //se nao estiver vazio
    else{
        var item = document.createElement('option')
        //se o numero nao esta contido no vetor
        if(vet.indexOf(Number(input_add_num.value)) == -1){
            vet.push(Number(input_add_num.value))
            item.innerText = `valor ${input_add_num.value} adicionado`
            select_valores.appendChild(item)
            
        }
        //se o numero estiver no vetor
        else{
            alert('valor ja digitado !')
        }
    } 
}
function finalizar(){
    var quant_valores = document.getElementById('quant_valores')
    var maior_valor  = document.getElementById('maior_valor')
    var menor_valor = document.getElementById('menor_valor')
    var soma_valores  = document.getElementById('soma_valores')
    var media_valores  = document.getElementById('media_valores')
    var soma = 0
    //calculando o MAIOR
    for(var c = 0 ; c <= vet.length ; c+=1){
        if(maior.length == 0){
            maior.push(vet[0])
        }
        else{
            if(vet[c] > maior[0]){
                maior[0] = vet[c]
            }
        }
    }
    //calculando o MENOR
    for(var c = 0 ; c <= vet.length ; c+=1){
        if(menor.length == 0){
            menor.push(vet[0])
        }
        else{
            if(vet[c] < menor[0]){
                menor[0] = vet[c]
    
            }
        }
    }
    for(let pos in vet){
        soma += vet[pos]

    }
    if(vet.length > 0){
        quant_valores.innerText = `Ao todo temos ${vet.length} valores cadastrados.`
        maior_valor.innerText = `O maior valor foi ${maior}.`
        menor_valor.innerText = `O menor valor foi ${menor}.`
        soma_valores.innerText = `A soma dos valores é ${soma}.`
        var total = vet.length
        var media = soma / total
        media_valores.innerText = `A media dos valores é ${media}.`
    }
    else{
        alert('adicione valores antes')
    }
    
}