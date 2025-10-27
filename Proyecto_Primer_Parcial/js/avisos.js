/**
 * Script para avisos.html
 * Avisos y oportunidades para graduados
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    initNavbarToggler();
    
    // Animar tarjetas de avisos
    const avisoCards = document.querySelectorAll('[style*="border"], .card');
    avisoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 100);
    });
    
    // Efectos hover en tarjetas
    avisoCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Botones de acción
    const actionButtons = document.querySelectorAll('button[class*="btn"]');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (text.includes('Solicitar') || text.includes('Aplicar')) {
                alert('✅ Solicitud enviada correctamente');
            } else if (text.includes('Ver') || text.includes('Más')) {
                alert('📖 Abriendo detalles de la oportunidad...');
            }
        });
    });
});
