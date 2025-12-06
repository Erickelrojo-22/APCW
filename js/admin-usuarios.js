/**
 * Script para admin-usuarios.html
 * Gestión de usuarios con modales
 */

// Función para validar cédula ecuatoriana
function validarCedulaEcuatoriana(cedula) {
    // Verificar que tenga 10 dígitos
    if (cedula.length !== 10) {
        return false;
    }
    
    // Verificar que todos sean números
    if (!/^\d+$/.test(cedula)) {
        return false;
    }
    
    // Verificar que los dos primeros dígitos correspondan a una provincia válida (01-24)
    const provincia = parseInt(cedula.substring(0, 2));
    if (provincia < 1 || provincia > 24) {
        return false;
    }
    
    // Verificar el dígito verificador usando el algoritmo de módulo 10
    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let suma = 0;
    
    for (let i = 0; i < 9; i++) {
        let valor = parseInt(cedula[i]) * coeficientes[i];
        if (valor >= 10) {
            valor -= 9;
        }
        suma += valor;
    }
    
    const digitoVerificador = parseInt(cedula[9]);
    const resultado = suma % 10;
    const verificador = resultado === 0 ? 0 : 10 - resultado;
    
    return verificador === digitoVerificador;
}

// Función para validar que tenga dos nombres
function validarDosNombres(texto) {
    const palabras = texto.trim().split(/\s+/);
    return palabras.length >= 2 && palabras.every(palabra => palabra.length > 0);
}

// Función para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para mostrar error
function mostrarError(inputId, mensaje) {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(inputId + 'Error');
    
    if (input && errorElement) {
        input.style.borderColor = '#DC143C';
        errorElement.textContent = mensaje;
        errorElement.style.display = 'block';
    }
}

