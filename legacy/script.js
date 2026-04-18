document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------
    // Navbar Scroll Effect
    // ----------------------------------------------------
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ----------------------------------------------------
    // Mobile Menu Toggle
    // ----------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-btn');
    const menuIcon = mobileMenuBtn.querySelector('i');

    function toggleMenu() {
        mobileNav.classList.toggle('active');
        if (mobileNav.classList.contains('active')) {
            menuIcon.classList.remove('ph-list');
            menuIcon.classList.add('ph-x');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            menuIcon.classList.remove('ph-x');
            menuIcon.classList.add('ph-list');
            document.body.style.overflow = '';
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // ----------------------------------------------------
    // Scroll Reveal Initializer
    // ----------------------------------------------------
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing after reveal if you only want it to happen once
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // ----------------------------------------------------
    // Number Counter Animation
    // ----------------------------------------------------
    const statNums = document.querySelectorAll('.stat-num');
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.getAttribute('data-target'));
                let startValue = 0;
                const duration = 2000; // ms
                const incrementTime = 30; // ms update interval
                const steps = duration / incrementTime;
                const increment = Math.ceil(endValue / steps);
                
                const timer = setInterval(() => {
                    startValue += increment;
                    if (startValue >= endValue) {
                        target.innerText = endValue;
                        clearInterval(timer);
                    } else {
                        target.innerText = startValue;
                    }
                }, incrementTime);
                
                observer.unobserve(target); // Only animate once
            }
        });
    }, {
        threshold: 0.5
    });

    statNums.forEach(stat => {
        counterObserver.observe(stat);
    });

});
