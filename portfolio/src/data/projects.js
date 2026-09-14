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
    links: { github: "https://github.com/PaulJonaDev", demo: null },
  },
  {
    id: "visioncheck-ai",
    name: "VisionCheck AI",
    period: "Proyecto Full Stack",
    description:
      "Aplicación Full Stack enfocada en apoyar procesos de salud visual mediante una interfaz web conectada a servicios propios.",
    highlights: [
      "Interfaz en React consumiendo una API construida con Node.js y Express.",
      "Separación clara entre capa de presentación y lógica de servicios.",
    ],
    tags: ["React", "Node.js", "Express", "JavaScript"],
    filters: ["fullstack"],
    links: { github: "https://github.com/PaulJonaDev", demo: null },
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
    links: { github: "https://github.com/PaulJonaDev", demo: null },
  },
  {
    id: "smartassist-ai",
    name: "SmartAssist AI",
    period: "Proyecto académico · Sep 2025",
    description:
      "Chatbot inteligente construido con Python y Flask que integra APIs de IA generativa para automatizar la atención al usuario.",
    highlights: [
      "Optimización del procesamiento de consultas: +70% de precisión en respuestas automatizadas.",
      "Backend en Flask desacoplado del motor de generación de respuestas.",
    ],
    tags: ["Python", "Flask", "IA Generativa"],
    filters: ["ia"],
    links: { github: "https://github.com/PaulJonaDev", demo: null },
  },
  {
    id: "taskflow-mobile",
    name: "TaskFlow Mobile",
    period: "Proyecto académico · Jun 2024",
    description:
      "Aplicación móvil de gestión de tareas y recordatorios con almacenamiento local, diseñada con foco en experiencia de usuario.",
    highlights: [
      "Almacenamiento local con SQLite y tiempos de respuesta inferiores a 2 segundos.",
      "Arquitectura orientada a UX/UI desde el primer wireframe.",
    ],
    tags: ["Flutter", "SQLite"],
    filters: ["mobile"],
    links: { github: "https://github.com/PaulJonaDev", demo: null },
  },
];
