import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

const translations = {
  English: 'Welcome to the Dashboard',
  Tamil: 'டாஷ்போர்டுக்கு வரவேற்கிறோம்',
  Hindi: 'डैशबोर्ड में आपका स्वागत है',
  Spanish: 'Bienvenido al panel',
};

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`p-6 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold">{translations[language]}</h2>
    </div>
  );
};

export default Home;
