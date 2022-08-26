let minhaImagem = document.querySelector('img'); // Obtendo elementos (nesse caso, img).

minhaImagem.onclick = function () { // Observando eventos de clique para realizar uma determinada ação na página ao clique ser detectado
    let meuSrc = minhaImagem.getAttribute('src'); // Obtendo atributo do elemento.
    if (meuSrc === 'imagens/gatinho.jpg') {
        minhaImagem.setAttribute('src', 'imagens/gatinho2.jpeg');
    } else {
        minhaImagem.setAttribute('src', 'imagens/gatinho.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if (!meuNome || meuNome === null) {
        defineNomeUsuario();
    } else {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.innerHTML = 'Gatinho(a) ' + meuNome;
    }
}

meuBotao.onclick = function () {
    defineNomeUsuario();
}