const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopingCartMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shopingCartMenu.addEventListener('click', toggleProductDetailMenu);


function toggleDesktopMenu() {
    //Mi solucion
    /* if (desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.remove('inactive');
        return;
    }
    desktopMenu.classList.add('inactive'); */

    //Solucion del profesor
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetailMenu() {
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}