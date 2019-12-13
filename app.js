$(document).ready(function() {

    var x = 1000;

    var home = $('.home');
    var about = $('.about');
    var widgets = $('.widgets');
    var logos = $('.logos');


    var homeContent = $('.home-content');
    var aboutContent = $('.about-content');
    var widgetsContent = $('.widgets-content');
    var logosContent = $('.logos-content');

    var content = $('.content');

    $('.button-lamp').mouseover(function() {
        $(this).find('img').attr('src', 'images/light-off.svg');
    });

    $('.button-lamp').mouseleave(function() {
        $(this).find('img').attr('src', 'images/light-on.svg');
    });


    $('.button-blackhole').mouseover(function() {
        $(this).find('img').addClass('active');
        for (i = 0; i < 5; i++) {
            $(this).append('<div class="dots"></div>');
        }
        $('.dots').each(function() {

            var x = Math.floor(Math.random() * 51) - 25;
            var y = Math.floor(Math.random() * 51) - 25;
            var delay = Math.floor((Math.random() * 5) + 1);

            $(this).css({
                "top": y,
                "left": x
                    // "animation-delay": delay + "s"
            });
        });

    });

    $('.button-blackhole').mouseleave(function() {
        $(this).find('img').removeClass('active');
        $(this).find('.dots').remove();
    });


    $('.dots').each(function() {

        var x = Math.floor(Math.random() * 101) - 50;
        var y = Math.floor(Math.random() * 101) - 50;
        var delay = Math.floor((Math.random() * 5) + 1);

        $(this).css({
            "top": y,
            "left": x
                // "animation-delay": delay + "s"
        });
    });

    //------------------ navigation menu functionality ------------------ //


    $('.home, .about, .contact, .logos').click(function(event) {
        var target = $(event.target);
        if (target.is(".home")) {
            $('.home, .home-content').toggleClass('active');
            $('.about, .about-content, .logos, .logos-content').removeClass('active');
            $('.main').toggleClass('active');
            if ($('.home').hasClass('active')) {
                $('.main-img').css('display', 'block');
            }
        }
        if (target.is(".about")) {
            $('.about, .about-content').toggleClass('active');
            $('.home, .home-content, .logos, .logos-content').removeClass('active');
            if ($('.about').hasClass('active')) {
                $('.main-img').css('display', 'none');
            }
        }
        if (target.is(".logos")) {
            $('.logos, .logos-content').toggleClass('active');
            $('.home, .home-content, .about, .about-content').removeClass('active');
            if ($('.logos').hasClass('active')) {
                $('.main-img').css('display', 'none');
            }
        }
        if (target.is(".contact")) {
            $('.contact, .contact-content').toggleClass('active');
            $('.home, .home-content, .logos, .logos-content, .about, .about-content').removeClass('active');
            if ($('.contact').hasClass('active')) {
                $('.main-img').css('display', 'none');
            }
        }
    });


    //------------------ social links functionality ------------------ //

    $('.footer-links .facebook').mouseover(function() {
        $(this).find('img').attr('src', 'images/fb-logo-on.svg');
    });

    $('.footer-links .facebook').mouseleave(function() {
        $(this).find('img').attr('src', 'images/fb-logo.svg');
    });

    $('.footer-links .insta').mouseover(function() {
        $(this).find('img').attr('src', 'images/insta-logo-on.svg');
    });

    $('.footer-links .insta').mouseleave(function() {
        $(this).find('img').attr('src', 'images/insta-logo.svg');
    });

    $('.footer-links .linked').mouseover(function() {
        $(this).find('img').attr('src', 'images/linked-logo-on.svg');
    });

    $('.footer-links .linked').mouseleave(function() {
        $(this).find('img').attr('src', 'images/linked-logo.svg');
    });

    $('.footer-links .git').mouseover(function() {
        $(this).find('img').attr('src', 'images/gh-logo-on.svg');
    });

    $('.footer-links .git').mouseleave(function() {
        $(this).find('img').attr('src', 'images/gh-logo.svg');
    });


    //------------------ logos functionality ------------------ //

    $('.next-logo').click(function() {
        var imgActive = $(this).parent().find('img.active');
        if ($(imgActive).hasClass('last')) {
            $(imgActive).toggleClass('active');
            $(this).parent().find('img.first').addClass('active');
        } else {
            $(imgActive).toggleClass('active');
            $(imgActive).next().addClass('active');
        }
    });

    $('.previous-logo').click(function() {
        var imgActive = $(this).parent().find('img.active');
        if ($(imgActive).hasClass('first')) {
            $(imgActive).toggleClass('active');
            $(this).parent().find('img.last').addClass('active');
        } else {
            $(imgActive).toggleClass('active');
            $(imgActive).previous().addClass('active');
        }
    });



}); //document ready function