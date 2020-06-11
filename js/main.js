$(document).ready(function () {
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

  // Collapse Btn
  $(".collapse-info .label").on("click", function () {
    const icon = $(this).find("i");
    if (icon.hasClass("fa-plus")) {
      icon.removeClass("fa-plus").addClass("fa-minus");
    } else {
      icon.removeClass("fa-minus").addClass("fa-plus");
    }
    $(this).parent().find(".collapse-section").slideToggle();
  });
});
