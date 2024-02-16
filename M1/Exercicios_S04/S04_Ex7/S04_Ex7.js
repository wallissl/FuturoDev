// S04_Ex07: Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.


// Primeira forma de resolver a questão capturando o horário no sistema.
// Primeiro vamos instânciar o objeto Date para capturar o horário do sistema e armazenar em uma variável
const dataAtual = new Date();

function saudacao(){
    
    console.log("MODELO 1 - CAPTURANDO À HORA DO SISTEMA:");
    if(dataAtual.getHours() > 4 && dataAtual.getHours <12){
        console.log(`BOM DIA\nHorário atual: ${dataAtual.getHours()}:${dataAtual.getMinutes()}`); // Podemos utilizar o getHours ou getMinutes para capturar o horário e os minutos atuais do sistema.
    }else if(dataAtual.getHours() >= 12 && dataAtual.getHours() < 18){
        console.log(`BOA TARDE\nHorário atual: ${dataAtual.getHours()}:${dataAtual.getMinutes()}`);
    }else{
        console.log(`BOA NOITE\NHorário atual: ${dataAtual.getHours()}:${dataAtual.getMinutes()}`)
    }
}

saudacao();

// Segunda forma utilizando um horário qualquer armazenado em uma variável;

let hora = 19;
let minutos = 30;

function saudacaoSimples(){

    console.log("MODELO 2 - INSERINDO UM HORÁRIO QUALQUER EM UMA VARIÁVEL:");
    
    if(hora >=4 && hora <12){
        console.log(`BOM DIA\nHorário atual: ${hora}:${minutos}`)
    }else if(hora >=12 && hora <18){
        console.log(`BOA TARDE\nHorário atual: ${hora}:${minutos}`)
    }else{
        console.log(`BOA NOITE\nHorário atual: ${hora}:${minutos}`)
    }
}

saudacaoSimples();
