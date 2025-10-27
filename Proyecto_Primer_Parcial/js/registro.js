/**
 * Script para registro.html
 * Validación y envío del formulario de registro
 */

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores
            const names = document.querySelector('input[placeholder*="Nombres"]')?.value || '';
            const surnames = document.querySelector('input[placeholder*="Apellidos"]')?.value || '';
            const email = document.querySelector('input[type="email"]')?.value || '';
            
            // Validaciones básicas
            if (!names || !surnames || !email) {
                alert('⚠️ Por favor completa los campos obligatorios');
                return;
            }
            
            if (email && !email.includes('@')) {
                alert('⚠️ Email inválido');
                return;
            }
            
            // Simular registro exitoso
            alert(`✅ ¡Bienvenido ${names} ${surnames}!\nTu cuenta ha sido creada exitosamente.\n\nAhora puedes iniciar sesión.`);
            window.location.href = 'login.html';
        });
    }
    
    // Validación en tiempo real de cédula
    const idInput = document.querySelector('input[placeholder*="Cédula"]');
    if (idInput) {
        idInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
        });
    }
    
    // Validación de teléfono
    const phoneInput = document.querySelector('input[type="tel"]');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
        });
    }
    
    // Validación de contraseña
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (passwordInputs.length > 1) {
                const pwd1 = passwordInputs[0].value;
                const pwd2 = passwordInputs[1].value;
                
                if (pwd2 && pwd1 !== pwd2) {
                    passwordInputs[1].style.borderColor = '#dc3545';
                    passwordInputs[1].style.backgroundColor = 'rgba(220, 20, 60, 0.05)';
                } else {
                    passwordInputs[1].style.borderColor = '#ddd';
                    passwordInputs[1].style.backgroundColor = 'white';
                }
            }
        });
    });
});
