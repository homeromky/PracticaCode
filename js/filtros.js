$(function(){

    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');

        if(valor=== 'todo'){
            $('.cont-work').show('1000');
        }
        else{
            $('.cont-work').not('.'+valor).hide('1000');
            $('.cont-work').filter('.'+valor).show('1000');
        }
        

    });


    let equipo = $('#equipo').offset().top,
    servicio = $('#servicio').offset().top,
    contacto = $('#contacto').offset().top;
  

  window.addEventListener('rezise', function(){

  let equipo = $('#equipo').offset().top,
    servicio = $('#servicio').offset().top,
    contacto = $('#contacto').offset().top;

  });


  $('#enlaces-inicio').on('click', function(e){
     e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
  });

   $('#enlaces-equipo').on('click', function(e){
     e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo - 100
        }, 600);
  });


    $('#enlaces-servicio').on('click', function(e){
     e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio - 100
        }, 600);
  });


      $('#enlaces-contacto').on('click', function(e){
     e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - 100
        }, 600);
  });
});