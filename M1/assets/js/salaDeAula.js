console.log('Hello World')

function clicou(){
    console.log('Você clicou!')
} // Atributo de evento botão de click do Formulário.

let click = document.getElementById('click');

 click.addEventListener('click', ()=>{
    console.log('Click')
})

function analisarEmail(){
    const email = document.querySelector("#input_email");
    console.log(email.value);
} // Com querySelector

 function analisarInputs(){

    const elements = document.querySelectorAll('.custom_input');

    console.log('Nome:', elements[0].value);
    console.log('Email:', elements[1].value);
    console.log('Endereço', elements[2].value)
} /// Pegar vários elementos com querrySelector

 function analisarInputs(event){
    event.preventDefault();
    const form = document.getElementById('meuForm');

    console.log(form['nome'].value);
    console.log(form['email'].value);
    console.log(form['endereco'].value);
}  // Capturar informações de um formulário através de nome indicado no campo de input dele no html

// Capturar checkboxes marcados utilizando um array para armazenar as informações
function analisarInputsCheck(event){
    event.preventDefault();
  

var linguagensFavoritas = [];
const checkboxes = document.querySelectorAll('input[name="linguagens_fav"]:checked');

checkboxes.forEach(function (checkbox) {
    linguagensFavoritas.push(checkbox.value)
})

/* for (let i = 0; i <checkboxes.length; i++){
    linguagensFavoritas.push(checkboxes[i].value)
} */ // Mesmo comando, porém utilizando o for

/* console.log('As linguagens selecionadas foram:')
console.log(linguagensFavoritas) */

}

let linguagens = []; // Variável Global para armazenar o conteúdo que será capturado pela função abaixo.
function novaSelecao(event){
    
    
    linguagens.push(event.target.value);
    console.log('linguagens Selecionadas');
    console.log(linguagens)
}