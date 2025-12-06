/**
 * Script para admin-seguimiento.html
 * Seguimiento laboral de graduados con filtros y modales
 */

// Datos de ejemplo de los graduados
const graduadosData = [
    {
        id: 1,
        nombre: 'Juan Carlos Pérez Mendoza',
        cedula: '1312345678',
        correo: 'juan.perez@uleam.edu.ec',
        telefono: '0987654321',
        carrera: 'Ingeniería en Sistemas',
        anioGraduacion: '2022',
        empresa: 'Tech Solutions S.A.',
        cargo: 'Desarrollador Full Stack',
        estado: 'Empleado',
        salario: '$1,200',
        fechaContratacion: '15/03/2022',
        direccion: 'Manta, Manabí',
        linkedin: 'linkedin.com/in/juanperez'
    },
    {
        id: 2,
        nombre: 'María Fernanda García López',
        cedula: '1323456789',
        correo: 'maria.garcia@uleam.edu.ec',
        telefono: '0998765432',
        carrera: 'Medicina',
        anioGraduacion: '2021',
        empresa: 'Hospital General de Manta',
        cargo: 'Médico General',
        estado: 'Empleado',
        salario: '$2,500',
        fechaContratacion: '01/06/2021',
        direccion: 'Manta, Manabí',
        linkedin: 'linkedin.com/in/mariagarcia'
    },
    {
        id: 3,
        nombre: 'Carlos Alberto Mendoza Vera',
        cedula: '1334567890',
        correo: 'carlos.mendoza@uleam.edu.ec',
        telefono: '0976543210',
        carrera: 'Derecho',
        anioGraduacion: '2023',
        empresa: '-',
        cargo: '-',
        estado: 'Desempleado',
        salario: '-',
        fechaContratacion: '-',
        direccion: 'Portoviejo, Manabí',
        linkedin: 'linkedin.com/in/carlosmendoza'
    },
    {
        id: 4,
        nombre: 'Ana Lucía Rodríguez Muñoz',
        cedula: '1345678901',
        correo: 'ana.rodriguez@uleam.edu.ec',
        telefono: '0965432109',
        carrera: 'Contabilidad y Auditoría',
        anioGraduacion: '2022',
        empresa: 'Consultora Contable AL',
        cargo: 'Consultora Independiente',
        estado: 'Emprendimiento',
        salario: 'Variable',
        fechaContratacion: '10/01/2023',
        direccion: 'Manta, Manabí',
        linkedin: 'linkedin.com/in/anarodriguez'
    },
    {
        id: 5,
        nombre: 'Pedro José Zambrano Castro',
        cedula: '1356789012',
        correo: 'pedro.zambrano@uleam.edu.ec',
        telefono: '0954321098',
        carrera: 'Ingeniería Civil',
        anioGraduacion: '2020',
        empresa: 'Constructora del Pacífico',
        cargo: 'Ingeniero Residente',
        estado: 'Empleado',
        salario: '$1,800',
        fechaContratacion: '20/08/2020',
        direccion: 'Portoviejo, Manabí',
        linkedin: 'linkedin.com/in/pedrozambrano'
    },
    {
        id: 6,
        nombre: 'Laura Patricia Cedeño Bravo',
        cedula: '1367890123',
        correo: 'laura.cedeno@uleam.edu.ec',
        telefono: '0943210987',
        carrera: 'Ingeniería en Sistemas',
        anioGraduacion: '2021',
        empresa: 'Universidad de Guayaquil',
        cargo: 'Estudiante de Maestría',
        estado: 'Estudios de Posgrado',
        salario: '-',
        fechaContratacion: '-',
        direccion: 'Guayaquil, Guayas',
        linkedin: 'linkedin.com/in/lauracedeno'
    },
    {
        id: 7,
        nombre: 'Roberto Carlos Moreira Saltos',
        cedula: '1378901234',
        correo: 'roberto.moreira@uleam.edu.ec',
        telefono: '0932109876',
        carrera: 'Administración de Empresas',
        anioGraduacion: '2023',
        empresa: 'Banco del Pacífico',
        cargo: 'Analista Financiero',
        estado: 'Empleado',
        salario: '$1,500',
        fechaContratacion: '05/04/2023',
        direccion: 'Manta, Manabí',
        linkedin: 'linkedin.com/in/robertomoreira'
    }
];

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
            exportarAExcel();
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
    
    // Botones "Ver" en la tabla - Funcionalidad mejorada
    const viewButtons = document.querySelectorAll('tbody tr td:last-child button');
    viewButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Obtener los datos del graduado según el índice
            const graduado = graduadosData[index];
            if (graduado) {
                mostrarDetallesGraduado(graduado);
            }
        });
    });
});

