// Add any interactive features here. For now, this page doesn't require JavaScript for basic functionality.
console.log("Page loaded!");
// No additional JavaScript is required for this static section.
// You can add interactive features like modals or animations if needed.
console.log("Services section loaded");

// Example: Adding smooth scroll for "Apply Now" button
document.querySelector('button').addEventListener('click', () => {
    window.scrollTo({
        top: 1000,
        behavior: 'smooth'
    });
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    // Move the slides
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlides(n) {
    showSlide(currentSlide + n);
}

// Automatic slide change every 3 seconds
setInterval(() => {
    moveSlides(1);
}, 3000);
const newsWrapper = document.querySelector('.news-wrapper');

newsWrapper.addEventListener('mouseover', () => {
    newsWrapper.style.animationPlayState = 'paused';
});

newsWrapper.addEventListener('mouseout', () => {
    newsWrapper.style.animationPlayState = 'running';
});
