$(document).ready(function() {
   $('.menu-toggle').on('click',function() {
         $('.nav').toggleClass('showing');
         $('.nav ul').toggleClass('showing');

      });


    $('.post-wrapper').slick({
      centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            nextArrow: $('.next'),
            prevArrow: $('.prev'),
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
              {
                breakpoint: 1100,
                settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2,
                  nextArrow: $('.next'),
                  prevArrow: $('.prev'),
                }
              },
              {
                breakpoint: 500,
                settings: {
                  centerMode: true,
                  centerPadding: '10px',
                  slidesToShow: 1,
                  nextArrow: $('.next'),
                  prevArrow: $('.prev'),
                }
              }
            ]
   });
});
