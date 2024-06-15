let slideIndex = 1;
showSlides(slideIndex);
let slideInterval = setInterval(() => plusSlides(1), 5000); // Change slide every 5 seconds

function plusSlides(n) {
    showSlides(slideIndex += n);
    resetInterval(); // Reset interval when manual navigation is used
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetInterval(); // Reset interval when manual navigation is used
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("slide-up");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("slide-up");
    dots[slideIndex-1].className += " active";
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => plusSlides(1), 5000); // Change slide every 5 seconds
}

let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseover', () => clearInterval(slideInterval));
slideshowContainer.addEventListener('mouseout', () => resetInterval());
