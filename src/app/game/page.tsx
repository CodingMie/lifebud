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
  const isHero = currentDialogueLine?.speaker?.startsWith('hero');
  const isNarrator = currentDialogueLine?.speaker === 'narrator';
  const isNPC = currentDialogueLine && !isHero && !isNarrator;

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

      {/* 5. 交互与对话层 - 响应式布局重构 */}
      <div className="absolute inset-0 z-40 flex flex-col pointer-events-none">
         
         {/* 上半部分：选项云朵 (Flex-1 占据剩余空间) */}
         <div className="flex-1 flex flex-col items-center justify-center w-full px-4 relative pointer-events-auto">
             {showOptions && currentEvent?.options && (
                <div className="flex flex-col gap-3 md:flex-row md:gap-12 items-center justify-center w-full max-w-5xl mb-16 md:mb-32">
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

         {/* 下半部分：对话框区域 (Grid 布局) */}
         <div className="pointer-events-auto w-full pb-8 md:pb-12">
            
            {/* 1. 旁白 (Narrator) - 居中覆盖 */}
            {currentDialogueLine && !feedback && isNarrator && (
                <div className="flex justify-center px-4 w-full">
                   <ComicBubble 
                      key={`${currentEventIndex}-${dialogueIndex}`} 
                      speaker={currentDialogueLine.speaker} 
                      text={currentDialogueLine.text}
                      onComplete={() => setTextCompleted(true)}
                   />
                </div>
            )}

            {/* 2. 角色对话 (Hero / NPC) - 左右分栏 */}
            {currentDialogueLine && !feedback && !isNarrator && (
                <div className="grid grid-cols-2 gap-4 w-full max-w-[90%] 2xl:max-w-7xl mx-auto px-4 items-end">
                    
                    {/* 左侧：主角 (对话框向右偏移以避开立绘) */}
                    <div className="flex justify-start md:pl-24 lg:pl-32 relative transition-all duration-300">
                        {isHero && (
                           <ComicBubble 
                              key={`${currentEventIndex}-${dialogueIndex}`} 
                              speaker={currentDialogueLine.speaker} 
                              text={currentDialogueLine.text}
                              onComplete={() => setTextCompleted(true)}
                              disableAutoPosition={true}
                              className="-translate-y-10 md:-translate-y-68 max-w-[95%] md:max-w-md"
                           />
                        )}
                    </div>

                    {/* 右侧：NPC (对话框向左偏移以避开立绘) */}
                    <div className="flex justify-end md:pr-24 lg:pr-32 relative transition-all duration-300">
                        {isNPC && (
                           <ComicBubble 
                              key={`${currentEventIndex}-${dialogueIndex}`} 
                              speaker={currentDialogueLine.speaker} 
                              text={currentDialogueLine.text}
                              onComplete={() => setTextCompleted(true)}
                              disableAutoPosition={true}
                              className="-translate-y-10 md:-translate-y-34 max-w-[95%] md:max-w-md"
                           />
                        )}
                    </div>
                </div>
            )}

            {/* 3. 反馈信息显示 */}
            <div className="px-4">
                <FeedbackModal 
                  feedback={feedback}
                  feedbackChanges={feedbackChanges}
                  onNext={nextEvent}
                />
            </div>
         </div>
      </div>

      {/* 6. 模态层 */}
      <MediaOverlay data={mediaData} onClose={() => setMediaData(null)} />
    </div>
  );
}
