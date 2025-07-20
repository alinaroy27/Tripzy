let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');




window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
loginForm.addEventListener('click', (e) => {
    if (e.target === loginForm) {
        loginForm.classList.remove('active');
    }
});

document.querySelectorAll('header .navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior
        console.log("Clicked on:", this.getAttribute('href')); // Debugging log
        const targetId = this.getAttribute('href'); // Get section id
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            console.log("Target section not found:", targetId);
        }
    });
});





videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let activeBtn = document.querySelector('.controls .active');
        if (activeBtn) {
            activeBtn.classList.remove('active');
        }
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector("#video-slider").src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },

    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },

    },
});


