function compor(f,g){

    return function(x){
      
        return f(g(x))

    }
}

function somar(x){
    return x + 1
}

function multiplicar(x){
    return x * 2
}

let funcaoComposta = compor(somar, multiplicar);

console.log(funcaoComposta(5))
