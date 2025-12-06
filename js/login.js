/**
 * Script para login.html
 * Manejo de inicio de sesión y redirección
 */

// Credenciales de prueba
const USUARIOS = {
    admin: {
        email: 'admin@uleam.edu.ec',
        password: 'admin123',
        tipo: 'administrador'
    },
    graduado: {
        email: 'graduado@uleam.edu.ec',
        password: 'graduado123',
        tipo: 'graduado'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.querySelector('input[type="email"]') || document.querySelector('input[type="text"]');
            const passwordInput = document.querySelector('input[type="password"]');
            
            const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
            const password = passwordInput ? passwordInput.value : '';
            
            // Validar credenciales
            if (!email || !password) {
                alert('⚠️ Por favor ingresa correo y contraseña');
                return;
            }
            
            // Verificar credenciales de administrador
            if (email === USUARIOS.admin.email && password === USUARIOS.admin.password) {
                alert('✅ Bienvenido, Administrador');
                window.location.href = 'admin-dashboard.html';
                return;
            }
            
            // Verificar credenciales de graduado
            if (email === USUARIOS.graduado.email && password === USUARIOS.graduado.password) {
                alert('✅ Bienvenido, Graduado');
                window.location.href = 'graduado-dashboard.html';
                return;
            }
            
            // Credenciales incorrectas
            alert('❌ Correo o contraseña incorrectos');
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
