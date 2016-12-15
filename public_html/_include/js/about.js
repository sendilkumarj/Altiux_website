
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

    $('.product-icon-list li img').on('click', function(){

        var current_index = $(this).index();

       var clicked_icon = $('.product-icon-list li img').eq(current_index);
       var src1 = $('.product-icon-list li img:eq(0)').attr("src").replace("_include/img/boxpwr-icon-active.png", "_include/img/boxpwr-icon-inactive.png");
        $('.product-icon-list li img:eq(0)').attr("src", src1);
       var src2 = $('.product-icon-list li img:eq(1)').attr("src").replace("_include/img/hardware-icon-active.png", "_include/img/hardware-icon-inactive.png");
        $('.product-icon-list li img:eq(1)').attr("src", src2);
       var src3 = $('.product-icon-list li img:eq(2)').attr("src").replace("_include/img/edgeware-icon-active.png", "_include/img/edgeware-icon-inactive.png");
        $('.product-icon-list li img:eq(2)').attr("src", src3);
       var src4 = $('.product-icon-list li img:eq(3)').attr("src").replace("_include/img/analytics-icon-active.png", "_include/img/analytics-icon-inactive.png");
        $('.product-icon-list li img:eq(3)').attr("src", src4);
        var src = $('.product-icon-list li img:eq(4)').attr("src").replace("_include/img/mobility-icon-active.png", "_include/img/mobility-icon-inactive.png");
        $('.product-icon-list li img:eq(4)').attr("src", src);



        var newsrc = $('.product-icon-list li img').eq(current_index).attr("src").replace("-inactive.png", "-active.png");
        $(this).attr("src", newsrc);


        $('.product-icon-content li').hide();
        $('.product-icon-content li:eq('+ current_index +')').fadeIn(500);

    });

    $(".manu-nav-icon").click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("id"));
    });


    /* Apply from */

    /* browse btn */
    $(".browse-btn").click(function() {
        $('#career_file').click();
    });

    /* apply form toggle */

    $('.career-apply').hide();

    $(".applytxt").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('.section-grey').position().top }, 600);
        $('.career-list').slideUp();
        $('.career-apply').slideDown();
    });
    $(".apply-form-close").click(function(e) {
        e.preventDefault();
        $('.career-apply').slideUp();
        $('.career-list').slideDown();
    });


    /* blog toggle */
    $('.blog-desc').hide();

    $(".blog-view").click(function(e) {
        e.preventDefault();
        $('.blog-list').slideUp();
        $('.blog-desc').slideDown();
    });
    $(".blog-close").click(function(e) {
        e.preventDefault();
        $('.blog-desc').slideUp();
        $('.blog-list').slideDown();
    });
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

// This is a functions that scrolls to #{}link
function goToByScroll(id){
    // Remove "link" from the ID
    id = id.replace("_link", "");
    // Scroll
    $('html,body').animate({
            scrollTop: $("#"+id).offset().top - 50},
        'slow');
}


// text limiter more-less
$(function(){

// The height of the content block when it's not expanded
    var adjustheight = 88;
// The "more" link text
    var moreText = "+";
// The "less" link text
    var lessText = "-";

// Sets the .more-block div to the specified height and hides any content that overflows
    $(".more-less .more-block").css('height', adjustheight).css('overflow', 'hidden');

// The section added to the bottom of the "more-less" div
    $(".more-less").append('<p class="continued">[&hellip;]</p><a href="#" class="adjust more"></a>');

    $("a.adjust").text(moreText);

    /* $(".adjust").toggle(function() {
     $(this).parents("div:first").find(".more-block").css('height', 'auto').css('overflow', 'visible');
     // Hide the [...] when expanded
     $(this).parents("div:first").find("p.continued").css('display', 'none');
     $(this).text(lessText);
     }, function() {
     $(this).parents("div:first").find(".more-block").css('height', adjustheight).css('overflow', 'hidden');
     $(this).parents("div:first").find("p.continued").css('display', 'block');
     $(this).text(moreText);
     });*/

    $(".adjust").on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('more')){
            $(this).removeClass('more');
            $(this).parents("div:first").find(".more-block").css('height', 'auto').css('overflow', 'visible');
            // Hide the [...] when expanded
            $(this).parents("div:first").find("p.continued").css('display', 'none');
            $(this).text(lessText);


        }
        else {
            $(this).addClass('more');
            $(this).parents("div:first").find(".more-block").css('height', adjustheight).css('overflow', 'hidden');
            $(this).parents("div:first").find("p.continued").css('display', 'block');
            $(this).text(moreText);
        }
    });

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
                    contact_number: {
                        required: true,
                        number: true
                    },
                    contact_msg: "required"
                },
                messages: {
                    contact_name: "Please enter your fullname",
                    contact_number: "Please enter a valid phone number",
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

