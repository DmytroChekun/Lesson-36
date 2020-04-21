$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >= 100) {
  $('.nav').addClass('nav-scroll-script');
  } else {
  $('.nav').removeClass('nav-scroll-script');
  }
});

$(document).ready(function() {
    $('.header__slider').slick({
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true, //default
    pauseOnHover: false, //default
    pauseOnDotsHover: true, //default
    waitForAnimate: false,
    centerMode: false, //default
    touchMove: false,
    swipeToSlide: false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
      ]
});
$('.news__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHight: true,
  dots: true,
  speed: 800,
  easing: 'ease',
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3700,
  pauseOnFocus: true, //default
  pauseOnHover: false, //default
  pauseOnDotsHover: true, //default
  waitForAnimate: false,
  centerMode: false, //default
  touchMove: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
  ]
});
});

