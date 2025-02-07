let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".welcome-slide");

    slides.forEach(slide => slide.style.display = "none");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Auto-change slide every 3 seconds
}

// Manual Slide Navigation
function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

// Initialize Slideshow
document.addEventListener("DOMContentLoaded", showSlides);
