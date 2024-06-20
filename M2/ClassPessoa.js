  // S3A2 - Exemplo de Classes | 00:19:35 | https://drive.google.com/file/d/1UFyyXufHWKN2_vIa5OOIOGScBtkGQ3jU/view

  class Pessoa {
    // Atributos
    #nome;
    #idade;
    
    constructor(nome,idade){
        /* this.nome = nome;
        this.idade = idade; Método público */
        this.#nome = nome;
        this.#idade = idade;
    }

    get getNome(){
      return this.#nome
    }

    get getIdade(){
      return this.#idade
    }

    set setIdade(idade){
      return this.#idade = idade
    }

    cumprimentar(){
        console.log(`Meu nome é ${this.#nome} e tenho ${this.#idade}`)
    }

  }

  module.exports = Pessoa; 