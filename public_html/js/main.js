

$(document).ready(function() {
    //website.run();
    $('#post_scroll').tinyscrollbar();

    /* Scroll animation */
    jQuery('.post').addClass("hidden1").viewportChecker({
        classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
        offset: 100
    });

    jQuery('.service1').addClass("hidden1").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        offset: 100
    });

    //$('.parallax').scrolly({bgParallax: true});
    //$('.services').scrolly({bgParallax: true});

    $('.navbar-nav li a').click(function(){
        $('.navbar-nav li a').removeClass('selected');
        $(this).addClass('selected');
        if($(window).width() < 768) {
            $(".navbar-toggle").click()
        }
    });

    if ($(window).width() < 768) {
        var imgHeight = $('.active img').height();
        $('.carousel .item').css('height', imgHeight);
    }

    $(window).resize(function() {
        $('.abt-logo img').css('width', $('.abt-logo').width());
        if ($(window).width() < 768) {
            var imgHeight = $('.active img').height();
            $('.carousel .item').css('height', imgHeight); return false;
        }

        if ($(window).width() > 768 && $(window).width() < 992) {
            $('.carousel .item').css('height', '343px');return false;
        }

        if ($(window).width() >= 992 && $(window).width() < 1199) {
            $('.carousel .item').css('height', '443px');return false;
        }

        if ($(window).width() > 1200) {
            $('.carousel .item').css('height', '535px');return false;
        }
    });



    $('.timeline-panel').hide();
    $('.timeline-panel').eq(0).show();
    $('.timeline-badge').click(function(){
        var ind = $(this).parent().index();
        $('.timeline-panel').fadeOut(0);
        $('.timeline-panel').eq(ind).fadeIn(300);
    });

    $('#career2, #career3').css({'display':'none'});
    $('#check_posts').click(function(){
        $('#career1').slideUp('slow');
        $('#career2').slideDown('slow');
        $('#post_scroll').tinyscrollbar();
    });

    $('#apply_now').click(function(){
        $('#career2').slideUp('slow');
        $('#career3').slideDown('slow');
    });
    $('#back_to_career1').click(function(){
        $('#career2').slideUp('slow');
        $('#career1').slideDown('slow');
    });

    $('#back_to_career2').click(function(){
        $('#career3').slideUp('slow');
        $('#career2').slideDown('slow');
    });


});


//var logo_height = $('.abt-logo img').offset().top;
var lastScrollTop = 0;
$(window).scroll(function(event) {
    var item_distance = $('#about').offset().top, screen_window = $(window);
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // downscroll code
        if ( screen_window.scrollTop()+ 70 >= item_distance ) {
            // Your div has reached the top
            $('.abt-logo img').css('position', 'fixed');
            $('.abt-logo img').css('top', '80px');
            $('.abt-logo img').css('width', $('.abt-logo').width());

        }
        var catlen = item_distance+$('#about').height();
        var catlen1 = catlen - $('.abt-logo img').height();

        if ( screen_window.scrollTop()+ 70 >= catlen1 ) {
            // Your div has reached the top
            $('.abt-logo img').css('position', 'relative');
            $('.abt-logo img').css('top', $('#about').height() - $('.abt-logo img').height());
            $('.abt-logo img').css('width', $('.abt-logo').width());

        }
    } else {
        // upscroll code

        var catlen = item_distance+$('#about').height();
        var catlen1 = catlen - $('.abt-logo img').height();

        if ( screen_window.scrollTop()+ 70 < catlen1 ) {
            // Your div has reached the top
            $('.abt-logo img').css('position', 'fixed');
            $('.abt-logo img').css('top', '80px');
            $('.abt-logo img').css('width', $('.abt-logo').width());

        }

        if ( screen_window.scrollTop()+ 70 < item_distance ) {
            // Your div has reached the top
            $('.abt-logo img').css('position', 'relative');
            $('.abt-logo img').css('top', '20px');
            $('.abt-logo img').css('width', $('.abt-logo').width());

        }
    }
    lastScrollTop = st;

});


//Form Vallidation
(function($,W,D)
{
    var JQUERY4U = {};
    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            $("#contact_form").validate({
                rules: {
                    contact_name: "required",
                    contact_mail: {
                        required: true,
                        email: true
                    },
                    contact_msg: "required"
                },
                messages: {
                    contact_name: "Please enter your fullname",
                    contact_mail: "Please enter a valid email address",
                    contact_msg: "Please enter your message"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });

            $("#career_form").validate({
                rules: {
                    career_name: "required",
                    career_email: {
                        required: true,
                        email: true
                    },
                    career_post: "required",
                    career_file: "required"
                },
                messages: {
                    career_name: "Please enter your fullname",
                    career_email: "Please enter a valid email address",
                    career_post: "Please applied for position",
                    career_file: "Please attach file"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });

        }
    }
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });
})(jQuery, window, document);



// This is a functions that scrolls to #{}link
function goToByScroll(id){
    // Remove "link" from the ID
    id = id.replace("_link", "");
    // Scroll
    $('html,body').animate({
            scrollTop: $("#"+id).offset().top - 70},
        'slow');
}



$(".navbar-right > li > a").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll($(this).attr("id"));
});

$(".carousel-inner > .item > img").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll($(this).attr("class"));
});

$(".navbar-brand").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    $('html,body').animate({
            scrollTop: $('body').offset().top - 80},
        'slow');
    $(".navbar-right > li > a").removeClass('selected');
});
