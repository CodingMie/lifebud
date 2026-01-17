import React, { useState } from 'react';
import { MapPin, Home, Cloud, Heart, Briefcase, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface Background {
  age: number;
  city: string;
  partner: string;
  workIntensity: number;
}

interface SetupWizardProps {
  background: Background;
  setBackground: (bg: Background) => void;
  onComplete: () => void;
}

export const SetupWizard: React.FC<SetupWizardProps> = ({ background, setBackground, onComplete }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      id: 'age',
      label: '请填写您的年龄',
      valueLabel: `${background.age} 岁`,
      render: (
        <div className="w-full flex flex-col items-center">
           <input 
             type="number" min="20" max="45" 
             value={background.age}
             onChange={(e) => {
               const val = parseInt(e.target.value);
               if (!isNaN(val)) {
                 setBackground({...background, age: val});
               }
             }}
             className="w-full max-w-sm p-3 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg text-lg text-center font-mono focus:outline-none focus:ring-2 focus:ring-black/10"
             placeholder="请输入年龄 (20-45)"
           />
        </div>
      )
    },
    {
      id: 'city',
      label: '请选择生活城市',
      valueLabel: background.city === 'tier1' ? '一线' : background.city === 'tier2' ? '二线' : '三线',
      render: (
        <div className="flex flex-row gap-2 w-full max-w-sm">
           {[{val: 'tier1', title: '一线'}, {val: 'tier2', title: '二线'}, {val: 'tier3', title: '三线'}].map(opt => (
             <button 
               key={opt.val} 
               onClick={() => setBackground({...background, city: opt.val})}
               className={`flex-1 py-4 px-2 rounded-full transition-all flex flex-col items-center justify-center gap-2 ${background.city === opt.val ? 'bg-white/90 shadow-md' : 'border-transparent bg-white/40'}`}
             >
                <div className="font-bold text-[#FFBE5E] text-lg">{opt.title}</div>
             </button>
           ))}
        </div>
      )
    },
    {
      id: 'partner',
      label: '请选择伴侣类型',
      valueLabel: background.partner === 'supportive' ? '神仙队友' : background.partner === 'rational' ? '理智直男' : '甩手掌柜',
      render: (
        <div className="flex flex-row gap-2 w-full max-w-sm">
           {[{val: 'supportive', title: '神仙队友'}, {val: 'rational', title: '理智直男'}, {val: 'avoidant', title: '甩手掌柜'}].map(opt => (
             <button 
               key={opt.val} 
               onClick={() => setBackground({...background, partner: opt.val})}
               className={`flex-1 py-4 px-2 rounded-full transition-all flex flex-col items-center justify-center gap-2 ${background.partner === opt.val ? ' bg-white/90 shadow-md' : 'border-transparent bg-white/40'}`}
             >
                <div className="font-bold text-[#FFBE5E] text-lg">{opt.title}</div>
             </button>
           ))}
        </div>
      )
    },
    {
      id: 'work',
      label: '请选择工作强度',
      valueLabel: background.workIntensity === 1 ? '早九晚五' : background.workIntensity === 2 ? '偶尔加班' : '996福报',
      render: (
        <div className="flex flex-row gap-2 w-full max-w-sm">
           {[1, 2, 3].map(lvl => (
             <button 
               key={lvl} 
               onClick={() => setBackground({...background, workIntensity: lvl})}
               className={`flex-1 py-4 px-2 rounded-full transition-all flex flex-col items-center justify-center gap-2 ${background.workIntensity === lvl ? 'bg-white/90 shadow-md' : 'bg-white/60'}`}
             >
               <div className="font-bold text-[#FFBE5E] text-lg">{lvl === 1 ? '轻松' : lvl === 2 ? '适中' : '高压'}</div>
             </button>
           ))}
        </div>
      )
    }
  ];

  const currentStepData = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center p-6 font-sans relative overflow-hidden">
       {/* 背景图片 */}
       <div className="absolute inset-0 z-0">
          <img 
             src="/setup.png" 
             alt="Setup Background" 
             className="w-full h-full object-cover"
          />
       </div>
       
       <div className="w-full max-w-lg flex flex-col h-full py-12 relative z-10 justify-end">
          {/* 核心内容区 */}
          <div key={step} className="w-full flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-500">
             <h2 className="text-sm font-bold text-[#434343] uppercase tracking-widest mb-6">{currentStepData.label}</h2>

             {/* 交互控件 */}
             <div className="w-full flex justify-center">
                {currentStepData.render}
             </div>

                       {/* 底部导航 */}
          <div className="flex items-center justify-center mt-12">
             <button 
               onClick={handleNext}
               className="bg-[#FFBE5E] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FFBE5E] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95 flex items-center gap-3"
             >
                {step === steps.length - 1 ? '生成人生' : '继续'} 
                {step < steps.length - 1 && <ArrowRight size={20} />}
             </button>
          </div>
          </div>


       </div>
    </div>
  );
};
