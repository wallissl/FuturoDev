/* Ex5 - Criar um arquivo SQL com os seguintes procedimentos:



Encontre o total de itens pedidos em cada mês.

Liste os clientes que não têm pedidos associados.

Encontre o pedido de maior valor.

Encontre o total de itens pedidos para cada produto.

Calcule a soma dos valores dos pedidos para cada cliente que tenha feito mais de um pedido.

Encontre o preço médio dos produtos em cada categoria.

Encontre o cliente que fez o pedido de maior valor. */


SELECT 
    DATE_TRUNC('month', p.data_pedido) AS mes,
    SUM(ip.quantidade) AS total_itens
FROM 
    pedidos p
JOIN 
    itens_pedidos ip ON p.pedido_id = ip.pedido_id
GROUP BY 
    mes
ORDER BY 
    mes;
    


SELECT c.*
FROM clientes c
LEFT JOIN pedidos p ON c.cliente_id = p.cliente_id
WHERE p.pedido_id IS NULL;



SELECT *
FROM pedidos
WHERE valor = (SELECT MAX(valor) FROM pedidos);



SELECT 
    p.produto_id, 
    p.nome_produto, 
    SUM(ip.quantidade) AS total_itens
FROM 
    produtos p
LEFT JOIN 
    itens_pedidos ip ON p.produto_id = ip.produto_id
GROUP BY 
    p.produto_id, p.nome_produto
ORDER BY 
    p.produto_id;



SELECT 
    c.cliente_id, 
    c.nome, 
    COUNT(p.pedido_id) AS num_pedidos,
    SUM(p.valor) AS soma_valores
FROM 
    clientes c
JOIN 
    pedidos p ON c.cliente_id = p.cliente_id
GROUP BY 
    c.cliente_id, c.nome
HAVING 
    COUNT(p.pedido_id) > 1
ORDER BY 
    c.cliente_id;



SELECT 
c.categoria_id,
c.nome_categoria,
AVG(p.preco) AS preco_medio
FROM 
produtos p
JOIN 
categorias c ON p.categoria_id = c.categoria_id
GROUP BY 
c.categoria_id, c.nome_categoria
ORDER BY 
c.categoria_id;

Tabela categorias excluída no exercício 01



SELECT 
c.cliente_id, 
c.nome, 
p.pedido_id, 
p.valor
FROM 
    clientes c
JOIN 
    pedidos p ON c.cliente_id = p.cliente_id
ORDER BY 
    p.valor DESC
LIMIT 1;

