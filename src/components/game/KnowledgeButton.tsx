import React from 'react';
import { Lightbulb } from 'lucide-react';

interface KnowledgeButtonProps {
  visible: boolean;
  onClick: (e: React.MouseEvent) => void;
}

// export const KnowledgeButton: React.FC<KnowledgeButtonProps> = ({ visible, onClick }) => {
//   if (!visible) return null;
  
//   return (
//     <div 
//        className="absolute top-10 right-25 md:right-25 z-50 cursor-pointer group animate-bounce-slow pointer-events-auto"
//        onClick={onClick}
//     >
//        <div className="relative flex flex-col items-center">
//           <div className="w-0.1 h-20  "></div>
//             <img src={'/tips.png'} className="text-indigo-600 fill-indigo-600" />
              
//        </div>
//     </div>
//   );
// };


import React from 'react';

// 假设的 Props 定义，如果你已有则忽略
interface KnowledgeButtonProps {
  visible: boolean;
  onClick: () => void;
}

export const KnowledgeButton: React.FC<KnowledgeButtonProps> = ({ visible, onClick }) => {
  if (!visible) return null;

  return (
    <>
      {/* --- 1. 内嵌 CSS 动画定义 --- */}
      <style>{`
        /* 定义闹铃震动动画：总时长 2s */
        @keyframes ring-with-pause {
          /* 初始状态：静止 */
          0% { transform: translate(0, 0) rotate(0); }

          /* --- 震动阶段 (前20%的时间，约0.4秒) --- */
          /* 通过快速切换正负位移和轻微旋转来模拟急促震动 */
          4%  { transform: translate(-3px, 1px) rotate(-2deg); }
          8%  { transform: translate(3px, -1px) rotate(2deg); }
          12% { transform: translate(-3px, 1px) rotate(-2deg); }
          16% { transform: translate(3px, -1px) rotate(2deg); }
          
          /* --- 静止阶段 (回到原位并保持到最后) --- */
          20%  { transform: translate(0, 0) rotate(0); }
          100% { transform: translate(0, 0) rotate(0); }
        }
      `}</style>

      <div 
         className="absolute top-30 right-25 md:right-25 z-50 pointer-events-auto"
         onClick={onClick}
      >
         {/* --- 2. 动画容器 (Wrapper) --- 
             这里负责：周期性的震动动画
             style: 应用我们刚才定义的 ring-with-pause 动画，时长2s，无限循环
         */}
         <div 
            className="group relative flex flex-col items-center cursor-pointer"
            style={{ 
              // 使用 linear 让震动感觉更机械、急促
              animation: 'ring-with-pause 2s linear infinite',
            }}
         >
            {/* (已删除绳子的 div) */}

            {/* --- 3. 交互层 (Image) ---
               这里负责：鼠标移入放大 (Scale) 和点击反馈
               这些效果叠加在父级的震动动画之上，互不冲突
            */}
            <img 
              src={'/tips.png'} 
              className="
                w-40 h-40 
                object-contain
                /* 确保 transition 不会影响震动的急促感，只作用于 scale */
                transition-transform duration-200 ease-out
                /* Hover 放大 */
                group-hover:scale-115 group-hover:drop-shadow-lg group-hover:brightness-110
                /* Active 点击缩小 */
                group-active:scale-90
              " 
              alt="Tips"
            />
         </div>
      </div>
    </>
  );
};
