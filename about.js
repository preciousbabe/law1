const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
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
  
  ScrollReveal().reveal(".about-section h1", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".about-section p", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".read-more-btn", {
    ...scrollRevealOption,
    interval: 200,
  });
  ScrollReveal().reveal(".certificate-card", {
    ...scrollRevealOption,
    delay: 500,
    interval: 300,
  });
  ScrollReveal().reveal(".qualifications__image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".certificate-card", {
    ...scrollRevealOption,
    delay: 500,
    interval: 300,
  });
  ScrollReveal().reveal(".qualifications__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".qualifications__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".qualifications__list li", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
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
    delay: 1000,
  });
  ScrollReveal().reveal(".section__header", {
    ...scrollRevealOption,
    interval: 200,
  });
  ScrollReveal().reveal(".section__subheader", {
    ...scrollRevealOption,
    interval: 200,
  });






  document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const navLinks = document.querySelectorAll(".links"); // Select all links with the class "links"

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent instant navigation

            loader.classList.add("active"); // Show loader

            const targetUrl = link.href; // Store the target URL

            setTimeout(() => {
                window.location.href = targetUrl; // Navigate after delay
            }, 2000); // 2 seconds delay
        });
    });
});