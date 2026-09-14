import { useEffect, useState } from "react";
import styles from "./TurnDisplay.module.css";

function formatElapsed(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

// Este panel imita un tablero de turnos real (como el de TurnoSalud) y
// funciona como pieza central del Hero: no es una imagen estática, es un
// componente vivo que demuestra manejo de estado y efectos en React.
export default function TurnDisplay() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsed((current) => current + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.board} role="status" aria-live="off">
      <div className={styles.boardHeader}>
        <span>Turnero</span>
        <span className={styles.liveTag}>en vivo</span>
      </div>

      <p className={styles.state}>Atendiendo</p>
      <p className={styles.code}>JP&nbsp;—&nbsp;04</p>

      <div className={styles.footerRow}>
        <span>Tiempo en sesión</span>
        <span className={styles.timer}>{formatElapsed(elapsed)}</span>
      </div>
    </div>
  );
}
