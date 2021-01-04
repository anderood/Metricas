let exibirDados = document.querySelector('#exibirDados');
let corpoTr = document.querySelector('.corpoTr');

let filtroData = document.querySelector('#filtroData');
let filtroStatus = document.querySelector('#filtroStatus');


let dados = []

exibirDados.addEventListener('click', function(){
    
    let local = "/data/data-copy-peq.json";

    // Fetch faz a interface na busca de recursos...
    // é similiar ao XHLHttpRequest
    fetch(local)
    .then(response => {
        response.json()
        .then(response => {

            //Faz a extração somente das propriedades
            const keyToArr = obj => Object.keys(obj);

            //faz a extração somente da data
            keyToArr(response).forEach(data =>{

                //Data, entregue seus valores
                keyToArr(response[data]).forEach(volume => {
                    keyToArr(response[data][volume]).forEach(tipo => {
                        keyToArr(response[data][volume][tipo]).forEach(item => {
                            const status = response[data][volume][tipo][item].status;
                            const percentual = response[data][volume][tipo][item].percentual;
                            const projeto = response[data][volume][tipo][item].projeto;
                            const area = response[data][volume][tipo][item].area;

                            dados.push({data, volume, tipo, item, status, percentual, projeto, area})

                            corpoTr.innerHTML = template();
                        })
                    })
                })
            })
        })
    })
})

function template() {
    return `
        ${dados.map(item => {
            return `
                <tr class="itemLinha">
                    <td class="itemData">${item.data}</td>
                    <td>${item.volume}</td>
                    <td>${item.tipo}</td>
                    <td>${item.item}</td>
                    <td>#</td>
                    <td class="itemStatus">${item.status}</td>
                    <td>${item.percentual.toFixed(3)}</td>
                    <td>${item.projeto}</td>
                    <td>${item.area}</td>
                </tr>
            `
        }).join('')}
    `
}

filtroData.addEventListener("input", function(){

    //pega todos que tem esta classe
    let itensLinha = document.querySelectorAll('.itemLinha');

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

});

filtroStatus.addEventListener("input", function(){

    //pega todos que tem esta classe
    let itensLinha = document.querySelectorAll('.itemLinha');

    for(let i =0; i< itensLinha.length; i++){
        let data = itensLinha[i];

        let tdStatus = data.querySelector('.itemStatus')
        let status = tdStatus.textContent;

        if(status != this.value){
            data.classList.add('invisivel');
        } else {
            data.classList.remove('invisivel');
        }
    }

});