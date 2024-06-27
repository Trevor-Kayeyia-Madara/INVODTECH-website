//-----------------------------------------------------------------------------------------// 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centeredSlides: 'true',
    fade: 'true',
    grabCursor: 'true',
   /* pagination: {
        el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,  
    },*/
    loop: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
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
      dynamicBullets: true,
    },
  });

//------------------------Testimonials--------------------------------------------// 
document.addEventListener('DOMContentLoaded', () => {
  let testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  function showNextTestimonial() {
      testimonials[index].classList.remove('active');
      index = (index + 1) % testimonials.length;
      testimonials[index].classList.add('active');
  }

  setInterval(showNextTestimonial, 5000);
});