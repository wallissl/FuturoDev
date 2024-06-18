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

    cumprimentar(){
        console.log(`Meu nome é ${nome} e tenho ${idade}`)
    }

  }

  module.exports = Pessoa; 