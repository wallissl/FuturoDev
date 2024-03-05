// S05_Ex01: Desenvolva uma tela para simular consulta de preços e compra de produtos de mercado.S05_Ex01: Desenvolva uma tela para simular consulta de preços e compra de produtos de mercado.

let codName = document.getElementById('codName').value;
let resposta = document.getElementById('resposta')

function valorProduto(){
    resposta.innerHTML = (codName)
}

