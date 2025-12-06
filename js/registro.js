/**
 * Script para registro.html
 * Validación y envío del formulario de registro
 */

document.addEventListener('DOMContentLoaded', function() {
    // Crear mensajes de error dinámicamente
    createErrorMessages();
    
    const registerForm = document.querySelector('form');
    
    // Referencias a los campos
    const nombresInput = document.getElementById('nombres');
    const apellidosInput = document.getElementById('apellidos');
    const cedulaInput = document.getElementById('cedula');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    // Validación en tiempo real para nombres
    if (nombresInput) {
        nombresInput.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                if (!validateTwoNames(this.value)) {
                    showError(this, 'Debes ingresar exactamente 2 nombres (solo letras, separados por espacio)');
                } else {
                    showSuccess(this);
                }
            }
        });
        
        nombresInput.addEventListener('input', function() {
            if (this.value.trim() !== '' && validateTwoNames(this.value)) {
                showSuccess(this);
            }
        });
    }
    
    // Validación en tiempo real para apellidos
    if (apellidosInput) {
        apellidosInput.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                if (!validateTwoNames(this.value)) {
                    showError(this, 'Debes ingresar exactamente 2 apellidos (solo letras, separados por espacio)');
                } else {
                    showSuccess(this);
                }
            }
        });
        
        apellidosInput.addEventListener('input', function() {
            if (this.value.trim() !== '' && validateTwoNames(this.value)) {
                showSuccess(this);
            }
        });
    }
    
    // Validación en tiempo real de cédula
    if (cedulaInput) {
        cedulaInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
            
            if (this.value.length === 10) {
                if (validateEcuadorianID(this.value)) {
                    showSuccess(this);
                } else {
                    showError(this, 'Cédula ecuatoriana no válida');
                }
            } else if (this.value.length > 0) {
                hideMessage(this);
            }
        });
        
        cedulaInput.addEventListener('blur', function() {
            if (this.value.length > 0 && this.value.length < 10) {
                showError(this, 'La cédula debe tener 10 dígitos');
            }
        });
    }
    
    // Validación de email en tiempo real
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                const validation = validateEmail(this.value);
                if (!validation.valid) {
                    showError(this, validation.message);
                } else {
                    showSuccess(this);
                }
            }
        });
        
        emailInput.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                const validation = validateEmail(this.value);
                if (validation.valid) {
                    showSuccess(this);
                }
            }
        });
    }
    
    // Validación de teléfono
    if (telefonoInput) {
        telefonoInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
            
            if (this.value.length === 10) {
                if (this.value.startsWith('0')) {
                    showSuccess(this);
                } else {
                    showError(this, 'El teléfono debe comenzar con 0');
                }
            } else if (this.value.length > 0) {
                hideMessage(this);
            }
        });
        
        telefonoInput.addEventListener('blur', function() {
            if (this.value.length > 0 && this.value.length < 10) {
                showError(this, 'El teléfono debe tener 10 dígitos');
            }
        });
    }
    
    // Validación de contraseña en tiempo real
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                const validation = validatePassword(this.value);
                if (!validation.valid) {
                    showError(this, validation.message);
                } else {
                    showSuccess(this);
                }
            } else {
                hideMessage(this);
            }
            
            // También validar confirmación si ya tiene valor
            if (confirmPasswordInput && confirmPasswordInput.value.length > 0) {
                validatePasswordMatch();
            }
        });
    }
    
    // Validación de confirmación de contraseña
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                validatePasswordMatch();
            } else {
                hideMessage(this);
            }
        });
    }
    
    function validatePasswordMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Las contraseñas no coinciden');
        } else if (confirmPasswordInput.value.length > 0) {
            showSuccess(confirmPasswordInput);
        }
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores
            const names = nombresInput?.value.trim() || '';
            const surnames = apellidosInput?.value.trim() || '';
            const cedula = cedulaInput?.value.trim() || '';
            const email = emailInput?.value.trim() || '';
            const telefono = telefonoInput?.value.trim() || '';
            const password = passwordInput?.value || '';
            const confirmPassword = confirmPasswordInput?.value || '';
            
            // Array para almacenar errores
            const errors = [];
            
            // Validar nombres (deben ser 2 nombres)
            if (!validateTwoNames(names)) {
                errors.push('❌ Los nombres deben ser 2 (separados por espacio)');
                showError(nombresInput, 'Debes ingresar exactamente 2 nombres');
            }
            
            // Validar apellidos (deben ser 2 apellidos)
            if (!validateTwoNames(surnames)) {
                errors.push('❌ Los apellidos deben ser 2 (separados por espacio)');
                showError(apellidosInput, 'Debes ingresar exactamente 2 apellidos');
            }
            
            // Validar cédula ecuatoriana
            if (!validateEcuadorianID(cedula)) {
                errors.push('❌ La cédula no tiene un formato ecuatoriano válido');
                showError(cedulaInput, 'Cédula ecuatoriana no válida');
            }
            
            // Validar correo electrónico
            const emailValidation = validateEmail(email);
            if (!emailValidation.valid) {
                errors.push(`❌ ${emailValidation.message}`);
                showError(emailInput, emailValidation.message);
            }
            
            // Validar teléfono
            if (telefono.length !== 10 || !telefono.startsWith('0')) {
                errors.push('❌ El teléfono debe tener 10 dígitos y comenzar con 0');
                showError(telefonoInput, 'El teléfono debe tener 10 dígitos y comenzar con 0');
            }
            
            // Validar contraseña
            const passwordValidation = validatePassword(password);
            if (!passwordValidation.valid) {
                errors.push(`❌ ${passwordValidation.message}`);
                showError(passwordInput, passwordValidation.message);
            }
            
            // Validar que las contraseñas coincidan
            if (password !== confirmPassword) {
                errors.push('❌ Las contraseñas no coinciden');
                showError(confirmPasswordInput, 'Las contraseñas no coinciden');
            }
            
            // Mostrar errores si existen
            if (errors.length > 0) {
                alert('⚠️ Por favor corrige los errores señalados en el formulario');
                return;
            }
            
            // Simular registro exitoso
            alert(`✅ ¡Bienvenido ${names} ${surnames}!\nTu cuenta ha sido creada exitosamente.\n\nAhora puedes iniciar sesión.`);
            window.location.href = 'login.html';
        });
    }
});

