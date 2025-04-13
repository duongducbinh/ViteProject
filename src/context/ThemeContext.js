import React, { createContext, useState } from "react";

// Create a ThemeContext
export const ThemeContext = createContext();

// Define light and dark themes
const themes = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },
  dark: {
    background: "#000000",
    color: "#ffffff",
  },
};

// ThemeProvider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};