// import React, { useState, useEffect, useRef } from 'react';
// import { CHARACTERS } from '@/lib/resource';

// interface ComicBubbleProps {
//   speaker: string;
//   text: string;
//   onComplete?: () => void;
// }

// export const ComicBubble: React.FC<ComicBubbleProps> = ({ speaker, text, onComplete }) => {
//   const [displayed, setDisplayed] = useState('');
//   const textRef = useRef(text);

//   useEffect(() => {
//     setDisplayed('');
//     textRef.current = text;
//     let i = 0;
//     const timer = setInterval(() => {
//       if (i < text.length) {
//         setDisplayed(prev => prev + text.charAt(i));
//         i++;
//       } else {
//         clearInterval(timer);
//         if (onComplete) onComplete();
//       }
//     }, 30);
//     return () => clearInterval(timer);
//   }, [text, onComplete]);

//   const isHero = speaker.startsWith('hero');
//   const isNarrator = speaker === 'narrator';
//   const charInfo = CHARACTERS[speaker] || { name: '旁白' };

//   if (isNarrator) {
//      return (
//         <div className="w-full max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 z-40">
//            <div className="bg-black/60 text-white px-6 py-3 rounded-full text-center font-medium text-base backdrop-blur-md border border-white/10 shadow-lg">
//              {displayed}
//            </div>
//         </div>
//      );
//   }

//   const alignmentClass = isHero ? 'items-start ml-4 md:ml-[25%] -translate-y-50' : 'items-end mr-8 md:mr-[50%] -translate-y-20';
//   const bubbleRoundedClass = isHero ? 'rounded-2xl rounded-tl-none' : 'rounded-2xl rounded-tr-none';
//   const triangleClass = isHero ? '-left-[8px] top-[15px] border-r-white/70' : '-right-[8px] top-[15px] border-l-white/70';

//   return (
//     <div className={`w-full max-w-5xl mx-auto flex flex-col ${alignmentClass} mb-8 relative z-20`}>
//        <div className={`text-xs font-bold text-slate-300 mb-1 px-2 drop-shadow-md`}>
//           {charInfo.name}
//        </div>
       
//        <div className={`
//           relative bg-white/70 backdrop-blur-md px-6 py-4 shadow-xl border border-white/20
//           max-w-[80%] md:max-w-md text-base leading-relaxed text-slate-900 font-medium
//           animate-in zoom-in-95 duration-200
//           ${bubbleRoundedClass}
//        `}>
//           {displayed}
//           <div className={`absolute w-0 h-0 border-y-[6px] border-y-transparent border-[8px] ${triangleClass}`}></div>
//        </div>
//     </div>
//   );
// };

import React, { useState, useEffect, useRef } from 'react';
import { CHARACTERS } from '@/lib/resource';

interface ComicBubbleProps {
  speaker: string;
  text: string;
  onComplete?: () => void;
  className?: string;
  disableAutoPosition?: boolean;
}

export const ComicBubble: React.FC<ComicBubbleProps> = ({ speaker, text, onComplete, className, disableAutoPosition }) => {
  const [displayed, setDisplayed] = useState('');
  
  // 1. 使用 Ref 来追踪 onComplete，这样它就不用放在 useEffect 的依赖里了
  const onCompleteRef = useRef(onComplete);
  
  // 每次渲染都更新 Ref 的值，确保调用时是最新的函数
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // 初始化清空
    setDisplayed('');
    
    let currentLength = 0;
    const totalLength = text.length;
    
    // 如果文字为空，直接完成
    if (totalLength === 0) {
      if (onCompleteRef.current) onCompleteRef.current();
      return;
    }

    const timer = setInterval(() => {
      currentLength++;
      
      // 2. 优化：使用 slice 截取，而不是累加。这样即使定时器跑飞了，文字也不会乱。
      setDisplayed(text.slice(0, currentLength));

      if (currentLength >= totalLength) {
        clearInterval(timer);
        // 调用 Ref 里的函数
        if (onCompleteRef.current) onCompleteRef.current();
      }
    }, 30);

    return () => clearInterval(timer);
    
    // 3. 关键修复：依赖数组里只放 text。
    // 只有当 text 内容本身改变时，才重置打字机。
    // 父组件重传 onComplete 不会再导致这里重跑了。
  }, [text]); 

  // --- 以下渲染逻辑保持不变 ---
  const isHero = speaker.startsWith('hero');
  const isNarrator = speaker === 'narrator';
  const charInfo = (CHARACTERS as any)[speaker] || { name: '旁白' };

  if (isNarrator) {
     return (
        <div className="w-full max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 z-40">
           <div className="bg-black/60 text-white px-6 py-3 rounded-full text-center font-medium text-base backdrop-blur-md border border-white/10 shadow-lg">
             {displayed}
           </div>
        </div>
     );
  }

  const alignmentClass = isHero ? 'items-start ml-4 md:ml-[35%] -translate-y-50' : 'items-end mr-8 md:mr-[50%] -translate-y-20';
  const bubbleRoundedClass = isHero ? 'rounded-2xl rounded-tl-none' : 'rounded-2xl rounded-tr-none';
  const triangleClass = isHero ? '-left-[8px] top-[15px] border-r-white/70' : '-right-[8px] top-[15px] border-l-white/70';

  return (
    <div className={`w-full max-w-5xl mx-auto flex flex-col ${alignmentClass} mb-8 relative z-20`}>
       <div className={`text-xs font-bold text-slate-300 mb-1 px-2 drop-shadow-md`}>
          {charInfo?.name || ''}
       </div>
       
       <div className={`
          relative bg-white/70 backdrop-blur-md px-6 py-4 shadow-xl border border-white/20
          max-w-[80%] md:max-w-md text-base leading-relaxed text-slate-900 font-medium
          animate-in zoom-in-95 duration-200
          ${bubbleRoundedClass}
       `}>
          {/* 为了防止高度抖动，可以加一个 min-h */}
          <span className="whitespace-pre-wrap">{displayed}</span>
          
          <div className={`absolute w-0 h-0 border-y-[6px] border-y-transparent border-[8px] ${triangleClass}`}></div>
       </div>
    </div>
  );
};