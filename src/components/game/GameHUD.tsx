import React from 'react';
import { Wallet, SmartphoneCharging, Brain, Baby, Heart } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

interface GameHUDProps {
  currentStageTitle: string;
  savings: number;
  attributes: {
    health: number;
    mental: number;
    childGrowth: number;
    marriage: number;
  };
}

export const GameHUD: React.FC<GameHUDProps> = ({ currentStageTitle, savings, attributes }) => (
  <div className="absolute top-0 left-0 right-0 z-50 p-4 pointer-events-none flex justify-center">
     {/* 左上角标题 */}
     <div className="absolute top-4 left-4">
       <div className="bg-white/90 backdrop-blur border border-black/10 px-4 py-2 rounded-full shadow-sm">
          <h2 className="text-slate-900 font-bold text-sm flex items-center gap-2">
             {currentStageTitle}
          </h2>
       </div>
     </div>

     {/* 中间属性栏 */}
     <div className="mt-2 flex gap-2 md:gap-4 justify-center bg-black/20 backdrop-blur-md p-2 px-6 rounded-full border border-white/10 shadow-lg">
        <StatusBadge icon={<Wallet />} value={`¥${(savings/10000).toFixed(1)}w`} color="bg-amber-500" />
        <StatusBadge icon={<SmartphoneCharging />} value={attributes.health} color="bg-emerald-500" />
        <StatusBadge icon={<Brain />} value={attributes.mental} color="bg-indigo-500" />
        <StatusBadge icon={<Heart />} value={attributes.marriage} color="bg-rose-500" />
        <StatusBadge icon={<Baby />} value={attributes.childGrowth} color="bg-emerald-500" />
     </div>
  </div>
);
