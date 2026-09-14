import { profile } from "../../data/profile";
import styles from "./Contact.module.css";

export default function Contact({ onOpenContact }) {
  return (
    <section id="contacto" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.eyebrow}>04 — Contacto</p>
          <h2 className={styles.title}>¿Un proyecto en mente?</h2>
          <p className={styles.copy}>
            Escríbeme y te respondo en menos de 24 horas, directamente desde {profile.email}.
          </p>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.primaryButton} onClick={onOpenContact}>
            Abrir formulario de contacto
          </button>
          <div className={styles.links}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
