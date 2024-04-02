 function tempo(){
    setTimeout( () => window.alert("O tempo terminou"), 1000);
} // Executa uma ação após a contagem do tempo estipulado.

const tempoInterval = setInterval(() => {
    console.log('um segundo se passou')
},1000) // Executa uma ação em loop toda vez que passa o tempo estipulado.

clearInterval(tempoInterval) // Comando para limpar o intervalo

/* JSON.parse(json) - Utilizado para converter JSON para Objeto.

JSON.stringify(jsObject) - Utilizado para converter Objeto JavaScript para JSON. */
