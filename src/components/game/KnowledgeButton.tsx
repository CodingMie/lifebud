import React from 'react';
import { Lightbulb } from 'lucide-react';

interface KnowledgeButtonProps {
  visible: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export const KnowledgeButton: React.FC<KnowledgeButtonProps> = ({ visible, onClick }) => {
  if (!visible) return null;
  
  return (
    <div 
       className="absolute top-0 right-4 md:right-16 z-50 cursor-pointer group animate-bounce-slow pointer-events-auto"
       onClick={onClick}
    >
       <div className="relative flex flex-col items-center">
          <div className="w-0.5 h-20 bg-white/60 shadow-sm"></div>
          <div className="-mt-1 bg-white/90 backdrop-blur border-2 border-slate-900 p-2 rounded-lg shadow-lg flex flex-col items-center gap-1 hover:scale-110 transition-transform hover:rotate-3 hover:bg-yellow-50">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center border border-indigo-200">
                  <Lightbulb size={18} className="text-indigo-600 fill-indigo-600" />
              </div>
              <span className="text-[10px] font-black text-slate-900 writing-vertical-rl">TIPS</span>
          </div>
       </div>
    </div>
  );
};
