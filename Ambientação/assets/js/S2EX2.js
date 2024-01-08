// EXP
//let clicou = document.getElementById("teste");


/* clicou.addEventListener('click', validar);


 function validar(){
    console.log('Clicou');
}  */

function validar(){

    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;
    let soma = parseInt(n1) + parseInt(n2);
    
    console.log(soma)

    document.getElementById('resposta').innerHTML = `O resultado da soma é ${soma}`;
    
}
