import { createContext, useEffect, useState } from "react";

// Contexto simple: expone el tema actual y una función para alternarlo.
// Cualquier componente hijo puede consumirlo con el hook useTheme().
export const ThemeContext = createContext(null);

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  // Si el usuario no ha elegido nunca, respetamos su preferencia de sistema.
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Cada vez que "theme" cambia, lo reflejamos en el <html> (para que el
  // CSS de tokens.css lo detecte) y lo persistimos en localStorage.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
