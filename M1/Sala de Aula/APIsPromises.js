// APIs

// Callback é uma função que é passada como parâmetro para uma outra função.

/* localStorage.setItem('Turma','Futuro Dev');

const promessa = new Promise((resolve,reject) => {
    const turma = localStorage.getItem('Turma')

    if(turma == 'Futuro Dev'){
        resolve('Vocês fazem parte dessa turma!')
    }else{
        reject('Vocês não são desta turma!')
    }
}) */ // Promises são utilizadas para retornar um valor verdadeiro ou falso dependendo de uma análise que ainda irá acontecer.

/* promessa.then((mensagem) => console.log(mensagem)).catch((erro) => console.log(erro)) */ // Podemos utilizar o then e o catch para devolver mensagem se a promessa foi cumprida ou erro caso não tenha sido.

// Trabalhando com fetch - O Fetch API é uma interface JavaScript moderna para fazer requisições HTTP/HTTPS de forma assíncrona.

/* fetch("https://api.github.com/users/Bruno-Costa-fig")  */// Realizando a chamada de uma api com o fetch

/* .then((response) => response.json())
.then((resultado) => console.log(resultado)) */ //
//Exemplo de utilização com html
/* const nomeusuario = document.getElementById('nome_usuario')
nomeusuario.innerText = resultado.name */

/* .catch((erro) => console.log(erro)) */

// Pegando o resultado convertendo para um arquivo json e depois imprimindo o resultado.


// EXEMPLO USANDO ASYNC / AWAIT

let dadosUsuario = {}
// async e await precisam estar dentro de uma função e são utilizados para usar o recurso de travar o código enquanto aguarda uma requisição de um servidor por exemplo.
async function lerDados(){
    

    try {
        let response = await fetch("https://api.github.com/users/Bruno-Costa-fig")
        dadosUsuario = await response.json()
    } catch (erro) {
        console.log(erro)

    } finally{

    }
}

lerDados()