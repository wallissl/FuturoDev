// Ex1 - Selecionando e alterando a cor de fundo de um elemento pelo ID.
let elemId = document.getElementById('elemId');

elemId.style.backgroundColor = 'purple';

let elemClass = document.getElementsByClassName('elemClass');

// Ex2 - Alterando todos os elementos de uma página html por sua classe
elemClass[0].innerHTML = 'alerando o texto 1';
elemClass[1].innerHTML = 'alerando o texto 2';
elemClass[2].innerHTML = 'alerando o texto 3';

// Ex3 - Criando e adicionando elementos
let elemAdd = document.createElement('div');
let texto = document.createTextNode("Texto inserido pelo elemento Section criado");
elemAdd.appendChild(texto);

console.log(elemAdd);

let section = document.querySelector('section');
section.appendChild(elemAdd)

// Ex3 - Remoção de elemento

let elemRemove = document.createElement('div');
elemRemove.appendChild(document.createTextNode('Texto que será removido')) // Inserindo o texto de forma direta pelo elemRemove
section.appendChild(elemRemove)

/* section.remove(); // Remover o elemento pai */

section.removeChild(elemRemove); // Remoção do elemento filho presente no section.
