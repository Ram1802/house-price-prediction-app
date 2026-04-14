import React from "react";

const particles = Array.from({ length: 20 });

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, index) => (
        <span
          key={index}
          className="absolute block rounded-full bg-white/10 animate-pulse"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;