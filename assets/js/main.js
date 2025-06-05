$(function () {
  // onepage nav
  $("#nav").onePageNav({
    currentClass: "current",
  });

  // magnific image popup
  $(".project_popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  // magnific video popup
  $(".video_popup").magnificPopup({
    type: "iframe",
  });

  // counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
    offset: 70,
  });

  // active slick for testimonials
  $(".testimonials").slick({
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  // active slicknav
  $("#nav").slicknav();
});

// Sticky nav
$(window).on("scroll", function () {
  const windowScrollTop = $(this).scrollTop();
  if (windowScrollTop > 20) {
    $(".header_area").addClass("sticky");
  } else {
    $(".header_area").removeClass("sticky");
  }
});
