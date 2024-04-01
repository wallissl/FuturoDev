import * as PropTypes from 'prop-types'
import "./style.css"

function CardTrilha({dadosTrilha}){
    return (
        <>
        <div className='card_container'>
            
            <h1> {dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade}</span>
            <img width={200} src={dadosTrilha.urlImagem} alt='imagem trilha' />

        </div>
        
        </>
    )
}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string,
        estado:PropTypes.string,
        duração: PropTypes.number,
        trajeto: PropTypes.number,
        dificuldade: PropTypes.string,
        tipo: PropTypes.string,
        nomeUsuario: PropTypes.string,
        urlImagem: PropTypes.string,
    })
}

// Aqui vai os prop-types

export default CardTrilha;