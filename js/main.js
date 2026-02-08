document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const isOpen = mobileMenu.classList.contains('open');

            // Toggle icons
            if (isOpen) {
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scrolling for Anchor Links (Polyfill-like behavior if needed, generally handled by CSS)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Close mobile menu if open
                if (mobileMenu && mobileMenu.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Check for interested product from product page
const interestedProduct = sessionStorage.getItem('interestedProduct');
const messageField = document.getElementById('message');
if (interestedProduct && messageField) {
    messageField.value = `I am interested in getting a quote for ${interestedProduct}. Please share pricing and availability.`;
    // Clear it so it doesn't persist forever
    sessionStorage.removeItem('interestedProduct');

    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        setTimeout(() => {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    }
}
});
