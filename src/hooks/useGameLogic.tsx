import React, { useState, useMemo } from 'react';
import { Star, Shield, Smile } from 'lucide-react';
import { CHARACTERS, FALLBACK_DB, INITIAL_ATTRIBUTES, STAGES } from '@/lib/resource';

import { useAgent } from "@copilotkit/react-core/v2";

export type GameState = 'start' | 'setup' | 'playing' | 'end';

export interface Background {
  age: number;
  city: string;
  partner: string;
  workIntensity: number;
}

export interface Attributes {
  health: number;
  mental: number;
  marriage: number;
  childGrowth: number;
  [key: string]: number;
}

export interface Option {
  text: string;
  cost?: number;
  months?: number;
  outcome?: string;
  changes?: Partial<Attributes>;
}

export interface DialogueLine {
  speaker: string;
  text: string;
}

export interface Event {
  id: string;
  dialogue?: DialogueLine[];
  options?: Option[];
  autoNext?: boolean;
  bgImage?: string;
  knowledge?: any;
  story?: any;
}

export const useGameLogic = () => {
  const { agent } = useAgent({ agentId: "userBackgroundAgent" });
  const [gameState, setGameState] = useState<GameState>('start');
    const [isLoading, setIsLoading] = useState(false); 
  const [stageIndex, setStageIndex] = useState(0);
  const [eventQueue, setEventQueue] = useState<Event[]>([]);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0); 
  
  const [attributes, setAttributes] = useState<Attributes>(INITIAL_ATTRIBUTES);
  const [savings, setSavings] = useState(200000);
  const [totalMonths, setTotalMonths] = useState(0);
  
  const [textCompleted, setTextCompleted] = useState(false);
  const [mediaData, setMediaData] = useState<any>(null);
  const [feedback, setFeedback] = useState<string | null>(null); 
  const [feedbackChanges, setFeedbackChanges] = useState<any>(null); 
  
  const [background, setBackground] = useState<Background>({ age: 28, city: 'tier2', partner: 'supportive', workIntensity: 2 });

  const currentAgeYear = background.age + Math.floor(totalMonths / 12);
  const currentStage = STAGES[stageIndex];
  const currentEvent = eventQueue[currentEventIndex];
  
  const currentDialogueLine = currentEvent?.dialogue ? currentEvent.dialogue[dialogueIndex] : null;
  const isDialogueFinished = currentEvent?.dialogue ? dialogueIndex >= currentEvent.dialogue.length - 1 : false;
  const activeSpeaker = currentDialogueLine?.speaker || null;

  // 稳定显示人物
  const activeNPC = useMemo(() => {
    if (activeSpeaker && !activeSpeaker.startsWith('hero') && activeSpeaker !== 'narrator' && CHARACTERS[activeSpeaker as keyof typeof CHARACTERS]) {
        return activeSpeaker;
    }
    if (currentEvent?.dialogue) {
        const firstNpc = currentEvent.dialogue.find(line => !line.speaker.startsWith('hero') && line.speaker !== 'narrator' && CHARACTERS[line.speaker as keyof typeof CHARACTERS]);
        return firstNpc ? firstNpc.speaker : null;
    }
    return null;
  }, [activeSpeaker, currentEvent]);

  const loadStage = (idx: number) => {
    const stageId = STAGES[idx].id;
    // 真实项目中这里是 fetch('/api/events?stage=' + stageId)
    const events = FALLBACK_DB[stageId as keyof typeof FALLBACK_DB] || [];
    setEventQueue(events as Event[]);
    setCurrentEventIndex(0);
    resetEventState();
  };

  const resetEventState = () => {
    setDialogueIndex(0);
    setTextCompleted(false);
    setFeedback(null);
    setFeedbackChanges(null);
  };

  const startGame = async () => {
    setIsLoading(true);
    
    const agentInput = {
      age: background.age,
      city: background.city,
      workIntensity: background.workIntensity,
      partner: background.partner,
    };

    try {
      agent.addMessage({
        id: crypto.randomUUID(),
        role: 'user',
        content: JSON.stringify(agentInput),
      });
      await agent.runAgent();

      // Find the latest assistant message
      const latestAssistantMessage = agent.messages.findLast(
        (message) => message.role === 'assistant'
      );

      if (!latestAssistantMessage) {
        throw new Error('Agent did not return an assistant message.');
      }
      const parsedResult = JSON.parse(latestAssistantMessage.content || '{}'); 
      if (!parsedResult.health || !parsedResult.mental || !parsedResult.marriage || !parsedResult.childGrowth || !parsedResult.wealth) {
        parsedResult.health = 50;
        parsedResult.mental = 50;
        parsedResult.marriage = 50;
        parsedResult.childGrowth = 50;
        parsedResult.wealth = background.city === 'tier1' ? 300000 : 200000;
      }

      setAttributes({
        health: parsedResult.health,
        mental: parsedResult.mental,
        marriage: parsedResult.marriage,
        childGrowth: parsedResult.childGrowth,
      });
      setSavings(parsedResult.wealth);

    } catch (error) {
      console.error("Error calling userBackgroundAgent or parsing result:", error);
      // Fallback to initial attributes if agent call fails
      setAttributes(INITIAL_ATTRIBUTES);
      setSavings(background.city === 'tier1' ? 300000 : 200000);
    } finally {
      setIsLoading(false);
    }
    setStageIndex(0);
    setTotalMonths(0);
    setGameState('playing');
    loadStage(0);
  };

  const handleOption = (opt: Option) => {
    const newStats = { ...attributes };
    if (opt.changes) {
      Object.keys(opt.changes).forEach(k => {
        if (newStats[k] !== undefined) newStats[k] = Math.min(100, Math.max(0, newStats[k] + (opt.changes![k] || 0)));
      });
    }
    setAttributes(newStats);
    setSavings(prev => prev - (opt.cost || 0));
    setTotalMonths(prev => prev - -(opt.months || 0)); // Using subtraction of negative to ensure addition if it's string (safeguard), though type is number
    setFeedback(opt.outcome || null);
    setFeedbackChanges({ ...opt.changes, cost: opt.cost }); 
  };

  const nextEvent = () => {
    if (currentEventIndex < eventQueue.length - 1) {
      setCurrentEventIndex(prev => prev + 1);
      resetEventState();
    } else {
      if (stageIndex < STAGES.length - 1) {
        setStageIndex(prev => prev + 1);
        loadStage(stageIndex + 1);
      } else {
        setGameState('end');
      }
    }
  };

  const handleScreenClick = () => {
    if (mediaData) return; 
    
    if (feedback) {
      return;
    }

    if (!textCompleted) {
      setTextCompleted(true);
      return;
    }

    if (currentEvent?.dialogue && dialogueIndex < currentEvent.dialogue.length - 1) {
      setDialogueIndex(prev => prev + 1);
      setTextCompleted(false);
      return;
    }

    if (currentEvent?.autoNext) {
      nextEvent();
      return;
    }
  };

  const endGameReport = useMemo(() => {
    if (gameState !== 'end') return null;
    const { health, mental, childGrowth } = attributes;
    if (health >= 70 && mental >= 70 && childGrowth >= 80) {
      return { title: "完美人生", icon: <Star size={40} />, comment: "你用智慧与爱，平衡了自我与家庭，活出了令人羡慕的模样。", suggestion: "请继续保持这份从容，将幸福传递给更多人。" };
    } else if (childGrowth >= 80) {
      return { title: "奉献的母亲", icon: <Shield size={40} />, comment: "你将最好的一切都给了孩子，孩子茁壮成长，但你也为此付出了巨大的代价。", suggestion: "记得多爱自己一点，你首先是你自己，然后才是母亲。" };
    } else {
      return { title: "平凡之路", icon: <Smile size={40} />, comment: "生活没有十全十美，虽然有遗憾，但这就是真实的人生。", suggestion: "接纳不完美，生活依然充满阳光。" };
    }
  }, [gameState, attributes]);

  return {
      gameState,
      setGameState,
      isLoading,
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
      knowledgeVisible: (!!currentEvent?.knowledge || !!currentEvent?.story) && !feedback,
      showOptions: !feedback && !!currentEvent?.options && isDialogueFinished && textCompleted,
      currentDialogueLine,
      textCompleted,
      setTextCompleted,
      feedback,
      feedbackChanges,
      handleOption,
      nextEvent,
      dialogueIndex
    };
};
