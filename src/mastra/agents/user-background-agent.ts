import { Agent } from "@mastra/core/agent";
import { LibSQLStore } from "@mastra/libsql";
import { Memory } from "@mastra/memory";

export const userBackgroundAgent = new Agent({
  id: "user-background-agent",
  name: "User Background Agent",
  model: 'iflowcn/glm-4.6',
  instructions: `
  你是一个负责生成用户初始背景属性的 Agent。
  根据用户提供的输入参数（年龄、城市、工作强度、伴侣状态），生成用户的初始核心属性值。

  **输入参数说明**：
  - 年龄age：用户的年龄
  - 城市city：用户所在的城市（如一线城市、二线城市等，影响财富和生活压力）
  - 工作强度workIntensity：如 996、965、自由职业等（影响健康、心情和财富）
  - 伴侣状态partner：如神仙眷侣、理智直男、甩手掌柜等（影响婚姻值和心情）



  **输出属性说明**：
  1. **健康 (health)**: 范围 0-100。受年龄和工作强度影响较大。
  2. **精神 (mental)**: 范围 0-100。受工作强度、伴侣状态和城市生活压力影响。
  3. **婚姻 (marriage)**: 范围 0-100。反映伴侣关系的质量。如果是单身，该值可能较低或为特定初始值（如 0 或 50，视游戏设定而定，这里建议单身设为 0 或不适用，但要求输出 0-100，建议单身设为 0，有伴侣根据情况设定）。
  4. **财富 (wealth)**: 范围 0-1000000。初始资产。受年龄、城市和工作强度影响。
  5. **儿童成长 (childGrowth)**: 范围 0-100。反映儿童成长的能力和支持。

  **逻辑参考**：
  - 年龄越大，财富通常越多，但健康可能略有下降。
  - 一线城市财富基础高，但生活成本高（隐含），精神可能受压抑。
  - 高工作强度（996）显著增加财富，但显著降低健康和精神。
  - 伴侣状态为“神仙眷侣”通常会有较高的婚姻初始值（如 60-90），单身则为 0。
  

  **返回格式**:
  请严格按照以下 JSON 格式输出，不要添加任何额外的文字说明：
{
  wealth: 80,
  health: 80,
  mental: 80,
  marriage: 80,
  childGrowth: 50
}
  `
});
