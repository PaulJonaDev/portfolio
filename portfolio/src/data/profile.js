// Datos personales y profesionales.
// Centralizados aquí para que actualizar el CV no implique tocar componentes.
export const profile = {
  name: "Jonathan David Paul Caraballo",
  shortName: "Jonathan Paul",
  initials: "JP",
  role: "Desarrollador Full Stack Jr. · Java & React",
  location: "Bogotá, Colombia",
  tagline: "Construyo interfaces web reales, no solo maquetas.",
  summary:
    "Tecnólogo en Programación de Software con experiencia práctica creando y desplegando aplicaciones web. Especializado en interfaces con React, JavaScript, HTML5 y CSS3; en el backend trabajo con Java, Node.js y APIs REST, además de bases de datos relacionales y no relacionales.",
  email: "jonathancaraballo.e@gmail.com",
  phone: "+57 304 403 5245",
  linkedin: "https://www.linkedin.com/in/pauljonadev",
  github: "https://github.com/PaulJonaDev",
  resumeFile: "/resume-jonathan-paul.pdf",
  availability: "Disponible para nuevas oportunidades",
  currentlyLearning: [
    "React avanzado",
    "Java Full Stack",
    "APIs REST",
    "Arquitectura Frontend",
    "Testing",
  ],
  stats: [
    { value: "5+", label: "Proyectos reales construidos" },
    { value: "3", label: "Años de soporte técnico previo" },
    { value: "90%", label: "Satisfacción en atención a usuarios" },
  ],
  experience: [
    {
      company: "Generation Colombia",
      role: "Desarrollador Java Jr. Full Stack",
      period: "Jun. 2026 — Sep. 2026",
      location: "Bogotá, Colombia",
      points: [
        "Diseñé e implementé la arquitectura Frontend y servicios Backend del proyecto TuCancha, una plataforma de reserva de instalaciones deportivas, en un equipo ágil de 5 desarrolladores.",
        "Desarrollé interfaces responsivas con HTML5, CSS3, JavaScript y Bootstrap para más de 300 usuarios en entornos de prueba.",
        "Construí endpoints REST en Java para la gestión automatizada de reservas y disponibilidad en tiempo real.",
      ],
    },
    {
      company: "GO Venture Group",
      role: "IT Support & Systems Assistant",
      period: "Feb. 2020 — Dic. 2023",
      location: "Bogotá, Colombia",
      points: [
        "Diagnostiqué y resolví entre 15 y 20 incidencias técnicas semanales, reduciendo los tiempos de inactividad en un 25%.",
        "Ejecuté mantenimiento preventivo y correctivo a una infraestructura de más de 30 equipos de cómputo.",
      ],
    },
    {
      company: "Atento",
      role: "Help Desk Analyst",
      period: "Feb. 2018 — Dic. 2019",
      location: "Venezuela",
      points: [
        "Gestioné entre 20 y 25 requerimientos técnicos diarios cumpliendo los SLA, con un índice de satisfacción superior al 90%.",
        "Capacité a usuarios finales y redacté guías de resolución, reduciendo en un 15% los tickets por incidencias comunes.",
      ],
    },
  ],
  education: [
    {
      institution: "Generation Colombia",
      program: "Desarrollador Junior Full-Stack Java",
      period: "Ene. 2024 — May. 2024",
    },
    {
      institution: 'CIADET — Politécnico Nacional de Artes y Oficios',
      program: "Tecnología en Programación de Software",
      period: "Ene. 2024 — Dic. 2025",
    },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["JavaScript (ES6+)", "React", "HTML5", "CSS3", "Bootstrap", "Responsive Design", "Figma"],
  },
  {
    title: "Backend",
    skills: ["Java", "Node.js", "Python", "Flask", "APIs REST"],
  },
  {
    title: "Datos",
    skills: ["SQL", "SQLite", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Herramientas y prácticas",
    skills: ["Git", "GitHub", "Agile", "Scrum", "Testing", "Validación de software"],
  },
];
