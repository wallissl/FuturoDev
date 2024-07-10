/* Ex3 - Criar um arquivo SQL com os seguintes procedimentos:

Selecione todos os clientes que moram em 'São Paulo'.

Liste todos os pedidos, ordenados pela data_pedido em ordem decrescente.

Encontre todos os clientes com idade entre 25 e 35 anos. */

SELECT * FROM clientes
where cidade = 'São Paulo'


SELECT * FROM pedidos
order by data_pedido desc


SELECT * FROM clientes
where idade >=25 and idade <= 35