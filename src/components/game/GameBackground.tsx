import React from 'react';

interface GameBackgroundProps {
  image: string;
}

export const GameBackground: React.FC<GameBackgroundProps> = ({ image }) => (
  <div className="absolute inset-0 z-0">
     <img 
       src={image} 
       alt="Background" 
       className="w-full h-full object-cover transition-all duration-1000 ease-in-out" 
     />
     {/* <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '8px 8px'}}></div> */}
     {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" /> */}
     <div className="absolute inset-0 bg-gradient-to-b via-transparent pointer-events-none" />
  </div>
);
