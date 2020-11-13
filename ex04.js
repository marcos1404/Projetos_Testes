function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    //se o input estiver vazio
    if(num.value.length == 0){
        alert('Digite um numero!')
    }
    //se o input nao estiver vazio
    else{
        let n = Number(num.value)
        //limpa tela
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c+=1){
            let item = document.createElement('option')
            item.innerText = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        } 
    }
}