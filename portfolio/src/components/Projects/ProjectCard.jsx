import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, isExpanded, onToggle }) {
  const detailsId = `project-details-${project.id}`;

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.summaryRow}
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={detailsId}
      >
        <div className={styles.titleBlock}>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.period}>{project.period}</p>
        </div>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <span className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ""}`} aria-hidden="true">
          ▾
        </span>
      </button>

      {isExpanded && (
        <div id={detailsId} className={styles.details}>
          <p className={styles.description}>{project.description}</p>
          <ul className={styles.highlights}>
            {project.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className={styles.links}>
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer">
                Ver código →
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                Ver demo →
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
