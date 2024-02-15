console.log('Hello World');

// Pode votar se tiver mais de 18 anos.
/* let pessoa = 17;

if(pessoa >= 18){
    console.log("Pode votar")
}else{
    console.log("Não pode votar ainda")
} */


// Pode acessar se estiver logado
/* let logado = true;

if(logado == true){
    console.log("Bem vindo")
}else{
    console.log("É necessário logar no sistema")
} */


// Pode logar se credenciais estiverem corretas
/* let usuario = "wallis@senai.org.br";
let usuarioCorreto ="wallis@senai.org.br"
let senha = 123;
let senhaCorreta = 123;

if(usuario == usuarioCorreto && senha == senhaCorreta){
    console.log("Bem vindo");
}else{
    console.log("Usuário ou senha incorreto")
} */


// Desconto de 10% em cima de compra que está quase vencendo
/* let produto = true;
let valor = 200;

let desconto = (valor * 0.10 );
let valorComDesconto = valor - desconto;

 if(produto == true){
    console.log(`Valor com desconto é igual R$ ${valorComDesconto}`)
}else{
    console.log(`Pagar valor normal de R$ ${valor}`)
}
 */


// Error Banana
/* console.log(('b' + 'a' + + 'a' + 'a'))  */


// Dias da semana com Switch
/* let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
let f = 6
let g = 7

switch(f){
    case 1:
        console.log("Domingo");
    break;
    case 2:
        console.log("Segunda");
    break;

    case 3:
        console.log("Terça");
    break;
    case 4:
        console.log("Quarta");
    break;

    case 5:
        console.log("Quinta");
    break;
    case 6:
        console.log("Sexta");
    break;
    case 7:
        console.log("Sábado");
    break;
    default:
        console.log("Número não corresponde a um dia da semana")
}
 */

// Outra forma de fazer com Date
/* let data = new Date().getDay();

switch (data) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("segunda");
    break;
  case 2:
    console.log("terça-feira");
    break;
  case 3:
    console.log("quarta-feira");
    break;
  case 4:
    console.log("quinta-feira");
    break;
  case 5:
    console.log("sexta-feira");
    break;
  case 6:
    console.log("sábado");
}
console.log(data) */


// Switch case estação do ano
/* let mesAno = 6;

switch(mesAno){
    case 1:
        case 2:
            case 3:
        console.log("Verão");
    break;
    case 4:
        case 5:
            case 6:
        console.log("Outono");
    break;
    case 7:
        case 8:
            case 9:
        console.log("Inverno");
    break;
    case 10:
        case 11:
            case 12:
        console.log("Primavera");
    break;
    default:
        console.log("O número não corresponde a um mês do ano")
}
 */


// Descobrir qual é o mês correspondente ao número informado com switch
/* let mesAno= 1;

switch(mesAno){
    case 1:
        console.log("Janeiro");
    break;
    case 2:
        console.log("Fevereiro");
    break;
    case 3:
        console.log("Março");
    break;
    case 4:
        console.log("Abril");
    break;
    case 5:
        console.log("Maio");
    case 6:
        console.log("Junho");
    break;
    case 7:
        console.log("Julho");
    break;
    case 8:
        console.log("Agosto");
    case 9:
        console.log("Setembro");
    case 10:
        console.log("outubro");
    break;
    case 11:
        console.log("Novembro");
    break;
    case 12:
        console.log("Dezembro");
    break;
    default:
        console.log("Informe um número correspondente a um mês do ano")
} */


// Forma de realizar utilizando um laço de repetição + switch + if
/* let mes = 9;
let ano = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

if(mes > 0 || mes < 15){
    for(var i=0; i<13; i++){

        switch(i){
            case (mes):
                console.log(ano[i-1]);
            break;
        }
    }
}
if(mes <1 || mes > 12){
    console.log('Informe um número correspondente a um mês do ano!')
} */


// Forma de realizar apenas com laço for
/* let mes = 5;
let ano = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

for(var i=0; i<ano.length; i++){
    if(mes == (i+1)){
        console.log(ano[i])
        break;
    }
    console.log('executando if');
} */

// Exercícios semana 04 - 12/02/2024



/* Realizar um código para que seja perguntado ao usuário, via prompt, o nome ou código de um alimento. Após o código informado, identificar o preço deste alimento via switch e mostrá-lo ao usuário. Exemplo: morango como input e a saída mostrar R$ 5,99.

A execução do algoritmo deve ser contínua e o número 0 ou ‘sair’ é a flag para parar a execução. */

var escolhaUsuario = 0;
let frutas = ['maça', 'banana', 'laranja'];

do{
    escolhaUsuario = prompt('Digite o nome da fruta ou o código para consultar o valor ou digite 0 para sair');
    switch(escolhaUsuario){
        case '1':
            alert('O valor da maça é: R$ 8,00 kg');
        break;

        case 'maça':
            alert('O valor da maça é: R$ 8,00 kg');
        break;

        case '2':
            alert('O valor da banana é: R$ 5,00 kg');
        break;

        case 'banana':
            alert('O valor da banana é: R$ 5,00 kg');
        break;

        case '3':
            alert('O valor da laranja é: R$ 3,00 kg');
        break;

        case 'laranja':
            alert('O valor da laranja é: R$ 3,00 kg');
        break;
        default:
            if(escolhaUsuario != 0){
                alert('Código ou fruta inválido');
            }
    }

}while(escolhaUsuario != 0)