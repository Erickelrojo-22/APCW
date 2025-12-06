/**
 * Script para avisos.html
 * Avisos y oportunidades para graduados
 */

// Base de datos de avisos con información detallada
const avisosDetallados = {
    "Desarrollador Full Stack - Tech Solutions S.A.": {
        empresa: "Tech Solutions S.A.",
        puesto: "Desarrollador Full Stack",
        ubicacion: "Manta, Manabí",
        tipo: "Tiempo Completo",
        salario: "$1,200 - $1,800 USD",
        descripcion: "Tech Solutions S.A. es una empresa líder en desarrollo de software con más de 10 años en el mercado. Buscamos un desarrollador full stack apasionado por la tecnología.",
        responsabilidades: [
            "Desarrollar y mantener aplicaciones web usando React y Node.js",
            "Diseñar y optimizar bases de datos SQL y NoSQL",
            "Colaborar con el equipo en metodologías ágiles (Scrum)",
            "Implementar pruebas unitarias y de integración",
            "Participar en revisiones de código y mejores prácticas"
        ],
        requisitos: [
            "Título en Ingeniería en Sistemas o afines",
            "2+ años de experiencia en desarrollo web",
            "Dominio de JavaScript, React, Node.js",
            "Conocimiento de Git y control de versiones",
            "Experiencia con bases de datos relacionales y no relacionales",
            "Inglés intermedio (deseable)"
        ],
        beneficios: [
            "Seguro médico privado",
            "Capacitaciones constantes",
            "Ambiente laboral flexible",
            "Opciones de trabajo remoto",
            "Bonos por desempeño",
            "14 días de vacaciones anuales"
        ],
        contacto: "rrhh@techsolutions.com",
        telefono: "(05) 2-345-678",
        vencimiento: "30 de Octubre, 2025"
    },
    "Consultor Administrativo - Deloitte": {
        empresa: "Deloitte Ecuador",
        puesto: "Consultor Administrativo",
        ubicacion: "Quito, Pichincha (Relocalización disponible)",
        tipo: "Tiempo Completo",
        salario: "$1,500 - $2,200 USD",
        descripcion: "Deloitte es una de las Big Four en servicios de consultoría global. Buscamos profesionales en administración para unirse a nuestro equipo de consultoría empresarial.",
        responsabilidades: [
            "Analizar procesos operativos de empresas clientes",
            "Desarrollar estrategias de mejora organizacional",
            "Elaborar informes ejecutivos y presentaciones",
            "Gestionar proyectos de consultoría multidisciplinarios",
            "Brindar asesoría en gestión del cambio organizacional"
        ],
        requisitos: [
            "Título en Administración de Empresas o carreras afines",
            "1-3 años de experiencia en consultoría o áreas administrativas",
            "Excelentes habilidades analíticas y de comunicación",
            "Dominio de Excel avanzado y herramientas de análisis",
            "Inglés avanzado (requisito indispensable)",
            "Disponibilidad para viajar"
        ],
        beneficios: [
            "Paquete de relocalización incluido",
            "Seguro de salud premium",
            "Programa de desarrollo profesional",
            "Certificaciones internacionales pagadas",
            "Gimnasio corporativo",
            "Ambiente multicultural",
            "Bonos por proyectos"
        ],
        contacto: "recruiting.ecuador@deloitte.com",
        telefono: "(02) 2-987-654",
        vencimiento: "25 de Octubre, 2025"
    },
    "Feria de Empleo 2025 - ULEAM": {
        evento: "Feria de Empleo ULEAM 2025",
        organizador: "Universidad Laica Eloy Alfaro de Manabí",
        ubicacion: "Campus Principal, Manta",
        fecha: "15 de Noviembre, 2025",
        horario: "8:00 AM - 5:00 PM",
        descripcion: "La feria de empleo más importante del año en Manabí. Conecta con 35 empresas líderes de la región y del país que buscan talento ULEAM.",
        empresasParticipantes: [
            "Banco Pichincha",
            "Corporación Favorita",
            "Tech Solutions S.A.",
            "Deloitte Ecuador",
            "Hospital SOLCA",
            "Ministerio de Salud Pública",
            "ETAPA EP",
            "Nestlé Ecuador",
            "...y 27 empresas más"
        ],
        actividades: [
            "Entrevistas laborales en tiempo real",
            "Stand de cada empresa con información",
            "Talleres de preparación de CV (10:00 AM)",
            "Charla: 'Cómo destacar en una entrevista' (1:00 PM)",
            "Panel de egresados exitosos (3:00 PM)",
            "Networking empresarial"
        ],
        requisitos: [
            "Ser graduado o estar en últimos semestres de ULEAM",
            "Llevar copias de CV actualizadas (mínimo 10 copias)",
            "Vestimenta formal/semiformal",
            "Registro previo (obligatorio)"
        ],
        importante: [
            "Cupos limitados - Registro hasta el 13 de noviembre",
            "Entrada gratuita para estudiantes y graduados ULEAM",
            "Se entregará certificado de participación",
            "Sorteo de capacitaciones gratuitas"
        ],
        contacto: "vinculacion@uleam.edu.ec",
        telefono: "(05) 2-623-740"
    },
    "Junta de Graduados - Vinculación Laboral": {
        evento: "Junta Informativa de Graduados",
        organizador: "Departamento de Vinculación ULEAM",
        ubicacion: "Auditorio Central, Campus ULEAM",
        fecha: "5 de Noviembre, 2025",
        horario: "3:00 PM - 5:00 PM",
        descripcion: "Reunión informativa importante sobre nuevas alianzas estratégicas con empresas y oportunidades para graduados ULEAM.",
        temasTratar: [
            "Presentación de convenios con empresas regionales",
            "Nuevas bolsas de empleo exclusivas para graduados",
            "Programa de pasantías profesionales",
            "Sistema de seguimiento actualizado",
            "Red de networking de exalumnos",
            "Encuesta de situación laboral 2025"
        ],
        dirigidoA: [
            "Graduados promociones 2020-2025",
            "Estudiantes de últimos semestres",
            "Interesados en vinculación laboral"
        ],
        incluye: [
            "Material informativo digital",
            "Refrigerio",
            "Certificado de asistencia",
            "Acceso prioritario a bolsa de empleo"
        ],
        importante: [
            "Asistencia obligatoria para participar en programas 2025",
            "Se tomará lista de asistencia",
            "Confirmar asistencia hasta el 3 de noviembre"
        ],
        contacto: "graduados@uleam.edu.ec",
        telefono: "(05) 2-623-745"
    },
    "Feria de Empleo Tecnológico - TechHub Manabí": {
        evento: "Feria de Empleo Tecnológico",
        organizador: "TechHub Manabí",
        ubicacion: "Centro de Convenciones de Manta",
        fecha: "12 de Noviembre, 2025",
        horario: "9:00 AM - 6:00 PM",
        descripcion: "Primera feria especializada en tecnología en Manabí. Enfocada en perfiles IT: desarrollo, análisis de datos, ciberseguridad, UX/UI y más.",
        empresasParticipantes: [
            "AWS Ecuador",
            "Kruger Corporation",
            "Telconet",
            "Banco del Pacífico - Área TI",
            "StartUps locales de tecnología",
            "Empresas internacionales (remoto)"
        ],
        perfilesRequeridos: [
            "Desarrolladores (Frontend, Backend, Full Stack)",
            "Analistas de Datos / Data Scientists",
            "Especialistas en Ciberseguridad",
            "Diseñadores UX/UI",
            "DevOps Engineers",
            "QA Testers"
        ],
        actividadesEspeciales: [
            "Charla: 'El futuro del trabajo tech' - 10:00 AM",
            "Workshop: 'Algoritmos en entrevistas técnicas' - 12:00 PM",
            "Panel: 'Trabajo remoto internacional' - 2:00 PM",
            "Hackathon express - 4:00 PM",
            "Premios y sorteos tecnológicos"
        ],
        requisitos: [
            "Conocimientos en programación y tecnología",
            "Portfolio de proyectos (recomendado)",
            "GitHub activo (recomendado)",
            "Registro online previo"
        ],
        beneficios: [
            "Entrada gratuita",
            "Kit de bienvenida tech",
            "Certificado digital de asistencia",
            "Acceso a bolsa de empleo tech exclusiva"
        ],
        contacto: "info@techhubmanabi.com",
        telefono: "(05) 2-555-123"
    },
    "Taller: Entrevista Efectiva y Negociación Salarial": {
        evento: "Taller de Entrevista y Negociación",
        facilitador: "Lic. María González - Especialista en RRHH",
        ubicacion: "Virtual (Plataforma Zoom)",
        fecha: "8 de Noviembre, 2025",
        horario: "6:00 PM - 8:00 PM",
        descripcion: "Taller práctico para dominar técnicas de entrevista laboral y negociación salarial efectiva. Ideal para próximos graduados y profesionales en búsqueda de empleo.",
        contenido: [
            "Preparación pre-entrevista: investigación de la empresa",
            "Lenguaje corporal y primera impresión",
            "Respuestas a preguntas difíciles comunes",
            "Técnica STAR para responder preguntas conductuales",
            "Cómo hablar de expectativas salariales",
            "Negociación de beneficios adicionales",
            "Simulación de entrevista en vivo"
        ],
        incluye: [
            "Material descargable en PDF",
            "Plantillas de respuestas",
            "Grabación de la sesión",
            "Certificado digital de participación",
            "Grupo de WhatsApp para seguimiento"
        ],
        dirigidoA: [
            "Graduados en búsqueda activa de empleo",
            "Profesionales que desean cambiar de trabajo",
            "Estudiantes de últimos semestres"
        ],
        requisitos: [
            "Conexión a internet estable",
            "Cámara y micrófono (para participación)",
            "Registro previo gratuito"
        ],
        cupos: "Limitados a 50 participantes",
        inversion: "Totalmente GRATUITO",
        contacto: "talleres@uleam.edu.ec",
        linkRegistro: "https://forms.uleam.edu.ec/taller-entrevistas"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle
    initNavbarToggler();
    
    // Animar tarjetas de avisos
    const avisoCards = document.querySelectorAll('[style*="border"], .card');
    avisoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 100);
    });
    
    // Efectos hover en tarjetas
    avisoCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Funcionalidad del Modal
    const modal = document.getElementById('modalDetalles');
    const closeModal = document.getElementById('closeModal');
    const btnCerrarModal = document.getElementById('btnCerrarModal');
    const btnAccionModal = document.getElementById('btnAccionModal');
    
    // Función para mostrar detalles en el modal
    function mostrarDetalles(titulo) {
        const detalles = avisosDetallados[titulo];
        const modalTitulo = document.getElementById('modalTitulo');
        const modalContenido = document.getElementById('modalContenido');
        
        if (!detalles) {
            modalTitulo.textContent = "Información no disponible";
            modalContenido.innerHTML = '<p style="color: #666;">Lo sentimos, no se encontró información detallada para este aviso.</p>';
            modal.style.display = 'block';
            return;
        }
        
        modalTitulo.textContent = titulo;
        
        // Generar HTML según el tipo de aviso
        let contenidoHTML = '';
        
        if (detalles.empresa) {
            // Es una oferta de empleo
            contenidoHTML = `
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">🏢 Información de la Empresa</h3>
                    <p style="margin: 0.5rem 0; color: #333;"><strong>Empresa:</strong> ${detalles.empresa}</p>
                    <p style="margin: 0.5rem 0; color: #333;"><strong>Puesto:</strong> ${detalles.puesto}</p>
                    <p style="margin: 0.5rem 0; color: #333;"><strong>📍 Ubicación:</strong> ${detalles.ubicacion}</p>
                    <p style="margin: 0.5rem 0; color: #333;"><strong>⏰ Tipo:</strong> ${detalles.tipo}</p>
                    <p style="margin: 0.5rem 0; color: #333;"><strong>💰 Salario:</strong> ${detalles.salario}</p>
                    <p style="margin: 0.5rem 0; color: #333;"><strong>📅 Fecha límite:</strong> ${detalles.vencimiento}</p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">📋 Descripción</h3>
                    <p style="color: #555; line-height: 1.6;">${detalles.descripcion}</p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">✅ Responsabilidades</h3>
                    <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem;">
                        ${detalles.responsabilidades.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">📌 Requisitos</h3>
                    <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem;">
                        ${detalles.requisitos.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">🎁 Beneficios</h3>
                    <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem;">
                        ${detalles.beneficios.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                </div>
                
                <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 4px solid #667eea;">
                    <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.1rem;">📞 Información de Contacto</h3>
                    <p style="margin: 0.3rem 0; color: #333;"><strong>Email:</strong> ${detalles.contacto}</p>
                    <p style="margin: 0.3rem 0; color: #333;"><strong>Teléfono:</strong> ${detalles.telefono}</p>
                </div>
            `;
            btnAccionModal.textContent = '📧 Enviar CV';
        } else {
            // Es un evento, feria o taller
            contenidoHTML = `
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">📅 Información del Evento</h3>
                    <p style="margin: 0.5rem 0; color: #333;"><strong>Organizador:</strong> ${detalles.organizador || detalles.facilitador}</p>
                    <p style="margin: 0.5rem 0; color: #333;"><strong>📍 Ubicación:</strong> ${detalles.ubicacion}</p>
                    <p style="margin: 0.5rem 0; color: #333;"><strong>📅 Fecha:</strong> ${detalles.fecha}</p>
                    <p style="margin: 0.5rem 0; color: #333;"><strong>⏰ Horario:</strong> ${detalles.horario}</p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">📋 Descripción</h3>
                    <p style="color: #555; line-height: 1.6;">${detalles.descripcion}</p>
                </div>
            `;
            
            if (detalles.empresasParticipantes) {
                contenidoHTML += `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">🏢 Empresas Participantes</h3>
                        <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem; columns: 2;">
                            ${detalles.empresasParticipantes.map(e => `<li>${e}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            if (detalles.perfilesRequeridos) {
                contenidoHTML += `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">👥 Perfiles Requeridos</h3>
                        <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem;">
                            ${detalles.perfilesRequeridos.map(p => `<li>${p}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            if (detalles.actividades || detalles.actividadesEspeciales) {
                const actividades = detalles.actividades || detalles.actividadesEspeciales;
                contenidoHTML += `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">🎯 Actividades</h3>
                        <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem;">
                            ${actividades.map(a => `<li>${a}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            if (detalles.contenido) {
                contenidoHTML += `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">📚 Contenido del Taller</h3>
                        <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem;">
                            ${detalles.contenido.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            if (detalles.temasTratar) {
                contenidoHTML += `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">📝 Temas a Tratar</h3>
                        <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem;">
                            ${detalles.temasTratar.map(t => `<li>${t}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            if (detalles.incluye) {
                contenidoHTML += `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">✨ Incluye</h3>
                        <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem;">
                            ${detalles.incluye.map(i => `<li>${i}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            if (detalles.requisitos) {
                contenidoHTML += `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">📌 Requisitos</h3>
                        <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem;">
                            ${detalles.requisitos.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            if (detalles.importante) {
                contenidoHTML += `
                    <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 1.5rem;">
                        <h3 style="color: #856404; margin-bottom: 0.5rem; font-size: 1.1rem;">⚠️ Importante</h3>
                        <ul style="color: #856404; line-height: 1.6; padding-left: 1.5rem; margin: 0;">
                            ${detalles.importante.map(i => `<li>${i}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            if (detalles.dirigidoA) {
                contenidoHTML += `
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.2rem;">👥 Dirigido a</h3>
                        <ul style="color: #555; line-height: 1.8; padding-left: 1.5rem;">
                            ${detalles.dirigidoA.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            if (detalles.cupos) {
                contenidoHTML += `
                    <div style="background: #e7f3ff; padding: 0.8rem; border-radius: 6px; margin-bottom: 1rem;">
                        <p style="margin: 0; color: #004085;"><strong>👥 Cupos:</strong> ${detalles.cupos}</p>
                    </div>
                `;
            }
            
            if (detalles.inversion) {
                contenidoHTML += `
                    <div style="background: #d4edda; padding: 0.8rem; border-radius: 6px; margin-bottom: 1rem;">
                        <p style="margin: 0; color: #155724;"><strong>💵 Inversión:</strong> ${detalles.inversion}</p>
                    </div>
                `;
            }
            
            contenidoHTML += `
                <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; border-left: 4px solid #667eea;">
                    <h3 style="color: #667eea; margin-bottom: 0.5rem; font-size: 1.1rem;">📞 Información de Contacto</h3>
                    <p style="margin: 0.3rem 0; color: #333;"><strong>Email:</strong> ${detalles.contacto}</p>
                    ${detalles.telefono ? `<p style="margin: 0.3rem 0; color: #333;"><strong>Teléfono:</strong> ${detalles.telefono}</p>` : ''}
                    ${detalles.linkRegistro ? `<p style="margin: 0.3rem 0;"><strong>Registro:</strong> <a href="${detalles.linkRegistro}" style="color: #667eea;">${detalles.linkRegistro}</a></p>` : ''}
                </div>
            `;
            
            btnAccionModal.textContent = '✅ Registrarse';
        }
        
        modalContenido.innerHTML = contenidoHTML;
        modal.style.display = 'block';
    }
    
    // Cerrar modal
    function cerrarModal() {
        modal.style.display = 'none';
    }
    
    closeModal.onclick = cerrarModal;
    btnCerrarModal.onclick = cerrarModal;
    
    // Cerrar al hacer clic fuera del modal
    window.onclick = function(event) {
        if (event.target === modal) {
            cerrarModal();
        }
    }
    
    // Acción del botón principal del modal
    btnAccionModal.onclick = function() {
        const titulo = document.getElementById('modalTitulo').textContent;
        const detalles = avisosDetallados[titulo];
        
        if (detalles && detalles.empresa) {
            alert(`✅ CV enviado a ${detalles.contacto}\n\n¡Te contactarán pronto!`);
        } else {
            alert('✅ Registro completado exitosamente\n\n¡Nos vemos en el evento!');
        }
        cerrarModal();
    }
    
    // Botones de acción en las tarjetas
    const actionButtons = document.querySelectorAll('button[class*="btn"]');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.trim();
            
            if (text.includes('Ver') && text.includes('Más')) {
                // Obtener el título de la tarjeta
                const card = this.closest('.aviso-card');
                const titulo = card.querySelector('.aviso-title').textContent.trim();
                mostrarDetalles(titulo);
            } else if (text.includes('Solicitar') || text.includes('Aplicar')) {
                alert('✅ Solicitud enviada correctamente');
            } else if (text.includes('Registrarse') || text.includes('Confirmar') || text.includes('Reservar')) {
                const card = this.closest('.aviso-card');
                const titulo = card.querySelector('.aviso-title').textContent.trim();
                mostrarDetalles(titulo);
            }
        });
    });
});
