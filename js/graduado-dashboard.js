/**
 * Script para graduado-dashboard.html
 * Dashboard para graduados
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animar tarjetas al cargar
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Agregar efecto hover a botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Funcionalidad del botón "Editar Datos"
    const btnEditarDatos = document.querySelector('.btn-card-secondary');
    if (btnEditarDatos) {
        btnEditarDatos.addEventListener('click', function(event) {
            event.stopPropagation();
            window.location.href = 'perfil.html';
        });
    }
    
    // Funcionalidad de los botones "Inscribirse" en eventos
    const botonesInscribirse = document.querySelectorAll('.btn-event');
    botonesInscribirse.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.stopPropagation();
            window.location.href = 'avisos.html';
        });
    });
    
    // Navbar toggle
    initNavbarToggler();
});
