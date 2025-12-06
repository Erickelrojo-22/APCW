/**
 * Script de utilidades para modales y navbar sin Bootstrap
 * Reemplaza la funcionalidad de data-bs-toggle de Bootstrap
 */

// ========== NAVBAR TOGGLE (Menú responsivo) ==========
function initNavbarToggler() {
    const togglers = document.querySelectorAll('.navbar-toggler');
    
    togglers.forEach(toggler => {
        toggler.addEventListener('click', function() {
            const targetId = this.getAttribute('data-bs-target') || this.getAttribute('aria-controls');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.style.display = targetElement.style.display === 'none' ? 'flex' : 'none';
                    // Agregar clase para animación
                    targetElement.classList.toggle('show');
                }
            }
        });
    });
}

// ========== MODAL FUNCTIONS ==========
const modalManager = {
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        }
    },
    
    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    },
    
    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
            modal.classList.remove('show');
        });
        document.body.style.overflow = 'auto';
    }
};

// Inicializar modal togglers
function initModalTogglers() {
    const buttons = document.querySelectorAll('[data-bs-toggle="modal"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-bs-target');
            if (targetId) {
                const modalId = targetId.replace('#', '');
                modalManager.openModal(modalId);
            }
        });
    });
    
    // Cerrar con botones de dismiss
    const dismissButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
    dismissButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modalManager.closeModal(modal.id);
            }
        });
    });
    
    // Cerrar al hacer click fuera del modal
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                modalManager.closeModal(this.id);
            }
        });
    });
}

// ========== INICIALIZAR TODO AL CARGAR ==========
document.addEventListener('DOMContentLoaded', function() {
    initNavbarToggler();
    initModalTogglers();
});

// Agregar estilos CSS dinámicos si no están presentes
const style = document.createElement('style');
style.textContent = `
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        align-items: center;
        justify-content: center;
    }
    
    .modal.show {
        display: flex;
    }
    
    .modal-dialog {
        background-color: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        max-width: 500px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
    }
    
    .modal-content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .modal-header {
        padding: 20px;
        border-bottom: 2px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .modal-title {
        margin: 0;
        font-weight: bold;
        font-size: 18px;
    }
    
    .btn-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
    }
    
    .btn-close:hover {
        color: #000;
    }
    
    .btn-close-white {
        color: white;
    }
    
    .modal-body {
        padding: 20px;
        flex-grow: 1;
        overflow-y: auto;
    }
    
    .modal-footer {
        padding: 15px 20px;
        border-top: 2px solid #eee;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
        .modal-dialog {
            width: 95%;
            max-width: 90vw;
        }
    }
`;
document.head.appendChild(style);
