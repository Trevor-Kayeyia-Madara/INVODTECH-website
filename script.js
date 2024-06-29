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
//----------- Back-To-Top --------------// 
document.addEventListener("DOMContentLoaded", function() {
  var backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', function() {
      // Show button when user scrolls down 20px from the top
      if (window.scrollY > 20) {
          backToTopBtn.style.display = 'block';
      } else {
          backToTopBtn.style.display = 'none';
      }
  });

  backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      // Smooth scroll to top of page
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});