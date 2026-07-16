import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getInitialTheme(): Theme {
  return "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
    window.localStorage.setItem("muhsina-portfolio-theme", "dark");
  }, [theme]);

  const toggleTheme = () => {
    window.document.documentElement.classList.add("dark");
    window.localStorage.setItem("muhsina-portfolio-theme", "dark");
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
