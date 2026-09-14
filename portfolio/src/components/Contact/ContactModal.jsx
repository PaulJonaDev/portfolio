import { useEffect, useRef, useState } from "react";
import { profile } from "../../data/profile";
import styles from "./ContactModal.module.css";

const INITIAL_FORM = { name: "", email: "", message: "" };

function validate(form) {
  const errors = {};

  if (form.name.trim().length < 2) {
    errors.name = "Escribe tu nombre completo.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Ingresa un correo válido.";
  }

  if (form.message.trim().length < 10) {
    errors.message = "Cuéntame un poco más (mínimo 10 caracteres).";
  }

  return errors;
}

// "status" recorre: idle -> submitting -> success | error.
// No hay backend conectado todavía: se simula el envío y, en paralelo,
// se ofrece un enlace mailto como respaldo real y funcional.
export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
    } else {
      setForm(INITIAL_FORM);
      setErrors({});
      setStatus("idle");
    }
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    // En producción, aquí iría una llamada real (fetch a un backend propio,
    // o un servicio como EmailJS/Formspree). Se simula la latencia de red
    // para dejar el flujo de estados completo y probado.
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Contacto desde el portafolio — ${form.name || "sin nombre"}`
  )}&body=${encodeURIComponent(form.message)}`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        {status === "success" ? (
          <div className={styles.successState}>
            <p className={styles.successTitle}>Mensaje enviado</p>
            <p>
              Gracias, {form.name.split(" ")[0]}. Te responderé pronto a {form.email}.
            </p>
            <button type="button" className={styles.secondaryAction} onClick={onClose}>
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h2 id="contact-modal-title" className={styles.title}>
              Hablemos de tu proyecto
            </h2>
            <p className={styles.subtitle}>
              Respondo desde {profile.email} o por{" "}
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              .
            </p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <label className={styles.field}>
                Nombre
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </label>

              <label className={styles.field}>
                Correo
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </label>

              <label className={styles.field}>
                Mensaje
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </label>

              <div className={styles.formActions}>
                <button type="submit" className={styles.submitButton} disabled={status === "submitting"}>
                  {status === "submitting" ? "Enviando…" : "Enviar mensaje"}
                </button>
                <a href={mailtoHref} className={styles.mailtoLink}>
                  o escríbeme directo →
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
