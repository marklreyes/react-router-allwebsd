import { createContext, useContext, useState, type ReactNode } from "react";

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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
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
