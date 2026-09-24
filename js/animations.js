/* ==========================================================
   Constructora ArgaMax - animations.js
   Animaciones con IntersectionObserver (reveal + counters)
   ========================================================== */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        initRevealOnScroll();
        initCounters();
        initCarouselAuto();
    });

    // -------- Reveal on scroll --------
    function initRevealOnScroll() {
        const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        if (!targets.length || !('IntersectionObserver' in window)) {
            targets.forEach(t => t.classList.add('visible'));
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
        targets.forEach(t => observer.observe(t));
    }

    // -------- Contadores animados --------
    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        if (!counters.length || !('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (typeof window.App?.animateCounter === 'function') {
                        window.App.animateCounter(entry.target);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        counters.forEach(c => observer.observe(c));
    }

    // -------- Autoplay del carousel de testimonios --------
    function initCarouselAuto() {
        const carousel = document.getElementById('testimonialCarousel');
        if (!carousel || typeof bootstrap === 'undefined') return;

        new bootstrap.Carousel(carousel, {
            interval: 5000,
            ride: 'carousel',
            pause: 'hover'
        });
    }
})();