// Función para limpiar error
function limpiarError(inputId) {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(inputId + 'Error');
    
    if (input && errorElement) {
        input.style.borderColor = '#ddd';
        errorElement.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    initNavbarToggler();
    
    // Inicializar modales
    initModalTogglers();
    
    // Validación en tiempo real para los campos
    const cedula = document.getElementById('cedula');
    const nombres = document.getElementById('nombres');
    const apellidos = document.getElementById('apellidos');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    // Validar cédula en tiempo real
    if (cedula) {
        cedula.addEventListener('input', function() {
            // Solo permitir números
            this.value = this.value.replace(/[^\d]/g, '');
            
            if (this.value.length === 10) {
                if (validarCedulaEcuatoriana(this.value)) {
                    limpiarError('cedula');
                } else {
                    mostrarError('cedula', 'La cédula ingresada no es válida según el formato ecuatoriano');
                }
            } else if (this.value.length > 0) {
                mostrarError('cedula', 'La cédula debe tener 10 dígitos');
            } else {
                limpiarError('cedula');
            }
        });
    }
    
    // Validar nombres en tiempo real
    if (nombres) {
        nombres.addEventListener('blur', function() {
            if (this.value.trim()) {
                if (validarDosNombres(this.value)) {
                    limpiarError('nombres');
                } else {
                    mostrarError('nombres', 'Debe ingresar al menos dos nombres');
                }
            }
        });
        
        nombres.addEventListener('input', function() {
            if (validarDosNombres(this.value)) {
                limpiarError('nombres');
            }
        });
    }
    
    // Validar apellidos en tiempo real
    if (apellidos) {
        apellidos.addEventListener('blur', function() {
            if (this.value.trim()) {
                if (validarDosNombres(this.value)) {
                    limpiarError('apellidos');
                } else {
                    mostrarError('apellidos', 'Debe ingresar al menos dos apellidos');
                }
            }
        });
        
        apellidos.addEventListener('input', function() {
            if (validarDosNombres(this.value)) {
                limpiarError('apellidos');
            }
        });
    }
    
    // Validar email en tiempo real
    if (email) {
        email.addEventListener('blur', function() {
            if (this.value.trim()) {
                if (validarEmail(this.value)) {
                    limpiarError('email');
                } else {
                    mostrarError('email', 'Ingrese un correo electrónico válido');
                }
            }
        });
    }
    
    // Validar contraseña en tiempo real
    if (password) {
        password.addEventListener('input', function() {
            if (this.value.length > 0 && this.value.length < 8) {
                mostrarError('password', 'La contraseña debe tener al menos 8 caracteres');
            } else {
                limpiarError('password');
            }
            
            // Verificar si las contraseñas coinciden cuando se modifica la contraseña
            if (confirmPassword && confirmPassword.value) {
                if (this.value === confirmPassword.value) {
                    limpiarError('confirmPassword');
                } else {
                    mostrarError('confirmPassword', 'Las contraseñas no coinciden');
                }
            }
        });
    }
    
    // Validar confirmación de contraseña
    if (confirmPassword) {
        confirmPassword.addEventListener('input', function() {
            if (password && this.value) {
                if (this.value === password.value) {
                    limpiarError('confirmPassword');
                } else {
                    mostrarError('confirmPassword', 'Las contraseñas no coinciden');
                }
            }
        });
    }
    
    // Validar teléfono - solo números
    const telefono = document.getElementById('telefono');
    if (telefono) {
        telefono.addEventListener('input', function() {
            // Solo permitir números
            this.value = this.value.replace(/[^\d]/g, '');
        });
    }
    
    // Validar formulario al enviarlo
    const addUserForm = document.getElementById('addUserForm');
    if (addUserForm) {
        addUserForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let valido = true;
            
            // Validar cédula
            const cedulaValue = cedula.value.trim();
            if (!cedulaValue) {
                mostrarError('cedula', 'La cédula es obligatoria');
                valido = false;
            } else if (!validarCedulaEcuatoriana(cedulaValue)) {
                mostrarError('cedula', 'La cédula ingresada no es válida según el formato ecuatoriano');
                valido = false;
            }
            
            // Validar nombres
            const nombresValue = nombres.value.trim();
            if (!nombresValue) {
                mostrarError('nombres', 'Los nombres son obligatorios');
                valido = false;
            } else if (!validarDosNombres(nombresValue)) {
                mostrarError('nombres', 'Debe ingresar al menos dos nombres');
                valido = false;
            }
            
            // Validar apellidos
            const apellidosValue = apellidos.value.trim();
            if (!apellidosValue) {
                mostrarError('apellidos', 'Los apellidos son obligatorios');
                valido = false;
            } else if (!validarDosNombres(apellidosValue)) {
                mostrarError('apellidos', 'Debe ingresar al menos dos apellidos');
                valido = false;
            }
            
            // Validar email
            const emailValue = email.value.trim();
            if (!emailValue) {
                mostrarError('email', 'El correo electrónico es obligatorio');
                valido = false;
            } else if (!validarEmail(emailValue)) {
                mostrarError('email', 'Ingrese un correo electrónico válido');
                valido = false;
            }
            
            // Validar contraseña
            const passwordValue = password.value;
            if (!passwordValue) {
                mostrarError('password', 'La contraseña es obligatoria');
                valido = false;
            } else if (passwordValue.length < 8) {
                mostrarError('password', 'La contraseña debe tener al menos 8 caracteres');
                valido = false;
            }
            
            // Validar confirmación de contraseña
            const confirmPasswordValue = confirmPassword.value;
            if (!confirmPasswordValue) {
                mostrarError('confirmPassword', 'Debe confirmar la contraseña');
                valido = false;
            } else if (passwordValue !== confirmPasswordValue) {
                mostrarError('confirmPassword', 'Las contraseñas no coinciden');
                valido = false;
            }
            
            // Si todas las validaciones pasan
            if (valido) {
                alert('✅ Usuario registrado correctamente\n\n' +
                      'Cédula: ' + cedulaValue + '\n' +
                      'Nombre: ' + nombresValue + ' ' + apellidosValue + '\n' +
                      'Email: ' + emailValue);
                
                // Limpiar formulario
                this.reset();
                
                // Cerrar modal
                if (typeof closeAddUserModal === 'function') {
                    closeAddUserModal();
                }
            } else {
                alert('⚠️ Por favor, corrija los errores en el formulario antes de continuar.');
            }
        });
    }
    
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

    // Exportar datos
    const btnExportJSON = document.getElementById('btnExportJSON');
    if (btnExportJSON) {
        btnExportJSON.addEventListener('click', function() {
            const data = tableToData('.users-table');
            downloadJSON(data, 'usuarios.json');
        });
    }

    const btnExportXML = document.getElementById('btnExportXML');
    if (btnExportXML) {
        btnExportXML.addEventListener('click', function() {
            const data = tableToData('.users-table');
            downloadXML(data, 'usuarios.xml', 'usuarios', 'usuario');
        });
    }
});
