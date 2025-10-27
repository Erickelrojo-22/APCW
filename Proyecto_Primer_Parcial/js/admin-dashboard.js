/**
 * Script para admin-dashboard.html
 * Dashboard administrativo
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animar estadísticas
    const statCards = document.querySelectorAll('[style*="background"]');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, index * 100);
    });
    
    // Animar números al cargar
    const numbers = document.querySelectorAll('h2, h3');
    numbers.forEach(num => {
        if (/^\d+/.test(num.textContent)) {
            const finalValue = parseInt(num.textContent);
            let currentValue = 0;
            const increment = Math.ceil(finalValue / 20);
            
            const interval = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    num.textContent = finalValue;
                    clearInterval(interval);
                } else {
                    num.textContent = currentValue;
                }
            }, 30);
        }
    });
    
    // Navbar toggle
    initNavbarToggler();
    
    // Efecto hover en tarjetas
    const cards = document.querySelectorAll('[style*="border-radius"]');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
            this.style.transition = 'all 0.3s ease';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});
