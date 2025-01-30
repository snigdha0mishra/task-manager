import { useState, useEffect } from 'react';
import React from 'react';
import Logo from '../assets/icon.png';

export const Header = () => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", JSON.stringify(theme));
      document.documentElement.removeAttribute("class");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>Complete It</span>
      </div>
      <div className="theme-switcher">
        <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
        <span onClick={() => setTheme("pink")} className={theme === "pink" ? "pink activeTheme" : "pink"}></span>
        <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
      </div>
    </header>
  );
};