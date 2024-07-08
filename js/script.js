// script.js

// Seleccionar todos los enlaces que apuntan a anclas dentro de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' 
        });
    });

    // Resaltado al pasar el cursor sobre los elementos del menú
    anchor.addEventListener('mouseover', () => {
        anchor.parentElement.classList.add('hovered'); 
    });

    anchor.addEventListener('mouseout', () => {
        anchor.parentElement.classList.remove('hovered'); 
    });
});

