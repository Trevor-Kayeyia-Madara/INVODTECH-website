
var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 25,
    loop: true,
    loopFilGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerGroupSkip: 1,
    loop: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });