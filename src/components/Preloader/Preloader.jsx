import React, { useState, useEffect } from 'react';
import './Preloader.css'; // Create a CSS file for styling

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second loading time. Replace this with your actual loading logic.

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isLoading ? 'active' : ''}`}>
      <div className="spinner">
      </div>
    </div>
  );
};

export default Preloader;
