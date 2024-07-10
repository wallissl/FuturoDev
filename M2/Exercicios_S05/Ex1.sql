/* Ex1 - Criar um arquivo SQL com os seguintes procedimentos:

Crie uma tabela chamada categorias com as seguintes colunas: categoria_id (chave primária), nome_categoria (VARCHAR(50)).

Adicione uma coluna categoria_id à tabela produtos e crie uma chave estrangeira para a tabela categorias.

Exclua a tabela categorias. */

create table categorias(
	categoria_id serial primary key,
	nome_da_categoria varchar(50)
)


alter table produtos
add column categoria_id int;

alter table produtos
add constraint fk_categoria
FOREIGN KEY (categoria_id) references categorias(categoria_id);


drop table categorias