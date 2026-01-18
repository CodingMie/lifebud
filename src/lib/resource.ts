// --- 角色配置 (Micah 风格) ---
export const CHARACTERS = {
  hero: {
    name: "我",
    avatar: "/woman.png",
    style: "left-[10%] bottom-[-11.5%] z-20" 
  },
  hero_1: {
    name: "我",
    avatar: "/woman.png",
    style: "left-[10%] bottom-[-11.5%] z-20 max-w-[280px]" 
  },
  hero_2: {
    name: "我",
    avatar: "/woman_2.png",
    style: "left-[15%] bottom-[-11.5%] z-20 max-w-[200px]" 
  },
  hero_3: {
    name: "我",
    avatar: "/two_people.png",
    style: "left-[-10%] bottom-[-14.5%] z-20 max-w-[380px] -translate-x-25" 
  },
  hero_4: {
    name: "我",
    avatar: "/woman_3.png",
    style: "left-[10%] bottom-[-14%] z-20 max-w-[330px]" 
  },
  husband: {
    name: "丈夫",
    avatar: "/man.png",
    style: "right-[10%] bottom-[-15%] z-10" 
  },
  doctor: {
    name: "医生",
    avatar: "/npc.png",
    style: "right-[10%] bottom-[-15%] z-10" 
  },
  nurse: {
    name: "护士",
    avatar: "/npc.png",
    style: "right-[10%] bottom-[-15%] z-10" 
  },
  tongshi: {
    name: "同事",
    avatar: "/npc.png",
    style: "right-[10%] bottom-[-15%] z-10" 
  },
  zhangbei: {
    name: "长辈",
    avatar: "/npc.png",
    style: "right-[10%] bottom-[-15%] z-10" 
  },
  linju: {
    name: "邻居",
    avatar: "/npc.png",
    style: "right-[10%] bottom-[-15%] z-10" 
  },
  guide: {
    name: "贴心姐姐",
    avatar: "/tips.png",
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
    bgImage: "/duihuabeijing.png" 
  },
  {
    id: 2,
    title: "第二章：孕期",
    bgImage: "/duihuabeijing.png" 
  },
  {
    id: 3,
    title: "第三章：分娩",
    bgImage: "/duihuabeijing.png" 
  },
  {
    id: 4,
    title: "第四章：育儿",
    bgImage: "/duihuabeijing.png" 
  }
];

/**
 * 默认剧情
 */
