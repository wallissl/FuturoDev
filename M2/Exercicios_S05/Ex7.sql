/* Ex7 - Criar um arquivo SQL com os seguintes procedimentos:

Função Agregada: Encontre a média de idade dos clientes que têm pedidos com valor total superior a 300,00.

Subconsulta: Liste todos os produtos que foram pedidos mais de uma vez. */



SELECT 
    ROUND(AVG(c.idade), 0) AS media_idade_arredondada
FROM 
    clientes c
JOIN 
    pedidos p ON c.cliente_id = p.cliente_id
GROUP BY 
    c.cliente_id, c.nome, c.idade
HAVING 
    SUM(p.valor) > 300.00;



SELECT 
    p.produto_id, 
    p.nome_produto
FROM 
    produtos p
WHERE 
    p.produto_id IN (
        SELECT 
            ip.produto_id
        FROM 
            itens_pedidos ip
        GROUP BY 
            ip.produto_id
        HAVING 
            COUNT(ip.item_id) > 1
);