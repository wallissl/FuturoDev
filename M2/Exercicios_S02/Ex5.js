// Dado um array de números, crie uma função que use reduce para calcular o produto de todos os números no array.

function calcularProduto(numeros) {

        let produto = numeros.reduce((total, numero) =>{
            return total *= numero
        },1)
        return produto;
    }
    
    let numeros = [1, 2, 3, 4, 5];

    console.log(calcularProduto(numeros));
