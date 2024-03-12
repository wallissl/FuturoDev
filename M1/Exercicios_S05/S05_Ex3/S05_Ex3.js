/* S05_Ex03: Para o botão de comprar, adicione um evento de clique. O nome do produto deve ser inserido em um array de lista de compras do usuário, ou seja, dar um ‘push’ do nome ou objeto produto (formado por nome e preço) na variável carrinho (array) */

let resposta = document.getElementById('resposta');
let codName = document.getElementById('codName');
let carrinho =[]


function frutaEscolhida(codName){ // A função recebe o valor que o usuário digitar no input

   codName = codName.value.toLowerCase(); // Capturar o valor da variável e converter para minúsculo.

    if(codName == 'banana'){
        return `O valor do item "${codName}" é R$ 5,99 kg`
    }else if(codName == 'maça'){
        return `O valor do item "${codName}" é RS 6,99 kg`
    }else if(codName == 'laranja'){
        return `O valor do item "${codName}" é RS 7,29 kg`
    }else{
        return `Digite o nome de um dos produtos disponíveis na loja`
    }
}

valorProduto = () => {
    resposta.innerHTML = (frutaEscolhida(codName));

}; // Arrow function de uma linha apenas para acionar o alert com o resultado da função frutaEscolhida

function comprar(){
    
    let produto = {
        nome:codName.value.toLowerCase(),
        preco:5.99
    };

    carrinho.push([produto])
    console.log(carrinho)
}


