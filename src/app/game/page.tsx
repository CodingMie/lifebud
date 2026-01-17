'use client';

import React from 'react';
import { useGameLogic } from '@/hooks/useGameLogic';
import { StartScreen } from '@/components/game/StartScreen';
import { SetupWizard } from '@/components/game/SetupWizard';
import { EndGameScreen } from '@/components/game/EndGameScreen';
import { GameBackground } from '@/components/game/GameBackground';
import { GameHUD } from '@/components/game/GameHUD';
import { CharacterLayer } from '@/components/game/CharacterLayer';
import { KnowledgeButton } from '@/components/game/KnowledgeButton';
import { ThoughtCloud } from '@/components/game/ThoughtCloud';
import { ComicBubble } from '@/components/game/ComicBubble';
import { FeedbackModal } from '@/components/game/FeedbackModal';
import { MediaOverlay } from '@/components/game/MediaOverlay';

export default function ParentingSimulator() {
  const {
    gameState,
    setGameState,
    background,
    setBackground,
    startGame,
    endGameReport,
    currentAgeYear,
    attributes,
    savings,
    currentStage,
    currentEvent,
    currentEventIndex,
    eventQueue,
    activeSpeaker,
    activeNPC,
    mediaData,
    setMediaData,
    handleScreenClick,
    knowledgeVisible,
    showOptions,
    currentDialogueLine,
    textCompleted,
    setTextCompleted,
    feedback,
    feedbackChanges,
    handleOption,
    nextEvent,
    dialogueIndex,
    isLoading,
  } = useGameLogic();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-black text-white text-2xl">
        <p>游戏生成中，请稍候...</p>
      </div>
    );
  }

  if (gameState === 'start') {
    return <StartScreen onStart={() => setGameState('setup')} />;
  }

  if (gameState === 'setup') {
    return (
      <SetupWizard 
        background={background} 
        setBackground={setBackground} 
        onComplete={startGame} 
      />
    );
  }

  if (gameState === 'end' && endGameReport) {
    return (
      <EndGameScreen 
        report={endGameReport} 
        age={currentAgeYear} 
        score={attributes.childGrowth}
        attributes={attributes}
        savings={savings}
        onRestart={() => setGameState('start')} 
      />
    );
  }

  // gameState === 'playing'
  return (
    <div className="h-screen w-full relative bg-black font-sans overflow-hidden select-none" onClick={handleScreenClick}>
      {/* 1. 背景层 */}
      <GameBackground image={currentEvent?.bgImage || currentStage?.bgImage} />

      {/* 2. 顶部状态栏 (HUD) */}
      <GameHUD 
        currentStageTitle={currentStage.title}
        savings={savings}
        attributes={attributes}
      />

      {/* 3. 角色立绘层 */}
      <CharacterLayer activeSpeaker={activeSpeaker} activeNPC={activeNPC} currentStage={currentStage.id}/>
      
      {/* 4. 知识点悬挂入口 */}
      <KnowledgeButton 
        visible={knowledgeVisible}
        onClick={(e) => { e.stopPropagation(); setMediaData(currentEvent.knowledge || currentEvent.story); }}
      />

      {/* 5. 交互与对话层 */}
      <div className="absolute inset-0 z-40 flex flex-col justify-end pb-8 md:pb-12 pointer-events-none">
         {/* 选项云朵 */}
         <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 relative pointer-events-auto">
             {showOptions && currentEvent?.options && (
                <div className="flex flex-col gap-3 md:flex-row md:gap-12 items-center justify-center mb-32 md:mb-16 w-full">
                   {currentEvent.options.map((opt, idx) => (
                      <ThoughtCloud 
                        key={idx}
                        text={opt.text}
                        cost={opt.cost}
                        time={opt.months}
                        onClick={() => handleOption(opt)}
                        delayIndex={idx}
                      />
                   ))}
                </div>
             )}
         </div>

         {/* 底部对话框 */}
         <div className="pointer-events-auto px-4">
            {currentDialogueLine && !feedback && (
               <ComicBubble 
                  key={`${currentEventIndex}-${dialogueIndex}`} 
                  speaker={currentDialogueLine.speaker} 
                  text={currentDialogueLine.text}
                  onComplete={() => setTextCompleted(true)}
               />
            )}

            {/* 反馈信息显示 */}
            <FeedbackModal 
              feedback={feedback}
              feedbackChanges={feedbackChanges}
              onNext={nextEvent}
            />
         </div>
      </div>

      {/* 6. 模态层 */}
      <MediaOverlay data={mediaData} onClose={() => setMediaData(null)} />
    </div>
  );
}
