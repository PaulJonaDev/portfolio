import { skillGroups } from "../../data/profile";
import SectionHeading from "../shared/SectionHeading";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="habilidades" className={styles.section}>
      <div className="container">
        <SectionHeading index="03" title="Habilidades" />

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.skillList}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
