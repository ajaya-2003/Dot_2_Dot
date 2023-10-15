import React from 'react';
import './eventcard.css'; // Create a CSS file for styling

const eventcard = ({ title, date, location, description }) => {
  return (


    
    <div className="event-card">
      <h2 className="event-title">{title}</h2>
      <p className="event-date">{date}</p>
      <p className="event-location">{location}</p>
      <p className="event-description">{description}</p>
    </div>
  );
};

export default eventcard;