/**
 * Crea elementos para mostrar mensajes de error debajo de cada input
 */
function createErrorMessages() {
    const inputs = document.querySelectorAll('input[required], input[type="password"], input[type="email"]');
    inputs.forEach(input => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = 'display: none; color: #dc3545; font-size: 12px; margin-top: 4px; font-weight: 500;';
        input.parentNode.appendChild(errorDiv);
    });
}

/**
 * Muestra un mensaje de error debajo del input
 */
function showError(input, message) {
    if (!input) return;
    
    input.style.borderColor = '#dc3545';
    input.style.backgroundColor = 'rgba(220, 53, 69, 0.05)';
    
    const errorDiv = input.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.textContent = '⚠️ ' + message;
        errorDiv.style.display = 'block';
        errorDiv.style.color = '#dc3545';
    }
}

/**
 * Muestra un mensaje de éxito
 */
function showSuccess(input) {
    if (!input) return;
    
    input.style.borderColor = '#28a745';
    input.style.backgroundColor = 'rgba(40, 167, 69, 0.05)';
    
    const errorDiv = input.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.textContent = '✓ Válido';
        errorDiv.style.display = 'block';
        errorDiv.style.color = '#28a745';
    }
}

/**
 * Oculta el mensaje de error/éxito
 */
function hideMessage(input) {
    if (!input) return;
    
    input.style.borderColor = '#ddd';
    input.style.backgroundColor = 'white';
    
    const errorDiv = input.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.style.display = 'none';
    }
}

/**
 * Valida que un campo contenga exactamente 2 nombres o apellidos
 * @param {string} text - Texto a validar
 * @returns {boolean} - true si tiene 2 nombres/apellidos
 */
