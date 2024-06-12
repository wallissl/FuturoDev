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

// Instalação do postgresql - Aula 01 - 02:25:13 - https://drive.google.com/drive/folders/19BMODJoiPqMFvl-ZC_TPSx81K5XNjQyN


// Aula 02 - Objetos / 22/05/24
// https://drive.google.com/file/d/1U1VLtfcU-Pw7iIYc60RuxkRGucE7zfRW/view
// Declaração de Objetos

let pessoa = {
    nome: "Wallis",
    idade: 30,
    profissao: "Dev"
}

// Acessando uma propriedade do objeto

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["nome"])

// Nem sempre conhecemos todas as chaves que existem dentro um objeto, podemos utilizar a segunda forma de acessar a informação do objeto e criar um map para percorrer e buscas as informações que temos interesse. Dessa forma é possível acessar os valores de forma dinâmica.

const chaves = ["nome", "idade", "profissao", "cidade", "genero"];
let valores = chaves.map((chave) => {
    return pessoa[chave]
})
console.log(valores)

// Modificando uma propriedade do objeto

pessoa.idade = 31
console.log(pessoa)

// Adicionando uma nova propriedade ao objeto

pessoa.cidade = "Florianópolis";

console.log(pessoa);

// Removendo a propriedade do objeto
delete pessoa.cidade;

console.log(pessoa)

// Chaves dinâmicas
const chavesD = ["A","B","C"]
const valoresD = [1,2,3]

const novoArray = chavesD.map((chave, indice) => {
    return {[chave]: valoresD[indice]}
})

console.log(novoArray)

// Outro exemplo - Criando objeto com chave dinâmica

let propriedade = "nome";

let pessoa1 = {
    [propriedade]: "João"
}

console.log(pessoa1)

// Acessando valor da propriedade com chave dinâmica

let chave = "nome";
let pessoa2 = {
    nome: "João"
}

console.log(pessoa2[chave])

// Propriedades dinãmicas

let usuario = {}
let chave1 = "email"

usuario[chave1] = "ana@exemplo.com"

console.log(usuario)

// Expressões como chave dinâmica / 01:57:15

let contador = 0
let prefixo = "item: "

let carrinho = {
    [prefixo + ++contador]: "Livro",
    [prefixo + ++contador]: "Caneta"
}

console.log(carrinho);

// Iterando chaves dinâmicas com array

let campos = ["nome", "idade", "email"];
let valores1 = ["Pedro", 28, "pedro@email.com"]
let usuario1 = {}

campos.forEach((campo, index) => {
    usuario1[campo] = valores1[index]
})

console.log(usuario1)

// Hash maps : 02:01:20


let mapa = new Map()
mapa.set("nome","Wallis");
mapa.set("idade", 32);
mapa.set("profissão", "Designer")

console.log(mapa);
console.log(mapa.get("nome"))
console.log(mapa.has("idade"))

mapa.delete("profissão")
console.log(mapa.has("profissão"))

mapa.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`)
})

// Classe Object e suas principais funções / 02:20:45

// Classe objeto

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

console.log(Object.keys(pessoa).map((p) => {
    return {[p]: pessoa[p]}
}))

// Object Assing - Utilizado para juntar diferentes objetos em um objeto só

const novoObjeto = Object.assign({}, {teste: 1}, {teste1: 2})

console.log(novoObjeto)

console.log('teste')

const teste3 = true;
// É possível adicionar condicionais na lógica
const novoObjeto1 = Object.assign({}, teste3 && {teste3: "Deu certo"}, ...mapa)
console.log(novoObjeto1);

Object.freeze(pessoa)
pessoa.nome = "Kami"

console.log(pessoa)

// Filter 02:48:18

// Integração avançada com array e maps / 02:48:44

// Integração Array, Objeto e Hash Map

let paresChaveValor = [
    [ 'nome', 'João'],
    ['Profissao', 'Engenheiro'],
    ['cidade', 'Florianópolis']
]

let mapa1 = new Map(paresChaveValor)
console.log(mapa1.get("nome"))


// Integração avançada com array / 02:52:02

let dados1 = [
    {
        id: 1, nome: "Ana", notas: [10,8,9]
    },
    {
        id: 2, nome: "Pedro", notas: [7,8,9]
    },
    {
        id: 3, nome: "Luiz", notas: [4,6,7]
    }
]

let medias = dados1.map(({nome, notas}) => {
    let soma = notas.reduce((total, nota) => {
        return total + nota
    }, 0 )

    let media = soma/notas.length

    return { nome, media}
})

console.log(medias)
