/* Ex4 - Criar um arquivo SQL com os seguintes procedimentos:

Liste todos os pedidos junto com as informações dos clientes, usando um INNER JOIN.

Faça uma consulta que retorna todos os clientes e seus pedidos, incluindo clientes que não fizeram pedidos (use LEFT JOIN).

Faça uma consulta que retorna todos os produtos e seus itens pedidos, incluindo produtos que não foram pedidos (use RIGHT JOIN).

Utilize UNION para combinar duas consultas: uma que retorna clientes de 'São Paulo' e outra que retorna clientes de 'Rio de Janeiro'. */


select p.*, c.*
from pedidos p
inner join clientes c on p.cliente_id = c.cliente_id


select c.*, p.*
from clientes c
left join pedidos p on c.cliente_id = p.cliente_id


select p.*, ip.*
from produtos p
right join itens_pedidos ip on p.produto_id = ip.produto_id;


select * from clientes
where cidade = 'São Paulo'
union
select * from clientes
where cidade = 'Rio de Janeiro'