import CardTrilha from "../components/CardTrilha"
import './App.css'

function App() {
  
  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duração: 120,
      trajeto: 4,
      dificuldade: "iniciante",
      tipo: "caminhada / trekking",
      nomeUsuario: "Wallis Silva",
      urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  return (
    <>
    {
      listaTrilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index} />
      ))
    }

    
      
    </>
  )
}

export default App
