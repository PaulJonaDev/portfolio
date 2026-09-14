import { profile } from "../../data/profile";
import TurnDisplay from "../shared/TurnDisplay";
import styles from "./Hero.module.css";

const STACK = ["React", "JavaScript", "Java", "Node.js", "HTML5", "CSS3", "SQL", "Git"];

export default function Hero({ onOpenContact }) {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>{profile.location}</p>
          <h1 className={styles.headline}>{profile.tagline}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.summary}>{profile.summary}</p>

          <div className={styles.ctas}>
            <a href="#proyectos" className={styles.primaryCta}>
              Ver proyectos
            </a>
            <button type="button" className={styles.secondaryCta} onClick={onOpenContact}>
              Hablemos
            </button>
          </div>
        </div>

        <div className={styles.widgetColumn}>
          <TurnDisplay />
        </div>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...STACK, ...STACK].map((tech, index) => (
            <span key={`${tech}-${index}`} className={styles.marqueeItem}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
