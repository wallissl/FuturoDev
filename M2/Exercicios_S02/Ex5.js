// Dado um array de números, crie uma função que use reduce para calcular o produto de todos os números no array.

function calcularProduto(numeros) {
        let produto = 1;

        for(i=0; i< numeros.length; i++){
            produto *= numeros[i]
        }
        return produto
    }
    
    let numeros = [1, 2, 3, 4, 5];

    console.log(calcularProduto(numeros)); // 120
