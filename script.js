/* ============================================
   Mobile Navigation Toggle
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('mobile-active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('mobile-active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = event.target.closest('.nav-container');
        if (!isClickInsideNav && navMenu.classList.contains('mobile-active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('mobile-active');
        }
    });
});

/* ============================================
   Active Navigation Link Indicator
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Call on load
});

/* ============================================
   Fade-In Animation on Scroll
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements that should animate
    const elementsToAnimate = document.querySelectorAll(
        '.about-content, .skill-category, .project-card, .cert-card, .education-item, .info-item'
    );

    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

/* ============================================
   Smooth Scroll Behavior (for older browsers)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Check if smooth scroll is not natively supported
    if (!('scrollBehavior' in document.documentElement.style)) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    const offsetTop = target.offsetTop - 80;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
});

/* ============================================
   Placeholder Links Handler
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const placeholderLinks = document.querySelectorAll('a[href="#"]');
    
    placeholderLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // If it's truly a placeholder, just prevent default
            if (this.textContent.includes('Credential')) {
                e.preventDefault();
                alert('Credential link will be added once available.');
            }
        });
    });
});

/* ============================================
   Navbar Scroll Effect
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});

/* ============================================
   Skill Tag Interaction
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');

    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

/* ============================================
   Project Card Counter (Optional Enhancement)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        card.setAttribute('data-project', index + 1);
    });
});

/* ============================================
   Email Link Handler
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow default behavior for mailto links
            // This will open the user's default email client
        });
    });
});

/* ============================================
   Print Friendly
   ============================================ */

if (typeof window !== 'undefined') {
    window.printPage = function() {
        window.print();
    };
}

/* ============================================
   Analytics/Event Tracking (Optional)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Track button clicks
    const buttons = document.querySelectorAll('a[href^="http"], a[href^="mailto:"], a[href^="tel:"]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // You can add analytics tracking here
            // Example: ga('send', 'event', 'External Link', 'click', this.href);
        });
    });
});

/* ============================================
   Performance: Lazy Load Images (if added)
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});

/* ============================================
   Keyboard Accessibility Enhancements
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');

    interactiveElements.forEach(el => {
        el.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                // Trigger click on Enter or Space
                if (this.tagName !== 'A') {
                    this.click();
                }
            }
        });
    });
});

/* ============================================
   Console Welcome Message
   ============================================ */

console.log(
    '%c💻 Welcome to Kaleemullah\'s Portfolio!\n' +
    '%cCyber Security Student | Blue Team & Web Application Security\n' +
    '%cGitHub: https://github.com/Kaleemullah2025\n' +
    '%cEmail: kaleemkhani0543@gmail.com',
    'color: #00d4ff; font-size: 16px; font-weight: bold;',
    'color: #a0aac3; font-size: 12px;',
    'color: #6b7280; font-size: 11px;',
    'color: #6b7280; font-size: 11px;'
);
