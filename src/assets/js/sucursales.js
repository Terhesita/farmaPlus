 /*para que se suba hasta el top*/
 $(document).ready(function(){
    $("#btnSucursal").click(function(){
      $('html, body').animate({scrollTop : 3980},300);
    });
  });
  
  /**/
  $(window).scroll(function(){
    if($(this).scrollTop() > 70){
      $('#btnSucursal').fadeIn();
    }
    else{
      $('#btnSucursal').fadeOut();
    }
  });