$(function() {
  $('.footer').addClass('is--white')
  var mainVisual = new Swiper('.main-visual', {
    paginationClickable: true,
    pagination: { el: '.swiper-pagination.progress', type: 'progressbar', clickable: !1 },
    autoplay: { delay: 5e3, disableOnInteraction: !1 },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    on: {
      init: function () {
        var slideLength = this.slides.length
        $('.main-visual').find('.swiper-label-area').find('.swiper-label__total').text(slideLength);
      },
      slideChange: function () {
        var slideLength = this.slides.length
        var currentNumber = this.realIndex + 1
        if (currentNumber > slideLength) {
          currentNumber = 0
        }
        $('.main-visual').find('.swiper-label-area').find('.swiper-label__number').text(currentNumber);
        $('.main-visual').find('.swiper-text-label__item').css('opacity' ,0)
        $('.main-visual').find('.swiper-text-label__item').eq(currentNumber-1).css('opacity' ,1)
      }
    }
  });

  $('.swiper-autoplay-control-button').on('click', function () {
    if($(this).hasClass('autoplay-stop-icon')) {
      mainVisual.autoplay.stop()
      $(this).addClass('is--hide')
      $('.autoplay-play-icon').removeClass('is--hide')
    }else {
      mainVisual.autoplay.start()
      $(this).addClass('is--hide')
      $('.autoplay-stop-icon').removeClass('is--hide')
    }
  })

  AOS.init({
    duration: 2000
  });
})
