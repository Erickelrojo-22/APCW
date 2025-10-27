/**
 * Script para reportes.html
 * Reportes con gráficos Chart.js
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    initNavbarToggler();
    
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
    const downloadBtn = Array.from(document.querySelectorAll('button')).find(b => 
        b.textContent.includes('Descargar') || b.textContent.includes('PDF')
    );
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            alert('📥 Descargando reporte PDF...\nreporte_estadisticas_2025.pdf');
        });
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
