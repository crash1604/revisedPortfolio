import React, { useRef, useEffect } from 'react';

const Wave = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    canvas.width = window.innerWidth * 0.7;
    canvas.height = 75;

    // Animation parameters
    const frequency = 0.01; // Adjust the frequency of the waves
    const amplitude = 15; // Adjust the amplitude of the waves
    const strokeWidth = 2;
    let phase = 0;

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw sine wave
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + amplitude * Math.sin(x * frequency + phase);
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#9d4edd'; 
      ctx.lineWidth = strokeWidth;
      ctx.stroke();

      // Draw cosine wave
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + amplitude * Math.cos(x * frequency + phase);
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = '#5a189a'; // Adjust color as needed
      ctx.lineWidth = strokeWidth;
      ctx.stroke();

      // Update phase for animation
      phase += 0.1;

      // Request next frame
      animationFrameId = requestAnimationFrame(drawWave);
    };

    // Start animation
    drawWave();

    return () => {
      // Clean up animation frame on unmount
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />;
};

export default Wave;
