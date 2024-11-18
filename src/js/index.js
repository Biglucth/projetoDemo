//pegar os elementos HTML
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//identificar o botão clicado
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

//desmarcar botão selecionado anterior
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");

//marcar botão clicado como selecionado
    botao.classList.add("selecionado");

//esconder imagem anterior
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");

//aparecer imagem correspondente
    imagens[indice].classList.add("ativa");

//esconder a informação anterior
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");

//mostrar informação correspondente
    informacoes[indice].classList.add("ativa");

    });
});