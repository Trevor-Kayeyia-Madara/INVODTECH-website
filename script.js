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
document.addEventListener("DOMContentLoaded", function() {
  const chatIcon = document.getElementById("chat-icon");
  const chatInterface = document.getElementById("chat-interface");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");
  const messages = document.getElementById("messages");

  let isGreetingDisplayed = false;


  chatIcon.addEventListener("click", function() {
    chatInterface.style.display = "block";
    chatIcon.style.display = "none"; 
    userInput.focus(); 
  });


  function sendMessage() {
    const message = userInput.value.trim(); 

    if (message === "") {
    
      chatInterface.style.display = "none";
      chatIcon.style.display = "block";
      return; 
    }

  
    displayMessage(message, 'left');

   
    userInput.value = "";

   
    displayTypingAnimation();

  
    setTimeout(() => {
      removeTypingAnimation();

      if (!isGreetingDisplayed) {
       
        const currentTime = new Date().getHours();
        let greeting;
        if (currentTime < 12) {
          greeting = "Good Morning";
        } else {
          greeting = "Good Afternoon";
        }
        const initialResponse = `${greeting},<br>How may I help you today?`;
        displayMessage(initialResponse, 'right');

        isGreetingDisplayed = true;

        userInput.addEventListener("keyup", handleNextMessageOnEnter);
        sendButton.addEventListener("click", handleNextMessage);
      } else {
        handleNextMessage();
      }
    }, 7000); 
  }

  // Function to handle next user message
  function handleNextMessage() {
 
    const finalResponse = "Thank you for contacting InvodTech Ltd! For more information about your request reach out to us on Instagram @invod.tech or Via WhatsApp 👇";
    displayMessage(finalResponse, 'right');

   
    setTimeout(() => {
      displayWhatsAppIcon();
    }, 2600); 

    
    userInput.removeEventListener("keyup", handleNextMessageOnEnter);
    sendButton.removeEventListener("click", handleNextMessage);
  }


  userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });


  sendButton.addEventListener("click", sendMessage);


  function resetConversation() {
    messages.innerHTML = ""; 
    isGreetingDisplayed = false; 
  }

  document.addEventListener("click", function(event) {
    if (!chatInterface.contains(event.target) && !chatIcon.contains(event.target)) {
      chatInterface.style.display = "none";
      chatIcon.style.display = "block"; 
      resetConversation(); 
    }
  });


  chatInterface.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  function displayMessage(text, alignment, isTyping = false) {
    const messageContainer = document.createElement("div");
    messageContainer.className = `message-container ${alignment}`;
    const message = document.createElement("div");
    message.className = `message ${alignment}`;
    message.innerHTML = text;
    if (!isTyping) {
      const time = document.createElement("div");
      time.className = "message-time";
      time.textContent = new Date().toLocaleTimeString();
      message.appendChild(time);
    } else {
      message.classList.add("typing");
    }
    messageContainer.appendChild(message);
    messages.appendChild(messageContainer);
    messages.scrollTop = messages.scrollHeight; 
  }

  function displayTypingAnimation() {
    displayMessage("Typing...", 'right', true);
  }

  function removeTypingAnimation() {
    const typingMessage = document.querySelector(".message.typing");
    if (typingMessage) {
      typingMessage.parentElement.remove();
    }
  }

  function displayWhatsAppIcon() {
    const messageContainer = document.createElement("div");
    messageContainer.className = "message-container right";
    const message = document.createElement("div");
    message.className = "message right whatsapp-icon";
    const whatsappLink = document.createElement("a");
    whatsappLink.href = "https://wa.me/254790728763";
    whatsappLink.target = "Whatsapp";
    const whatsappIcon = document.createElement("img");
    whatsappIcon.src = "assets/services/whatsapp.jfif";
    whatsappIcon.alt = "WhatsApp";
    whatsappIcon.style.width = "40px"; 
    whatsappIcon.style.height = "40px"; 
    whatsappLink.appendChild(whatsappIcon);
    message.appendChild(whatsappLink);
    messageContainer.appendChild(message);
    messages.appendChild(messageContainer);
    messages.scrollTop = messages.scrollHeight; 

   
    whatsappIcon.style.animation = "zoomInOut 2s infinite alternate";

    const style = document.createElement("style");
    style.textContent = `
      @keyframes zoomInOut {
        from { transform: scale(1); }
        to { transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);
  }
});
