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
      hamburger.classList.toggle('active'); // Toggle the hamburger button active state
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
  
  ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
  });
  
  ScrollReveal().reveal(".read-more-btn", {
    ...scrollRevealOption,
    interval: 200,
  });
  
  ScrollReveal().reveal(".about2__image img", {
    ...scrollRevealOption,
    origin: "right",
    interval: 500,
  });
  ScrollReveal().reveal(".about2__content h1", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".about2__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".about2__content form", {
    ...scrollRevealOption,
    delay: 2500,
  });
  
  ScrollReveal().reveal(".qualifications__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".qualifications__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".qualifications__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".qualifications__list li", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
  });
  ScrollReveal().reveal(".skills__image img", {
    ...scrollRevealOption,
    origin: "right",
    interval: 500,
  });
  ScrollReveal().reveal(".skills-list", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".certificate-card", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
  });
 
  


  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
  });
  

  
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const conferencesCards = Array.from(document.querySelectorAll(".conferences__card"));
  
  next.addEventListener("click", (e) => {
    for (let index = 0; index < conferencesCards.length; index++) {
      if (conferencesCards[index].classList.contains("active")) {
        const nextIndex = (index + 1) % conferencesCards.length;
        conferencesCards[index].classList.remove("active");
        conferencesCards[nextIndex].classList.add("active");
        break;
      }
    }
  });
  
  prev.addEventListener("click", (e) => {
    for (let index = 0; index < conferencesCards.length; index++) {
      if (conferencesCards[index].classList.contains("active")) {
        const prevIndex = (index ? index : conferencesCards.length) - 1;
        conferencesCards[index].classList.remove("active");
        conferencesCards[prevIndex].classList.add("active");
        break;
      }
    }
  });
  
 

  // whatsapp
  document.getElementById("whatsapp-button").addEventListener("click", function() {
    const phoneNumber = "+2349037711141"; // Replace with lawyer's WhatsApp number
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
    let whatsappMessage = `Hello, my name is ${name}. My phone number is ${phone}. My email is ${email}. I want to discuss about ${message}`;
    whatsappMessage = encodeURIComponent(whatsappMessage);

    // Redirect to WhatsApp chat
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
});





function myFunction() {
  console.log("Function called");
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    console.log("Hiding dots and showing more text");
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    console.log("Showing dots and hiding more text");
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  console.log("Function2 called");
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    console.log("Hiding dots and showing more text");
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    console.log("Showing dots and hiding more text");
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}

