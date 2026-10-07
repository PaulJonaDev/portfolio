// Cada proyecto declara "filters": las categorías bajo las que debe
// aparecer cuando el usuario filtra. Un proyecto puede pertenecer a
// varias (ej. TuCancha es "fullstack" y "java" a la vez).
export const filterOptions = [
  { id: "todos", label: "Todos" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "java", label: "Java" },
  { id: "ia", label: "IA / Python" },
  { id: "mobile", label: "Mobile" },
];

export const projects = [
  {
    id: "turnosalud",
    name: "TurnoSalud",
    period: "Proyecto de formación",
    description:
      "Aplicación web que simula la gestión de turnos de una EPS: fila de espera en vivo, llamado del siguiente turno, búsqueda de pacientes por nombre o código y cancelación de turnos.",
    highlights: [
      "Contador de personas en espera que se actualiza automáticamente.",
      "Búsqueda de pacientes por nombre o código en tiempo real.",
      "Lógica de turnos completa en JavaScript puro, sin frameworks.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    filters: ["frontend"],
    links: { github: "https://github.com/PaulJonaDev/TurnoSalud.git", demo: null },
  },
 
  {
    id: "tucancha",
    name: "TuCancha",
    period: "Generation Colombia · Jun–Sep 2026",
    description:
      "Plataforma de reserva de instalaciones deportivas construida en equipo ágil de 5 desarrolladores. Diseñé la arquitectura Frontend y los servicios Backend.",
    highlights: [
      "Interfaces responsivas con HTML5, CSS3, JavaScript y Bootstrap para +300 usuarios de prueba.",
      "Endpoints REST en Java para gestión automatizada de reservas y disponibilidad en tiempo real.",
      "Flujo de trabajo colaborativo en Git/GitHub bajo metodología ágil.",
    ],
    tags: ["Java", "REST API", "Bootstrap", "Git"],
    filters: ["java", "fullstack"],
    links: { github: "https://github.com/PaulJonaDev/APP_TuCancha.git", demo: null },
  },
  {
    id: "BankingSystem",
    name: "BankingSystem",
    period: "Proyecto académico · Sep 2025",
    description:
      "Sistema de gestión bancaria construido con Java y Spring Boot que integra funcionalidades de seguridad y transacciones financieras.",
    highlights: [
      "El proyecto modela las operaciones del Banco Nacional Andino, gestionando tres tipos específicos de productos financieros con reglas de negocio particulares para comisiones y retiros",
      
    ],
    tags: ["Java", "Spring Boot", "REST API"],
    filters: ["java", "fullstack"],
    links: { github: "https://github.com/PaulJonaDev/BankingSystem.git", demo: null },
  },
  {
    id: "Orvian",
    name: "Orvian",
    period: "Proyecto académico · Jun 2026",
    description:
      "Aplicación móvil de gestión de tareas y recordatorios con almacenamiento local, diseñada con foco en experiencia de usuario.",
    highlights: [
      "Web interactiva desarrollada con HTML5, CSS3/Bootstrap y JavaScript ES6+ (POO) para crear, organizar y eliminar tareas. Cuenta con diseño adaptativo (responsive) y persistencia de datos local en el navegador a través de localStorage",
      
    ],
    tags: ["html,css", "javascript", "bootstrap,POO"],
    filters: ["mobile"],
    links: { github: "https://github.com/PaulJonaDev/Orvian.git", demo: null },
  },
];
