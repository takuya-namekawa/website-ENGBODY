$(function (){
 //スクロールエフェクト
  function fadeUpEffect() {
    $('.fadeUpEffect').each(function (){
      var elemPos = $(this).offset().top + 100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('fadeUp');
      }
    });
  }
  $(window).scroll(function(){
    fadeUpEffect();
  });

 //スクロールに応じてヘッダーにactiveクラスを付与
  $(window).scroll(function (){
    if ($(this).scrollTop() > 200) {
      $('.header').addClass('header--active');
    } else {
      $('.header').removeClass('header--active');
    }
  });




  //Swiperの初期化
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


 //トレーナーのタブ
 $tabs = $('.tab');
 $('.tab').on('click', function() {
   $('.tab--active').removeClass('tab--active');
   $(this).addClass('tab--active');
   const index = $tabs.index(this);
   $('.tab-content').removeClass('show').eq(index).addClass('show');
 });




 //FAQのアコーディオン
 $('.accordion__question').on('click', function(){
   $(this).toggleClass('active')
   $(this).next().slideToggle(200);
 });


 // スクロールイベント

 $('.price-list').scroll(function() {
   if ($(this).scrollLeft() > 20 ) {
     $('.price-list__scroll').fadeOut();
   }
 });
 
 
 
 
 
 
 
 
});



