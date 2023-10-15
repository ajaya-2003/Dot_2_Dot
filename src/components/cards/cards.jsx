import React from 'react';

import './cards.css';


const profiles = [
    {
      id: 1,
      name: 'User 1',
      image: 'https://placekitten.com/200/200',
    },
    {
      id: 2,
      name: 'User 2',
      image: 'https://placekitten.com/200/201',
    },
    {
      id: 3,
      name: 'User 3',
      image: 'https://placekitten.com/200/202',
    },
    {
      id: 4,
      name: 'User 4',
      image: 'https://placekitten.com/200/203',
    },
    {
      id: 5,
      name: 'User 5',
      image: 'https://placekitten.com/200/204',
    },
    {
      id: 6,
      name: 'User 6',
      image: 'https://placekitten.com/200/205',
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
