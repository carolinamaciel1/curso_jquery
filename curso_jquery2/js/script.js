$(function(){
/*
AULA 01

$('#botaoclicar').click(function(){
    $('h1').hide();
});
    
});
*/
    

$('#botaoclicar1').click(function(){
    $('#msg1').css("color","red"); 
    $('#msg1').fadeOut('1000');
    $('#texto1').text("Cor alterada com sucesso!");
   
});
    
$('#botaoclicar2').click(function(){
    $('#msg2')
        .css("color","blue")
        .fadeOut()
        .delay('1000')
        .hide();
    $('#texto2').text("Cor alterada com sucesso!");
});
    
});