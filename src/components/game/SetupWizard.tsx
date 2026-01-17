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
             type="range" min="20" max="45" 
             value={background.age}
             onChange={(e) => setBackground({...background, age: parseInt(e.target.value)})}
             className="w-full max-w-sm h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-black mb-8"
           />
           <div className="flex justify-between w-full max-w-sm text-xs text-slate-400 font-mono">
              <span>20</span>
              <span>30</span>
              <span>45</span>
           </div>
        </div>
      )
    },
    {
      id: 'city',
      label: '请选择生活城市',
      valueLabel: background.city === 'tier1' ? '一线城市' : background.city === 'tier2' ? '二线城市' : '小县城',
      render: (
        <div className="flex flex-col gap-4 w-full max-w-sm">
           {[{val: 'tier1', title: '一线城市', icon: <MapPin size={16}/>}, {val: 'tier2', title: '二线城市', icon: <Home size={16}/>}, {val: 'tier4', title: '小县城', icon: <Cloud size={16}/>}].map(opt => (
             <button 
               key={opt.val} 
               onClick={() => setBackground({...background, city: opt.val})}
               className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between group ${background.city === opt.val ? 'border-black bg-slate-50' : 'border-slate-100 hover:border-slate-300'}`}
             >
                <div className="flex items-center gap-3 font-bold text-slate-900">
                   <div className={`p-2 rounded-full ${background.city === opt.val ? 'bg-black text-white' : 'bg-slate-100 text-slate-500'}`}>{opt.icon}</div>
                   {opt.title}
                </div>
                {background.city === opt.val && <CheckCircle size={20} className="text-black"/>}
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
        <div className="flex flex-col gap-4 w-full max-w-sm">
           {[{val: 'supportive', title: '神仙队友'}, {val: 'rational', title: '理智直男'}, {val: 'avoidant', title: '甩手掌柜'}].map(opt => (
             <button 
               key={opt.val} 
               onClick={() => setBackground({...background, partner: opt.val})}
               className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between group ${background.partner === opt.val ? 'border-rose-400 bg-rose-50' : 'border-slate-100 hover:border-rose-200'}`}
             >
                <div className="flex items-center gap-3 font-bold text-slate-900">
                   <Heart size={20} className={`${background.partner === opt.val ? 'text-rose-500 fill-rose-500' : 'text-slate-300'}`}/>
                   {opt.title}
                </div>
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
        <div className="flex flex-col gap-4 w-full max-w-sm">
           {[1, 2, 3].map(lvl => (
             <button 
               key={lvl} 
               onClick={() => setBackground({...background, workIntensity: lvl})}
               className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between group ${background.workIntensity === lvl ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100 hover:border-indigo-200'}`}
             >
               <div className="flex items-center gap-3 font-bold text-slate-900">
                   <Briefcase size={20} className={`${background.workIntensity === lvl ? 'text-indigo-600' : 'text-slate-300'}`}/>
                   {lvl === 1 ? '轻松' : lvl === 2 ? '适中' : '高压'}
               </div>
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

  const handleBack = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col items-center p-6 font-sans relative overflow-hidden">
       {/* 背景装饰 */}
       <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-rose-50 to-blue-50 rounded-full blur-[100px] -z-10" />
       
       <div className="w-full max-w-lg flex flex-col h-full py-12">
          {/* 顶部进度条 */}
          <div className="flex gap-3 mb-16">
             {steps.map((_, idx) => (
                <div key={idx} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${idx <= step ? 'bg-slate-900' : 'bg-slate-200'}`}></div>
             ))}
          </div>

          {/* 核心内容区 */}
          <div className="flex-1 flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-500 key={step}">
             <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{currentStepData.label}</h2>
             
             {/* 核心大数值显示 */}
             <div className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-12 drop-shadow-sm">
                {currentStepData.valueLabel}
             </div>

             {/* 交互控件 */}
             <div className="w-full flex justify-center">
                {currentStepData.render}
             </div>
          </div>

          {/* 底部导航 */}
          <div className="flex items-center justify-between mt-auto">
             <button 
               onClick={handleBack} 
               disabled={step === 0}
               className={`p-4 rounded-full transition-colors border border-slate-100 ${step === 0 ? 'text-slate-200 cursor-not-allowed opacity-0' : 'text-slate-600 hover:bg-slate-50'}`}
             >
                <ArrowLeft size={24} />
             </button>
             
             <button 
               onClick={handleNext}
               className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95 flex items-center gap-3"
             >
                {step === steps.length - 1 ? '生成人生' : '继续'} 
                {step < steps.length - 1 && <ArrowRight size={20} />}
             </button>
          </div>
       </div>
    </div>
  );
};
