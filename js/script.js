const links = document.querySelectorAll('a[href^="#"]');

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
    });
});