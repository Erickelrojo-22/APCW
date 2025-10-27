/**
 * Script para admin-usuarios.html
 * Gestión de usuarios con modales
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    initNavbarToggler();
    
    // Inicializar modales
    initModalTogglers();
    
    // Botones de acción en tabla
    const actionButtons = document.querySelectorAll('button[data-bs-toggle="modal"], button[data-bs-toggle="btn"]');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('data-bs-toggle') === 'modal') {
                e.preventDefault();
                const targetId = this.getAttribute('data-bs-target');
                if (targetId) {
                    const modalId = targetId.replace('#', '');
                    modalManager.openModal(modalId);
                }
            }
        });
    });
    
    // Simular acciones de editar/eliminar
    const editButtons = Array.from(document.querySelectorAll('button')).filter(b => 
        b.textContent.includes('Editar') || b.textContent.includes('✏️')
    );
    const deleteButtons = Array.from(document.querySelectorAll('button')).filter(b => 
        b.textContent.includes('Eliminar') || b.textContent.includes('🗑️') || b.textContent.includes('✕')
    );
    
    editButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.getAttribute('data-bs-toggle')) {
                alert('✏️ Modal de edición abierto');
            }
        });
    });
    
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
                alert('✅ Usuario eliminado correctamente');
            }
        });
    });
    
    // Animar tabla
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach((row, index) => {
        row.style.opacity = '0';
        setTimeout(() => {
            row.style.transition = 'opacity 0.3s ease';
            row.style.opacity = '1';
        }, index * 50);
        
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(181, 58, 58, 0.05)';
        });
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Buscar/Filtrar usuario
    const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="Buscar"]');
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchValue = this.value.toLowerCase();
            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchValue) ? '' : 'none';
            });
        });
    });
});
