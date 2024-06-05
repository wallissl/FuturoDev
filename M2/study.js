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

let numerosIndex = numeros.map((numero, index) => {
    return `Teste: ${index}`
})

console.log(numerosIndex);

let numerosPares = numeros.filter((numero) => {
    return numero % 2 == 0
});

console.log(numerosPares);

// Método reduce é utilizado para realizar o agrupamento de dados.
let soma = numeros.reduce((total, numero) =>{
    return total + numero
},10); // 10 é o valor inicial nesse caso (total)

console.log(soma);


// Métodos de busca

let numeroEncontrado = numeros.find((numero)=>{
    return numero >3;
})

console.log(numeroEncontrado);

let indiceEncontrado = numeros.findIndex((numero) => {
    return numero > 0
})

console.log(indiceEncontrado);


// Métodos de ordenação - sort (por padrão coloca os itens em ordem crescente)
let filmesOrdenados = filmes.sort()

console.log(filmesOrdenados);

let numerosInvertidos = numeros.reverse();
console.log(numerosInvertidos);
