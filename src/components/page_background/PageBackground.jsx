import React from "react";
import '../../styles/animations.css';

const PageBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-purple-200 to-pink-900">
      {/* Decorative Particles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="bg-gradient-to-r from-transparent to-black/30 absolute inset-0"></div>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PageBackground;
