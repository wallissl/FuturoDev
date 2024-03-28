import Card from "./componentes/Card.jsx"
import './App.css'
import CardUsuario from "./componentes/CardUsuario.jsx"


function App() {
  // bloco superir
const nome = 'Wallis Silva'
const email = 'email@emai.com'


const listaUsuarios = [
  {
    nome: 'Wallis',
    email: 'email@email.com',
    senha: 1234
  }, {
    nome: 'Ana',
    email: 'email@email.com',
    senha: 1234
  },
]


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



      
        
        {listaUsuarios.map((itemAtual) => (
          <div key={index}>
            <CardUsuario nome={itemAtual.nome} email={itemAtual.email} />
        </div>

        ))}
      
    

    </>    
  )
}

export default App
