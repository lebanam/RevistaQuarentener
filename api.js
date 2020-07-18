const API_KEY = "2f9f9de63a1144b39c0315efda406f10";

function exibirNoticias() {
    let divTela = document.getElementById("tela");
    let texto = "";

    // Montar texto HTML das noticias

    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);

        texto =
            texto +
            `
            <div class="box-noticia">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo">${noticia.title}</span><br>
                <span class="creditos">${data.toLocaleDateString()} - 
                    ${noticia.source.name} - 
                    ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content} <a href="${
                noticia.url
            }" target="_blank">Leia mais ...</a>
                </span>
            </div>            
        `;
    }

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto; //texto que está dentro do
}

function executarPesquisa(query) {
    if (!query || !query.length) {
        query = document.getElementById("txtPesquisa").value;
    }

    document.getElementById("txtPesquisa").value = query;

    let xhr = new XMLHttpRequest(); /*solicita para a api o que digitei no campo*/
    xhr.onload = exibirNoticias; /*quando as informações chegar exibe as noticias*/
    xhr.open(
        "GET",
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );
    xhr.send();
}

document
.getElementById("btnPesquisa")
.addEventListener("click", () => executarPesquisa());

