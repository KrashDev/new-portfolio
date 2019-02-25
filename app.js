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


  //light switch button
  $('.button-light-switch').click(function() {
    $(this).find('img').attr('src', 'images/light-switch-off.svg');
    $(this).closest('.widgets-content').find('.button-light img').attr('src', 'images/light-on.svg');
    $(this).closest('.widgets-content').find('.button-gears img').attr('src', 'images/gear-on.svg').css('animation', 'cog 3s linear infinite');
    $(this).closest('.widgets-content').find('.button-best img').attr('src', 'images/best-on.svg');
    $(this).closest('.widgets-content').find('.button-beat #b3Eb3Y66Aw').css('animation', 'dash 2s ease-in-out infinite');
  });

  $('.button-light').mouseover(function() {
    $(this).find('img').attr('src', 'images/light-off.svg');
  });

  $('.button-light').mouseleave(function() {
    $(this).find('img').attr('src', 'images/light-on.svg');
  });

  $('.button-gears').mouseover(function() {
    $(this).find('img').attr('src', 'images/gear-on.svg');
  });

  $('.button-gears').mouseleave(function() {
    $(this).find('img').attr('src', 'images/gear-off.svg');
  });

  $('.button-best').mouseover(function() {
    $(this).find('img').attr('src', 'images/best-on.svg');
  });

  $('.button-best').mouseleave(function() {
    $(this).find('img').attr('src', 'images/best-off.svg');
  });

  $('.button-beat').mouseover(function() {
    $(this).find('#b3Eb3Y66Aw').css('animation', 'dash 2s ease-in-out infinite');
  });

  $('.button-beat').mouseleave(function() {
    $(this).find('#b3Eb3Y66Aw').css('animation', 'none');
  });

  $('.button-orange').mouseover(function() {
    $(this).find('img').attr('src', 'images/orange-on.svg');
  });

  $('.button-orange').mouseleave(function() {
    $(this).find('img').attr('src', 'images/orange-off.svg');
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

  // $('.home, .about, .widgets, .logos').each(function(event) {
  //   var target = $(event.target);
  //   if (target.is(".home")) {
  //     $('.home, .home-content').toggleClass('active');
  //   }
  //   if (target.is(".about")) {
  //     $('.about, .about-content').toggleClass('active');
  //     $('.main').toggleClass('active');
  //   }
  //   if (target.is(".widgets")) {
  //     $('.widgets, .widgets-content').toggleClass('active');
  //     $('.main').toggleClass('active');
  //   }
  //   if (target.is(".logos")) {
  //     $('.logos, .logos-content').toggleClass('active');
  //     $('.main').toggleClass('active');
  //   }
  // });
  $('.home').each(function() {
    $('.home, .home-content').addClass('active');
  });


  $('.home, .about, .widgets, .logos').click(function(event) {
    var target = $(event.target);
    if (target.is(".home")) {
      $('.home, .home-content').toggleClass('active');
      $('.about, .about-content, .widgets, .widgets-content, .logos, .logos-content').removeClass('active');
      $('.main').toggleClass('active');
    }
    if (target.is(".about")) {
      $('.about, .about-content').toggleClass('active');
      $('.home, .home-content, .widgets, .widgets-content, .logos, .logos-content').removeClass('active');
      $('.main').toggleClass('active');
    }
    if (target.is(".widgets")) {
      $('.widgets, .widgets-content').toggleClass('active');
      $('.home, .home-content, .about, .about-content, .logos, .logos-content').removeClass('active');
      $('.main').toggleClass('active');
    }
    if (target.is(".logos")) {
      $('.logos, .logos-content').toggleClass('active');
      $('.home, .home-content, .widgets, .widgets-content, .about, .about-content').removeClass('active');
      $('.main').toggleClass('active');
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



}); //document ready function