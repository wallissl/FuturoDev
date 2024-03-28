const usuarios1 = {
    nome: 'Wallis',
    email: 'email@email.com',
    senha: 1234
}

console.log(usuarios1.email);

// Desestruturação
const {nome, email} = usuarios1; // nesse exmplo eu consigo extrair só uma informação de um objeto

console.log(nome) // É possível utilizar no lugar do props caso queira, mas a desestruturação não é muito utilizada.