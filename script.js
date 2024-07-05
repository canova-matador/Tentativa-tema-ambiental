const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Como podemos reduzir a poluição atmosférica em nossas cidades?",
        alternativas: ["A Incentivar o uso de transportes públicos e veículos como a bicicleta", "Promover a adoção de energias renováveis e eficiência energético."],
    },
    {
        enunciado: "Quais ações podemos tomar para proteger a biodiversidade local?",
        alternativas: ["A Criar áreas de preservação e fazer campanhas para as pessoas terem conhecimento.", "Palestras educacionais nas escolas."],
    },
    {
        enunciado: "Como podemos reduzir o negacionismo envolvendo temas ambientais atuais?",
        alternativas: ["Buscando apresentar fatos convincentes e verdadeiros", "Acreditando em qualquer coisa, indo assim pelo senso comum."],
    },
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual < perguntas.length) {
        const perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas(perguntaAtual.alternativas);
    } else {
        caixaPerguntas.textContent = '';
        caixaAlternativas.innerHTML = '';
        textoResultado.textContent = `Você respondeu todas as perguntas! Sua história: ${historiaFinal}`;
    }
}

function mostraAlternativas(alternativas) {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener('click', () => {
            respostaSelecionada(alternativa);
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada + ' ';
    atual++;
    mostraPergunta();
}

mostraPergunta();
