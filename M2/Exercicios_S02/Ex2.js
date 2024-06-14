function filtrarAdultos(pessoas) {

    let maiorDeIdade = pessoas.filter((p) => p.idade >= 18).map((p) => p.nome);
        return maiorDeIdade;
    }
    
    let pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 16 },
    { nome: 'David', idade: 19 }
    ];
    
    console.log(filtrarAdultos(pessoas));