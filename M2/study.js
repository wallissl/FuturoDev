// Declaração de Arrays em JavaScript

let filmes = ["Homem de Ferro", "Jogos Mortais", "Harry Potter"]
let numeros = new Array(1,2,3,4,5)

console.log(filmes);
console.log(numeros);

// Desestruturação de um Array

const [filmeUm, filmeDois, filmeTres, filmeQuatro] = filmes;

console.log(filmeQuatro);

// Modificando Elementos de um Array
filmes[0] = "O senhor dos Aneis";

console.log(filmes);

// Comprimento do Array
const comprimentoDaListaDeFilmes = filmes.length;

console.log(comprimentoDaListaDeFilmes);

// Adicionando elementos ao Array
filmes.push("Interestelar"); // Adiciona elemento no final do array
console.log(filmes);

filmes.unshift("Closer"); // Adicionar valor no início do array
console.log(filmes);

// Removendo elementos do Array
const ultimoFilme = filmes.pop(); // Remover último elemento
console.log(ultimoFilme);
console.log(filmes);

const primeiroFilme = filmes.shift(); // Remover o primeiro elemento do array
console.log(filmes);

let numerosDobro = numeros.map((numero) => {
    return numero *2
})

console.log(numerosDobro);

// Aula 01 - 01:27:50 - https://drive.google.com/drive/folders/19BMODJoiPqMFvl-ZC_TPSx81K5XNjQyN
