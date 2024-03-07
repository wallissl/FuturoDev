/* S05_Ex02: Adicione um evento de clique para consultar o valor do produto digitado pelo consumidor. A resposta deve ser trazida de forma dinâmica a partir de uma função, seja por alert ou alteração do innerText de uma tag de texto presente no html. Exemplo:
alert('O valor do produto é: ')
            
ou
            
document.getElementById('preco-produto').innerText = 'O valor do produto é…'. */

let codName = document.getElementById('codName');

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

valorProduto = () => alert(frutaEscolhida(codName)); // Arrow function de uma linha apenas para acionar o alert com o resultado da função frutaEscolhida