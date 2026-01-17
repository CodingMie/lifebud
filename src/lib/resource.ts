// --- 角色配置 (Micah 风格) ---
export const CHARACTERS = {
  hero: {
    name: "我",
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Zoey&backgroundColor=transparent&baseColor=f9c9b6&mouth=smile&hair=fonze&hairColor=363636&facialHairProbability=0",
    style: "left-[-5%] bottom-[-5%] z-20" 
  },
  husband: {
    name: "丈夫",
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Felix&backgroundColor=transparent&baseColor=f9c9b6&mouth=smirk&hair=doug&hairColor=000000&shirt=collared&shirtColor=F44336",
    style: "right-[-2%] bottom-[-5%] z-10" 
  },
  doctor: {
    name: "医生",
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Christopher&backgroundColor=transparent&baseColor=f9c9b6&mouth=laughing&hair=mrClean&glasses=round&shirt=collared",
    style: "right-[0%] bottom-[-5%] z-10" 
  },
  nurse: {
    name: "护士",
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Amaya&backgroundColor=transparent&baseColor=f9c9b6&mouth=smile&hair=pixie&hairColor=d4a15a",
    style: "right-[0%] bottom-[-5%] z-10" 
  },
  guide: {
    name: "贴心姐姐",
    avatar: "https://api.dicebear.com/9.x/micah/svg?seed=Jeane&backgroundColor=transparent&baseColor=f9c9b6&mouth=smile&hair=full&hairColor=ac66cc&earrings=hoop",
    style: "right-[-2%] bottom-[-5%] z-30" 
  }
};

/**
 * 初始状态
 */
export const INITIAL_ATTRIBUTES = {
  wealth: 80,
  health: 80,
  mental: 80,
  marriage: 80,
  childGrowth: 50,
};

/**
 *  章节
 */
export const STAGES = [
  {
    id: 1,
    title: "第一章：备孕",
    bgImage: "https://images.unsplash.com/photo-1632215354964-1e66c9df3822?auto=format&fit=crop&q=80&w=1920" 
  },
  {
    id: 2,
    title: "第二章：孕期",
    bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920" 
  },
  {
    id: 3,
    title: "第三章：分娩",
    bgImage: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1920" 
  },
  {
    id: 4,
    title: "第四章：育儿",
    bgImage: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=1920" 
  }
];

/**
 * 默认剧情
 */
