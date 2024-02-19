// S04_Ex09: Use um switch para exibir mensagens diferentes com base em uma condição.

let generoMusical = "Rock";

switch(generoMusical){
    case "Rock":
        console.log(`O estilo musical escolhido foi ${generoMusical}:\n\nO rock é um gênero musical que tem o som da guitarra elétrica como sua marca registrada. Surgiu nos Estados Unidos na década de 50 e teve seu auge nas décadas de 70 e 80. A guitarra elétrica é um dos símbolos do rock.`);
    break;
    case "Samba":
        console.log(`O estilo musical escolhido foi ${generoMusical}:\n\nSamba, também conhecido como samba urbano carioca ou simplesmente samba carioca, é um gênero musical brasileiro que se originou entre as comunidades afro-brasileiras urbanas do Rio de Janeiro no início do século XX.`);
    break;
    case "MPB":
        console.log(`O estilo musical escolhido foi ${generoMusical}:\n\nA MPB, sigla derivada da expressão Música Popular Brasileira, é um gênero musical surgido no Brasil em meados da década de 1960. A MPB surgiu a partir de 1966 na cidade do Rio de Janeiro com a segunda geração da bossa nova, mas com uma forte influência do folclore brasileiro que já vinha desde 1932`);
    break;
    case "Sertanejo":
        console.log(`O estilo musical escolhido foi ${generoMusical}:\n\nMúsica sertaneja é um gênero musical do Brasil produzido a partir da década de 1910 por compositores urbanos e rurais. As músicas podem ser chamadas genericamente de modas e emboladas e o som da viola é predominante`);
    break;
    case "Funk":
        console.log(`O estilo musical escolhido foi ${generoMusical}:\n\nO funk é um gênero musical que se originou em comunidades afro-americanas em meados da década de 1960, quando músicos afro-americanos criaram uma nova forma de música rítmica e dançante através da mistura de soul, jazz e rhythm and blues.`);
    break;
    default:
        console.log(`Insira Rock, Samba, MPB, Sertanejo ou Funk para ler sobre a sua origem.`)
}