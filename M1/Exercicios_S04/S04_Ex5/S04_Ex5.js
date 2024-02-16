// S04_Ex05: Utilize uma estrutura condicional (if,else) para verificar se um número é positivo, negativo ou zero. Exiba os valores no console.log().

let numero = 7;

if(numero >0){
    console.log(`O número armazenado é: ${numero} - Número positivo.`)
}else if(numero <0){
    console.log(`O número armazenado é: ${numero} - Número negativo.`)
}else if(numero===0){
    console.log(`O número armazenado é: ${numero} - Número zero.`)
}else{
    console.log(`Não foram encontrados valores números!`)
}