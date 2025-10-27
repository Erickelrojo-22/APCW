/**
 * Utilidades compartidas para todos los archivos
 * Funciones comunes de modales y navbar
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
            document.body.style.overflow = 'hidden';
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
    
    const dismissButtons = document.querySelectorAll('[data-bs-dismiss="modal"]');
    dismissButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modalManager.closeModal(modal.id);
            }
        });
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                modalManager.closeModal(this.id);
            }
        });
    });
}

// Estilos CSS dinámicos para modales
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
        background-color: rgba(0,0,0,0.5);
        align-items: center;
        justify-content: center;
    }
    .modal.show {
        display: flex;
    }
    .modal-content {
        background-color: white;
        border-radius: 8px;
        max-width: 600px;
        width: 90%;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .modal-header {
        padding: 20px;
        border-bottom: 1px solid #ddd;
    }
    .modal-body {
        padding: 20px;
    }
    .modal-footer {
        padding: 20px;
        border-top: 1px solid #ddd;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    }
    .fade-in {
        animation: fadeIn 0.5s;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
