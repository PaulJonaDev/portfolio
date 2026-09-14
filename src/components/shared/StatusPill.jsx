import styles from "./StatusPill.module.css";

// Pastilla de "estado" inspirada en los tableros de turno de TurnoSalud.
// Se reutiliza en el Navbar (siempre visible) y puede recibir cualquier
// acción — normalmente, abrir el modal de contacto.
export default function StatusPill({ label, onClick, as = "button" }) {
  const Component = as;
  return (
    <Component className={styles.pill} onClick={onClick} type={as === "button" ? "button" : undefined}>
      <span className={styles.dot} aria-hidden="true" />
      {label}
    </Component>
  );
}
