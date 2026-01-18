// src/components/BackgroundMusic.tsx
"use client"; // 必须标记为客户端组件

import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react"; // 引入图标

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 初始化音量
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // 设置音量 40%
    }
    
    // 尝试自动播放（现代浏览器可能会拦截，所以需要 catch）
    const playPromise = audioRef.current?.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("自动播放被拦截，需要用户手动点击:", error);
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* 隐藏的 audio 标签 */}
      <audio ref={audioRef} src="/bgm.mp3" loop />

      {/* 悬浮控制按钮 */}
      <button
        onClick={togglePlay}
        // 1. 按钮容器：保持绝对干净，无背景、无边框、无外框线
        // 只保留鼠标悬停的缩放交互效果
        className={`
            relative z-50 p-0
            bg-transparent border-none outline-none focus:outline-none
            transition-transform duration-300 ease-in-out
            hover:scale-110 active:scale-95
        `}
        title={isPlaying ? "暂停" : "播放"}
        >
        {/* 2. 使用 SVG 音符图标 */}
        <Music 
            // 3. 图标样式设置：FDC900
            // - w-14 h-14: 设置图标大小
            // - text-amber-500: 设置为琥珀色（金色/橘黄）
            // - animate-spin-slow: 播放时旋转
            className={`
            w-5 h-5 
            text-[#FDC900]
            ${isPlaying ? "animate-spin-slow" : ""}
            `}
        />
        </button>

      {/* 定义一个慢速旋转动画 */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
