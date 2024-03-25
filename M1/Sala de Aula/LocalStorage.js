// LOCALSTORAGE
 localStorage.setItem('Name','Wallis') // Inserir um item no LocalStorage

 let buscar = localStorage.getItem('Name') // Pegar um item que foi armazenado no localStorage


 console.log(buscar)

 let dados = {
    Nome:'wallis',
    Idade:'32',
    Profissao: 'Designer'
 }

 localStorage.setItem("Dados", JSON.stringify(dados)); // Setar um objeto no localStorage convertendo ele para uma variável

let dadosObjeto = JSON.parse(localStorage.getItem('Dados')) // Converter de JSON para Objeto

 console.log(dadosObjeto)

 // Criando uma lista no LocalStorage

/*  const listaUsuarios = []

 listaUsuarios.push(dados)

 localStorage.setItem('lista-usuarios', JSON.stringify(listaUsuarios)) // Inserir a lista dentro do localStorage

 let listaNoLocalStorage = JSON.parse(localStorage.getItem('lista-usuarios')) // Pegar itens da lista e transformar em obj

 let dados2 = {
    Nome:'Ana',
    Idade:'25',
    Profissao: 'Embaladora'
 } // Novo objeto

 listaNoLocalStorage.push(dados2);
 localStorage.setItem('lista-usuarios', JSON.stringify(listaNoLocalStorage)) // Inseir novamente na lista

///// - Outro exemplo

  let listaNoLocalStorage3 = JSON.parse(localStorage.getItem('lista-usuarios'))

  let dados3 = {
    Nome:'Kami',
    Idade:'3',
    Profissao: 'Gato'
 }

 listaNoLocalStorage3.push(dados3);
 localStorage.setItem('lista-usuarios', JSON.stringify(listaNoLocalStorage3)) */



 ////// Mais um exemplo

let listaUsuarios = [];
listaUsuarios.push(dados);

localStorage.setItem('lista-usuarios', JSON.stringify(listaUsuarios));

listaUsuarios = JSON.parse(localStorage.getItem('lista-usuarios'))

let dados2 = {
    Nome:'Kami',
    Idade:'3',
    Profissao: 'Gato'
 }

listaUsuarios.push(dados2);
 localStorage.setItem('lista-usuarios',JSON.stringify(listaUsuarios))