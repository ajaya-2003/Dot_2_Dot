import React from 'react';

import './cards.css';


const profiles = [
    {
      id: 1,
      name: 'User 1',
      // image: 'https://placekitten.com/200/200',
      image: process.env.PUBLIC_URL + './img10.jpeg',
     
         
    },
    {
      id: 2,
      name: 'User 2',
      image: process.env.PUBLIC_URL + './img9.jpeg',
    },
    {
      id: 3,
      name: 'User 3',
      // image: 'https://placekitten.com/200/202',
      image: process.env.PUBLIC_URL + './img8.jpeg',
    },
    {
      id: 4,
      name: 'User 4',
      image: process.env.PUBLIC_URL + './img7.jpeg',
    },
    {
      id: 5,
      name: 'User 5',
      image: process.env.PUBLIC_URL + './img5.jpeg',
    },
    {
      id: 6,
      name: 'User 6',
      image: process.env.PUBLIC_URL + './img6.jpeg',
    },
  ];


const cards = () => {
  return (
    <div>
       <div className="App">
      <div className="profile-grid">
        {profiles.map((profile) => (
          <div className="profile-card" key={profile.id}>
            <img src={profile.image} alt={profile.name} />
            <div className="profile-name">{profile.name}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default cards
