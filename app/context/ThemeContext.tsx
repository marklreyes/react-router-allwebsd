import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
  };
};

const lightTheme = {
  background: "bg-[#2F241D]", // brown
  text: "text-[#2F241D]", // brown
  primary: "bg-[#FFC425]", // yellow
  secondary: "bg-[#2F241D]", // brown
  accent: "bg-[#FFC425]" // yellow
};

const darkTheme = {
  background: "bg-[#F03D86]", // pink
  text: "text-[#2F241D]", // brown
  primary: "bg-[#71BEA9]", // mint
  secondary: "bg-[#F03D86]", // pink
  accent: "bg-[#FFC425]" // yellow
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default value for SSR

  useEffect(() => {
    // Run localStorage operations after mounting
    const savedTheme = typeof window !== "undefined"
      ? localStorage.getItem("theme")
      : null;

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newTheme = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme ? "dark" : "light");
      }
      return newTheme;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      if (!localStorage.getItem("theme")) {
        setIsDarkMode(mediaQuery.matches);
      }

      const handler = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem("theme")) {
          setIsDarkMode(e.matches);
        }
      };

      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme: isDarkMode ? darkTheme : lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
