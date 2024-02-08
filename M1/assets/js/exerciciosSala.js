console.log('Hello World');

/* let pessoa = 17;

if(pessoa >= 18){
    console.log("Pode votar")
}else{
    console.log("Não pode votar ainda")
} */


/* let logado = true;

if(logado == true){
    console.log("Bem vindo")
}else{
    console.log("É necessário logar no sistema")
} */




/* let usuario = "wallis@senai.org.br";
let usuarioCorreto ="wallis@senai.org.br"
let senha = 123;
let senhaCorreta = 123;

if(usuario == usuarioCorreto && senha == senhaCorreta){
    console.log("Bem vindo");
}else{
    console.log("Usuário ou senha incorreto")
}//// */

////////////

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

/* let proshampoovalor = 20;
let desc = 0.10
let pertodevencer = true;
if (pertodevencer==true){
    desc = proshampoovalor*desc
    prom = proshampoovalor - desc 
    console.log(prom)
}


console.log(('b' + 'a' + + 'a' + 'a')) // Erro */

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

console.log('oi' + data) */


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

/* let inicioVerao = new Date( 22, 11)
let finalVerao = new Date( 20, 2)
let data = Date( 23, 10)
if(data > inicioVerao && data < finalVerao ){
    console.log("É verão")
}else{
    console.log("Não é verão")
}
 */

let mes = 11;
let ano = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

 for(var i=0; i<12; i++){
    if(mes == (i+1)){
        console.log(ano[i])
    }
} 

 switch(mes){    
    case (mes == i):
        console.log(ano[i]);
    break;  
}   

/* 

switch(mes){
    case 1:
        
        console.log("Janeiro");
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
} */



