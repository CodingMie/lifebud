import React from 'react';
import { Wallet, Clock } from 'lucide-react';

interface ThoughtCloudProps {
  text: string;
  cost?: number;
  time?: number;
  onClick: () => void;
  delayIndex: number;
}

export const ThoughtCloud: React.FC<ThoughtCloudProps> = ({ text, cost = 0, time = 0, onClick, delayIndex }) => (
  <button 
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    className={`
      relative group cursor-pointer transition-transform hover:scale-105 active:scale-95
      animate-in fade-in zoom-in duration-500 fill-mode-backwards
    `}
    style={{ animationDelay: `${delayIndex * 150}ms` }}
  >
    <div className="relative bg-white/80 backdrop-blur border-2 border-slate-200 rounded-[2rem] p-4 px-6 shadow-lg hover:shadow-xl hover:border-rose-300 z-10 max-w-[200px] text-center">
       <div className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors mb-1">
          {text}
       </div>
       <div className="text-[10px] font-medium text-slate-400 flex justify-center gap-3 uppercase tracking-wider">
          {cost > 0 && <span className="flex items-center gap-0.5"><Wallet size={10}/> -{cost}</span>}
          <span className="flex items-center gap-0.5"><Clock size={10}/> {time}M</span>
       </div>
    </div>
    
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/80 rounded-full z-0"></div>
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 -translate-y-1 w-1.5 h-1.5 bg-white/60 rounded-full z-0"></div>
  </button>
);
