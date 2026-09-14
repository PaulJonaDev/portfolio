import styles from "./SectionHeading.module.css";

// Encabezado reutilizable: número de sección + título + copy opcional.
// Los números (01, 02, 03...) sí aplican aquí porque las secciones del
// portafolio SON una secuencia real de lectura (about → proyectos → skills).
export default function SectionHeading({ index, title, description }) {
  return (
    <div className={styles.heading}>
      <span className={styles.index}>{index}</span>
      <div>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}
