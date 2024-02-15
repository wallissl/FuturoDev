console.log('ola');

alert("Bem vindo ao comparador de números!")

let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"))

function maior(n1,n2){   

    if(!n1 || !n2){
        return alert("Digite dois números válidos")
    }else if(n1>n2){
         alert(`${n1} é maior que ${n2}`)
    }else if(n2>n1){
        alert (`${n2} é maior que ${n1}`)
    }else{
        alert("Os números digitados são iguais!")
    }
}

maior(n1,n2);