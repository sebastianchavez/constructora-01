/* ==========================================================
   Constructora ArgaMax - main.js
   Funcionalidades globales: navbar, año copyright, helpers
   ========================================================== */

(function() {
    'use strict';

    // -------- Año automático en footer --------
    document.addEventListener('DOMContentLoaded', () => {
        const yearEl = document.getElementById('current-year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        initNavbar();
        initBackToTop();
        initActiveNav();
        initCloseMobileNav();
    });

    // -------- Navbar shrink al hacer scroll --------
    function initNavbar() {
        const navbar = document.querySelector('.navbar-custom');
        if (!navbar) return;

        const handleScroll = () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // -------- Marcar link activo según página --------
    function initActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.navbar-custom .nav-link').forEach(link => {
            const href = (link.getAttribute('href') || '').split('/').pop();
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    // -------- Cerrar menú móvil al hacer click --------
    function initCloseMobileNav() {
        const navCollapse = document.getElementById('mainNavbar');
        if (!navCollapse) return;

        navCollapse.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navCollapse.classList.contains('show')) {
                    const instance = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse, { toggle: false });
                    instance.hide();
                }
            });
        });
    }

    // -------- Botón volver arriba --------
    function initBackToTop() {
        const btn = document.getElementById('backToTop');
        if (!btn) return;

        const toggle = () => btn.classList.toggle('visible', window.scrollY > 400);
        window.addEventListener('scroll', toggle, { passive: true });
        toggle();

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // -------- Helpers públicos --------
    window.App = {
        showToast: function(message, type = 'success') {
            let container = document.querySelector('.toast-container-custom');
            if (!container) {
                container = document.createElement('div');
                container.className = 'toast-container-custom';
                document.body.appendChild(container);
            }
            const toast = document.createElement('div');
            toast.className = `toast-custom ${type === 'error' ? 'error' : ''}`;
            toast.innerHTML = `<strong>${type === 'error' ? 'Error' : '¡Éxito!'}</strong><small>${message}</small>`;
            container.appendChild(toast);
            requestAnimationFrame(() => toast.classList.add('show'));
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 400);
            }, 3500);
        },

        animateCounter: function(el) {
            const target = parseInt(el.dataset.count, 10);
            const duration = 2000;
            const start = performance.now();
            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(target * eased).toLocaleString('es-PE');
                if (progress < 1) requestAnimationFrame(step);
                else el.textContent = target.toLocaleString('es-PE');
            };
            requestAnimationFrame(step);
        }
    };
})();
