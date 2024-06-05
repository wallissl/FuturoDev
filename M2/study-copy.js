// Aula 3 Semana 02 - 24/05/24 - https://drive.google.com/file/d/1-MSSIEYbXKnvWET22EbQbO2qH5B-84fG/view

// Funções de Alta Ordem - 00:33:43

function executarOperacao(a,b, operacao){
    return operacao(a,b)
}

function soma(x,y){
    return x+y
}

function multiplicar(x,y){
    return x * y
}

console.log(executarOperacao(10, 5, soma)); 
console.log(executarOperacao(25, 3, multiplicar));

// Outro exemplo

function criarSaudacao(saudacao){
    return function(nome){
        return `${saudacao}, ${nome}`
    }
}

// console.log(criarSaudacao('ola')) // Retorna no console anonynmous funcition por se tratar de uma função anonima.

const saudacaoOla = criarSaudacao("olá");
// Outra forma - const saudacaoOla = criarSaudacao("olá")("Wallis");
const saudacaoBomDia = criarSaudacao('Bom dia')

console.log(saudacaoOla('Wallis'));
console.log(saudacaoBomDia('Maria'));


// Clousures - 01:09:35

function contador() {
    let contagem = 0;
    return function(){
        contagem += 1;
        return contagem
    }
}

const incrementar = contador()

console.log(incrementar());
console.log(incrementar());

//01:30:00