const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", ()=>{
    //Lo que hace toggle es: Si esta la clase la elimina, caso contrario la agrega.
    navMenu.classList.toggle("nav__menu--visible");

    if(navMenu.classList.contains("nav__menu--visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    }else{
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});