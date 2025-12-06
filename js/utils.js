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

// ========== EXPORT FUNCTIONS ==========

/**
 * Descarga datos en formato JSON
 * @param {Array|Object} data - Datos a descargar
 * @param {string} filename - Nombre del archivo
 */
function downloadJSON(data, filename) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Descarga datos en formato XML
 * @param {Array} data - Array de objetos a descargar
 * @param {string} filename - Nombre del archivo
 * @param {string} rootName - Nombre del elemento raíz
 * @param {string} itemName - Nombre de cada elemento item
 */
function downloadXML(data, filename, rootName = 'root', itemName = 'item') {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += `<${rootName}>\n`;
    
    data.forEach(item => {
        xml += `  <${itemName}>\n`;
        for (const key in item) {
            // Simple XML escaping
            const value = String(item[key])
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');
            
            // Ensure valid tag name (replace spaces with underscores, etc)
            // Remove accents/diacritics for tag names
            const tagName = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                               .replace(/[^a-zA-Z0-9_]/g, '_');
            
            xml += `    <${tagName}>${value}</${tagName}>\n`;
        }
        xml += `  </${itemName}>\n`;
    });
    
    xml += `</${rootName}>`;
    
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'data.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Extrae datos de una tabla HTML
 * @param {string} tableSelector - Selector CSS de la tabla
 * @returns {Array} Array de objetos con los datos
 */
function tableToData(tableSelector) {
    const table = document.querySelector(tableSelector);
    if (!table) return [];
    
    const headers = [];
    const headerCells = table.querySelectorAll('thead th');
    headerCells.forEach(th => {
        // Skip action columns or empty headers
        const text = th.textContent.trim();
        if (text !== 'Acciones' && text !== '') {
            headers.push(text);
        }
    });
    
    const data = [];
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        // Skip hidden rows (if any)
        if (row.style.display === 'none') return;

        const rowData = {};
        const cells = row.querySelectorAll('td');
        
        headers.forEach((header, index) => {
            if (cells[index]) {
                // Get text content, removing extra whitespace
                rowData[header] = cells[index].textContent.trim();
            }
        });
        
        data.push(rowData);
    });
    
    return data;
}
