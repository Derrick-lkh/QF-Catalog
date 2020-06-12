$(document).ready(function () {
  // Nav

  $(".menu-bar, .close-btn").on("click", function () {
    console.log("clicked");
    if ($(".side-menu").hasClass("menu-open")) {
      $(".side-menu")
        .css({
          left: "-100%",
        })
        .removeClass("menu-open");
      $(".transparent-bg").hide();
    } else {
      $(".side-menu")
        .css({
          left: 0,
        })
        .addClass("menu-open");
      $(".transparent-bg").show();
    }
  });

  // Scroll
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop && st > 0) {
      // downscroll code
      $("#nav-bar").css({
        top: "-100px",
      });
    } else {
      // upscroll code
      $("#nav-bar").css({
        top: "0",
      });
    }
    lastScrollTop = st;
    if (st > 0) {
      $("#nav-bar").css({
        background: "white",
      });
    } else {
      $("#nav-bar").css({
        background: "transparent",
      });
    }
  });

  // Resize
  $(window).resize(function () {
    var slider = $(".featured-products");
    var settings = {
      //   autoplay: true,
      //   autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      arrows: false,
    };
    if ($(window).width() >= 991) {
      if (slider.hasClass("slick-initialized")) {
        slider.slick("unslick");
      }
      return;
    } else if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
  $(window).trigger("resize");
});
