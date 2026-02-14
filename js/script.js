/**
 * Social Media Manager Portfolio - Main Script
 * Handles: sticky nav, mobile menu, smooth scroll, scroll animations
 */

(function () {
  'use strict';

  // ---------- Sticky Navbar (add shadow on scroll) ----------
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    function updateNavbar() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); // run once on load
  }

  // ---------- Mobile Menu (hamburger) ----------
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu when clicking a link (for anchor or page change)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---------- Scroll-triggered fade-in animations ----------
  const fadeElements = document.querySelectorAll('.fade-in');

  function checkFadeIn() {
    const windowHeight = window.innerHeight;
    const triggerBottom = windowHeight * 0.85;

    fadeElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }

  if (fadeElements.length) {
    window.addEventListener('scroll', checkFadeIn);
    window.addEventListener('resize', checkFadeIn);
    checkFadeIn(); // run once on load
  }

  // ---------- Contact form (demo: prevent default submit when no backend) ----------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks for your message! This is a demo — connect the form to your email or backend when ready.');
    });
  }
})();
