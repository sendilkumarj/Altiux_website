
/* ==================================================
   Main
================================================== */


$(document).ready(function(){
    $('.parallax').scrolly({bgParallax: true});

    var discussprojimglenght = $(".project-text").height() + 170;
    $(".discussprojimg img").css({'height':discussprojimglenght+'px'});
    var workimglenght = $(".work-text").height() + 170;
    $(".workaltiuximg img").css({'height':workimglenght+'px'});

    $('.short-menu,.more-txt').on('click', function(e){
        $('.short-menu').toggleClass('open');

        if ($('.short-menu').hasClass('open')) {
            $('.more-txt').text('CLOSE');
        } else {
            $('.more-txt').text('MORE');
        }
        /*e.preventDefault();*/
    });

    $('.short-menu-mob').on('click', function(e){
        $('.short-menu-mob').toggleClass('open');


        /*e.preventDefault();*/
    });


    /*$("ul.industries-carousel").simplecarousel({
        auto: 3000,
        fade: 400,
        pagination: false,
        next: $('.next'),
        prev: $('.prev')
    });*/

   /* $("ul.industries-carousel").skdslider({delay:5000, animationSpeed: 500,showNextPrev:true,showPlayButton:false,autoSlide:true,animationType:'fading'});*/



    // Preload the page with jPreLoader
  /*  $('body').jpreLoader({
        splashID: "#jSplash",
        showSplash: true,
        showPercentage: true,
        autoClose: true,
        splashFunction: function() {
            $('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
        }
    });*/
});

$(window).load(function (){
    var discussprojimglenght = $(".project-text").height() + 170;
    $(".discussprojimg img").css({'height':discussprojimglenght+'px'});
    var workimglenght = $(".work-text").height() + 170;
    $(".workaltiuximg img").css({'height':workimglenght+'px'});
});

$(window).resize(function (){

    var discussprojimglenght = $(".project-text").height() + 170;
    $(".discussprojimg img").css({'height':discussprojimglenght+'px'});

    var workimglenght = $(".work-text").height() + 170;
    $(".workaltiuximg img").css({'height':workimglenght+'px'});

    if ($('.short-menu-mob').hasClass('open')) {
        $('.short-menu-mob').toggleClass('open');
    }
});