export const FALLBACK_DB = {
  1: [ 
    {
      id: 'intro_1',
      bgImage: "/intro_1.png",
      dialogue: [
        { speaker: 'narrator', text: '这是一个关于选择的故事。' },
        { speaker: 'narrator', text: '每一个看似微小的决定，都可能改变你和孩子的一生。' },
        // { speaker: 'hero', text: '呼……今天要和老公商量备孕的事情了。', mood: 'nervous' },
      ],
      autoNext: true
    },
    {
      id: 'checkup',
      title: '第一次孕前检查',
      bgImage: "/duihuabeijing.png", 
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
        bilibiliId: "BV1UB4y137iX"
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
      bgImage: "/duihuabeijing.png",
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
        bilibiliId: "BV1Zx411G7BT"
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
      id: 'intro_2',
      bgImage: "/intro_2.png",
      dialogue: [
        { speaker: 'narrator', text: '恭喜你成功怀孕！' },
        { speaker: 'narrator', text: '从这一刻起，你的身体与人生都将进入全新的篇章。' },
        { speaker: 'narrator', text: '激素波动带来的情绪起伏、职场与孕期的冲突、家人的过度关心……' },
        { speaker: 'narrator', text: '你将在身体变化与外界压力中，学习成为一名母亲。' },
      ],
      autoNext: true
    },
    {
      id: 'vomit',
      title: '晨吐',
      bgImage: "/duihuabeijing.png", 
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
        bilibiliId: "BV1pt4y1h7xh"
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
    },
    
    {
      "id": "anomaly_scan",
      "title": "大排畸的阴云",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "doctor", "text": "你看这个数值，有点临界……可能需要做进一步检查确认一下。" },
        { "speaker": "hero", "text": "医生，这是什么意思？孩子会有问题吗？（声音开始颤抖）" },
        { "speaker": "husband", "text": "不管花多少钱，我们都查，只要能确信孩子没事。" }
      ],
      "type": "fixed",
      "knowledge": {
        "id": "k_anomaly_scan",
        "title": "大排畸指标解读",
        "speaker": "guide",
        "text": "大排畸指标异常不代表一定有畸形，很多软指标（如强光点）可能是生理性的，进一步检查通常是为了以此排除风险。",
        "bilibiliId": "BV17G4y1G7CV"
      },
      "options": [
        {
          "text": "立即进一步检查",
          "cost": 3000,
          "changes": { "mental": -10, "babyGrowth": 8 },
          "months": 0,
          "outcome": "虽然花了三千块，等待结果的一周像过了一年，但最终看到“无异常”的报告单，悬着的心终于放下了。"
        },
        {
          "text": "选择观察复查",
          "cost": 0,
          "changes": { "mental": -15, "health": -5, "marriage": -8 },
          "months": 1,
          "outcome": "为了省钱和侥幸心理，你选择了等待。但整夜的失眠和网络搜索吓人的案例，让你和丈夫都陷入了深深的焦虑。"
        }
      ]
    },
    {
      "id": "work_overload",
      "title": "突如其来的加班",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "tongshi", "text": "那个……这有个急活，大家手里都有事，李姐说你经验足，能帮忙顶一下吗？" },
        { "speaker": "hero", "text": "（看了一眼时间）已经晚上7点了，腰酸得直不起来……" },
        { "speaker": "tongshi", "text": "又是这种借口，这已经是这周第三次了。" }
      ],
      "type": "fixed",
      "options": [
        {
          "text": "向上司提出抗议",
          "cost": 0,
          "changes": { "workLoad": -5, "mental": 6},
          "months": 0,
          "outcome": "虽然奖金受了点影响，但明确了底线后，那些推诿的工作终于不再找上门了，心情舒畅。"
        },
        {
          "text": "默默接受加班",
          "cost": 0,
          "changes": { "health": -8, "mental": -10, "marriage": -6 },
          "months": 0,
          "outcome": "回到家已是深夜，丈夫看着冷掉的饭菜满脸无奈。你累得连洗漱的力气都没有，甚至感觉肚子紧发发硬。"
        }
      ]
    },
    {
      "id": "leg_swelling",
      "title": "消失的脚踝",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "hero", "text": "天啊，我的脚肿得像个发面馒头，原来的鞋子根本穿不进去了。" },
        { "speaker": "husband", "text": "看着真难受……要不买那个很贵的按摩仪？还是我帮你按按？" },
        { "speaker": "hero", "text": "好涨，感觉皮肤都要撑破了……" }
      ],
      "type": "choice",
      "knowledge": {
        "id": "k_swelling",
        "title": "孕期水肿缓解",
        "speaker": "guide",
        "text": "孕晚期水肿很常见。建议睡觉时抬高下肢，饮食清淡少盐。如果出现全身性水肿需警惕妊高症。",
        "bilibiliId": "BV1St411Q7GM"
      },
      "options": [
        {
          "text": "坚持热敷+按摩",
          "cost": 0,
          "changes": { "health": 6, "mental": 4, "marriage": 5 },
          "months": 0,
          "outcome": "每晚丈夫笨手笨脚地帮你按摩消肿，虽然手法不专业，但这成了你们睡前最温馨的时光。"
        },
        {
          "text": "依赖药物缓解",
          "cost": 600,
          "changes": { "health": 3, "mental": -2,},
          "months": 0,
          "outcome": "买来了昂贵的消肿产品，效果虽然快，但看着账单，你又开始焦虑孩子的奶粉钱了。"
        }
      ]
    },
    {
      "id": "elder_advice",
      "title": "长辈的“关怀”",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "zhangbei", "text": "哎呀！跟你说了多少次，不能剪刀！会伤到胎神的！" },
        { "speaker": "zhangbei", "text": "还有这个汤，必须喝完，这是我求来的偏方，对男孩好！" },
        { "speaker": "hero", "text": "（看着那碗黑乎乎的汤，胃里一阵翻江倒海……）" }
      ],
      "type": "choice",
      "options": [
        {
          "text": "耐心倾听选择性采纳",
          "cost": 0,
          "changes": { "mental": -4, "marriage": 6 },
          "months": 0,
          "outcome": "你表面微笑着应承，转身把汤倒进了花盆。虽然听唠叨很烦，但家里维持了表面的和平。"
        },
        {
          "text": "直接表达不满",
          "cost": 0,
          "changes": { "marriage": -10, "mental": 3, "health": -2 },
          "months": 0,
          "outcome": "你忍无可忍地反驳了回去。长辈气得摔门而去，家里气氛降到冰点，你也气得肚子发紧。"
        }
      ]
    },
    
  ],
  
  3: [
    {
      id: 'intro_3',
      bgImage: "/intro_3.png",
      dialogue: [
        { speaker: 'narrator', text: '预产期越来越近，产房的灯光已在眼前。' },
        { speaker: 'narrator', text: '这是一场与时间赛跑的考验，你将直面疼痛、风险与未知。' },
        { speaker: 'narrator', text: '选择生产方式、应对突发状况，每一次呼吸都关乎你与宝宝的安危。' },
      ],
      autoNext: true
    },
    {
      id: 'delivery',
      title: '临产',
      bgImage: "/duihuabeijing.png",
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
        bilibiliId: "BV1tp4y1u7tS"
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
    },
    {
      "id": "hemorrhage_crisis",
      "title": "生死时速",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "doctor", "text": "不好！产妇大出血，血压在急速下降！快准备输血！" },
        { "speaker": "hero", "text": "（感觉身体变得好轻，眼前的手术灯光圈越来越模糊，周围的声音仿佛在水底……）" },
        { "speaker": "husband", "text": "医生！求求你们！一定要保住大人！不管花多少钱！" }
      ],
      "type": "fixed",
      "knowledge": {
        "id": "k_hemorrhage",
        "title": "产后出血急救",
        "speaker": "guide",
        "text": "产后出血是分娩期的严重并发症。高龄、多胎或身体底子差是高危因素。现代医学的介入治疗和输血技术是挽救生命的关键。",
        "bilibiliId": "BV1Gs411W7bZ"
      },
      "options": [
        {
          "text": "接受紧急输血+手术",
          "cost": 20000,
          "changes": { "health": -25, "mental": -15, "babyGrowth": 5 },
          "months": 0,
          "outcome": "醒来时身上插满了管子，虽然捡回了一条命，身体极度虚弱，存款也瞬间见底，但看到孩子平安，你流下了眼泪。"
        },
        {
          "text": "坚持保守治疗",
          "cost": 0,
          "changes": { "health": -30, "mental": -20, "babyGrowth": -3 },
          "months": 1,
          "outcome": "你不想花大钱，试图靠身体硬扛。恢复期极其漫长痛苦，并发症让你甚至无法抱起孩子，全家笼罩在阴霾中。"
        }
      ]
    }
  ],
  4: [
    {
      id: 'intro_4',
      bgImage: "/intro_4.png",
      dialogue: [
        { speaker: 'narrator', text: '宝宝终于来到了你的身边！' },
        { speaker: 'narrator', text: '从第一次喂奶到第一声啼哭' },
        { speaker: 'narrator', text: '从产假结束的复工抉择到育儿理念的冲突' },
        { speaker: 'narrator', text: '你将在无数个琐碎又温暖的瞬间里，体会为人父母的酸甜苦辣。' },
      ],
      autoNext: true
    },
    {
      "id": "ppd_shadow",
      "title": "情绪的黑狗",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "hero", "text": "（看着窗外发呆，眼泪控制不住地往下流，哪怕孩子在哭也觉得很遥远）" },
        { "speaker": "husband", "text": "你怎么又哭了？大家都在照顾你，孩子也好好的，你到底还有什么不顺心的？" },
        { "speaker": "hero", "text": "我觉得自己是个糟糕的妈妈，如果我消失了，大家会不会过得更好？" }
      ],
      "type": "choice",
      "knowledge": {
        "id": "k_ppd",
        "title": "产后抑郁识别",
        "speaker": "guide",
        "text": "产后荷尔蒙剧变会导致情绪低落。如果持续感到绝望、甚至有伤害自己或宝宝的念头，这不是矫情，是生病了，必须求医！",
        "bilibiliId": "BV1BY411K7ei"
      },
      "options": [
        {
          "text": "主动寻求心理咨询",
          "cost": 1200,
          "changes": { "mental": 15, "marriage": 8 },
          "months": 1,
          "outcome": "心理医生的疏导让你意识到这只是激素在作祟。丈夫也开始理解你的无助，尝试分担更多育儿压力。"
        },
        {
          "text": "隐瞒情绪独自承受",
          "cost": 0,
          "changes": { "mental": -20, "marriage": -15, "health": -10 },
          "months": 1,
          "outcome": "你把情绪死死压在心底，变得沉默寡言或暴躁易怒。夫妻关系降至冰点，身体因为长期失眠和焦虑每况愈下。"
        }
      ]
    },
    {
      "id": "relative_visit",
      "title": "喧闹的探望",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "zhangbei", "text": "哎哟！大孙子真胖！来来来，让姑婆抱抱！怎么睡着了？捏捏耳朵弄醒他！" },
        { "speaker": "hero", "text": "刚哄睡着……这一屋子烟味和嗓门，头都要炸了……" },
        { "speaker": "zhangbei", "text": "产妇别老躺着，要多走动！你看谁家媳妇像你这么娇气？" }
      ],
      "type": "choice",
      
      "options": [
        {
          "text": "礼貌接待控制时间",
          "cost": 0,
          "changes": { "mental": -5, "marriage": 6 },
          "months": 0,
          "outcome": "你强撑着身体应付亲戚，虽然身心俱疲，但丈夫觉得你给足了面子，亲戚们也满意地离开了。"
        },
        {
          "text": "直接拒绝专注休养",
          "cost": 0,
          "changes": { "marriage": -8, "mental": 7, "health": 4 },
          "months": 0,
          "outcome": "你黑着脸下了逐客令，甚至锁上了房门。世界终于清静了，你美美地睡了一觉，但客厅里传来了丈夫尴尬的解释声。"
        }
      ]
    },

    {
      "id": "feeding_struggle",
      "title": "喂养的难题",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "hero", "text": "（看着吸奶器里少得可怜的刻度，乳头钻心地疼）为什么别人奶水那么多，我就不行？" },
        { "speaker": "zhangbei", "text": "还是得喝母乳啊，母乳聪明！是不是你汤喝得不够？再来一碗猪蹄汤！" }
      ],
      "type": "choice",
      "knowledge": {
        "id": "k_feeding",
        "title": "科学喂养观",
        "speaker": "guide",
        "text": "母乳虽好，但并不是衡量母爱的唯一标准。混合喂养或纯奶粉喂养同样能让宝宝健康长大，妈妈的情绪稳定更重要。",
        "bilibiliId": "BV1CmJtzXEoJ"
      },
      "options": [
        {
          "text": "追奶+高端奶粉混合",
          "cost": 3000,
          "changes": { "health": -6, "babyGrowth": 9 },
          "months": 1,
          "outcome": "你开始了没日没夜的“挂喂”和追奶生活，搭配昂贵的有机奶粉。宝宝长得很好，但你瘦成了皮包骨，严重缺觉。"
        },
        {
          "text": "直接全奶粉喂养",
          "cost": 1800,
          "changes": { "mental": -4, "babyGrowth": 6 },
          "months": 1,
          "outcome": "你顶住压力断了奶。虽然偶尔会有愧疚感，但终于能睡个整觉了，身体恢复得很快，带娃也有精力了。"
        }
      ]
    },
    {
      id: 'backtowork',
      title: '返岗',
      bgImage: "/duihuabeijing.png", 
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
        bilibiliId: "BV1dx4y1X7WV"
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
    },
    {
      "id": "vaccine_choice",
      "title": "满月的第一针",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "nurse", "text": "宝宝满月了，今天有些自费的二类疫苗，比如五联、肺炎疫苗，你们考虑打吗？" },
        { "speaker": "husband", "text": "那个五联好像很贵啊，几千块呢。打免费的就不行吗？" },
        { "speaker": "hero", "text": "可是听说自费的副作用小，还能少挨几针……但这个月开销确实太大了。" }
      ],
      "type": "fixed",
      "knowledge": {
        "id": "k_vaccine",
        "title": "一类与二类疫苗",
        "speaker": "guide",
        "text": "一类疫苗免费且强制；二类疫苗自费自愿。医生通常建议在经济允许下接种二类（如13价肺炎、轮状病毒），能提供更全面的保护。",
        "bilibiliId": "BV1zW411G7eM"
      },
      "options": [
        {
          "text": "全部免费一类疫苗",
          "cost": 500,
          "changes": { "babyGrowth": 6 },
          "months": 0,
          "outcome": "选择了国家兜底的基础方案。虽然心里稍微有点对不起宝宝，但省下的钱确实解了燃眉之急。宝宝也顺利度过了观察期。"
        },
        {
          "text": "部分自费二类疫苗",
          "cost": 3000,
          "changes": { "babyGrowth": 10 },
          "months": 0,
          "outcome": "咬咬牙刷了卡。看着宝宝少挨了四针，不仅减少了去医院交叉感染的风险，你心里也觉得这钱花得值，这就是“花钱买安稳”。"
        }
      ]
    },
    
    {
      "id": "first_fever",
      "title": "深夜的高温",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "hero", "text": "老公快醒醒！宝宝身上好烫！体温计显示39度了！" },
        { "speaker": "husband", "text": "别慌别慌，百度上说可以用退热贴……还是要马上去医院？这大半夜的……" }
      ],
      "type": "fixed",
      "knowledge": {
        "id": "k_fever",
        "title": "小儿发热应对",
        "speaker": "guide",
        "text": "3个月以下婴儿发热需立即就医。3个月以上，精神好可先物理降温；超过38.5℃可遵医嘱使用退烧药。切忌捂汗！",
        "bilibiliId": "BV1sN411J7oE"
      },
      "options": [
        {
          "text": "立即就医遵医嘱",
          "cost": 1200,
          "changes": {  "mental": -5, "babyGrowth": 8 },
          "months": 0,
          "outcome": "在急诊室折腾了一夜，抽血化验确诊是病毒性感染。虽然大人累得虚脱，但看着宝宝退烧安稳睡去，悬着的心终于放下了。"
        },
        {
          "text": "自行用药观察",
          "cost": 300,
          "changes": {"mental": -10, "babyGrowth": -2 },
          "months": 0,
          "outcome": "你给宝宝喂了退烧药。这一夜你几乎每隔十分钟就量一次体温，焦虑得想撞墙，好在天亮时烧终于退了，但你发誓下次一定去医院。"
        }
      ]
    },
    {
      "id": "partner_conflict",
      "title": "谁说了算？",
      "bgImage": "/duihuabeijing.png",
      "dialogue": [
        { "speaker": "hero", "text": "专家说了，哭的时候不能马上抱，要培养他的自主入睡能力！" },
        { "speaker": "husband", "text": "你那什么专家？孩子嗓子都哭哑了！你心怎么这么狠？你不抱我抱！" },
        { "speaker": "hero", "text": "你总是这样拆台，这孩子以后还怎么管？" }
      ],
      "type": "choice",
      "options": [
        {
          "text": "参加夫妻沟通课程",
          "cost": 1800,
          "changes": {  "marriage": 12, "mental": 7 },
          "months": 1,
          "outcome": "在咨询师的引导下，你们学会了“非暴力沟通”。丈夫开始理解你的良苦用心，你们约定了统一的育儿红线。"
        },
        {
          "text": "各自坚持冷战",
          "cost": 0,
          "changes": { "marriage": -15, "mental": -10, "health": -6 },
          "months": 0,
          "outcome": "谁也不服谁，家里弥漫着低气压。你独自带娃睡觉，丈夫搬去了书房。这种冷暴力的环境让宝宝也变得焦躁不安。"
        }
      ]
    }
  ]
};