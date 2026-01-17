import React from 'react';
import { Award, TrendingUp, RotateCcw, Star, Shield, Smile } from 'lucide-react';

interface Attributes {
  health: number;
  mental: number;
  marriage: number;
  childGrowth: number;
  [key: string]: number;
}

interface EndGameReport {
  title: string;
  icon: React.ReactElement;
  comment: string;
  suggestion: string;
}

interface EndGameScreenProps {
  report: EndGameReport;
  age: number;
  score: number;
  attributes: Attributes;
  savings: number;
  onRestart: () => void;
}

export const EndGameScreen: React.FC<EndGameScreenProps> = ({ report, age, score, attributes, savings, onRestart }) => (
  <div className="h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans overflow-hidden">
     <div className="w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh] animate-in zoom-in duration-500 border border-slate-100 relative">
        
        {/* 左侧：形象与荣誉 */}
        <div className="md:w-5/12 bg-slate-900 text-white p-10 flex flex-col relative overflow-hidden shrink-0">
           <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500 rounded-full blur-[120px] opacity-30 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
           
           <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-white/50 mb-auto">
                 <Award size={14} /> Life Report Card
              </div>

              <div className="text-center my-8">
                 <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/10 backdrop-blur-md shadow-2xl">
                    {React.cloneElement(report.icon as React.ReactElement<any>, { className: "w-16 h-16 text-white" })}
                 </div>
                 <h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight">{report.title}</h1>
                 <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4"></div>
                 <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto font-light">{report.comment}</p>
              </div>

              <div className="mt-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                 <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold mb-2">导师寄语</div>
                 <div className="font-serif italic text-white/90 text-sm leading-relaxed">" {report.suggestion} "</div>
              </div>
           </div>
        </div>

        {/* 右侧：详细数据面板 */}
        <div className="flex-1 p-10 flex flex-col bg-white overflow-y-auto">
           {/* 核心指标网格 */}
           <div className="grid grid-cols-2 gap-6 mb-8 shrink-0">
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center text-center hover:bg-slate-100 transition-colors">
                 <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">最终年龄</div>
                 <div className="text-5xl font-black text-slate-900">{age}</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center text-center hover:bg-slate-100 transition-colors">
                 <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">家庭存款</div>
                 <div className="text-4xl font-black text-slate-900 tracking-tight flex items-baseline">
                    <span className="text-xl mr-1">¥</span>{(savings/10000).toFixed(1)}w
                 </div>
              </div>
           </div>

           {/* 属性进度条 */}
           <div className="flex-1 mb-8">
              <div className="flex justify-between items-end mb-6">
                 <h3 className="font-bold text-slate-900 flex items-center gap-2 text-lg">
                    <TrendingUp size={20} className="text-slate-400"/> 人生维表
                 </h3>
                 <div className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                    成长分: {score}
                 </div>
              </div>
              <div className="space-y-5">
                 {[
                    { label: '身体健康', val: attributes.health, color: 'bg-rose-500' },
                    { label: '心理状态', val: attributes.mental, color: 'bg-indigo-500' },
                    { label: '亲密关系', val: attributes.marriage, color: 'bg-pink-500' },
                 ].map((item, idx) => (
                    <div key={idx}>
                       <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                          <span>{item.label}</span>
                          <span>{item.val}/100</span>
                       </div>
                       <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                             className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`} 
                             style={{width: `${item.val}%`}}
                          ></div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <button 
             onClick={onRestart}
             className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl text-lg hover:bg-black transition-all shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-3 group shrink-0"
           >
             <RotateCcw size={20} className="group-hover:-rotate-180 transition-transform duration-700"/> 
             重启别样人生
           </button>
        </div>
     </div>
  </div>
);
