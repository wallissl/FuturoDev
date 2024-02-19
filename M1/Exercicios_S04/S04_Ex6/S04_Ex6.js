// S04_Ex06: Crie 3 objetos com propriedades representando informações pessoais (nome, idade, nacionalidade e profissão) e exiba essas informações com um console.log para cada objeto.



// Primeira forma de realizar o print dos objetos no console.log
let rh = {
    nome: "João",
    idade: "25",
    nacionalidade: "Brasileiro",
    profissao: "Analista"
}

console.log("Objeto 1 - RH :" , rh)

// Segunda forma de realizar o print dos objetos no console.log
let adm = {
    nome: "Maria",
    idade: "21",
    nacionalidade: "Brasileiro",
    profissao: "Secretária",

    /* toString: (function(){
        return `${this.nome}, ${this.idade}, ${this.nacionalidade}, ${this.profissao}`;    
    }) */
}

console.log(`Objeto 2 - ${JSON.stringify(adm)}`); // Conversão rápida do objeto para String para realizar a impressão.

// Terceira forma de realizar o print dos objetos no console.log
let mkt = {
    nome: "Cássia",
    idade: "27",
    nacionalidade: "Brasileiro",
    profissao: "Publicitária",

    toString: function(){
    return JSON.stringify(this); 
    }
};

console.log(`Objeto 3 - ${mkt}`)
