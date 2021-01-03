let listarDados = document.querySelector('#listarDados');
let corpoTr = document.querySelector('.corpoTr');

let filtro = document.querySelector('#filtro');


let dados = []

listarDados.addEventListener('click', function(){
    
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
                    <td>${item.data}</td>
                    <td>${item.volume}</td>
                    <td>${item.tipo}</td>
                    <td>${item.item}</td>
                    <td>#</td>
                    <td>${item.status}</td>
                    <td>${item.percentual}</td>
                    <td>${item.projeto}</td>
                    <td>${item.area}</td>
                </tr>
            `
        }).join('')}
    `
}

filtro.addEventListener("input", function(){
    let itensLista = document.querySelectorAll('.itemLista');

   console.log(itensLista)


});