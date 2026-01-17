import React, { useState } from 'react';
import { RotateCcw, Coins, Heart, Brain, Activity, ArrowRight } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts';

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

const StatCard = ({ icon: Icon, value, label, color, barColor }: { icon: any, value: number, label: string, color: string, barColor: string }) => (
  <div className="bg-white rounded-3xl p-4 flex flex-col items-center justify-between shadow-sm border border-slate-100 h-full">
    <div className="flex flex-col items-center gap-2">
      <div className={`p-2 rounded-full ${color} bg-opacity-20`}>
        <Icon className={`w-5 h-5 ${color.replace('bg-', 'text-')}`} />
      </div>
      <span className="text-2xl font-black text-slate-800">{value}</span>
      <span className="text-xs font-bold text-slate-400">{label}</span>
    </div>
    <div className="w-12 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
      <div className={`h-full ${barColor} rounded-full`} style={{ width: `${Math.min(value, 100)}%` }} />
    </div>
  </div>
);

export const EndGameScreen: React.FC<EndGameScreenProps> = ({ report, age, score, attributes, savings, onRestart }) => {
  const [showEnding, setShowEnding] = useState(false);

  if (showEnding) {
    return (
      <div 
        className="fixed inset-0 w-full h-full bg-[url('/ending.png')] bg-cover bg-center z-50"
        onClick={onRestart}
      />
    );
  }

  // Calculate wealth score (0-100) for radar chart. Assuming 100w is 100 points for visualization
  const wealthScore = Math.min(Math.max(Math.floor(savings / 10000), 0), 100);
  
  const radarData = [
    { subject: '财富', A: wealthScore, fullMark: 100 },
    { subject: '身体', A: attributes.health, fullMark: 100 },
    { subject: '精神', A: attributes.mental, fullMark: 100 },
    { subject: '婚姻', A: attributes.marriage, fullMark: 100 },
  ];

  const childGrowth = attributes.childGrowth || 0;

  return (
    <div className="h-screen w-full bg-[url('/end.png')] bg-cover bg-center flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden">
      <div className="w-full max-w-6xl h-[90vh] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 relative">
        
        {/* Top Left: Summary Card */}
        <div className="md:col-span-8 bg-white rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 to-orange-400"></div>
            <div className="flex items-center gap-4 mb-4">
                <span className="bg-rose-500 text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-md shadow-rose-200">
                    Simulation Failed
                </span>
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">{report.title}</h1>
            </div>
            <p className="text-slate-600 font-medium leading-relaxed text-lg italic">
                “{report.comment}”
            </p>
        </div>

        {/* Top Right: Child Growth */}
        <div className="md:col-span-4 bg-white rounded-[2.5rem] p-6 shadow-xl flex flex-col items-center justify-center relative">
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="56" stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
                    <circle 
                        cx="64" cy="64" r="56" 
                        stroke="#f59e0b" 
                        strokeWidth="12" 
                        fill="transparent" 
                        strokeDasharray={351.86} 
                        strokeDashoffset={351.86 * (1 - childGrowth / 100)} 
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-slate-800">{childGrowth}%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Growth</span>
                </div>
            </div>
            <div className="mt-4 font-bold text-slate-500">孩子成长状况</div>
        </div>

        {/* Middle Left: Radar Chart */}
        <div className="md:col-span-4 bg-white rounded-[2.5rem] p-6 shadow-xl flex flex-col relative">
            <div className="text-center font-bold text-slate-400 text-sm mb-2 uppercase tracking-widest">核心属性平衡图</div>
            <div className="flex-1 w-full min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                        <PolarGrid stroke="#e2e8f0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                            name="Attributes"
                            dataKey="A"
                            stroke="#f43f5e"
                            strokeWidth={3}
                            fill="#f43f5e"
                            fillOpacity={0.3}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Middle/Bottom Right Section */}
        <div className="md:col-span-8 flex flex-col gap-4 md:gap-6">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard 
                    icon={Coins} 
                    value={wealthScore} 
                    label="财富状况" 
                    color="bg-yellow-500" 
                    barColor="bg-yellow-400"
                />
                <StatCard 
                    icon={Activity} 
                    value={attributes.health} 
                    label="身体状况" 
                    color="bg-orange-500" 
                    barColor="bg-orange-400"
                />
                <StatCard 
                    icon={Brain} 
                    value={attributes.mental} 
                    label="精神状况" 
                    color="bg-blue-500" 
                    barColor="bg-blue-400"
                />
                <StatCard 
                    icon={Heart} 
                    value={attributes.marriage} 
                    label="婚姻状况" 
                    color="bg-pink-500" 
                    barColor="bg-pink-400"
                />
            </div>

            {/* Expert Suggestion */}
            <div className="flex-1 bg-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden flex flex-row items-start gap-6">
                 {/* Decorative Line */}
                 <div className="w-1.5 self-stretch bg-blue-500 rounded-full shrink-0 opacity-80"></div>
                 
                 <div className="flex-1 overflow-y-auto pr-2 max-h-[220px] custom-scrollbar">
                     <h3 className="text-blue-600 font-black text-lg mb-3 flex items-center gap-2">
                        专家建议书
                     </h3>
                     <div className="prose prose-sm prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                        {report.suggestion.split('\n').map((line, i) => (
                            <p key={i} className="mb-2">{line}</p>
                        ))}
                     </div>
                 </div>
            </div>
        </div>

        {/* Floating Restart Button */}
        <button 
            onClick={() => setShowEnding(true)}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-orange-500 hover:scale-110 hover:bg-orange-500 hover:text-white transition-all duration-300 group z-50 border-4 border-orange-100"
        >
            <ArrowRight size={32} className="group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};