function validateTwoNames(text) {
    if (!text || text.trim() === '') return false;
    
    // Dividir por espacios y filtrar elementos vacíos
    const parts = text.trim().split(/\s+/).filter(part => part.length > 0);
    
    // Debe tener exactamente 2 partes
    if (parts.length !== 2) return false;
    
    // Cada parte debe contener solo letras
    const nameRegex = /^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ]+$/;
    return parts.every(part => nameRegex.test(part));
}

/**
 * Valida que la cédula ecuatoriana sea válida usando el algoritmo módulo 10
 * @param {string} cedula - Cédula a validar
 * @returns {boolean} - true si es válida
 */
function validateEcuadorianID(cedula) {
    // Debe tener exactamente 10 dígitos
    if (!cedula || cedula.length !== 10) return false;
    
    // Debe contener solo números
    if (!/^\d+$/.test(cedula)) return false;
    
    // Los dos primeros dígitos deben estar entre 01 y 24 (provincias de Ecuador)
    const province = parseInt(cedula.substring(0, 2));
    if (province < 1 || province > 24) return false;
    
    // El tercer dígito debe ser menor a 6 (para cédulas de personas naturales)
    const thirdDigit = parseInt(cedula.charAt(2));
    if (thirdDigit > 5) return false;
    
    // Algoritmo de validación módulo 10
    const coefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let sum = 0;
    
    for (let i = 0; i < 9; i++) {
        let value = parseInt(cedula.charAt(i)) * coefficients[i];
        if (value >= 10) {
            value -= 9;
        }
        sum += value;
    }
    
    // Calcular el dígito verificador
    let verifier = (10 - (sum % 10)) % 10;
    const lastDigit = parseInt(cedula.charAt(9));
    
    return verifier === lastDigit;
}

/**
 * Valida el formato del correo electrónico
 * @param {string} email - Correo a validar
 * @returns {object} - {valid: boolean, message: string}
 */
function validateEmail(email) {
    if (!email || email.trim() === '') {
        return { valid: false, message: 'El correo electrónico es requerido' };
    }
    
    // Expresión regular para validar formato básico de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { valid: false, message: 'El formato del correo electrónico no es válido' };
    }
    
    // Validar dominios permitidos
    const allowedDomains = [
        '@gmail.com',
        '@hotmail.com',
        '@uleam.edu.ec',
        '@live.uleam.edu.ec'
    ];
    
    const isAllowedDomain = allowedDomains.some(domain => email.toLowerCase().endsWith(domain));
    
    if (!isAllowedDomain) {
        return { 
            valid: false, 
            message: 'El correo debe ser Gmail, Hotmail o institucional (@uleam.edu.ec, @live.uleam.edu.ec)' 
        };
    }
    
    return { valid: true, message: '' };
}

/**
 * Valida la fortaleza de la contraseña
 * @param {string} password - Contraseña a validar
 * @returns {object} - {valid: boolean, message: string}
 */
function validatePassword(password) {
    if (!password || password.length < 8) {
        return { 
            valid: false, 
            message: 'La contraseña debe tener mínimo 8 caracteres' 
        };
    }
    
    // Validar mayúscula
    if (!/[A-Z]/.test(password)) {
        return { 
            valid: false, 
            message: 'La contraseña debe contener al menos una letra mayúscula' 
        };
    }
    
    // Validar minúscula
    if (!/[a-z]/.test(password)) {
        return { 
            valid: false, 
            message: 'La contraseña debe contener al menos una letra minúscula' 
        };
    }
    
    // Validar número
    if (!/\d/.test(password)) {
        return { 
            valid: false, 
            message: 'La contraseña debe contener al menos un número' 
        };
    }
    
    // Validar carácter especial
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        return { 
            valid: false, 
            message: 'La contraseña debe contener al menos un carácter especial (!@#$%^&*...)' 
        };
    }
    
    return { valid: true, message: '' };
}
