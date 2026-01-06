$(document).ready(function() {
    
    /* Cada vez que se hace scroll en la ventana ... */
    $(window).scroll( function(){
    
        /* Verifica la ubicación de cada elemento deseado */
        $('').each( function(i){
            
            /* Opción alternativa: 
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();*/
            
            // Calcula la posición inferior del objeto (elemento)
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            
            // Calcula la posición inferior de la ventana visible
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Si el objeto es completamente visible en la ventana, hazlo aparecer con fade-in */
            if( bottom_of_window > bottom_of_object ){
                
                // Animación de aparición con opacidad en 500ms
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});