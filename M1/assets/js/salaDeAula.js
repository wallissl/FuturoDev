console.log('Hello World')

function clicou(){
    console.log('Você clicou!')
} // Atributo de evento botão de click do Formulário.

let click = document.getElementById('click');
click.addEventListener('click', ()=>{
    console.log('Click')
})