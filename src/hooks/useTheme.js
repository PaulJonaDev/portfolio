import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// Aísla el "useContext(ThemeContext)" en un solo lugar. Si mañana el
// contexto cambia de nombre o de forma, solo se actualiza este archivo.
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un <ThemeProvider>");
  }
  return context;
}
