// S04_Ex08: Implemente uma função que determine se um número é par ou ímpar.

let numero = 28;

function imparOuPar(){

    if(numero %2 == 0 ){
        console.log(`O número armazenado é: ${numero} - Par`)
    }else{
        console.log(`O número armazenado é: ${numero} - Ímpar`)
    }
}

imparOuPar();