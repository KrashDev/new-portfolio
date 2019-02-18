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

  //------------------ about functionality ------------------ //

  $('.home, .about, .widgets, .logos').click(function(event) {
    var target = $(event.target);
    if (target.is("li.home.active")) {
      homeContent.css("visibility", "visible");
    }
    if (target.is("li.logos.active")) {
      logosContent.css("visibility", "visible");
    }
    if (!target.hasClass("active")) {
      homeContent.css("visibility", "hidden");
      logosContent.css("visibility", "hidden");
    }
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).css({
        "border-bottom": "2px solid black"
      });
    } else {
      $(this).css({
        "border-bottom": "2px solid white"
      });
    }
  });




}); //document ready function