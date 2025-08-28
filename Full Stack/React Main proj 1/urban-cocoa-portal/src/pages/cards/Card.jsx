import React from 'react';
import './Card.css';

const Card = ({ image, paragraph }) => {
  return (
    <div className="card">
      <img src={image} alt="Card visual" className="card-image" />
      <div className="card-content">
        <p className="card-paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
