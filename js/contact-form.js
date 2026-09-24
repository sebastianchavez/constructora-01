/* ==========================================================
   Constructora ArgaMax - contact-form.js
   Validación nativa y simulación de envío (sin backend)
   ========================================================== */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', handleSubmit);
        form.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('blur', () => validateField(field));
            field.addEventListener('input', () => {
                if (field.classList.contains('is-invalid')) validateField(field);
            });
        });
    });

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        let valid = true;

        form.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
            if (!validateField(field)) valid = false;
        });

        // Validar email si está presente
        const email = form.querySelector('input[type="email"]');
        if (email && email.value) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(email.value)) {
                setInvalid(email, 'Ingrese un correo válido');
                valid = false;
            }
        }

        // Validar teléfono si está presente
        const phone = form.querySelector('input[type="tel"]');
        if (phone && phone.value) {
            const digits = phone.value.replace(/\D/g, '');
            if (digits.length < 9) {
                setInvalid(phone, 'Ingrese un teléfono válido (mín. 9 dígitos)');
                valid = false;
            }
        }

        if (!valid) {
            if (typeof window.App?.showToast === 'function') {
                window.App.showToast('Por favor corrija los errores del formulario', 'error');
            }
            form.querySelector('.is-invalid')?.focus();
            return;
        }

        // Simulación de envío
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            form.reset();
            form.querySelectorAll('.is-valid, .is-invalid').forEach(f => {
                f.classList.remove('is-valid', 'is-invalid');
            });
            if (typeof window.App?.showToast === 'function') {
                window.App.showToast('¡Mensaje enviado! Le responderemos a la brevedad.');
            }
        }, 1500);
    }

    function validateField(field) {
        if (!field.hasAttribute('required') && !field.value) {
            field.classList.remove('is-invalid', 'is-valid');
            return true;
        }

        if (field.hasAttribute('required') && !field.value.trim()) {
            setInvalid(field, 'Este campo es obligatorio');
            return false;
        }

        if (field.type === 'email' && field.value) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(field.value)) { setInvalid(field, 'Correo inválido'); return false; }
        }
        if (field.type === 'tel' && field.value) {
            const digits = field.value.replace(/\D/g, '');
            if (digits.length < 9) { setInvalid(field, 'Teléfono inválido'); return false; }
        }
        if (field.minLength && field.value.length < field.minLength) {
            setInvalid(field, `Mínimo ${field.minLength} caracteres`);
            return false;
        }

        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
        const fb = field.parentElement.querySelector('.invalid-feedback');
        if (fb) fb.textContent = '';
        return true;
    }

    function setInvalid(field, message) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        const fb = field.parentElement.querySelector('.invalid-feedback');
        if (fb) fb.textContent = message;
    }
})();
