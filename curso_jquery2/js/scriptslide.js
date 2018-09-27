$(function(){
    //o slide inicia com apenas o primeiro e os outros em hide
        
    //$('a').hide();
    //$('.pass').show();
    
    /*$('#f11').click(function(){
        $('#f1').fadeIn('slow');
        $('#f2').hide();
        $('#f3').hide();
        $('#f4').hide();
    });
    
    
    $('#f22').click(function(){
        $('#f1').hide();
        $('#f2').fadeIn('slow');
        $('#f3').hide();
        $('#f4').hide();
    });
    
    $('#f33').click(function(){
        $('#f1').hide();
        $('#f2').hide();
        $('#f3').fadeIn('slow');
        $('#f4').hide();


    });
    $('#f44').click(function(){
        $('#f1').hide();
        $('#f2').hide();
        $('#f3').hide();
        $('#f4').fadeIn('slow');
        
        
    });*/
    
    
    /*var primeiro = $('#f1');*/
    
    $('.pass').click(function(){
        $('#f1').hide();
        $('#f2').fadeIn('slow', function(){});
        $('#f3').hide();
        $('#f4').hide();
    });
    
    
    var fotos = $('#galeria').find('img');
    var indice = (fotos.length-1);
    var pause = false;
   
   
    $('.pass').click(function(){
        if($('.pass').hasClass('iniciado')){
            $('.pass').text('INICIAR');
           $('.pass').removeClass('iniciado'); 
            pause = true;
        }else{
           $('.pass').addClass('iniciado');
            $('.pass').text('PAUSAR');
            pause = false;
            slide();
        }
    });    
    
    function slide(){
         var tempo;
        var current = fotos[indice];
        if(!pause){
            $(current).animate({opacity:0},1500,function(){
                $(current).css({zIndex:0, opacity:1});
                indice--;
                if(indice <= 0){            
                    indice = (fotos.length-1);
                }

                tempo = setInterval(function(){
                    slide();
                },1000);

            });
        }
    }
    
    console.log(fotos);
});