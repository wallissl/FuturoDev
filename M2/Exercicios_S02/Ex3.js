/* Dado um array de objetos representando produtos com propriedades categoria e preco, crie uma função que agrupe os produtos por categoria e calcule o preço total de cada categoria. */

function agruparPorCategoria(produtos) {
    return produtos.reduce((agrupado, produto) => {
        if (!agrupado[produto.categoria]) {
            agrupado[produto.categoria] = produto.preco;
        }else{
            agrupado[produto.categoria] += produto.preco;
        }
        return agrupado;

    }, {});
}

let produtos = [
{ categoria: 'eletronicos', preco: 99.99 },
{ categoria: 'livros', preco: 19.99 },
{ categoria: 'eletronicos', preco: 199.99 },
{ categoria: 'livros', preco: 29.99 },
{ categoria: 'roupas', preco: 49.99 }
];

console.log(agruparPorCategoria(produtos));
