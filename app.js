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

  // var shape = document.querySelector('#b3Eb3Y66Aw');
  // var shapeLength = shape.getTotalLength();
  // console.log(shapeLength);

  setTimeout(function() {
    $('.flash').css('display', 'none');
    $('.block').css('display', 'none');
  }, 3500);

  setTimeout(function() {
    $('.main-nav').css('visibility', 'visible');
  }, 3750);


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

  // setTimeout(function() {
  //   $('.signature').css('display', 'none');
  // }, 9000);
  //
  // setTimeout(function() {
  //   $('.main-nav').css('visibility', 'visible');
  // }, 10000);

  // function selectTheme() {
  //   var selectedValue = document.getElementById("list").value;
  //   if (selectedValue == 'Dark') {
  //     $('body').addClass('darkify');
  //   }
  // }




  function selectTheme() {
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
    if (selectedValue == 'dark') {
      $('body').addClass('darkify');
    }
    if (selectedValue == 'default') {
      $('body').removeClass('darkify');
    }
    if (selectedValue == 'water') {
      $('body').addClass('bubblify');
    }
    if (selectedValue == 'dark') {
      $('body').addClass('darkify');
    }
  }

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

  //   }, 1000);
  // })();
  //
  // setInterval(function() {
  //   $('.dots').remove();
  // }, 1500);

  //------------------ about functionality ------------------ //

  home.mouseover(function() {
    $(homeContent).css({
      "visibility": "visible"
    });
  });


  home.click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).css({
        "border-top": "4px solid #ffffff",
        "border-bottom": "4px solid #ffffff",
        "background": "linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)",
        "color": "#ffffff"
      });
    } else {
      $(this).css({
        "border-top": "4px solid #737373",
        "border-bottom": "4px solid #737373",
        "background": "#ffffff",
        "color": "#737373"
      });
    }
    $(homeContent).css({
      "visibility": "visible"
    });
  });


  home.mouseleave(function() {
    if ($(this).hasClass('active')) {
      $(aboutContent).css({
        "visibility": "visible"
      });
    } else {
      $(homeContent).css({
        "visibility": "hidden"
      });
    }
  });


  //------------------ about functionality ------------------ //

  about.mouseover(function() {
    $(aboutContent).css({
      "visibility": "visible"
    });
  });


  about.click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).css({
        "border-top": "4px solid #ffffff",
        "border-bottom": "4px solid #ffffff",
        "background": "linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)",
        "color": "#ffffff"
      });
    } else {
      $(this).css({
        "border-top": "4px solid #737373",
        "border-bottom": "4px solid #737373",
        "background": "#ffffff",
        "color": "#737373"
      });
    }
    $(aboutContent).css({
      "visibility": "visible"
    });
  });


  about.mouseleave(function() {
    if ($(this).hasClass('active')) {
      $(aboutContent).css({
        "visibility": "visible"
      });
    } else {
      $(aboutContent).css({
        "visibility": "hidden"
      });
    }
  });

  //------------------ widget functionality ------------------ //

  widgets.mouseover(function() {
    $(widgetsContent).css({
      "visibility": "visible"
    });
  });


  widgets.click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).css({
        "border-left": "4px solid #ffffff",
        "border-right": "4px solid #ffffff",
        "background": "linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)",
        "color": "#ffffff"
      });
    } else {
      $(this).css({
        "border-left": "4px solid #737373",
        "border-right": "4px solid #737373",
        "background": "#ffffff",
        "color": "#737373"
      });
    }
    $(widgetsContent).css({
      "visibility": "visible"
    });
  });


  widgets.mouseleave(function() {
    if ($(this).hasClass('active')) {
      $(widgetsContent).css({
        "visibility": "visible"
      });
    } else {
      $(widgetsContent).css({
        "visibility": "hidden"
      });
    }
  });



  //------------------ logo functionality ------------------ //

  logos.mouseover(function() {
    $(logosContent).css({
      "visibility": "visible"
    });
  });


  logos.click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).css({
        "border-right": "4px solid #ffffff",
        "border-bottom": "4px solid #ffffff",
        "background": "linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)",
        "color": "#ffffff"
      });
    } else {
      $(this).css({
        "border-right": "4px solid #737373",
        "border-bottom": "4px solid #737373",
        "background": "#ffffff",
        "color": "#737373"
      });
    }
    $(logosContent).css({
      "visibility": "visible"
    });
  });


  logos.mouseleave(function() {
    if ($(this).hasClass('active')) {
      $(logosContent).css({
        "visibility": "visible"
      });
    } else {
      $(logosContent).css({
        "visibility": "hidden"
      });
    }
  });



  // ---------- widgets hover ------------


  // ---------- about hover ------------


  // ---------- home hover ------------

  // ---------- home clicked ------------







}); //document ready function