// Criação de tabelas

CREATE TABLE clientes (
cliente_id SERIAL PRIMARY KEY,
nome VARCHAR(50),
cidade VARCHAR(50),
idade INT
)

CREATE TABLE pedidos (
pedido_id SERIAL PRIMARY KEY,
cliente_id INT,
data_pedido DATE,
valor DECIMAL(10, 2),
FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

CREATE TABLE produtos (
produto_id SERIAL PRIMARY KEY,
nome_produto VARCHAR(100),
preco DECIMAL(10, 2)
);

CREATE TABLE itens_pedidos (
item_id SERIAL PRIMARY KEY,
pedido_id INT,
produto_id INT,
quantidade INT,
FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id),
FOREIGN KEY (produto_id) REFERENCES produtos(produto_id)
);

// Inserção de dados

INSERT INTO clientes (nome, cidade, idade) VALUES
('João Silva', 'São Paulo', 28),
('Maria Santos', 'Rio de Janeiro', 35),
('Carlos Souza', 'Belo Horizonte', 42),
('Ana Paula', 'Curitiba', 22),
('Pedro Costa', 'Porto Alegre', 30);

INSERT INTO pedidos (cliente_id, data_pedido, valor) VALUES
(1, '2023-01-15', 150.50),
(1, '2023-02-20', 200.00),
(2, '2023-03-05', 300.75),
(3, '2023-01-25', 450.60),
(4, '2023-02-10', 100.00);

INSERT INTO produtos (nome_produto, preco) VALUES
('Produto A', 10.50),
('Produto B', 20.00),
('Produto C', 15.75),
('Produto D', 50.00),
('Produto E', 5.25);

INSERT INTO itens_pedidos (pedido_id, produto_id, quantidade) VALUES
(1, 1, 2),
(1, 3, 1),
(2, 2, 5),
(3, 4, 1),
(4, 5, 3);