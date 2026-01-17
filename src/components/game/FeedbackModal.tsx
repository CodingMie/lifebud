import React from 'react';
import { Sparkles, Wallet, Activity, Brain, Heart, Baby, Star, ArrowRight } from 'lucide-react';

interface FeedbackChanges {
  cost?: number;
  health?: number;
  mental?: number;
  marriage?: number;
  childGrowth?: number;
  [key: string]: number | undefined;
}

interface FeedbackModalProps {
  feedback: string | null;
  feedbackChanges: FeedbackChanges | null;
  onNext: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ feedback, feedbackChanges, onNext }) => {
  if (!feedback) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[2px]">
       <div className="pointer-events-auto animate-in fade-in zoom-in duration-500 w-full px-4 flex justify-center">
          {/* 压缩高度: py-4, 限制宽度 max-w-xl */}
          {/* <div className="relative bg-[#F67807]/70 backdrop-blur-xl px-12 py-6 rounded-[1rem] border border-white/10 shadow-2xl w-full max-w-xl text-center flex flex-col items-center justify-center"></div> */}
          <div className="relative w-full max-w-xl rounded-[1rem] ">
          <img 
            src={'/feedback.png'} 
            alt="Background" 
            className="absolute inset-0  duration-1000 ease-in-out -top-35" 
         />
             <div className="relative z-10 flex flex-col items-center gap-3 w-full">
                {/* <div className="absolute -top-5 bg-[#F67807] p-2 rounded-full border border-white/10 shadow-lg">
                     <Sparkles size={20} className="text-amber-300" />
                </div> */}
                
                {/* 极简标题 */}
                <h3 className="relative text-[10px] font-bold text-black/40 uppercase tracking-[0.4em] mt-2">RESULT</h3>

                {/* 内容 */}
                <p className="relative text-sm md:text-base font-medium text-black leading-relaxed font-serif italic max-w-sm">
                      {feedback}
                </p>

                {/* 属性变化 */}
                {feedbackChanges && (
                   <div className="flex flex-wrap justify-center gap-2 mb-2 scale-90">
                      {feedbackChanges.cost !== undefined && feedbackChanges.cost > 0 && (
                         <span className="px-2 py-0.5 bg-red-500/20 border border-red-500/30 rounded-full text-[10px] font-bold text-red-500 flex items-center gap-1">
                            <Wallet size={10} /> -{feedbackChanges.cost}
                         </span>
                      )}
                      {Object.entries(feedbackChanges).map(([key, val]) => {
                         if (key === 'cost' || val === 0 || val === undefined) return null;
                         const isPositive = val > 0;
                         const iconMap: {[key: string]: React.ReactElement} = { 
                           health: <Activity size={10}/>, 
                           mental: <Brain size={10}/>, 
                           marriage: <Heart size={10}/>, 
                           childGrowth: <Baby size={10}/> 
                         };
                         return (
                            <span key={key} className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 border ${isPositive ? 'bg-green-500/20 border-green-500/30 text-green-500' : 'bg-red-500/20 border-red-500/30 text-red-500'}`}>
                               {iconMap[key] || <Star size={10}/>} {isPositive ? '+' : ''}{val}
                            </span>
                         );
                      })}
                   </div>
                )}

                <button onClick={onNext} className="group inline-flex items-center gap-2 text-black/80 hover:text-black text-[10px] font-bold tracking-widest transition-colors border-b border-black pb-0.5 hover:border-black">
                      <span>CONTINUE</span> <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform"/>
                </button>
             </div>
          </div>
       </div>
    </div>
  );
};
