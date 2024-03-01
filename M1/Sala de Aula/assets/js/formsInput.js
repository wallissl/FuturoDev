console.log('Hello World')

// Atributo de evento botão de click do Formulário.
function clicou(){
    console.log('Você clicou!')
}

let click = document.getElementById('click');

 click.addEventListener('click', ()=>{
    console.log('Click')
})

// Com querySelector
function analisarEmail(){
    const email = document.querySelector("#input_email");
    console.log(email.value);
}

// Pegar vários elementos com querrySelector
function analisarInputs(){

    const elements = document.querySelectorAll('.custom_input');

    console.log('Nome:', elements[0].value);
    console.log('Email:', elements[1].value);
    console.log('Endereço', elements[2].value)
}

// Capturar informações de um formulário através de nome indicado no campo de input dele no html
function analisarInputs(event){
    event.preventDefault();
    const form = document.getElementById('meuForm');

    console.log(form['nome'].value);
    console.log(form['email'].value);
    console.log(form['endereco'].value);
}

// Capturar checkboxes marcados utilizando um array para armazenar as informações
function analisarInputsCheck(event){
    event.preventDefault();
    var linguagensFavoritas = [];
    const checkboxes = document.querySelectorAll('input[name="linguagens_fav"]:checked');

    checkboxes.forEach(function (checkbox) {
    linguagensFavoritas.push(checkbox.value)
})

// Mesmo comando, porém utilizando o for
/* for (let i = 0; i <checkboxes.length; i++){
    linguagensFavoritas.push(checkboxes[i].value)
} 
console.log('As linguagens selecionadas foram:')
console.log(linguagensFavoritas) */

}

let linguagens = []; // Variável Global para armazenar o conteúdo que será capturado pela função abaixo.
function novaSelecao(event){    
    linguagens.push(event.target.value);
    console.log('linguagens Selecionadas');
    console.log(linguagens)
}

// Laço de repetição
let numeroFor = 10;
let numeroTeste = [1,2,3,4,5]
for (let i=0; i<numeroTeste.length; i++){
    console.log(i)
}

// split - é um método utilizado para separarmos uma string e inserir os carateres em um array. Exemplo:

/* const horaInformada = "19:28"
const hora = horaInformada.split(':')[1]
console.log(hora) */

document.write("Olá, teste novamente.") // Escrever no arquivo HTML

let n10 = 1000;
console.log(n10.toFixed(2).replace('.',',')) // Utilizado para trocar a formatação dentro de valores númericos, exemplo . por ,.
console.log(n10.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})) // Utilizado para converter valores para Real


console.log('teste')

let faltas = 3;
notaFinal = 7;
totalAulas = 20;

let frequencia = ((faltas / totalAulas))
console.log(frequencia)