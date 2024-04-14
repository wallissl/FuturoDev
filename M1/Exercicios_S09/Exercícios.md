Semana de Mini-Projeto em Grupo

[M1S09] Roteiro do Mini Projeto
Essa semana os exercícios irão formar um mini projeto, vocês poderão formar squads de 4 ou 5 pessoas e ter uma experiência de mercado de trabalho com o projeto.
A maneira mais simples de unir os trabalhos de cada um dos desenvolvedores é fazer o uso do GitFlow, que será explicado na primeira aula.
Na primeira aula posso separar uns minutos do fim para que possam se alinhar sobre as responsabilidades de cada um, nesse momento a boa comunicação é essencial para o sucesso da aplicação.
Assim como em um time de desenvolvimento de software a entrega do projeto é responsabilidade de todos, se você terminou de desenvolver comunique ao time e se prontifique a ajudar se for necessário.

Sobre o projeto: Produtividade com qualidade
O projeto será um pomodoro voltado para pessoas que trabalham sentadas, com o fim do período de tempo do timer você irá sortear um exercício de alongamento, proveniente de uma API gratuita, o intuito é que o usuário realize o alongamento sugerido nos 5 minutos de descanso do pomodoro.
O passo a passo dos exercícios servem para te guiar, mas chegando no mesmo resultado final você não precisa seguir a risca a forma como implementação é sugerida. Use sua criatividade para o layout;
Caso você queira desafiar seus conhecimentos e ir além das features básica, implemente uma experiência gameficada neste projeto. Isso é um bônus, não é um dos requisitos do mini projeto.


[M1S09] Ex 1 - Setup da aplicação
Essa tarefa precisa ser executada antes das demais;
Crie um repositório no GitHub;
Crie um   para no final do projeto falar sobre as funcionalidades que você desenvolveu e dar uma visão rápida do produto;
Leia cada um dos exercícios para ter em mente como a aplicação vai funcionar;
Utilize a organização de pastas que preferir em sua aplicação, mas pense neste tópico, vai te ajudar durante o desenvolvimento;
Crie uma página inicial vazia para os outros desenvolvedores poderem codar suas funcionalidades sem interrupções;
Com todos os itens anteriores completos, não esqueça do commit inicial;

[M1S09] Ex 2 - Crie o timer
Adicionar na tela um botão para iniciar o timer;
Adicionar na tela uma forma de visualizar que o timer está rodando;
Se o timer estiver rodando deve existir um botão para interromper o timer;

[M1S09] Ex 3 - Consuma a API
Crie uma conta no API Ninjas;
Navegue até o seu perfil e copie a API Key fornecida;
Use o fetch para buscar por exercícios do type stretching;

[M1S09] Ex 4 - Crie o componente que mostrará o alongamento
Assim que o timer for concluído um alongamento deve ser exibido para o usuário;
Esse alongamento deve vir da API que foi consultada no exercício 3;
Você pode iniciar esse exercício pelo design do componente caso seu colega de equipe ainda não tenha realizado a consulta na API;
Deve haver um botão para que o usuário clique e o exercício seja concluído;
Enquanto o timer estiver ativo nenhum alongamento deve ser exibido;

[M1S09] Ex 5 - Crie uma lógica de alongamentos
Salve a página em que o usuário está e o index do alongamento realizado no array;
Você pode salvar esses dados no localStorage para não haver repetição nas próximas vezes em que o usuário acessar sua página;
Assim que o alongamento for marcado como concluído realize um count++ na variável do alongamento atual, quando chegar em 9 o count++ deve ser na página consultada na API;
Garantir que os alongamentos sugeridas não estão sendo repetidos;


Projeto em grupo: 
Link: https://github.com/lucasplcorrea/pomodoro