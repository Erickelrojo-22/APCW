/**
 * Script para perfil.html
 * Edición de perfil del graduado
 */

document.addEventListener('DOMContentLoaded', function() {
    let isEditMode = false;
    const editButton = document.querySelector('button:contains("Editar")') || 
                       Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Editar'));
    const saveButton = document.querySelector('button:contains("Guardar")') || 
                       Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Guardar'));
    const cancelButton = document.querySelector('button:contains("Cancelar")') || 
                         Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Cancelar'));
    
    // Buscar campos editables
    const editableFields = document.querySelectorAll('input:not([readonly]), select:not([disabled])');
    const readonlyFields = document.querySelectorAll('input[readonly], select[disabled]');
    
    function toggleEditMode() {
        isEditMode = !isEditMode;
        
        if (isEditMode) {
            // Activar modo edición
            editableFields.forEach(field => {
                field.removeAttribute('readonly');
                field.removeAttribute('disabled');
                field.style.cursor = 'text';
                field.style.backgroundColor = '#fff';
            });
            
            if (editButton) editButton.style.display = 'none';
            if (saveButton) saveButton.style.display = 'inline-block';
            if (cancelButton) cancelButton.style.display = 'inline-block';
        } else {
            // Desactivar modo edición
            editableFields.forEach(field => {
                field.setAttribute('readonly', 'readonly');
                field.setAttribute('disabled', 'disabled');
                field.style.cursor = 'default';
                field.style.backgroundColor = '#f5f5f5';
            });
            
            if (editButton) editButton.style.display = 'inline-block';
            if (saveButton) saveButton.style.display = 'none';
            if (cancelButton) cancelButton.style.display = 'none';
        }
    }
    
    if (editButton) {
        editButton.addEventListener('click', function() {
            toggleEditMode();
        });
    }
    
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            alert('✅ Cambios guardados exitosamente');
            toggleEditMode();
        });
    }
    
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            toggleEditMode();
        });
    }
    
    // Inicializar campos como readonly
    editableFields.forEach(field => {
        field.setAttribute('readonly', 'readonly');
        field.setAttribute('disabled', 'disabled');
        field.style.cursor = 'default';
        field.style.backgroundColor = '#f5f5f5';
    });
    
    // Mantener campos protegidos como readonly
    readonlyFields.forEach(field => {
        field.style.cursor = 'not-allowed';
        field.style.backgroundColor = '#f0f0f0';
    });
});
