import Card from "./componentes/Card.jsx"
import './App.css'
import CardUsuario from "./componentes/CardUsuario.jsx"


function App() {
  // bloco superir
const nome = 'Wallis Silva'
const email = 'email@emai.com'

const listaUsuarios = [{
  nome: 'Wallis',
  idade: '32'
}, {
  nome: 'Ana',
  idade: 25
}]


  function mensagemBoasVindas(){
    alert("Sejam bem vindas ao React")
  }
  return (
    // somente aqui aceita HTML

    <>
    <div>
      <h1>Nome do professor: {nome}</h1>
      <h2>Email: {email}</h2>
    </div>

    <Card titulo="Curso React" subtitulo="Aprendendo a usar props" />
    <Card titulo="Curso DOM" subtitulo="Aprendendo a usar props" />

    <button onClick={mensagemBoasVindas}>Exibir mensagem</button> {/* Exemplo de eventos para chamar uma função */}

    <button onClick={() => alert("Segundo Exemplo")}>Exibir mensagem2</button> {/* Exemplo de eventos para chamar uma arrowFunction */}

    <div key={index}> {/* Key é utilizado para evitar o loop infinito*/}
      
      {listaUsuarios.map((itemAtual) => (
      <CardUsuario nome={itemAtual.nome} email={itemAtual.email} />))}
    </div>
    

    </>    
  )
}

export default App
