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

  $('.header-menu').on('mouseover', function (){

    if(width > 991) {
      // if ($(this).has('ul').length > 0) {
        $('.js-header').addClass('is--show-depth');
      // }
    }
  }).on('mouseout', function () {
    $('.js-header').removeClass('is--show-depth')
  })


});
