/**
 * Script para recuperar-contrasena.html
 * Funcionalidad de recuperación de contraseña
 */

document.addEventListener('DOMContentLoaded', function() {
    const recoveryForm = document.querySelector('form');
    
    if (recoveryForm) {
        recoveryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.querySelector('input[type="email"]')?.value || '';
            
            if (!email) {
                alert('⚠️ Por favor ingresa tu correo electrónico');
                return;
            }
            
            if (!email.includes('@')) {
                alert('⚠️ Email inválido');
                return;
            }
            
            // Simular envío
            alert(`✅ Email de recuperación enviado a:\n${email}\n\nRevisa tu bandeja de entrada en los próximos 5 minutos.`);
            window.location.href = 'login.html';
        });
    }
});
