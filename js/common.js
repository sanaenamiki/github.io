// totop ボタン
$(function(){
    var pagetop = $('#page_top');
    pagetop.hide();
  
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });


// ハンバーガーメニュー
$(function() {
    $('.menu-btn').on('click', function() {
      if ($('.hamburger-menu').hasClass('active')) {
        $('.hamburger-menu').removeClass('active');
      } else {
        $('.hamburger-menu').addClass('active');
      }
     });
});
