// carousel.js
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initial setup
showSlide(currentIndex);

// Set up interval for automatic slide change
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Event listeners for manual control
document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);
