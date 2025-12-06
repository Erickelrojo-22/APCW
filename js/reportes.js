/**
 * Script para reportes.html
 * Reportes con gráficos Chart.js
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    initNavbarToggler();
    
    // Inicializar gráficos
    initCharts();
    
    // Animar tarjetas de estadísticas
    const statCards = document.querySelectorAll('[style*="background"]');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Botón de descarga de PDF
    const downloadBtn = document.getElementById('btnDescargarPDF');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            generarReportePDF();
        });
    }

    // Exportar datos
    const btnExportJSON = document.getElementById('btnExportJSON');
    if (btnExportJSON) {
        btnExportJSON.addEventListener('click', function() {
            const data = tableToData('.employment-table');
            downloadJSON(data, 'reporte_empleabilidad.json');
        });
    }

    const btnExportXML = document.getElementById('btnExportXML');
    if (btnExportXML) {
        btnExportXML.addEventListener('click', function() {
            const data = tableToData('.employment-table');
            downloadXML(data, 'reporte_empleabilidad.xml', 'reporte', 'facultad');
        });
    }
    
    // Función para generar el reporte PDF
    function generarReportePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Configuración de colores ULEAM
        const colorRojo = [181, 58, 58];
        const colorVerde = [34, 139, 34];
        const colorAzul = [33, 150, 243];
        const colorNaranja = [255, 152, 0];
        const colorGris = [102, 102, 102];
        
        // Encabezado
        doc.setFillColor(...colorRojo);
        doc.rect(0, 0, 210, 35, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.setFont(undefined, 'bold');
        doc.text('ULEAM', 15, 15);
        
        doc.setFontSize(16);
        doc.text('Reporte de Estadísticas', 15, 25);
        
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.text('Seguimiento a Graduados', 15, 31);
        
        // Fecha de generación
        doc.setFontSize(9);
        const fecha = new Date().toLocaleDateString('es-EC', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        doc.text(`Generado: ${fecha}`, 150, 31);
        
        // Reset color de texto
        doc.setTextColor(0, 0, 0);
        
        // Título de la sección
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text('Estadísticas Principales', 15, 50);
        
        // Estadísticas en cuadros
        let yPos = 60;
        
        // Cuadro 1: Total Graduados
        doc.setFillColor(240, 240, 240);
        doc.roundedRect(15, yPos, 45, 25, 3, 3, 'F');
        doc.setFontSize(20);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(...colorVerde);
        doc.text('1,245', 37.5, yPos + 12, { align: 'center' });
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(...colorGris);
        doc.text('Total Graduados', 37.5, yPos + 20, { align: 'center' });
        
        // Cuadro 2: Tasa de Empleo
        doc.setFillColor(240, 240, 240);
        doc.roundedRect(65, yPos, 45, 25, 3, 3, 'F');
        doc.setFontSize(20);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(...colorVerde);
        doc.text('71.6%', 87.5, yPos + 12, { align: 'center' });
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(...colorGris);
        doc.text('Tasa de Empleo', 87.5, yPos + 20, { align: 'center' });
        
        // Cuadro 3: Emprendedores
        doc.setFillColor(240, 240, 240);
        doc.roundedRect(115, yPos, 45, 25, 3, 3, 'F');
        doc.setFontSize(20);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(...colorNaranja);
        doc.text('175', 137.5, yPos + 12, { align: 'center' });
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(...colorGris);
        doc.text('Emprendedores', 137.5, yPos + 20, { align: 'center' });
        
        // Cuadro 4: En Posgrado
        doc.setFillColor(240, 240, 240);
        doc.roundedRect(165, yPos, 35, 25, 3, 3, 'F');
        doc.setFontSize(20);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(...colorAzul);
        doc.text('89', 182.5, yPos + 12, { align: 'center' });
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(...colorGris);
        doc.text('En Posgrado', 182.5, yPos + 20, { align: 'center' });
        
        // Reset color
        doc.setTextColor(0, 0, 0);
        
        // Distribución por Estado Laboral
        yPos = 100;
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('Distribución por Estado Laboral', 15, yPos);
        
        yPos += 10;
        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        
        // Empleados
        doc.setFillColor(...colorVerde);
        doc.circle(20, yPos, 2, 'F');
        doc.text('Empleados: 892 (71.6%)', 25, yPos + 1);
        
        // Desempleados
        yPos += 7;
        doc.setFillColor(...colorRojo);
        doc.circle(20, yPos, 2, 'F');
        doc.text('Desempleados: 178 (14.3%)', 25, yPos + 1);
        
        // Emprendedores
        yPos += 7;
        doc.setFillColor(...colorNaranja);
        doc.circle(20, yPos, 2, 'F');
        doc.text('Emprendedores: 175 (14.1%)', 25, yPos + 1);
        
        // Graduados por Carrera
        yPos = 140;
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('Graduados por Carrera', 15, yPos);
        
        yPos += 8;
        doc.setFontSize(9);
        doc.setFont(undefined, 'normal');
        
        const carreras = [
            { nombre: 'Ingeniería en Sistemas', cantidad: 287 },
            { nombre: 'Medicina', cantidad: 245 },
            { nombre: 'Derecho', cantidad: 198 },
            { nombre: 'Administración de Empresas', cantidad: 176 },
            { nombre: 'Contabilidad', cantidad: 165 },
            { nombre: 'Ingeniería Civil', cantidad: 98 },
            { nombre: 'Enfermería', cantidad: 76 }
        ];
        
        carreras.forEach((carrera, index) => {
            yPos += 6;
            doc.text(`${index + 1}. ${carrera.nombre}`, 20, yPos);
            doc.text(`${carrera.cantidad}`, 180, yPos, { align: 'right' });
        });
        
        // Áreas de Trabajo
        yPos += 15;
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text('Principales Áreas de Trabajo', 15, yPos);
        
        yPos += 8;
        doc.setFontSize(9);
        doc.setFont(undefined, 'normal');
        
        const areas = [
            { nombre: 'Tecnología', cantidad: 245 },
            { nombre: 'Salud', cantidad: 198 },
            { nombre: 'Educación', cantidad: 167 },
            { nombre: 'Finanzas', cantidad: 134 },
            { nombre: 'Construcción', cantidad: 89 }
        ];
        
        areas.forEach((area, index) => {
            yPos += 6;
            doc.text(`${index + 1}. ${area.nombre}`, 20, yPos);
            doc.text(`${area.cantidad}`, 180, yPos, { align: 'right' });
        });
        
        // Pie de página
        doc.setFontSize(8);
        doc.setTextColor(...colorGris);
        doc.text('Universidad Laica Eloy Alfaro de Manabí (ULEAM)', 105, 285, { align: 'center' });
        doc.text('Sistema de Seguimiento a Graduados', 105, 290, { align: 'center' });
        
        // Guardar el PDF
        doc.save(`Reporte_Estadisticas_ULEAM_${new Date().getFullYear()}.pdf`);
        
        // Mostrar mensaje de éxito
        alert('✅ Reporte PDF descargado exitosamente');
    }
    
    // Animar los gráficos cuando se cargan
    const chartContainers = document.querySelectorAll('canvas, [style*="chart"]');
    chartContainers.forEach(container => {
        container.style.opacity = '0';
        setTimeout(() => {
            container.style.transition = 'opacity 0.5s ease';
            container.style.opacity = '1';
        }, 300);
    });
    
    // Efectos interactivos en tablas
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(107, 142, 63, 0.1)';
        });
        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
});

// Función para inicializar todos los gráficos
function initCharts() {
    // Verificar que Chart.js esté disponible
    if (typeof Chart === 'undefined') {
        console.error('Chart.js no está cargado');
        return;
    }

    // Colores ULEAM
    const colors = {
        rojo: '#DC143C',
        verde: '#228B22',
        naranja: '#FF9800',
        azul: '#2196F3',
        gris: '#6C757D'
    };

    // Gráfico Circular: Estado Laboral
    const estadoLaboralCanvas = document.getElementById('estadoLaboralChart');
    if (estadoLaboralCanvas) {
        const estadoLaboralCtx = estadoLaboralCanvas.getContext('2d');
        new Chart(estadoLaboralCtx, {
            type: 'doughnut',
            data: {
                labels: ['Empleados', 'Desempleados', 'Emprendimiento', 'Estudios de Posgrado'],
                datasets: [{
                    data: [892, 178, 175, 89],
                    backgroundColor: [colors.verde, colors.rojo, colors.naranja, colors.azul],
                    borderWidth: 3,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Gráfico de Barras: Graduados por Carrera
    const carrerasCanvas = document.getElementById('carrerasChart');
    if (carrerasCanvas) {
        const carrerasCtx = carrerasCanvas.getContext('2d');
        new Chart(carrerasCtx, {
            type: 'bar',
            data: {
                labels: ['Ing. Sistemas', 'Medicina', 'Derecho', 'Contabilidad', 'Ing. Civil', 'Enfermería', 'Arquitectura'],
                datasets: [{
                    label: 'Número de Graduados',
                    data: [234, 198, 167, 145, 132, 118, 95],
                    backgroundColor: colors.verde,
                    borderColor: colors.verde,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 50
                        }
                    }
                }
            }
        });
    }

    // Gráfico de Líneas: Tendencia por Año
    const tendenciaCanvas = document.getElementById('tendenciaChart');
    if (tendenciaCanvas) {
        const tendenciaCtx = tendenciaCanvas.getContext('2d');
        new Chart(tendenciaCtx, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Graduados',
                    data: [145, 168, 189, 212, 245, 267, 219],
                    borderColor: colors.rojo,
                    backgroundColor: 'rgba(220, 20, 60, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 50
                        }
                    }
                }
            }
        });
    }
}
