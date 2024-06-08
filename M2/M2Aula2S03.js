class Programador {

    #nome = '';
    #tempoExperiencia = 0;

    constructor(nome, tempoExperiencia){
        this.#nome = nome;
        this.#tempoExperiencia = tempoExperiencia;
    }

    get getNome(){
        return this.#nome;
    }

    set setNome(nome){
        this.#nome = nome;
    }

    get getTempoExperiencia(){
        return this.#nome;
    }

    set setTempoExperiencia(tempoExperiencia){
        this.#tempoExperiencia = tempoExperiencia;
    }


}

module.exports = Programador