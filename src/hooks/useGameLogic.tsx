import React, { useState, useMemo } from 'react';
import { Star, Shield, Smile, DollarSign, Heart, Briefcase, Activity, Frown, Sun } from 'lucide-react';
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
  
  const [background, setBackground] = useState<Background>({ age: 28, city: 'tier2', partner: 'rational', workIntensity: 2 });

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
    const { health, mental, childGrowth, marriage } = attributes;
    
    // 1. 完美人生：各项指标都很高
    if (health >= 80 && mental >= 80 && marriage >= 80 && childGrowth >= 80 && savings >= 500000) {
      return { 
        title: "完美人生", 
        icon: <Star size={40} className="text-yellow-500" />, 
        comment: "你不仅拥有令人羡慕的财富，更拥有健康的体魄、美满的婚姻和优秀的孩子。你是人生的赢家！", 
        suggestion: "你的故事将激励无数人，请继续享受这精彩绝伦的人生。" 
      };
    } 
    // 2. 富甲一方：很有钱但家庭或孩子一般
    else if (savings >= 1000000 && (marriage < 50 || childGrowth < 50)) {
      return { 
        title: "富甲一方", 
        icon: <DollarSign size={40} className="text-yellow-600" />, 
        comment: "你在事业上取得了巨大的成功，积累了丰厚的财富，但回首望去，身边的人似乎渐行渐远。", 
        suggestion: "金钱可以买到很多东西，但买不到真心的陪伴。试着停下脚步，去修补那些珍贵的关系吧。" 
      };
    }
    // 3. 职场精英：有钱且精神状态不错
    else if (savings >= 500000 && mental >= 70) {
      return { 
        title: "职场精英", 
        icon: <Briefcase size={40} className="text-blue-600" />, 
        comment: "你在职场上叱咤风云，用实力证明了自己的价值。经济独立是你最大的底气。", 
        suggestion: "职场的成功固然重要，但也要注意劳逸结合，身体才是革命的本钱。" 
      };
    }
    // 4. 奉献的母亲：孩子成长很高
    else if (childGrowth >= 85) {
      return { 
        title: "奉献的母亲", 
        icon: <Shield size={40} className="text-green-600" />, 
        comment: "你将最好的一切都给了孩子，孩子茁壮成长，是你最大的骄傲。但这背后是你默默的付出。", 
        suggestion: "记得多爱自己一点，你首先是你自己，然后才是母亲。" 
      };
    }
    // 5. 幸福港湾：婚姻和孩子都不错
    else if (marriage >= 80 && childGrowth >= 70) {
       return { 
        title: "幸福港湾", 
        icon: <Heart size={40} className="text-pink-500" />, 
        comment: "你用心经营着家庭，虽然没有大富大贵，但温馨的家庭是你最坚实的后盾。", 
        suggestion: "平平淡淡才是真，继续保持这份对家庭的热爱吧。" 
      };
    }
    // 6. 身心俱疲：健康或精神很差
    else if (health < 40 || mental < 40) {
      return { 
        title: "身心俱疲", 
        icon: <Activity size={40} className="text-red-500" />, 
        comment: "生活的重担压得你喘不过气，身体和精神都发出了红灯警报。", 
        suggestion: "请立刻停下来休息！没有什么比你的健康更重要。寻求帮助并不是软弱的表现。" 
      };
    }
    // 7. 平凡之路：普通结局
    else if (health >= 50 && mental >= 50) {
      return { 
        title: "平凡之路", 
        icon: <Sun size={40} className="text-orange-500" />, 
        comment: "生活没有十全十美，虽然有遗憾，但这就是真实的人生。你在柴米油盐中找到了属于自己的节奏。", 
        suggestion: "接纳不完美，生活依然充满阳光。" 
      };
    }
    // 8. 充满遗憾：Bad End
    else {
      return { 
        title: "充满遗憾", 
        icon: <Frown size={40} className="text-gray-500" />, 
        comment: "回首往事，或许有太多的'如果'和'早知道'。生活留下了不少遗憾。", 
        suggestion: "人生没有彩排，但每一天都是新的开始。从现在起，善待自己，拥抱生活。" 
      };
    }
  }, [gameState, attributes, savings]);

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
