// S04_Ex10: Crie uma função que solicite para o usuário através do prompt de comando sua idade, e a partir da idade fornecida, exiba uma mensagem informando se ele é maior de idade ou não. Considere 18 anos como maior idade.

function verificarIdade(){
    usuario = prompt("Informe a sua idade");
    maiorOuMenorDeIdade(usuario);
}

function maiorOuMenorDeIdade(idade){
    if(idade>=18){
        alert(`O usuário tem ${idade}, é maior de idade.`);
    }else{
        alert(`O usuário tem ${idade}, é menor de idade.`)
    }
}

verificarIdade();