// Función para mostrar los detalles del graduado en un modal
function mostrarDetallesGraduado(graduado) {
    // Obtener el color del badge según el estado
    let badgeColor = '';
    switch(graduado.estado) {
        case 'Empleado':
            badgeColor = '#28a745';
            break;
        case 'Desempleado':
            badgeColor = '#6c757d';
            break;
        case 'Emprendimiento':
            badgeColor = '#ffc107';
            break;
        case 'Estudios de Posgrado':
            badgeColor = '#17a2b8';
            break;
        default:
            badgeColor = '#6c757d';
    }
    
    // Crear el contenido del modal
    const modalHTML = `
        <div id="modalDetallesGraduado" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            animation: fadeIn 0.3s ease;
        ">
            <div style="
                background: white;
                border-radius: 16px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                max-width: 600px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                animation: slideDown 0.3s ease;
            ">
                <!-- Header -->
                <div style="
                    background: linear-gradient(135deg, #DC143C 0%, #228B22 100%);
                    padding: 1.5rem 2rem;
                    border-radius: 16px 16px 0 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ">
                    <h3 style="
                        color: white;
                        margin: 0;
                        font-size: 1.5rem;
                        font-weight: 700;
                    ">👨‍🎓 Detalles del Graduado</h3>
                    <button onclick="cerrarModalDetalles()" style="
                        background: white;
                        border: none;
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 1.5rem;
                        color: #333;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: transform 0.2s ease;
                    " onmouseover="this.style.transform='rotate(90deg)'" onmouseout="this.style.transform='rotate(0deg)'">×</button>
                </div>
                
                <!-- Body -->
                <div style="padding: 2rem;">
                    <!-- Información Personal -->
                    <div style="margin-bottom: 1.5rem;">
                        <h4 style="
                            color: #DC143C;
                            font-size: 0.9rem;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 1rem;
                            padding-bottom: 0.5rem;
                            border-bottom: 2px solid #DC143C;
                        ">📋 Información Personal</h4>
                        
                        <div style="display: grid; gap: 1rem;">
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Nombre Completo:</strong>
                                <span style="color: #333; font-weight: 500;">${graduado.nombre}</span>
                            </div>
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Cédula:</strong>
                                <span style="color: #333; font-weight: 500;">${graduado.cedula}</span>
                            </div>
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Correo:</strong>
                                <span style="color: #0066cc; font-weight: 500;">${graduado.correo}</span>
                            </div>
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Teléfono:</strong>
                                <span style="color: #333; font-weight: 500;">${graduado.telefono}</span>
                            </div>
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Dirección:</strong>
                                <span style="color: #333; font-weight: 500;">${graduado.direccion}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Información Académica -->
                    <div style="margin-bottom: 1.5rem;">
                        <h4 style="
                            color: #DC143C;
                            font-size: 0.9rem;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 1rem;
                            padding-bottom: 0.5rem;
                            border-bottom: 2px solid #DC143C;
                        ">🎓 Información Académica</h4>
                        
                        <div style="display: grid; gap: 1rem;">
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Carrera:</strong>
                                <span style="color: #333; font-weight: 500;">${graduado.carrera}</span>
                            </div>
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Año de Graduación:</strong>
                                <span style="color: #333; font-weight: 500;">${graduado.anioGraduacion}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Información Laboral -->
                    <div style="margin-bottom: 1.5rem;">
                        <h4 style="
                            color: #228B22;
                            font-size: 0.9rem;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 1rem;
                            padding-bottom: 0.5rem;
                            border-bottom: 2px solid #228B22;
                        ">💼 Información Laboral</h4>
                        
                        <div style="display: grid; gap: 1rem;">
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Empresa Actual:</strong>
                                <span style="color: #333; font-weight: 500;">${graduado.empresa}</span>
                            </div>
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Cargo:</strong>
                                <span style="color: #333; font-weight: 500;">${graduado.cargo}</span>
                            </div>
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Salario Mensual:</strong>
                                <span style="color: #228B22; font-weight: 600;">${graduado.salario}</span>
                            </div>
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">Fecha de Contratación:</strong>
                                <span style="color: #333; font-weight: 500;">${graduado.fechaContratacion}</span>
                            </div>
                            <div style="display: flex; padding: 0.75rem; background: #f8f9fa; border-radius: 8px;">
                                <strong style="color: #555; min-width: 150px; font-size: 0.9rem;">LinkedIn:</strong>
                                <span style="color: #0077b5; font-weight: 500;">${graduado.linkedin}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Estado Laboral -->
                    <div style="
                        text-align: center;
                        padding: 1.5rem;
                        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                        border-radius: 8px;
                    ">
                        <p style="
                            margin: 0 0 0.75rem 0;
                            color: #555;
                            font-size: 0.85rem;
                            font-weight: 600;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                        ">Estado Laboral Actual</p>
                        <span style="
                            background-color: ${badgeColor};
                            color: white;
                            padding: 10px 28px;
                            border-radius: 25px;
                            font-size: 1rem;
                            font-weight: 700;
                            display: inline-block;
                            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                        ">${graduado.estado}</span>
                    </div>
                </div>
                
                <!-- Footer -->
                <div style="
                    padding: 1.25rem 2rem;
                    background-color: #f8f9fa;
                    border-radius: 0 0 16px 16px;
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    border-top: 1px solid #dee2e6;
                ">
                    <button onclick="cerrarModalDetalles()" style="
                        background-color: #6c757d;
                        color: white;
                        border: none;
                        padding: 10px 24px;
                        border-radius: 8px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-size: 0.95rem;
                    " onmouseover="this.style.backgroundColor='#5a6268'" onmouseout="this.style.backgroundColor='#6c757d'">
                        Cerrar
                    </button>
                    <button style="
                        background-color: #228B22;
                        color: white;
                        border: none;
                        padding: 10px 24px;
                        border-radius: 8px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-size: 0.95rem;
                    " onmouseover="this.style.backgroundColor='#1a6b1a'" onmouseout="this.style.backgroundColor='#228B22'">
                        📧 Enviar Correo
                    </button>
                </div>
            </div>
        </div>
        
        <style>
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        </style>
    `;
    
    // Eliminar modal anterior si existe
    const existingModal = document.getElementById('modalDetallesGraduado');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Agregar el modal al body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    
    // Cerrar modal al hacer clic fuera
    const modal = document.getElementById('modalDetallesGraduado');
    modal.addEventListener('click', function(e) {
        if (e.target.id === 'modalDetallesGraduado') {
            cerrarModalDetalles();
        }
    });
}

