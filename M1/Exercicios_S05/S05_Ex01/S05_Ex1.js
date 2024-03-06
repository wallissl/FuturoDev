// S05_Ex01: Desenvolva uma tela para simular consulta de preços e compra de produtos de mercado.S05_Ex01: Desenvolva uma tela para simular consulta de preços e compra de produtos de mercado.

let resposta = document.getElementById('resposta')
let codName = document.getElementById('codName');

function valorProduto(){

    resposta.innerHTML = (codName.value)

    switch(codName.value.toLowerCase()){ // toLowerCase é utilizado para converter os valores de uma string para minúsculo.
        case '201':
            case 'banana':
            resposta.innerHTML = 'Bananas - Valor R$ 5,59 kg';
        break;
        case '202':
            case 'maça':
            resposta.innerHTML = 'Maças - Valor R$ 6,99 kg';
        break
        case '203':
            case 'laranja':
            resposta.innerHTML = 'Laranja - Valor R$ 7,29 kg';
        break;
        default:
            resposta.innerHTML = "Informe o código ou nome de um produto disponível na loja"
    }
}

function comprar(){

    if(codName.value){
        alert("Item comprado")
    }else{
        alert(`Informe o código ou nome do produto primeiro`)
    }
}

