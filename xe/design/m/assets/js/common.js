$(function() {

  $(window).scroll(function (){
    var scroll = $(document).scrollTop();
    if (scroll > 0) {
      $('.js-header').addClass('is--blue')
    }else {
      $('.js-header').removeClass('is--blue')
    }
  })

  // 모바일 메뉴 버튼 열기/닫기
  // $('.js-header-menu-button').on('click',function (){
  //   $(this).parents('.js-header').toggleClass('is--open');
  // })

  // header 모바일 메뉴 열기상태 초기화
  // $(window).on('resize', function (){
  //   mobileReset()
  // })
  var width = $(window).width();
  var headerMenuElement = document.querySelector('.js-header-menu');

  $('.js-header-menu-button').on('click', function () {
    $(this).parents('.header').addClass('is--active')
    bodyScrollLock.disableBodyScroll(headerMenuElement);
  })
  $('.js-header-menu-close').on('click', function () {
    $(this).parents('.header').removeClass('is--active')
    bodyScrollLock.enableBodyScroll(headerMenuElement);
  })


// // 모바일일 경우 2차메뉴 열기
  $('.js-header-menu-item__link').on('click', function (e){
    var parentLi = $(this).parents('li')
    var $curruntClass = parentLi.hasClass('is--open');
    if (parentLi.has('ul').length > 0) {
      e.preventDefault()
      $('.header-menu__item').removeClass('is--open')
      $('.header-menu__item ul').stop().slideUp()
      parentLi.addClass('is--open');
      parentLi.find('ul').stop().slideDown()
      if ($curruntClass) {
        parentLi.removeClass('is--open');
        parentLi.find('ul').stop().slideUp()
      }
    }
  })


});
