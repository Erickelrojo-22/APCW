/**
 * Script para index.html
 * Landing page - sin funcionalidades especiales
 */

document.addEventListener('DOMContentLoaded', function() {
    // Agregar efectos de animación a botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
