import React from 'react';
import './ConcentricCircles.css'; // Make sure to include the CSS file for animations

const ConcentricCircles = () => {
  // Define properties for 10 concentric circles
  const circles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: 50 + i * 20, // Increment size for concentric effect
    animationDuration:  i * 2, // Different animation speed for each circle
  }));

  return (
    <div className="flex items-center justify-right">
      <svg viewBox="0 0 500 500" className="w-7/12 h-3/6 justify-items-center items-center">
        <defs>
          <clipPath id="clip">
            <path d="M 0,250 a 250,250 0 0,1 250,-250 h -70 a 180,180 0 0,0 0,180 z" />
          </clipPath>
        </defs>
        {circles.map(circle => (
          <circle
            key={circle.id}
            cx="250"
            cy="250"
            r={`${circle.size}`}
            stroke="#1e1b4b"
            strokeWidth="2"
            fill="none"
            clipPath="url(#clip)"
            className={`animate-spin-${circle.id}`}
            style={{
              animationDuration: `${circle.animationDuration}s`,
              border:'2px solid #6b21a8'
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default ConcentricCircles;
