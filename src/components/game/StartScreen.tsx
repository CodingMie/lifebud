import React from 'react';
import { Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => (
  <div className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-yellow-50 font-sans">
     <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
     
     <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="inline-block px-4 py-1 bg-black text-white font-black text-xs uppercase tracking-widest -rotate-2 mb-8">
          Interactive Visual Novel
        </div>
        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter text-black drop-shadow-[5px_5px_0px_rgba(255,255,255,1)]" style={{WebkitTextStroke: '2px white'}}>
          生育<span className="text-rose-500">模拟器</span>
        </h1>
        
        <div className="bg-white border-4 border-black p-6 rounded-[2rem] shadow-[10px_10px_0px_0px_#000] mb-12 transform rotate-1">
          <p className="text-xl md:text-2xl text-slate-800 font-bold leading-relaxed font-comic">
             "嘿，如果你能提前预演一遍<br/>
             你会做出什么不同的<span className="bg-yellow-300 px-1">选择</span>吗？"
          </p>
        </div>

        <button 
          onClick={onStart}
          className="px-12 py-5 bg-black text-white rounded-2xl font-black text-2xl hover:scale-105 hover:bg-slate-800 transition-all shadow-[8px_8px_0px_0px_#f43f5e] flex items-center gap-3 mx-auto active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        >
          <Play fill="currentColor" size={24} /> 开启剧本
        </button>
     </div>
  </div>
);
