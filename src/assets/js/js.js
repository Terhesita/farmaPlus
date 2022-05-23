
/*Editar el nav del menu, cambio de color y tamaño */

$(window).on('scroll', function(){
        if($(window).scrollTop())
        {
          $('nav').addClass('black');
        }
        else
        {
          $('nav').removeClass('black');
        }
      })


/*Mostrar el apartado de tarjetas y domicilio en la parte del carrito */
function mostrar(){
  document.getElementById('mostrar').style.display = 'block';
}

function ocultar(){
  document.getElementById('mostrar').style.display = 'none';
}
  
/*Carrusel de productos */
$(document).ready(function()
{


if($('.bbb_viewed_slider').length)
{
var viewedSlider = $('.bbb_viewed_slider');

viewedSlider.owlCarousel(
{
loop:true,
margin:30,
autoplay:true,
autoplayTimeout:6000,
nav:false,
dots:false,
responsive:
{
0:{items:1},
575:{items:2},
768:{items:3},
991:{items:4},
1199:{items:6}
}
});

if($('.bbb_viewed_prev').length)
{
var prev = $('.bbb_viewed_prev');
prev.on('click', function()
{
viewedSlider.trigger('prev.owl.carousel');
});
}

if($('.bbb_viewed_next').length)
{
var next = $('.bbb_viewed_next');
next.on('click', function()
{
viewedSlider.trigger('next.owl.carousel');
});
}
}


});



/*mostrar ocultar */
function visibilidad(selector, visible) {
  var elemento = document.querySelector(selector);
  console.log(elemento);
  if (elemento != null) {
    elemento.style.display = visible?'block':'none';
  }
}