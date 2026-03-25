// ====================== MAIN SCRIPT ======================

document.addEventListener("DOMContentLoaded", function () {

    // ==================== Mobile Navigation ====================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.querySelector(".navbar");

    // Create close button dynamically
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    navLinks.appendChild(closeBtn);

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('show');
        hamburger.classList.remove('active');
    });

    // Close menu when any nav link is clicked
    document.querySelectorAll('.nav-links a').forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


   // ==================== Swiper Gallery (Photo Gallery) ====================
const swiper = new Swiper(".gallery-swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

    // ==================== Conferences Manual Slider ====================
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const conferencesCards = Array.from(document.querySelectorAll(".conferences__card"));

    if (next && prev && conferencesCards.length > 0) {
        next.addEventListener("click", () => {
            for (let i = 0; i < conferencesCards.length; i++) {
                if (conferencesCards[i].classList.contains("active")) {
                    conferencesCards[i].classList.remove("active");
                    const nextIndex = (i + 1) % conferencesCards.length;
                    conferencesCards[nextIndex].classList.add("active");
                    break;
                }
            }
        });

        prev.addEventListener("click", () => {
            for (let i = 0; i < conferencesCards.length; i++) {
                if (conferencesCards[i].classList.contains("active")) {
                    conferencesCards[i].classList.remove("active");
                    const prevIndex = (i === 0) ? conferencesCards.length - 1 : i - 1;
                    conferencesCards[prevIndex].classList.add("active");
                    break;
                }
            }
        });
    }


    // ==================== WhatsApp Form Handler ====================
    const whatsappBtn = document.getElementById("whatsapp-button");
    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", function () {
            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const errorMessage = document.getElementById("error-message");

            // Reset errors
            document.querySelectorAll("#name, #phone, #email, #message").forEach(el => {
                el.classList.remove("error");
            });
            errorMessage.style.display = "none";

            // Validation
            if (!name || !phone || !email || !message) {
                errorMessage.innerText = "All fields are required.";
                errorMessage.style.display = "block";

                if (!name) document.getElementById("name").classList.add("error");
                if (!phone) document.getElementById("phone").classList.add("error");
                if (!email) document.getElementById("email").classList.add("error");
                if (!message) document.getElementById("message").classList.add("error");
                return;
            }

            const phonePattern = /^[0-9]{7,15}$/;
            if (!phonePattern.test(phone)) {
                errorMessage.innerText = "Please enter a valid phone number (7-15 digits).";
                errorMessage.style.display = "block";
                document.getElementById("phone").classList.add("error");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errorMessage.innerText = "Please enter a valid email address.";
                errorMessage.style.display = "block";
                document.getElementById("email").classList.add("error");
                return;
            }

            // Send to WhatsApp
            const whatsappMessage = encodeURIComponent(
                `Hello, my name is ${name}. My phone number is ${phone}. My email is ${email}. I want to discuss about ${message}`
            );

            window.open(`https://wa.me/2349037711141?text=${whatsappMessage}`, "_blank");
        });
    }


    // ==================== ScrollReveal Animations ====================
    const scrollRevealOption = {
        distance: "40px",
        origin: "bottom",
        duration: 1200,
    };

    ScrollReveal().reveal(".hero p", { ...scrollRevealOption, origin: "right", delay: 700 });
    ScrollReveal().reveal(".hero img", { ...scrollRevealOption, delay: 100 });
    ScrollReveal().reveal(".hero h1", { ...scrollRevealOption, origin: "left", delay: 500 });
    ScrollReveal().reveal(".welcome-slideshow", { ...scrollRevealOption, origin: "right", delay: 500 });
    ScrollReveal().reveal(".welcome-card", { ...scrollRevealOption, origin: "left", delay: 500 });
    ScrollReveal().reveal(".achieveh2", scrollRevealOption);
    ScrollReveal().reveal(".achievement-box", scrollRevealOption);
    ScrollReveal().reveal(".skills__image img", { ...scrollRevealOption, origin: "right", delay: 1000 });
    ScrollReveal().reveal(".skills-list", { ...scrollRevealOption, origin: "left", delay: 500, interval: 300 });
    ScrollReveal().reveal(".contact-section", { ...scrollRevealOption, delay: 500 });
    ScrollReveal().reveal(".gallery__card", { ...scrollRevealOption, delay: 200, interval: 150 });
    ScrollReveal().reveal(".section__header", { ...scrollRevealOption, interval: 200 });
    ScrollReveal().reveal(".section__subheader", { ...scrollRevealOption, interval: 200 });

    
    // ==================== Page Loader on Navigation ====================
    const loader = document.getElementById("loader");
    if (loader) {
        document.querySelectorAll(".links").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                loader.classList.add("active");

                setTimeout(() => {
                    window.location.href = this.href;
                }, 2000);
            });
        });
    }

});