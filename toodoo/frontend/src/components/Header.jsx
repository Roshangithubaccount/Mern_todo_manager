import React from "react";
import "../styles/Header.css";
import ThemeToggle from "./ThemeToggle";

const Header = ({ darkMode, setDarkMode }) => {
  // Current Date
  const today = new Date();

  // Format Date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const currentDate = today.toLocaleDateString("en-US", options);

  return (
    <header className="header">

      <div className="header-text">
        <h1>Todo Manager</h1>
        <p>Stay organized. Stay productive.</p>
      </div>

      <div className="header-right">

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="header-date">
          <span>Today</span>
          <h3>{currentDate}</h3>
        </div>

      </div>

    </header>
  );
};

export default Header;