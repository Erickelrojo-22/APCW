/**
 * Script para login.html
 * Manejo de inicio de sesión y redirección
 */

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.querySelector('input[type="email"]') || document.querySelector('input[type="text"]');
            const emailValue = email ? email.value.toLowerCase() : '';
            
            // Simular validación y redirección
            if (emailValue.includes('admin')) {
                alert('✅ Bienvenido, Administrador');
                window.location.href = 'admin-dashboard.html';
            } else if (emailValue) {
                alert('✅ Bienvenido, Graduado');
                window.location.href = 'graduado-dashboard.html';
            } else {
                alert('⚠️ Ingresa un correo válido');
            }
        });
    }
    
    // Animar inputs al hacer focus
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 0 3px rgba(220, 20, 60, 0.1)';
        });
        input.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
        });
    });
});
