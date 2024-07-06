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

//===================  Chatbox Js ==========================//
document.addEventListener('DOMContentLoaded', function() {
  const chatIcon = document.getElementById('chat-icon');
  const chatInterface = document.getElementById('chat-interface');
  const messagesDiv = document.getElementById('messages');
  const userInput = document.getElementById('userInput');
  const sendButton = document.getElementById('sendButton');
  const whatsappIcon = document.getElementById('whatsapp-icon');

  // Toggle chat interface visibility
  chatIcon.addEventListener('click', function() {
      if (chatInterface.style.display === 'block') {
          chatInterface.style.display = 'none';
      } else {
          chatInterface.style.display = 'block';
      }
  });

  // Function to add a message to the chat
  function addMessage(message, className = '') {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
      if (className) {
          messageElement.classList.add(className);
      }
      messagesDiv.appendChild(messageElement);
      return messageElement;
  }

  function simulateTyping(text, callback, startDelay = 3000) {
      setTimeout(() => {
          const typingSpeed = 150; //  For typewriter effect
          let index = 0;
          const messageElement = addMessage('');
          const typingInterval = setInterval(() => {
              if (index < text.length) {
                  messageElement.textContent += text[index];
                  index++;
              } else {
                  clearInterval(typingInterval);
                  callback();
              }
          }, typingSpeed);
      }, startDelay);
  }

  // Function to handle sending message
  sendButton.addEventListener('click', function() {
      const userMessage = userInput.value.trim();
      if (userMessage !== '') {
          addMessage(userMessage); // Display user message
          userInput.value = ''; // Clear input field
          simulateTyping("Thank you for contacting InvodTech Ltd! For more information reach out to us at https://invodtech.com/ or Click the link below 👇", () => {
              whatsappIcon.style.display = 'block'; // Show WhatsApp icon after typing animation
          }, 3000); // 3 seconds delay before typing animation starts
      }
  });
});
