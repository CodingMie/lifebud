import React from 'react';
import { CHARACTERS } from '@/lib/resource';

interface CharacterLayerProps {
  activeSpeaker: string | null;
  activeNPC: string | null;
}

export const CharacterLayer: React.FC<CharacterLayerProps> = ({ activeSpeaker, activeNPC }) => (
  <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none overflow-hidden">
    {/* 左侧：主角 */}
    <div className={`
          absolute transition-all duration-500 ease-out transform
          ${CHARACTERS['hero'].style}
          w-[70vw] h-[60vh] md:w-[40vw] md:h-[80vh] lg:w-[35vw] lg:h-[85vh]
          max-w-[700px]
          ${activeSpeaker === 'hero' ? 'opacity-100 scale-105 brightness-110' : 'opacity-80 scale-100 brightness-90'}
       `}>
         <img src={CHARACTERS['hero'].avatar} alt="Hero" className="w-full h-full object-contain drop-shadow-2xl" />
    </div>

    {/* 右侧：配角 */}
    {activeNPC && CHARACTERS[activeNPC as keyof typeof CHARACTERS] && (
       <div className={`
          absolute transition-all duration-500 ease-out transform
          ${CHARACTERS[activeNPC as keyof typeof CHARACTERS].style}
          w-[90vw] h-[75vh] md:w-[50vw] md:h-[90vh] lg:w-[45vw] lg:h-[95vh]
          max-w-[1000px]
          ${activeSpeaker === activeNPC ? 'opacity-100 scale-105 brightness-110' : 'opacity-80 scale-100 brightness-90'}
          animate-in slide-in-from-bottom-24 fade-in
       `}>
         <img src={CHARACTERS[activeNPC as keyof typeof CHARACTERS].avatar} alt={activeNPC} className="w-full h-full object-contain drop-shadow-2xl" />
       </div>
    )}
  </div>
);
