const menu = document.getElementById("main-menu");

// Mostra a barra de navegação ao rolar a tela
window.onscroll = function() {
    showNavBar()
};

// Adiciona scroll suave assim que a página carrega
window.onload = function () {
    setLinkAnimation()
};

function setLinkAnimation() {
    // Seleciona todos os links da página
    links = document.querySelectorAll('a[href^="#"]');

    // Percorre os links
    links.forEach(link => {
        link.addEventListener('click', e => {
            // Retira o comporamento padrão
            e.preventDefault();
            // Armazena a referência do link
            const target = document.querySelector(link.getAttribute('href'));
            // Armazena a altura do cabeçalho
            const headerOffset = document.querySelector('nav').offsetHeight;
            // Posição do elemento alvo + posição atual da tela - altura do cabeçalho = destino do scroll
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

            // Scrolla suavemente até o destino
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Esconde o menu após o clique
            hideMenu()
        });
    });
}

function showNavBar() {
    // Ativa a navbar se a página scrollar mais de 10 pixels
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active", window.pageYOffset > 10);
}

// ======== MOBILE ======== //
function showMenu() {
    // Ativa o menu e troca o ícone
    menu.classList.toggle("collapsed");  sdf
    document.getElementById("burger-icon").classList.toggle("active");
};

function hideMenu() {
    // Desativa o menu e troca o ícone
    menu.classList.remove("collapsed"); 
    document.getElementById("burger-icon").classList.remove("active");    
}