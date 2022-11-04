const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu1");

/*haciendo accesible para publico con discapacidad visual*/
    if(navMenu.classList.contains("nav-menu1")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
    }
);

let modal = document.getElementById('miModal');
let cerrar = document.getElementById('close');

cerrar.addEventListener('click', () => {
    modal.style.display = "none";
});

/*let modalBook = document.getElementById('miModalBook');
let cerrarBook = document.getElementById('closeBook');

cerrarBook.addEventListener('click', () => {
    modalBook.style.display = "none";
});*/
const buttonLibros = document.getElementById("libros");
buttonLibros.addEventListener("click", () => {
  filtrarLibros();
  document.getElementById("lista").style.display = 'none';
})  