// Función para cerrar el modal de detalles
function cerrarModalDetalles() {
    const modal = document.getElementById('modalDetallesGraduado');
    if (modal) {
        modal.style.display = 'none';
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Función para exportar a Excel usando Data URI (más seguro)
function exportarAExcel() {
    // Crear contenido CSV
    let csvContent = '\ufeff'; // BOM para UTF-8
    
    // Encabezados
    csvContent += '"#","Nombre Completo","Cédula","Carrera","Año Graduación","Empresa","Cargo","Estado Laboral","Correo","Teléfono","Salario","Fecha Contratación","Dirección","LinkedIn"\n';
    
    // Agregar filas de datos
    graduadosData.forEach((graduado, index) => {
        const fila = [
            index + 1,
            `"${graduado.nombre}"`,
            `"${graduado.cedula}"`,
            `"${graduado.carrera}"`,
            graduado.anioGraduacion,
            `"${graduado.empresa}"`,
            `"${graduado.cargo}"`,
            `"${graduado.estado}"`,
            `"${graduado.correo}"`,
            `"${graduado.telefono}"`,
            `"${graduado.salario}"`,
            `"${graduado.fechaContratacion}"`,
            `"${graduado.direccion}"`,
            `"${graduado.linkedin}"`
        ];
        csvContent += fila.join(',') + '\n';
    });
    
    // Generar nombre del archivo con fecha actual
    const fecha = new Date();
    const nombreArchivo = `Graduados_Seguimiento_${fecha.getFullYear()}_${(fecha.getMonth() + 1).toString().padStart(2, '0')}_${fecha.getDate().toString().padStart(2, '0')}.csv`;
    
    // Usar Data URI en lugar de Blob URL (más compatible con antivirus)
    const dataUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
    
    // Crear enlace de descarga
    const link = document.createElement('a');
    link.href = dataUri;
    link.download = nombreArchivo;
    link.style.display = 'none';
    
    // Descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostrar mensaje de éxito
    mostrarNotificacion('✅ Archivo CSV exportado exitosamente (compatible con Excel)', 'success');
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = 'success') {
    const colores = {
        success: '#28a745',
        error: '#dc3545',
        info: '#17a2b8',
        warning: '#ffc107'
    };
    
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${colores[tipo]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Agregar estilos para las animaciones de notificación
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);
