//MENU
const iconeLista = document.querySelector('.bi-list')
const listaLinks = document.querySelector('#lista_nav')

function ocultaLista(){
    listaLinks.classList.toggle('menu')
}

iconeLista.addEventListener('click', ocultaLista)


//BARRAS DO GRAFICO
const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);


//CONTATO
document.getElementById("btn_submit").addEventListener("click", function() {
    alert("Enviado com sucesso!");
});

//REGISTRO
function confirmarAcao() {
    var resposta = confirm("Você tem certeza?");
    if (resposta) {
        alert("Você clicou em 'Sim'.");
    } else {
        alert("Você clicou em 'Não'.");
    }
}