
jQuery(function ($) {
  
  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  $('.js-hamburger').click(function () {
    $(this).toggleClass('is-open');
    $('.js-drawer').toggleClass('is-open');
  });

});

$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form #name').val() !== "" &&
      $('#form #mail').val() !== "" &&
      $('#form #content').val() !== ""
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});

$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSelYLlpZuJ2riYHLcmKwt7SK7ViXXaSpZaVu34sqkDWDaAKIg/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".p-contact__end-message").slideDown();
          $(".p-contact__submit").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".p-contact__false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});

//scroll_effect
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});