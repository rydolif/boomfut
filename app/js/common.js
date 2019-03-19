$(function() {

//------------------------------parks---------------------------
  var swiper = new Swiper('.packs__slider', {
    slidesPerView: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 320px
      480: {
        slidesPerView: 1,
      },
      // when window width is <= 480px
      767: {
        slidesPerView: 2,
      },
      // when window width is <= 640px
      992: {
        slidesPerView: 3,
      }
    }
  });

//------------------------------acardeon---------------------------
  $(".faq__item_content").slideUp("slow");
  $(".faq__item").first().addClass('faq__item--active');
  $(".faq__item--active .faq__item_content").slideDown("slow");

  $(".faq__item_header").on("click", function(){
    if ($(this).parent().hasClass('faq__item--active')) {
      $(this).parent().removeClass('faq__item--active');
      $(".faq__item_content").slideUp("slow");
    }
    else {
      $(".faq__item--active .faq__item_content").slideUp("slow");
      $(".faq__item--active").removeClass('faq__item--active');
      $(this).parent().addClass('faq__item--active');
      $(".faq__item--active .faq__item_content").slideDown("slow");
    }
  });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('header').toggleClass('header--menu');
  });

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header--active');
      }
  });

//-------------------------скорость якоря---------------------------------------
  $(".click").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  });

});

//----------------------------------------preloader----------------------------------

  // $(window).on('load', function(){
  //   $('.preloader').delay(1000).fadeOut('slow');
  // });
