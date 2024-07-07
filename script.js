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

/*
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
          const typingSpeed = 80; // 
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
          addMessage(userMessage); 
          userInput.value = ''; 
          simulateTyping("Thank you for contacting InvodTech Ltd! For more information reach out to us on Instagram @Invodtech or via WhatsApp using the link below 👇", () => {
              whatsappIcon.style.display = 'block'; 
          }, 2100); // 
      }
  });
});
*/


/*
document.addEventListener("DOMContentLoaded", function() {
  const chatIcon = document.getElementById("chat-icon");
  const chatInterface = document.getElementById("chat-interface");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");
  const messages = document.getElementById("messages");
  const whatsappIcon = document.getElementById("whatsapp-icon");

  // Show chat interface when chat icon is clicked
  chatIcon.addEventListener("click", function() {
      chatInterface.style.display = "block";
      chatIcon.style.display = "none"; // Hide chat icon when chat interface is shown
  });

  // Hide chat interface if send button is clicked and no message is entered
  sendButton.addEventListener("click", function() {
      const message = userInput.value.trim(); // Trim whitespace

      if (message === "") {
          chatInterface.style.display = "none";
          chatIcon.style.display = "block"; // Show chat icon again when chat interface is hidden
      } else {
          // Display user's message
          const userMessage = document.createElement("div");
          userMessage.textContent = message;
          messages.appendChild(userMessage);

          // Clear input field after sending
          userInput.value = "";

          // Display typing animation
          const typingAnimation = document.createElement("div");
          typingAnimation.textContent = "Typing...";
          messages.appendChild(typingAnimation);

          // Hide input field and send button
          userInput.style.display = "none";
          sendButton.style.display = "block";

          // Simulate typing animation and show automatic response
          setTimeout(() => {
              typingAnimation.remove();

              // Display automatic response
              const autoResponse = document.createElement("div");
              autoResponse.textContent = "Thank you for contacting InvodTech Ltd! For more information reach out to us at http://www.invodtech.com or Click the link below 👇";
              messages.appendChild(autoResponse);

              // Simulate delay before showing WhatsApp icon
              setTimeout(() => {
                  // Display typing animation again
                  const typingAnimation2 = document.createElement("div");
                  typingAnimation2.textContent = "Typing...";
                  messages.appendChild(typingAnimation2);

                  setTimeout(() => {
                      typingAnimation2.remove();
                      whatsappIcon.style.display = "block";
                  }, 7000); // 7 seconds delay for typing animation

              }, 3000); // 3 seconds delay before typing animation starts

          }, 6000); // 6 seconds for typing animation and automatic response
      }
  });

  // Hide chat interface when clicking outside of it
  document.addEventListener("click", function(event) {
      if (!chatInterface.contains(event.target) && !chatIcon.contains(event.target)) {
          chatInterface.style.display = "none";
          chatIcon.style.display = "block"; // Show chat icon again
      }
  });

  // Prevent clicks inside the chat interface from hiding it
  chatInterface.addEventListener("click", function(event) {
      event.stopPropagation();
  });
});

*/
document.addEventListener("DOMContentLoaded", function() {
  const chatIcon = document.getElementById("chat-icon");
  const chatInterface = document.getElementById("chat-interface");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");
  const messages = document.getElementById("messages");

  // Show chat interface when chat icon is clicked
  chatIcon.addEventListener("click", function() {
      chatInterface.style.display = "block";
      chatIcon.style.display = "none"; // Hide chat icon when chat interface is shown
  });

  // Function to send message
  function sendMessage() {
      const message = userInput.value.trim(); // Trim whitespace

      if (message === "") {
          // If no message, hide chat interface and show chat icon again
          chatInterface.style.display = "none";
          chatIcon.style.display = "block";
          return; // Exit function early
      }

      // Display user's message
      displayMessage(message, 'left');

      // Clear input field after sending
      userInput.value = "";

      // Randomize typing animation duration between 4 to 7 seconds
      const typingDuration = Math.floor(Math.random() * 4) + 4; // Random number between 4 to 7
      setTimeout(() => {
          displayMessage("Typing...", 'right', true);

          // Simulate typing animation and show automatic response
          setTimeout(() => {
              removeTypingAnimation();

              // Determine greeting based on time of day
              const currentTime = new Date().getHours();
              let greeting;
              if (currentTime < 12) {
                  greeting = "Good Morning";
              } else {
                  greeting = "Good Afternoon";
              }

              // Prepare auto response based on user input and time of day
              let autoResponse;
              autoResponse = `${greeting},<br>Thank you for contacting InvodTech Ltd! For more information reach out to us at http://www.invodtech.com or Click the link below 👇`;

              // Display automatic response after 3 seconds
              setTimeout(() => {
                  displayMessage(autoResponse, 'right');

                  // Show WhatsApp icon below the auto response
                  displayWhatsAppIcon();
              }, 3000); // 3 seconds for auto response to appear

          }, typingDuration * 1000); // Convert seconds to milliseconds for setTimeout

      }, 0); // No delay for typing animation to appear
  }

  // Event listener for Enter key in input field
  userInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
          sendMessage();
      }
  });

  // Event listener for Send button click
  sendButton.addEventListener("click", sendMessage);

  // Event listener to reset conversation when chat box is closed
  function resetConversation() {
      const exemptionMessage = "I'm exempt from resetting the conversation";
      const lastMessage = messages.lastElementChild.querySelector('.message.left');
      if (!lastMessage || lastMessage.textContent.trim() !== exemptionMessage) {
          // Clear all messages in the chat interface
          messages.innerHTML = "";
      }
  }

  // Hide chat interface when clicking outside of it
  document.addEventListener("click", function(event) {
      if (!chatInterface.contains(event.target) && !chatIcon.contains(event.target)) {
          chatInterface.style.display = "none";
          chatIcon.style.display = "block"; // Show chat icon again
          resetConversation(); // Reset conversation when chat box is closed, excluding exemptions
      }
  });

  // Prevent clicks inside the chat interface from hiding it
  chatInterface.addEventListener("click", function(event) {
      event.stopPropagation();
  });

  function displayMessage(text, alignment, isTyping = false) {
      const messageContainer = document.createElement("div");
      messageContainer.className = `message-container ${alignment}`;
      const message = document.createElement("div");
      message.className = `message ${alignment}`;
      message.innerHTML = text; // Use innerHTML to render HTML content
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
      messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
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
      whatsappIcon.style.width = "40px"; // Adjust size of WhatsApp icon
      whatsappIcon.style.height = "40px"; // Adjust size of WhatsApp icon
      whatsappLink.appendChild(whatsappIcon);
      message.appendChild(whatsappLink);
      messageContainer.appendChild(message);
      messages.appendChild(messageContainer);
      messages.scrollTop = messages.scrollHeight; // Scroll to the bottom

      // Apply CSS animation for continuous zoom effect
      whatsappIcon.style.animation = "zoomInOut 2s infinite alternate";

      // CSS keyframes for zoom animation
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
