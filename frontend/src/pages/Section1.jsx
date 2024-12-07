import React from 'react';

const Section1 = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      {/* Center Sun */}
      <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center shadow-lg animate-pulse">
        <h2 className="text-white font-bold text-lg">logo</h2>
      </div>

      {/* Outer Orbit */}
      <div className="absolute w-96 h-96 rounded-full border-2 border-dotted border-black flex items-center justify-center animate-spin-slow">
        <div className="absolute top-0 w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-md">
          <p className="text-white text-sm text-center">Feature 1</p>
        </div>
      </div>

      {/* Inner Orbit */}
      <div className="absolute w-72 h-72 rounded-full border-2 border-dotted border-black flex items-center justify-center animate-spin-reverse">
        <div className="absolute bottom-0 w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-md">
          <p className="text-white text-sm text-center">Feature 2</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
