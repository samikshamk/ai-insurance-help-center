import React, { createContext, useContext, useEffect, useState } from "react";
import type { Theme, ThemeContextType } from "../types/theme";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      const defaultTheme: Theme = "light";
      setTheme(defaultTheme);
      localStorage.setItem("theme", theme);
    } else {
      setTheme(localStorage.getItem("theme") as Theme);
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
