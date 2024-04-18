import React from 'react';
import './AnimatedCircles.css';

const AnimatedCircles = () => {
  return (
    <div className="circle-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <svg
          key={index}
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className={`circle circle-${index + 1}`}
        >
          <circle cx="150" cy="150" r={`${15 + index * 15}`} stroke="purple" strokeWidth="2" fill="none" />
        </svg>
      ))}
    </div>
  );
};

export default AnimatedCircles;
