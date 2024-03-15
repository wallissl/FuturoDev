[M1S05] Ex 1 - Desenvolva uma tela para simular consulta de preços e compra de produtos de mercado

A tela deve conter os seguintes elementos:

Input para informar código ou nome do produto;

Botão para consultar valor;

Botão para comprar produto consultado;

-----------------------------------------------

[M1S05] Ex 2 - Adicione um evento ao botão de consultar valor do produto

Adicione um evento de clique para consultar o valor do produto digitado pelo consumidor. A resposta deve ser trazida de forma dinâmica a partir de uma função, seja por alert ou alteração do innerText de uma tag de texto presente no html. Exemplo:

alert('O valor do produto é: ')

ou

document.getElementById('preco-produto').innerText = 'O valor do produto é…'

-----------------------------------------------

[M1S05] Ex 3 - Adicione um evento ao botão de comprar o produto

Para o botão de comprar, adicione um evento de clique. O nome do produto deve ser inserido em um array de lista de compras do usuário, ou seja, dar um ‘push’ do nome ou objeto produto (formado por nome e preço) na variável carrinho (array)

-----------------------------------------------

[M1S05] Ex 4 - Adicione um botão para consultar o valor total da compra

Adicione um botão que ao clicar, chame uma função e ela retorne o valor total dos itens no carrinho.

Retornar ‘Carrinho vazio’ caso o valor seja 0.

Para um melhor cálculo, utilizar um modelo de array de objetos para a lista de compras / carrinho do usuario.

carrinho = [{nome: ‘Feijão’, preco: 5.99 }, {nome: ‘Arroz’, preco: 23.99}]

Após isso, basta percorrer em cada item e somar o preço. Ex: soma += preco

-----------------------------------------------

[M1S05] Ex 5 - Coloque na tela o valor total do carrinho de forma dinâmica

Mostre dinamicamente o valor total do carrinho para o usuário, posicione uma tag de texto para receber este valor sempre que o consumidor apertar no botão ‘comprar’.

-----------------------------------------------

[M1S05] Ex 6 - Coloque na tela o número de produtos presentes no carrinho de forma dinâmica

Mostre dinamicamente o número de produtos presentes no carrinho para o usuário, posicione uma tag de texto para receber este valor sempre que o consumidor apertar no botão ‘comprar’.

-----------------------------------------------

[M1S05] Ex 7 - Adicione os itens do carrinho em localStorage para manter armazenado

A cada nova ‘adição no carrinho', atualize uma chave no localStorage para registrar todos os produtos comprados pelo usuário.

No inicio da aplicação, coloque uma leitura desses itens presentes no localStorage e atualize o valor total e qtd de itens em tela.