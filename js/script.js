window.onscroll = function() {showNavBar()};
const links = document.querySelectorAll('a[href^="#"]');
const menu = document.getElementById("main-menu");

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const header = document.querySelector('header');
        const headerOffset = header.offsetHeight;
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        hideMenu()
    });
});

function showNavBar() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

function showMenu() {
    menu.classList.toggle("collapsed");  
    document.getElementById("burger-icon").classList.toggle("active");
};

function hideMenu() {
    menu.classList.remove("collapsed"); 
    document.getElementById("burger-icon").classList.remove("active");    
}