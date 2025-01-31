// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = '&times;'; // Add 'X' as close icon

  // Add the close button dynamically
  navLinks.appendChild(closeBtn);

  // Toggle the navigation menu
  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('active'); // Toggle the logo display
  });

  // Close the menu when a nav link is clicked
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
      item.addEventListener('click', () => {
          navLinks.classList.remove('show');
          hamburger.classList.remove('active');
      });
  });

  // Close the menu when 'X' button is clicked
  closeBtn.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
  });

  const navbar = document.querySelector(".navbar");

  // Change navbar background on scroll
  window.addEventListener("scroll", function() {
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
          
      } else {
          navbar.classList.remove("scrolled");
          
      }
  });
});



// Change navbar color and logo visibility on scroll
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  
  if (scrollY > 50) {
      navbar.classList.add("scrolled");
      logo.style.display = "none";  // Hide the first logo
      logo2.style.display = "block"; // Show the second logo
  } else {
      navbar.classList.remove("scrolled");
      logo.style.display = "block";  // Show the first logo
      logo2.style.display = "none";   // Hide the second logo
  }
});




const scrollRevealOption = {
    distance: "40px",
    origin: "bottom",
    duration: 1200,
  };
  
  // header container
  ScrollReveal().reveal(".about-img img", {
    ...scrollRevealOption,
    delay: 100,
  });
  
  ScrollReveal().reveal(".hero p", {
    ...scrollRevealOption,
    origin: "right",
    delay: 700,
  });

  ScrollReveal().reveal(".hero img", {
    ...scrollRevealOption,
    delay: 100,
  });
  
  // about container
  ScrollReveal().reveal(".hero h1", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
  });
  
  ScrollReveal().reveal(".about-section h1", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".about-section p", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".blog .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
    origin: "right",
  });

  ScrollReveal().reveal(".blog .blog-title", {
    ...scrollRevealOption,
    delay: 600,
    origin: "left",
  });
  
  ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
  });
  
  // room container
  ScrollReveal().reveal(".blog-card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // service container
  ScrollReveal().reveal(".contact-info h3", {
    ...scrollRevealOption,
    interval: 200,
    origin: "right",
  });
    
  ScrollReveal().reveal(".input-group input", {
    ...scrollRevealOption,
    interval: 100,
  });

  ScrollReveal().reveal(".practice-item", {
    ...scrollRevealOption,
    interval: 200,
  });

  ScrollReveal().reveal(".contact-title", {
    ...scrollRevealOption,
    interval: 200,
  });

  ScrollReveal().reveal(".contact-subtitle", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".btn-submit", {
    ...scrollRevealOption,
    interval: 200,
  });

  ScrollReveal().reveal(".contact-form textarea", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".contact-info p", {
    ...scrollRevealOption,
    interval: 200,
  });



//   whatsapp
document.getElementById("whatsapp-button").addEventListener("click", function() {
    const phoneNumber = "+1234567890"; // Replace with lawyer's WhatsApp number
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Reset previous error states
    document.getElementById("name").classList.remove("error");
    document.getElementById("phone").classList.remove("error");
    document.getElementById("email").classList.remove("error");
    document.getElementById("message").classList.remove("error");
    errorMessage.style.display = "none";

    // Basic validation
    if (name === "" || phone === "" || email === "" || message === "") {
        errorMessage.innerText = "All fields are required.";
        errorMessage.style.display = "block";

        if (name === "") document.getElementById("name").classList.add("error");
        if (phone === "") document.getElementById("phone").classList.add("error");
        if (email === "") document.getElementById("email").classList.add("error");
        if (message === "") document.getElementById("message").classList.add("error");

        return; // Stop the function if validation fails
    }

    // Validate phone number (only digits, 7-15 characters)
    const phonePattern = /^[0-9]{7,15}$/;
    if (!phonePattern.test(phone)) {
        errorMessage.innerText = "Please enter a valid phone number (7-15 digits).";
        errorMessage.style.display = "block";
        document.getElementById("phone").classList.add("error");
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerText = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        document.getElementById("email").classList.add("error");
        return;
    }

    // Construct the WhatsApp message
    let whatsappMessage = `Hello, my name is ${name}. My phone number is ${phone}. My email is ${email}. %0A%0A${message}`;
    whatsappMessage = encodeURIComponent(whatsappMessage);

    // Redirect to WhatsApp chat
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
});