export const FALLBACK_DB = {
  1: [ 
    {
      id: 'intro_1',
      bgImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1920",
      dialogue: [
        { speaker: 'narrator', text: '这是一个关于选择的故事。' },
        { speaker: 'narrator', text: '每一个看似微小的决定，都可能改变你和孩子的一生。' },
        { speaker: 'hero', text: '呼……今天要和老公商量备孕的事情了。', mood: 'nervous' },
      ],
      autoNext: true
    },
    {
      id: 'checkup',
      title: '第一次孕前检查',
      bgImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920", 
      dialogue: [
        { speaker: 'hero', text: '虽然说是“两个人的事”，但总觉得压力都在我这边……' },
        { speaker: 'husband', text: '老婆，别紧张，不管是公立还是私立，我都陪你去。' },
        { speaker: 'hero', text: '(看着手中的挂号单，心里有些忐忑……)' },
      ],
      type: 'choice',
      knowledge: {
        id: 'k_checkup',
        title: "优生检查科普",
        speaker: "guide",
        text: "别紧张！孕前优生检查包括TORCH五项、生殖系统检查等。这能有效规避流产和胎儿畸形风险，非常重要哦！",
        bilibiliId: "BV15b411h7R3"
      },
      options: [
        { 
          text: '去公立三甲，相信权威', 
          cost: 500, 
          changes: { health: 5, mental: -3 },
          months: 1, 
          outcome: "排队三小时，看病五分钟。虽然环境嘈杂，但医生的专业让你安心了不少。"
        },
        { 
          text: '去私立医院，图个舒心', 
          cost: 2000, 
          changes: { health: 8, mental: 5 },
          months: 1, 
          outcome: "私密的环境和医生耐心的解答平复了你的不安，虽然钱包瘪了点。"
        }
      ]
    },
    {
      id: 'folic',
      title: '医嘱：关于叶酸',
      bgImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1920",
      dialogue: [
        { speaker: 'doctor', text: '这两项指标有点波动，不过问题不大。' },
        { speaker: 'doctor', text: '这盒叶酸拿好。回去记得每天都要吃，一直吃到怀孕后三个月。' },
        { speaker: 'hero', text: '好的医生。必须要天天吃吗？' },
        { speaker: 'doctor', text: '当然，这可是为了孩子神经发育好，不能马虎。' },
      ],
      type: 'choice',
      knowledge: {
        id: 'k_folic',
        title: "叶酸的作用",
        speaker: "guide",
        text: "医生说得对！叶酸（维生素B9）缺乏是造成胎儿神经管畸形的主要原因。不仅你要吃，准爸爸最好也一起补充哦。",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_400p.mp4"
      },
      options: [
        { 
          text: '严格遵医嘱每日服用', 
          changes: { health: 10, childGrowth: 5 },
          months: 2, 
          outcome: "你定好了每日闹钟。虽然偶尔会感到反胃，但为了宝宝，这点苦不算什么。"
        },
        { 
          text: '太忙了，随缘吃吧', 
          changes: { health: 3, childGrowth: -2 },
          months: 2,
          outcome: "工作太忙，生活太乱。你总是安慰自己“少吃一次没关系”，心里却隐隐不安。"
        }
      ]
    }
  ],
  2: [
    {
      id: 'vomit',
      title: '晨吐',
      bgImage: "https://images.unsplash.com/photo-1584621644694-a7114b087a32?auto=format&fit=crop&q=80&w=1920", 
      dialogue: [
        { speaker: 'hero', text: '呕……咳咳……' },
        { speaker: 'husband', text: '老婆你没事吧？这也吐得太厉害了。' },
        { speaker: 'hero', text: '这几天早上醒来，感觉整个世界都在旋转，胃里翻江倒海。' },
        { speaker: 'hero', text: '这就是传说中的“晨吐”吗？简直是全天候的晕车。' },
      ],
      type: 'choice',
      knowledge: {
        id: 'k_hcg',
        title: "早孕反应",
        speaker: "guide",
        text: "心疼你... 这是HCG激素在作祟，通常8-10周达到高峰。如果吐得太厉害，导致脱水或体重骤降，一定要去医院看医生！",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_400p.mp4"
      },
      options: [
        { 
          text: '受不了了，去看医生', 
          cost: 800, 
          changes: { health: 7, mental: 5 },
          months: 3, 
          outcome: "医生给你开了一些维生素B6和止吐药。在药物的帮助下，你终于吃下了一顿完整的饭。"
        },
        { 
          text: '为了孩子，我忍！', 
          changes: { health: -10, mental: -8, childGrowth: -3 },
          months: 3,
          outcome: "你趴在马桶边吐到胆汁出来，眼泪止不住地流。这种纯粹靠意志力的忍耐，真的好辛苦。"
        }
      ]
    }
  ],
  3: [
    {
      id: 'delivery',
      title: '临产',
      bgImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1920",
      dialogue: [
        { speaker: 'nurse', text: '宫口开了三指了，家属在外面等着。' },
        { speaker: 'nurse', text: '你现在情况有点特殊，顺产可能要遭罪，剖腹产恢复慢，你们商量下怎么选？' },
        { speaker: 'hero', text: '（疼得满头大汗）我……我不知道……' },
      ],
      type: 'choice',
      knowledge: {
        id: 'k_delivery',
        title: "分娩方式",
        speaker: "guide",
        text: "这是个艰难的决定。顺产对宝宝肺部好，产后恢复快；剖腹产虽然避免了产痛，但毕竟是个大手术。听从医生建议最重要。",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_400p.mp4"
      },
      options: [
        { 
          text: '坚持顺产', 
          cost: 5000, 
          changes: { health: -15, mental: 12, childGrowth: 10 },
          months: 0, 
          outcome: "经历了十级阵痛，你感觉身体被撕裂。但听到孩子第一声啼哭时，一切疼痛似乎都消失了。"
        },
        { 
          text: '转剖腹产', 
          cost: 12000, 
          changes: { health: -20, mental: 8, childGrowth: 8 },
          months: 1, 
          outcome: "麻醉过后，伤口的疼痛让你连咳嗽都不敢。但看着身边熟睡的宝宝，你觉得这条疤痕是勇气的勋章。"
        }
      ]
    }
  ],
  4: [
    {
      id: 'backtowork',
      title: '返岗',
      bgImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920", 
      dialogue: [
        { speaker: 'hero', text: '（看着桌上的产假结束通知单，又看了看摇篮里的宝宝）' },
        { speaker: 'hero', text: '该回去上班了吗？可是宝宝还这么小……' },
        { speaker: 'husband', text: '老婆，不管你做什么决定，我都支持你。只是房贷压力确实有点大。' },
      ],
      type: 'choice',
      story: {
        id: 's_backtowork',
        title: "背奶妈妈",
        speaker: "guide",
        text: "我见过太多'背奶妈妈'了，她们躲在杂物间挤奶，背着冰包挤地铁。职场不相信眼泪，但母亲的爱是滚烫的。",
        bilibiliId: "BV1MW411q7yQ"
      },
      options: [
        { 
          text: '立即复工，请保姆', 
          cost: 6000, 
          changes: { mental: 8 }, 
          months: 6,
          outcome: "你成为了公司里的'背奶族'。虽然身体疲惫，但重回职场让你找回了一部分自我。"
        },
        { 
          text: '辞职全职带娃', 
          cost: 1500, 
          changes: { health: 5, childGrowth: 7 },
          months: 12,
          outcome: "你的世界缩小到了几十平米的家。虽然失去了收入，但你没有错过孩子成长的每一个瞬间。"
        }
      ]
    }
  ]
};