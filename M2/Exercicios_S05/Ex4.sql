/* Ex4 - Criar um arquivo SQL com os seguintes procedimentos:

Encontre todos os clientes cujo nome começa com a letra 'A'.

Calcule o valor total de pedidos para cada cliente.

Encontre a média de idade dos clientes em cada cidade. */

SELECT * FROM clientes
where nome like 'A%'

select c.cliente_id, c.nome as nome_cliente, sum(p.valor) as total_pedidos
from clientes c
join pedidos p on c.cliente_id = p.cliente_id
group by c.cliente_id, c.nome
order by total_pedidos desc;