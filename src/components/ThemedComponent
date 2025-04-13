import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.color, padding: "1rem" }}>
      <p>This is a themed component!</p>
      <button onClick={toggleTheme} style={{ padding: "0.5rem", marginTop: "1rem" }}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;