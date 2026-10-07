import styles from "./HeroMascot.module.css";

export default function HeroMascot() {
  return (
    <svg
      className={styles.mascot}
      viewBox="0 0 200 220"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={styles.bob}>
        {/* Cuerpo sentado */}
        <ellipse cx="100" cy="175" rx="50" ry="38" fill="#0f766e" />

        {/* Brazo quieto (apoyado) */}
        <path
          d="M 62 150 Q 45 165 50 185"
          stroke="#0f766e"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />

        {/* Brazo que saluda */}
        <path
          className={styles.wavingArm}
          d="M 138 150 Q 158 130 165 105"
          stroke="#0f766e"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cabeza */}
        <circle cx="100" cy="95" r="48" fill="#14b8a6" />

        {/* Orejas */}
        <circle cx="65" cy="55" r="16" fill="#14b8a6" />
        <circle cx="135" cy="55" r="16" fill="#14b8a6" />

        {/* Ojos */}
        <g className={styles.eyes}>
          <circle cx="82" cy="92" r="6" fill="#0e1016" />
          <circle cx="118" cy="92" r="6" fill="#0e1016" />
        </g>

        {/* Sonrisa */}
        <path
          d="M 78 112 Q 100 128 122 112"
          stroke="#0e1016"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}