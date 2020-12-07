// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){
    
    // Activación de Slick Slider
    $('.slick-personas').slick({
        // JSON - Javascript Object Notation
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 500,
        dots: true,
        arrows: true,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000
    });
    
    
    // Activación de transición del menú principal
     $('header article nav#menu-principal a').bind('click',function(event){
			var $anchor = $(this);  
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000,'easeOutExpo');
			event.preventDefault();
    });
    
    
//    Función abrir-cerrar menú responsive
    
    $('#abrir-menu').click(function(){
        $('#abrir-menu').hide();
        $('#cerrar-menu').show();
        
        $('#menu-moviles').animate({
           right: 0
        });
    });
    
    $('#cerrar-menu').click(function(){
        $('#abrir-menu').show();
        $('#cerrar-menu').hide(); 
        
        
        $('#menu-moviles').animate({
           right: -290
        });
    });
});

// En CSS el tiempo se mide en segundos = 0.5s
// En JS el tiempo se mide en milisegundos = 500