import React from 'react';
import { X } from 'lucide-react';
import { CHARACTERS } from '@/lib/resource';

interface MediaData {
  speaker?: string;
  bilibiliId?: string;
  videoUrl?: string;
  title?: string;
  text?: string;
}

interface MediaOverlayProps {
  data: MediaData | null;
  onClose: () => void;
}

export const MediaOverlay: React.FC<MediaOverlayProps> = ({ data, onClose }) => {
  if (!data) return null;
  const char = CHARACTERS[(data.speaker || 'guide') as keyof typeof CHARACTERS];
  
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
       <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]">
          <div className="flex-1 bg-black flex items-center justify-center relative aspect-video md:aspect-auto">
             {data.bilibiliId ? (
                <iframe src={`//player.bilibili.com/player.html?bvid=${data.bilibiliId}&page=1&high_quality=1&danmaku=0`} scrolling="no" frameBorder="0" allowFullScreen={true} className="w-full h-full absolute inset-0"></iframe>
             ) : (
                <video controls className="w-full h-full object-contain"><source src={data.videoUrl} type="video/mp4"/></video>
             )}
          </div>
          
          <div className="md:w-80 p-6 flex flex-col bg-slate-50">
             <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg font-bold text-slate-900">{data.title}</h3>
                <button onClick={onClose} className="p-1 hover:bg-slate-200 rounded-full transition-all"><X size={20}/></button>
             </div>
             
             <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="flex flex-col items-center mb-4">
                   <div className="w-16 h-16 bg-white rounded-full mb-3 overflow-hidden shadow-md border-2 border-white">
                      <img src={char.avatar} alt={char.name} className="w-full h-full object-cover"/>
                   </div>
                   <div className="bg-white p-4 rounded-2xl shadow-sm text-sm text-slate-600 relative">
                      {data.text}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                   </div>
                </div>
             </div>
             
             <button onClick={onClose} className="w-full py-3 bg-slate-900 text-white hover:bg-slate-800 rounded-xl font-bold transition-all shadow-lg mt-4 text-sm">
                Get it! 回到剧情
             </button>
          </div>
       </div>
    </div>
  );
};
