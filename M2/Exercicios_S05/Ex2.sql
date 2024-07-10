/* Ex2 - Criar um arquivo SQL com os seguintes procedimentos:

Insira um novo cliente na tabela clientes com os seguintes dados: nome: 'Lucas Lima', cidade: 'Salvador', idade: 29.

Atualize o campo cidade do cliente com cliente_id = 3 para 'Fortaleza'.

Delete todos os pedidos que têm valor inferior a 150.00. */

insert into clientes (nome, cidade, idade)
values ('Lucas Lima', 'Salvador',29);


update clientes 
set cidade = 'Fortaleza'
where cliente_id = 3


delete from pedidos
where valor < 150