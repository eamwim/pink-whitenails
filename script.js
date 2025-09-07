document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('#hero-headline', {
        speed: 75,
        waitUntilVisible: true,
    }).go();
});

// =============================
// Back to Top Button Logic
// =============================
const backToTopButton = document.getElementById('back-to-top-btn');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Smooth scroll to top when button is clicked
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link jump
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =============================
// LightGallery Initialization
// =============================
const gallery = document.getElementById('lightgallery');
if (gallery) {
  lightGallery(gallery, {
      selector: '.gallery-item a',
      download: false
  });
}