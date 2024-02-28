// S06_Ex7: Crie um arquivo JavaScript chamado script.js e adicione uma função simples que escreva uma mensagem de boas-vindas no alert.

let nome = prompt("Olá, digite o seu nome:");


function boasVindas(nomeUsuario){

    alert(`Bem-vindo(a): ${nomeUsuario}`)
}

boasVindas(nome);