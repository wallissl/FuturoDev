// S04_Ex07: Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.


// Primeira forma de resolver a questão capturando o horário no sistema.
// Primeiro vamos instânciar o objeto Date para capturar o horário do sistema e armazenar em uma variável
const dataAtual = new Date();
// console.log(dataAtual)
function saudacao(){
    
    console.log("MODELO 1 - CAPTURANDO À HORA DO SISTEMA:");
    if(dataAtual.getHours() > 4 && dataAtual.getHours <12){
        console.log(`BOM DIA\nHorário atual: ${normalizarHoras(dataAtual.getHours())}:${normalizarMinutos(dataAtual.getMinutes())}`); // Podemos utilizar o getHours ou getMinutes para capturar o horário e os minutos atuais do sistema.
    }else if(dataAtual.getHours() >= 12 || dataAtual.getHours() < 18){
        console.log(`BOA TARDE\nHorário atual: ${dataAtual.getHours()}:${normalizarMinutos(dataAtual.getMinutes())}`);
    }else{
        console.log(`BOA NOITE\nHorário atual: ${normalizarHoras(dataAtual.getHours())}:${normalizarMinutos(dataAtual.getMinutes())}`)
    }
}

function normalizarHoras(horas){

    if(horas<10){
        return `0${horas}`
    }
    else{
        return horas;
    }
} // Função utilizada para inserir um 0 antes das horas do relógio caso este seja antes das 10h.

function normalizarMinutos(minutos){
    
    if (minutos <10){
        return `0${minutos}`
    }else{
        return minutos;
    }
} // Função utilizada para inserir um 0 antes dos minutos do relógio caso este seja antes dos 10m.

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
