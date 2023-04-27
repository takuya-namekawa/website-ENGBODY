



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







 //FAQのアコーディオン
 $('.accordion__question').on('click', function(){
   $(this).toggleClass('active')
   $(this).next().slideToggle(200);
 });