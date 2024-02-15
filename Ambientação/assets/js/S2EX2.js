 // Função criada no JavaScript */
 function validar(){
    console.log('Clicou');
} 

// Forma de chamar a função e atribuir o metodo onclick
/* clicou.addEventListener('click', validar);

function validar(){
    let operacao = document.getElementById('operacao');
    let operacaoSelecionada = operacao.options[operacao.selectedIndex].value; //Pegar o valor inserido no select
  
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    switch(operacaoSelecionada){
        case 'soma':
            let soma = parseInt(n1) + parseInt(n2);
            document.getElementById('resposta').innerHTML = `O resultado da soma é: ${soma}`;
            break;
        case 'sub':
            let sub = parseInt(n1) - parseInt(n2);
            document.getElementById('resposta').innerHTML = `O resultado da subtração é: ${sub}`;
            break;
        case 'mult':
            let mult = parseInt(n1) * parseInt(n2);
            document.getElementById('resposta').innerHTML = `O resultado da multiplicação é: ${mult}`;
            break;
        case 'div':
            let div = parseInt(n1) / parseInt(n2);
            document.getElementById('resposta').innerHTML = `O resultado da divisão é: ${div}`;
            break;
        default:
            alert("Informe um valor valido");
    }
} */