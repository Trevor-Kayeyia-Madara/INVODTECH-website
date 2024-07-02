//-----------------------------------------------------------------------------------------// 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centeredSlides: 'true',
    fade: 'true',
    grabCursor: 'true',
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
//------------ Hamburger menu --------------------//
document.addEventListener('DOMContentLoaded', function() {
  const toggler = document.querySelector('.navbar-toggler');
  const menu = document.querySelector('.navbar ul');

  toggler.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
});
//------------Testimonials-------------------// 
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
//----------- Back-To-Top --------------// 
document.addEventListener("DOMContentLoaded", function() {
  var backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
          backToTopBtn.style.display = 'block';
      } else {
          backToTopBtn.style.display = 'none';
      }
  });

  backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault(); 
  
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});