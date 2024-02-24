// S06_Ex10: Adicione mais estilos, melhore a experiência do usuário com animações simples, adicione validações com JavaScript, etc.

let nomeUsuairo = document.getElementById('nomeUsuario'); // Capturar elemento no HTML

nomeUsuairo.addEventListener('mouseenter', efeitoNome);
function efeitoNome(){
    nomeUsuairo.style.color='#6937fd';
    nomeUsuairo.style.fontSize="30px";
    nomeUsuairo.style.transition='1s';
} // Criar evento e função para inserir interação com o usuário.

nomeUsuairo.addEventListener('mouseleave', ()=>{
    nomeUsuairo.style.color='#000';
    nomeUsuairo.style.fontSize='24px';
    nomeUsuairo.style.transition='1s';
}) // Evento e função - Arrow Function.

/* Evento para alterar a cor dos botões pelo Js */
let linkCor = document.getElementById('linkCor');
linkCor.addEventListener('mouseenter', ()=>
    linkCor.style.background='#6937fd',
    linkCor.style.transition='0.5s'
)
linkCor.addEventListener('mouseleave', ()=>
    linkCor.style.background='#000',
    linkCor.style.transition='0.5s'
)

let colorGit = document.getElementById('colorGit');
colorGit.addEventListener('mouseenter', ()=>
    colorGit.style.background="#6937fd",
    colorGit.style.transition='0.5s'
)

colorGit.addEventListener('mouseleave', ()=>
    colorGit.style.background="#000",
    colorGit.style.transition='0.5s'
)

const descricaoUsuario = document.getElementById('descricaoUsuario');

function maquina(texto){
    const textoArmazenar = texto.innerHTML.split(''); // Separar os elementos com o método split.
    texto.innerHTML = ''; // Utilizado para ocultar o texto capturado no HTML
    textoArmazenar.forEach((letra,i) =>{        
        /* setTimeout( () =>{
            elemento.innerHTML += letra;
        },75*i) - Utilizando com Arrow function de forma completa*/ 

        setTimeout(() =>texto.innerHTML += letra, 75 * i); // Arrow Function resumida por ter apenas uma linha - SetTimeout serve para definir um tempo para execução do código, aqui está definido 75 milissegundos * i (que é o índice iniciado do 0 dentro do array).
    })
}

maquina(descricaoUsuario);