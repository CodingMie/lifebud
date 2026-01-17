import React from 'react';
import { Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => (
  <div className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-center font-sans">
     {/* 背景图片 */}
     <div className="absolute inset-0 z-0">
        <img 
           src="/demo.png" 
           alt="Start Screen Background" 
           className="w-full h-full object-cover"
        />
     </div>
     
     {/* 按钮层 */}
     <div className="absolute bottom-1/10 left-1/2 -translate-x-1/2 z-10">
        <button 
          onClick={onStart}
          className="px-12 py-5 text-white rounded-2xl font-black text-xl hover:scale-105 transition-all flex items-center gap-3 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        >
          <Play fill="currentColor" size={24} /> 开启剧本
        </button>
     </div>
  </div>
);
