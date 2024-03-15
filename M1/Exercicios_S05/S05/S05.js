/* S05_Ex03: Para o botão de comprar, adicione um evento de clique. O nome do produto deve ser inserido em um array de lista de compras do usuário, ou seja, dar um ‘push’ do nome ou objeto produto (formado por nome e preço) na variável carrinho (array) */

let resposta = document.getElementById('resposta');
let codName = document.getElementById('codName');
let carrinho =[]
let totalCarrino = Number();
let valorCarinho = document.getElementById('valorCarrinho');
let controle = 0
let totalItens = 0

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
    
    let produto;
  /*   let produto = {
        nome: codName,
        preco: 5.99
    }; */

    if(codName.value.toLowerCase() == 'banana'){
        produto = {
        nome:codName.value.toLowerCase(),
        preco:5.99
        }
        totalItens ++
    }else if(codName.value.toLowerCase() == 'maça'){
        produto = {
            nome:codName.value.toLowerCase(),
            preco: 6.99
        }
        totalItens ++
    }else if(codName.value.toLowerCase() == 'laranja'){
        produto = {
            nome:codName.value.toLowerCase(),
            preco: 7.29
        }
        totalItens ++
    }else{
        produto = 0
        controle ++
    }

    carrinho.push(produto)
    console.log(carrinho)
    
    if(carrinho != 0){
        for(i=controle; i<carrinho.length;i++){
        //  console.log(carrinho[i].preco)
        totalCarrino += carrinho[i].preco
        controle ++      
        }        
        
    }else{
        valorCarinho.innerHTML = ('Carrinho Vazio');
    }
}

function totalCompra(){
    
    if(totalCarrino !=0){
    valorCarinho.innerHTML = `Total de itens no carrinho: ${totalItens}<br>Valor Total: R$${totalCarrino.toFixed(2)}`;
    
    }else{
        valorCarinho.innerHTML = "Carrinho Vazio"
    }
}



