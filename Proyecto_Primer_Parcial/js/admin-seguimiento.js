/**
 * Script para admin-seguimiento.html
 * Seguimiento laboral de graduados con filtros y modales
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    initNavbarToggler();
    
    // Inicializar modales
    initModalTogglers();
    
    // Funcionalidad de filtros
    const applyFiltersBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent.includes('Aplicar') || b.textContent.includes('Filtrar')
    );
    const clearFiltersBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent.includes('Limpiar') || b.textContent.includes('Reset')
    );
    const exportBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent.includes('Exportar') || b.textContent.includes('Excel')
    );
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            alert('✅ Filtros aplicados correctamente');
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            document.querySelectorAll('input, select').forEach(field => {
                field.value = '';
            });
            alert('✅ Filtros limpiados');
        });
    }
    
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            alert('📥 Descargando archivo Excel...\ngraduados_seguimiento_2025.xlsx');
        });
    }
    
    // Animar tabla
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach((row, index) => {
        row.style.opacity = '0';
        setTimeout(() => {
            row.style.transition = 'opacity 0.3s ease';
            row.style.opacity = '1';
        }, index * 50);
        
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(220, 20, 60, 0.05)';
        });
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Botones "Ver" en la tabla
    const viewButtons = document.querySelectorAll('button[data-bs-toggle="modal"]');
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-bs-target');
            if (targetId) {
                const modalId = targetId.replace('#', '');
                modalManager.openModal(modalId);
            }
        });
    });
});
