import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex gap-4 items-center">
        <button onClick={toggleTheme} className="text-2xl">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="text-black p-1 rounded"
        >
          <option>English</option>
          <option>Tamil</option>
          <option>Hindi</option>
          <option>Spanish</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
