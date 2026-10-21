
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative flex items-center justify-center">
        {/* Soft glow rings behind the logo */}
        <div className="absolute w-56 h-56 rounded-full bg-globalmigrate-blue/10 animate-glow-pulse"></div>
        <div className="absolute w-56 h-56 rounded-full bg-globalmigrate-blue/10 animate-glow-pulse [animation-delay:1s]"></div>
        <div className="animate-logo-reveal">
          <img
            src="/logo.png"
            alt="Global Visa and Migration"
            className="relative h-40 animate-logo-float"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
