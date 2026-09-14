import { useMemo, useState } from "react";
import { filterOptions, projects } from "../../data/projects";
import SectionHeading from "../shared/SectionHeading";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [expandedId, setExpandedId] = useState(projects[0]?.id ?? null);

  // useMemo evita recalcular la lista filtrada en cada render que no
  // tenga que ver con el filtro (por ejemplo, al expandir una tarjeta).
  const visibleProjects = useMemo(() => {
    if (activeFilter === "todos") return projects;
    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  const handleToggle = (projectId) => {
    setExpandedId((current) => (current === projectId ? null : projectId));
  };

  return (
    <section id="proyectos" className={styles.section}>
      <div className="container">
        <SectionHeading
          index="02"
          title="Proyectos"
          description="Software real construido durante mi proceso de formación, de interfaces en JavaScript puro a servicios REST en Java."
        />

        <div className={styles.filters} role="group" aria-label="Filtrar proyectos por tecnología">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`${styles.filterButton} ${
                activeFilter === option.id ? styles.filterButtonActive : ""
              }`}
              onClick={() => setActiveFilter(option.id)}
              aria-pressed={activeFilter === option.id}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className={styles.list}>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}

          {visibleProjects.length === 0 && (
            <p className={styles.empty}>No hay proyectos para este filtro todavía.</p>
          )}
        </div>
      </div>
    </section>
  );
}
