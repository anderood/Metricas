
// Filtra por Data
filtroData.addEventListener("input", function(){
    //pega todos que tem esta classe
    let itensLinha = document.querySelectorAll('.itemLinha');

    if(this.value.length > 0){
        for(let i =0; i< itensLinha.length; i++){
            let data = itensLinha[i];
    
            let tdData = data.querySelector('.itemData')
            let datateste = tdData.textContent;
    
            if(datateste != this.value){
                data.classList.add('invisivel');
            } else {
                data.classList.remove('invisivel');
            }
        }
    } else {
        for (let i = 0; i < itensLinha.length; i++) {
            let data = itensLinha[i];
            data.classList.remove('invisivel');
        }
    }

    

});

// Filtra por Status
filtroStatus.addEventListener("input", function(){

    //pega todos que tem esta classe
    let itensLinha = document.querySelectorAll('.itemLinha');

    if(this.value.length > 0){

        for(let i =0; i< itensLinha.length; i++){
            let data = itensLinha[i];

            let tdStatus = data.querySelector('.itemStatus')
            let status = tdStatus.textContent;

            console.log("valor do Status " + status)

            if(status != this.value){
                console.log("varlor do This " + this.value)
                data.classList.add('invisivel');
            } else {
                data.classList.remove('invisivel');
            }
        }
    } else {
        for (let i = 0; i < itensLinha.length; i++) {
            let data = itensLinha[i];
            data.classList.remove('invisivel');
            
        }
    }


});