$(function() {
  initPage.init();
});

// 화면 설정
var initPage = {
  // 초기 실행 함수
  init: function() {
    // 가상 스크롤바, modal popup, 검색
    var script = '<script type="text/javascript" src="/xe/design/assets/js/vendors/jquery.min.js"></script>';
    script += '<script type="text/javascript" src="/xe/design/assets/js/vendors/aos.js"></script>';
    // script += '<script type="text/javascript" src="/assets/js/vendors/swiper.min.js"></script>';

    script += '<script type="text/javascript" src="/xe/design/assets/js/common.js"></script>';
    script += '<script type="text/javascript" src="/xe/design/assets/js/sub.js"></script>';

    $('head').append(script);

    // header, footer load
    this.header();
    this.footer();
  },

  // header load
  header: function() {
    var $_this = this;
    var headerObj = $('.wrap > header');
    headerObj.load('/xe/design/assets/layout/header.html', function() {
      $('.footer').find('.scrollbar-dynamic').scrollbar();
    });
  },
  // footer load // 작업중 영역 입니다.
  footer: function() {
      var footerObj = $('.wrap > footer');
      footerObj.load('/xe/design/assets/layout/footer.html', function() {
          $('.footer').find('.scrollbar-dynamic').scrollbar();
      });
  },

};