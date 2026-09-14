import { profile } from "../../data/profile";
import SectionHeading from "../shared/SectionHeading";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <div className="container">
        <SectionHeading
          index="01"
          title="Sobre mí"
          description="De soporte técnico a desarrollador: cómo llegué a construir software en lugar de solo repararlo."
        />

        <div className={styles.layout}>
          <div>
            <p className={styles.bio}>{profile.summary}</p>

            <div className={styles.statsRow}>
              {profile.stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.learning}>
              <p className={styles.learningTitle}>Actualmente estoy aprendiendo</p>
              <ul className={styles.learningList}>
                {profile.currentlyLearning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <ol className={styles.timeline}>
            {profile.experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className={styles.timelineItem}>
                <p className={styles.timelinePeriod}>{job.period}</p>
                <p className={styles.timelineRole}>{job.role}</p>
                <p className={styles.timelineCompany}>
                  {job.company} · {job.location}
                </p>
                <ul className={styles.timelinePoints}>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
