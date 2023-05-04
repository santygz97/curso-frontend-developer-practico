const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);


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