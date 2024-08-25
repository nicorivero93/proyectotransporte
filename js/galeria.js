/* transportes.css */

let slideIndex = 0;

function moveSlide(n) {
    const slides = document.getElementsByClassName('carousel-item');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    updateSlides();
}

function updateSlides() {
    const slides = document.getElementsByClassName('carousel-item');
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.addEventListener('DOMContentLoaded', updateSlides);
