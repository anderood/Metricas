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
                            let projeto = response[data][volume][tipo][item].projeto

                            // console.log(status)
                           
                            //dados.push({data, volume, tipo, item, projeto, status_padrao, nao_iniciado})
                            // dados.push({data, volume, tipo, item, projeto, status-padrao, nao-iniciado, em-producao, produzido, em-leitura, edicao-producao, em-montagem, montado, p1, p2, p3, gravado})

                            //corpoTr.innerHTML = template();
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
                    <td>${item.projeto}</td>
                    <td>${item.status_padrao}</td>
                    <td>${item.nao_iniciado}</td>
                    <td>${item.em_producao}</td>
                    <td>${item.produzido}</td>
                    <td>${item.em_leitura}</td>
                    <td>${item.edicao_producao}</td>
                    <td>${item.em_montagem}</td>
                    <td>${item.montado}</td>
                    <td>${item.p1}</td>
                    <td>${item.p2}</td>
                    <td>${item.p3}</td>
                    <td>${item.gravado}</td>
                    
                </tr>
            `
        }).join('')}
    `
}