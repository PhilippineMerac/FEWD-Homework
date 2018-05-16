$(document).ready(function(){
    $('.bwlist').hide();
    $('.bw').click(function(){
        $('.bwlist').css("color", "pink").slideToggle();
        $('header').css('background-image',"url('images/GagosianLA.jpg')");
    });

    $('.discover').hide();
    $('.artists').click(function(){
        $('.discover').css("color", "pink").slideToggle();
        $('header').css('background-image',"url('images/PlatoInLA.jpg')");
    });

    $('.blogging').hide();
    $('.blog').click(function(){
        $('.blogging').css("color", "pink").slideToggle();
        $('header').css('background-image',"url('images/Ana-Serrano_Mustard-House.jpg')");
    });

    $('.belist').hide();
    $('.be').click(function(){
        $('.belist').css("color", "pink").slideToggle();
        $('header').css('background-image',"url('images/Clay.jpg')");
    });
});