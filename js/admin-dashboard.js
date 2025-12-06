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
    if (typeof initNavbarToggler === 'function') {
        initNavbarToggler();
    }
    
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

// ========== FUNCIONES PARA MODAL DE PUBLICAR AVISO ==========

/**
 * Abre el modal de publicar aviso
 */
function openPublicarAvisoModal(event) {
    if (event) event.preventDefault();
    const modal = document.getElementById('modalPublicarAviso');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Limpiar formulario
        document.getElementById('formPublicarAviso').reset();
    }
}

/**
 * Cierra el modal de publicar aviso
 */
function closePublicarAvisoModal() {
    const modal = document.getElementById('modalPublicarAviso');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/**
 * Maneja el envío del formulario de aviso
 */
function submitAviso(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const titulo = document.getElementById('tituloAviso').value;
    const categoria = document.getElementById('categoriaAviso').value;
    const descripcion = document.getElementById('descripcionAviso').value;
    const prioridad = document.getElementById('prioridadAviso').value;
    const fechaVigencia = document.getElementById('fechaVigenciaAviso').value;
    
    // Mostrar mensaje de éxito
    showNotification('✅ Aviso publicado correctamente', 'success');
    
    // Cerrar modal
    closePublicarAvisoModal();
    
    // Limpiar formulario
    document.getElementById('formPublicarAviso').reset();
    
    // Nota: En un entorno real, aquí se enviaría la información a un servidor
    console.log('Aviso que se publicaría:', {
        titulo,
        categoria,
        descripcion,
        prioridad,
        fechaVigencia,
        fechaPublicacion: new Date().toISOString(),
        autor: 'Administrador'
    });
}

/**
 * Muestra una notificación temporal
 */
function showNotification(message, type = 'success') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(90deg, #228B22 0%, #32CD32 100%)' : '#DC143C'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Cerrar modal al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modalPublicarAviso');
    if (event.target === modal) {
        closePublicarAvisoModal();
    }
});
