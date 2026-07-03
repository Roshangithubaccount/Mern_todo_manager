import React from "react";
import "../styles/ThemeToggle.css";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="theme-toggle">

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

    </div>
  );
};

export default ThemeToggle;