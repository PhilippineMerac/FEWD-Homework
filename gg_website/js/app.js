$(document).ready(function(){
    $('.bwlist').hide();
    $('.bw').click(function(){

        // Hide all others:
        // $('.bwlist').css("color", "pink").slideUp();
        $('.discover').css("color", "pink").slideUp();
        $('.blogging').css("color", "pink").slideUp();
        $('.belist').css("color", "pink").slideUp();

        // Show the current one:
        $('.bwlist').css("color", "pink").slideToggle();
        $('header').css('background-image',"url('images/GagosianLA.jpg')");
    });

    $('.discover').hide();
    $('.artists').click(function(){

        // Hide all others:
        $('.bwlist').css("color", "pink").slideUp();
        //$('.discover').css("color", "pink").slideUp();
        $('.blogging').css("color", "pink").slideUp();
        $('.belist').css("color", "pink").slideUp();

        // Show the current one:
        $('.discover').css("color", "pink").slideToggle();
        $('header').css('background-image',"url('images/PlatoInLA.jpg')");
    });

    $('.blogging').hide();
    $('.blog').click(function(){

        // Hide all others:
        $('.bwlist').css("color", "pink").slideUp();
        $('.discover').css("color", "pink").slideUp();
        //$('.blogging').css("color", "pink").slideUp();
        $('.belist').css("color", "pink").slideUp();

        // Show the current one:
        $('.blogging').css("color", "pink").slideToggle();
        $('header').css('background-image',"url('images/Ana-Serrano_Mustard-House.jpg')");
    });

    
    $('.belist').hide();
    $('.be').click(function(){

                // Hide all others:
        $('.bwlist').css("color", "pink").slideUp();
        $('.discover').css("color", "pink").slideUp();
        $('.blogging').css("color", "pink").slideUp();
        //$('.belist').css("color", "pink").slideUp();

        $('.belist').css("color", "pink").slideToggle();
        $('header').css('background-image',"url('images/Clay.jpg')");
    });
});