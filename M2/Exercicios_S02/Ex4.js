// Crie uma função contador que retorna uma outra função que incrementa um valor interno e retorna o valor atualizado a cada chamada.

function contador() {
    let contagem = 0;
    return function(){
        contagem +=1;
        return contagem
        }    
    }
    
    let contador1 = contador();
    console.log(contador1());
    console.log(contador1());
    console.log(contador1());
    
    let contador2 = contador();
    console.log(contador2());
    console.log(contador2());