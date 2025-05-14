// Navigation bar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 30, 0.95)';
    } else {
        navbar.style.backgroundColor = '#0F171E';
    }
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
        // Here you would typically make an API call to search for content
    }
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

// Content slider functionality
const contentSlider = document.querySelector('.content-slider');
let isDown = false;
let startX;
let scrollLeft;

contentSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    contentSlider.style.cursor = 'grabbing';
    startX = e.pageX - contentSlider.offsetLeft;
    scrollLeft = contentSlider.scrollLeft;
});

contentSlider.addEventListener('mouseleave', () => {
    isDown = false;
    contentSlider.style.cursor = 'grab';
});

contentSlider.addEventListener('mouseup', () => {
    isDown = false;
    contentSlider.style.cursor = 'grab';
});

contentSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - contentSlider.offsetLeft;
    const walk = (x - startX) * 2;
    contentSlider.scrollLeft = scrollLeft - walk;
});

// Add hover effect to content cards
const contentCards = document.querySelectorAll('.content-card');
contentCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Sign in button functionality
const signInButton = document.querySelector('.user-profile');
signInButton.addEventListener('click', () => {
    alert('Sign in functionality would be implemented here');
});

// CTA button functionality
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    alert('Start your free trial! This would redirect to a sign-up page.');
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease-in-out';
}); 