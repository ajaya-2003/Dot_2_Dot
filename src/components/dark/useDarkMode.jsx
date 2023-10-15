// useDarkMode.js
import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
