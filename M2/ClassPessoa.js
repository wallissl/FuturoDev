  // S3A2 - Exemplo de Classes | 00:19:35 | https://drive.google.com/file/d/1UFyyXufHWKN2_vIa5OOIOGScBtkGQ3jU/view

  class Pessoa {
    // Atributos
    constructor(nome,idade){
        /* this.nome = nome;
        this.idade = idade; Método público */
        
    }

    cumprimentar(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade}`)
    }

  }

  module.exports = Pessoa; 