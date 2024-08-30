const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acha que a reciclagem é mais eficaz do que o compostagem para reduzir resíduos?",
        alternativas: [
            {
                texto: "Sim, a compostagem é mais eficaz.",
                afirmacao: " meio ambiente enfrenta desafios urgentes, como a eficácia da reciclagem versus a compostagem na redução de resíduos. Proteger florestas tropicais e oceanos é vital para a biodiversidade, mas há um equilíbrio delicado entre essas prioridades. Embora as energias renováveis ofereçam esperança para substituir combustíveis fósseis, a transição completa ainda é um desafio. Em áreas urbanas, a gestão de resíduos e a conservação da água são cruciais para a sustentabilidade. Encontrar soluções integradas é essencial para garantir um futuro ambientalmente saudável."
            },
            {
                texto: "Não, a compostagem é mais eficaz.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é a solução mais importante para combater as mudanças climáticas? ",
        alternativas: [
            {
                texto: "Reduzir as emissões de gases de efeito estufa.",
                afirmacao: ""
            },
            {
                texto: "Adotar energias renováveis.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "É mais importante proteger as florestas tropicais ou os oceanos para preservar a biodiversidade?",
        alternativas: [
            {
                texto: "Proteger as florestas tropicais.",
                afirmacao: ""
            },
            {
                texto: "Proteger os oceanos.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você acredita que as energias renováveis são suficientes para substituir totalmente os combustíveis fósseis?",
        alternativas: [
            {
                texto: "Sim, as energias renováveis podem substituir totalmente.",
                afirmacao: ""
            },
            {
                texto: "Não, os combustíveis fósseis ainda são necessários.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é o maior desafio para a sustentabilidade urbana?",
        alternativas: [
            {
                texto: "Gestão de resíduos.",
                afirmacao: ""
            },
            {
                texto: "Conservação de água.",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
