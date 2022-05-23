 /*para que se suba hasta el top*/
 $(document).ready(function(){
  $("#btnScrolltoTop").click(function(){
    $('html, body').animate({scrollTop : 0},300);
  });
});

/**/
$(window).scroll(function(){
  if($(this).scrollTop() > 70){
    $('#btnScrolltoTop').fadeIn();
  }
  else{
    $('#btnScrolltoTop').fadeOut();
  }
});