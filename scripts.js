document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for Apple-like fade-up & blur animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Handle stagger list animations natively in JS
        const staggerLists = entry.target.querySelectorAll('.stagger-list li');
        if (staggerLists.length > 0) {
          staggerLists.forEach((li, index) => {
            setTimeout(() => {
              li.style.opacity = '1';
              li.style.transform = 'translateX(0)';
            }, index * 120 + 300); // Wait for section fade wrapper then stagger 120ms each
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeUpElements = document.querySelectorAll('.fade-up');
  fadeUpElements.forEach(el => observer.observe(el));

  // Navbar blur effect dynamically adjust on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(0, 0, 0, 0.7)';
      navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
      navbar.style.background = 'rgba(0, 0, 0, 0.4)';
      navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
    }
  });
  
  // Subtle Parallax effect for the hero section
  const heroContent = document.querySelector('.hero-content');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos < window.innerHeight && heroContent) {
      // Move down slightly, and fade out
      heroContent.style.transform = `translateY(${scrollPos * 0.35}px)`;
      heroContent.style.opacity = 1 - (scrollPos / 600);
    }
  });

  // Smooth scroll for internal nav links
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
});
