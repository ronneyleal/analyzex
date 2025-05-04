// Toggle icon menu
let menuIcon = document.querySelector('header #menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    header.classList.toggle('header-menu');
};

// const containerClient = document.querySelector(".container-cliente")

// var swiper = new Swiper(".swiper", {
//     slidesPerView: "auto",
//     loop: true,
//     speed: 5000,
//     allowTouchMove: false,
//     autoplay: {
//         delay: 0,
//         disableOnInteraction: false,
//     },
//     centeredSlides: false,
// });


// scroll section active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // header-active
    let header = document.querySelector('header');

    header.classList.toggle('header-active', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    header.classList.remove('header-menu');
};

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .sobre-box img, .heading, .title, .ax-image, .ax-content' , {origin: 'top'});
ScrollReveal().reveal('.home-animation, .sobre-container, .servicos-container, .projetos-box, .faq-accordion-item', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .sobre-box h3, .left-container .tl-text-box h3, .left-container .tl-text-box p, .cliente-box.left', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .sobre-box p, .right-container .tl-text-box h3, .right-container .tl-text-box p, .cliente-box.right', {origin: 'right'});

// typed js 
const typed = new Typed ('.multiple-text', {
    strings: ['Decifrando dados!', 'Orientando visões!', 'Impulsionando resultados!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


