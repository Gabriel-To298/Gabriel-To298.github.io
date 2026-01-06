// Asigna la función scrollFunction al evento de scroll de la ventana
window.onscroll = function() {scrollFunction()};

// Función que se ejecuta cada vez que se hace scroll
function scrollFunction() {
  // Verifica si se ha hecho scroll más de 20px desde la parte superior
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Muestra el navbar moviéndolo a la posición 0 (visible)
    document.getElementById("navbar").style.top = "0";
    
    // Opción comentada: quitar clase 'dark' del navbar
    // document.getElementById("navbar").classList.remove('dark');
    
    // Muestra el botón "ir arriba"
    document.getElementById("myBtn").style.display = "block";
  } else {
    // Oculta el navbar moviéndolo fuera de la pantalla (-50px)
    document.getElementById("navbar").style.top = "-50px";
    
    // Oculta el botón "ir arriba"
    document.getElementById("myBtn").style.display = "none";
  }
}

// Función para ir al inicio de la página
function topFunction() {
    // Para navegador Safari
    document.body.scrollTop = 0;
    
    // Para Chrome, Firefox, IE y Opera
    document.documentElement.scrollTop = 0;
}