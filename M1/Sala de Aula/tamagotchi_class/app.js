console.log('app.js');

import { Tamagotchi } from "./tamagotchi.js" // Importar dados da Classe criada em tamagotchi.js

const bicho1 = new Tamagotchi ('LAB365') // Criar uma nova variável a partir da Classe Tamagotchi

console.log(bicho1) // Visualizar propriedades e funções do bicho1 criado a partir da Classe Tamagotchi 


function brincar(){
    const msg = bicho1.brincar() // Pegar o método presente em brincar e armazenar o seu retorno em uma variável.
    document.getElementById('mensagem').innerText = msg
}

function comer(){
    const msg = bicho1.comer()
    document.getElementById('mensagem').innerText = msg
}

function dormir(){
    const msg = bicho1.dormir()
    document.getElementById('mensagem').innerText = msg
}

function beber(){
    const msg = bicho1.beber()
    document.getElementById('mensagem').innerText = msg
}


function alterarNome(){
    const nome = document.getElementById('nome').value
    bicho1.alterarNome(nome);
    const msg = bicho1.alterarNome(nome);
    document.getElementById('mensagem').innerText = (msg+nome)
}

function status(){
    const msg = bicho1.status();
    document.getElementById('mensagem').innerText = msg
}

window.alterarNome = alterarNome
window.brincar = brincar
window.comer = comer
window.dormir = dormir
window.beber = beber
window.estatos = status