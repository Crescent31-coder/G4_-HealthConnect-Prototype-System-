// Scroll-to-top visibility
    const scrollBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    });

    // Accordion toggle
    function toggleAccordion(id) {
      const el = document.getElementById(id);
      el.classList.toggle('open');
    }

    // Finding expand/collapse
    function toggleFinding(header) {
      const body = header.nextElementSibling;
      body.classList.toggle('open');
      const chevron = header.querySelector('span:last-child');
      chevron.textContent = body.classList.contains('open') ? '▲' : '▼';
    }

    // Fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--white)' : '';
        a.style.background = a.getAttribute('href') === '#' + current ? 'var(--surface2)' : '';
      });
    });
