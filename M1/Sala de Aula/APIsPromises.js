// APIs

// Callback é uma função que é passada como parâmetro para uma outra função.

localStorage.setItem('Turma','Futuro Dev');

const promessa = new Promise((resolve,reject) => {
    const turma = localStorage.getItem('Turma')

    if(turma == 'Futuro Dev'){
        resolve('Vocês fazem parte dessa turma!')
    }else{
        reject('Vocês não são desta turma!')
    }
}) // Promises são utilizadas para retornar um valor verdadeiro ou falso dependendo de uma análise que ainda irá acontecer.

promessa.then((mensagem) => console.log(mensagem)).catch((erro) => console.log(erro)) // Podemos utilizar o then e o catch para devolver mensagem se a promessa foi cumprida ou erro caso não tenha sido.

// 02:02