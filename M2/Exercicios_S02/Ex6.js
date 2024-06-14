function transformarArray(array, transformacao){
    const novoArray = array.map((item) => {
        return transformacao(item) 
    })
    return novoArray
}

function dobrar(numero){
    return numero *2
}

let numero = [1,2,3,4,5]

console.log(transformarArray(numero, dobrar));