import React from 'react';
import { CHARACTERS } from '@/lib/resource';

interface CharacterLayerProps {
  activeSpeaker: string | null;
  activeNPC: string | null;
  currentStage: number | null;
}

export const CharacterLayer: React.FC<CharacterLayerProps> = ({ activeSpeaker, activeNPC, currentStage }) => (
  <div className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none overflow-hidden">
    {/* 左侧：主角 */}
    <div className={`
          absolute transition-all duration-500 ease-out transform
          ${CHARACTERS['hero'].style}
          ${currentStage === 1 ? CHARACTERS['hero_1'].style :
        currentStage === 2 ? CHARACTERS['hero_2'].style :
        currentStage === 3 ? CHARACTERS['hero_3'].style:
        currentStage === 4 ? CHARACTERS['hero_4'].style : ''
        }
          w-[70vw] h-[60vh] md:w-[40vw] md:h-[80vh] lg:w-[35vw] lg:h-[85vh]
          
          
          ${activeSpeaker.startsWith('hero') || activeNPC !== null && activeNPC.startsWith('hero') ? 'opacity-100 scale-100 brightness-110' : activeSpeaker === 'narrator' ? 'opacity-100 scale-0 brightness-110' : 'opacity-80 scale-100 brightness-90'}
       `}>
        
        {currentStage === 1 ? <img src={CHARACTERS['hero_1'].avatar} alt="Hero" className="w-full h-full object-contain drop-shadow-2xl" /> :
        currentStage === 2 ? <img src={CHARACTERS['hero_2'].avatar} alt="Hero" className="w-full h-full object-contain drop-shadow-2xl" /> :
        currentStage === 3 ? <img src={CHARACTERS['hero_3'].avatar} alt="Hero" className="w-full h-full object-contain drop-shadow-2xl" /> :
        currentStage === 4 ? <img src={CHARACTERS['hero_4'].avatar} alt="Hero" className="w-full h-full object-contain drop-shadow-2xl" /> : <div></div>
        }
    </div>

    {/* 右侧：配角 */}
    {activeNPC && CHARACTERS[activeNPC as keyof typeof CHARACTERS] && (
       <div className={`
          absolute transition-all duration-500 ease-out transform
          ${CHARACTERS[activeNPC as keyof typeof CHARACTERS].style}
          w-[90vw] h-[75vh] md:w-[50vw] md:h-[90vh] lg:w-[45vw] lg:h-[95vh]
          max-w-[300px]
          ${activeSpeaker === activeNPC ? 'opacity-100 scale-100 brightness-110' : 'opacity-80 scale-100 brightness-90'}
          animate-in slide-in-from-bottom-24 fade-in
       `}>
         {activeNPC.startsWith('hero') ? <div></div> : <img src={CHARACTERS[activeNPC as keyof typeof CHARACTERS].avatar} alt={activeNPC} className="w-full h-full object-contain drop-shadow-2xl" />}
       </div>
    )}
  </div>
);
