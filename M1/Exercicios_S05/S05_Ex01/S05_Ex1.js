// S05_Ex01: Desenvolva uma tela para simular consulta de preços e compra de produtos de mercado.S05_Ex01: Desenvolva uma tela para simular consulta de preços e compra de produtos de mercado.


let resposta = document.getElementById('resposta')

function valorProduto(){
    let codName = document.getElementById('codName').value;
    resposta.innerHTML = (codName)

    switch(codName){
        case '201' || 'banana':
            resposta.innerHTML = 'foi'
    }
}

