import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { profile } from "../../data/profile";
import StatusPill from "../shared/StatusPill";
import styles from "./Navbar.module.css";

const LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
];

export default function Navbar({ onOpenContact }) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.logo} onClick={closeMenu}>
          {profile.initials}
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.links}>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* En móvil, estas acciones viven dentro del menú desplegable */}
          <div className={styles.mobileActions}>
            <StatusPill
              label={profile.availability}
              onClick={() => {
                closeMenu();
                onOpenContact();
              }}
            />
          </div>
        </nav>

        <div className={styles.actions}>
          <StatusPill
            label={profile.availability}
            onClick={onOpenContact}
          />

          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <a href={profile.resumeFile} download className={styles.cvButton}>
            Descargar CV
          </a>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú de navegación"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
