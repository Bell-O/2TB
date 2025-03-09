// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('active');
}

// Handle scroll effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax effect for cards
    const cards = document.querySelectorAll('.ambassador-card, .council-info');
    cards.forEach(card => {
        if (card) {
            card.style.transform = `translateY(${scrolled * 0.02}px)`;
        }
    });
    
    // Show/hide header background
    const header = document.querySelector('header');
    if (header) {
        if (scrolled > 50) {
            header.style.background = 'rgba(45, 52, 54, 0.98)';
        } else {
            header.style.background = 'rgba(45, 52, 54, 0.95)';
        }
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add menu toggle event listener
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const nav = document.getElementById('main-nav');
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.ambassador-card, .council-info, .application-section, .form-container, .requirements-box').forEach(section => {
        observer.observe(section);
    });
});