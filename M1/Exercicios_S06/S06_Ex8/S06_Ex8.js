// S06_Ex8: No arquivo JavaScript, selecione elementos HTML (por exemplo, o elemento que contém o nome do usuário) e atualize seu conteúdo dinamicamente usando o JavaScript.

let nomeUsuairo = document.getElementById('nomeUsuario'); // Capturar elemento no HTML

nomeUsuairo.addEventListener('mouseenter', efeitoNome);
function efeitoNome(){
    nomeUsuairo.style.color='#6937fd';
    nomeUsuairo.style.fontSize="30px";
} // Criar evento e função para inserir interação com o usuário.

nomeUsuairo.addEventListener('mouseleave', ()=>{
    nomeUsuairo.style.color='#000';
    nomeUsuairo.style.fontSize='24px';
}) // Evento e função - Arrow Function.

/* Evento para alterar a cor dos botões pelo Js */
let linkCor = document.getElementById('linkCor');
linkCor.addEventListener('mouseenter', ()=>
    linkCor.style.background='#6937fd',
)
linkCor.addEventListener('mouseleave', ()=>
    linkCor.style.background='#000',
)

let colorGit = document.getElementById('colorGit');
colorGit.addEventListener('mouseenter', ()=>
    colorGit.style.background="#6937fd",
)

colorGit.addEventListener('mouseleave', ()=>
    colorGit.style.background="#000",
)