module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/module [external] (module, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("module", () => require("module"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/stream/web [external] (stream/web, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream/web", () => require("stream/web"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/mastra/tools/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "weatherTool",
    ()=>weatherTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$N3PAHTKU$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mastra/core/dist/chunk-N3PAHTKU.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
;
const WeatherToolResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    temperature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    feelsLike: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    humidity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    windSpeed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    windGust: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    conditions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const weatherTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$N3PAHTKU$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTool"])({
    id: "get-weather",
    description: "Get current weather for a location",
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().describe("City name")
    }),
    outputSchema: WeatherToolResultSchema,
    execute: async (inputData)=>{
        return await getWeather(inputData.location);
    }
});
const getWeather = async (location)=>{
    const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1`;
    const geocodingResponse = await fetch(geocodingUrl);
    const geocodingData = await geocodingResponse.json();
    if (!geocodingData.results?.[0]) {
        throw new Error(`Location '${location}' not found`);
    }
    const { latitude, longitude, name } = geocodingData.results[0];
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_gusts_10m,weather_code`;
    const response = await fetch(weatherUrl);
    const data = await response.json();
    return {
        temperature: data.current.temperature_2m,
        feelsLike: data.current.apparent_temperature,
        humidity: data.current.relative_humidity_2m,
        windSpeed: data.current.wind_speed_10m,
        windGust: data.current.wind_gusts_10m,
        conditions: getWeatherCondition(data.current.weather_code),
        location: name
    };
};
function getWeatherCondition(code) {
    const conditions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Foggy",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        56: "Light freezing drizzle",
        57: "Dense freezing drizzle",
        61: "Slight rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Light freezing rain",
        67: "Heavy freezing rain",
        71: "Slight snow fall",
        73: "Moderate snow fall",
        75: "Heavy snow fall",
        77: "Snow grains",
        80: "Slight rain showers",
        81: "Moderate rain showers",
        82: "Violent rain showers",
        85: "Slight snow showers",
        86: "Heavy snow showers",
        95: "Thunderstorm",
        96: "Thunderstorm with slight hail",
        99: "Thunderstorm with heavy hail"
    };
    return conditions[code] || "Unknown";
}
}),
"[project]/src/mastra/agents/story-agent.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "StoryAgentState",
    ()=>StoryAgentState,
    "storyAgent",
    ()=>storyAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$5A5RM7PH$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mastra/core/dist/chunk-5A5RM7PH.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mastra/libsql/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$memory$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@mastra/memory/dist/index.js [app-route] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const StoryAgentState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    genre: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("fantasy"),
    tone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("whimsical")
});
const storyAgent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$5A5RM7PH$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Agent"]({
    id: "story-agent",
    name: "Story Agent",
    model: 'iflowcn/glm-4.6',
    instructions: `
  你是一个现实约束型剧情生成 Agent，负责在一款关于生育与养育真相的文字冒险游戏中生成剧情事件。
  **核心职责**：
  根据用户的人物背景、核心属性值、当前所处的阶段以及当前阶段会面对的事件，生成符合游戏设定的剧情事件。
  **执行步骤**：
  1.**获取用户人物背景**:从 localstorage 中获取人物背景("user_background")。
  2.**获取用户当前状态**:从 localstorage 中获取当前状态("user_state")。
  3.**获取用户已经发生的事件**:从 localstorage 中获取已经发生的事件("user_events")。
  4.**获取根据当前阶段会面对的事件**：
  5.**生成剧情**:根据用户的背景和当前属性状态，从当前阶段可能面对的事件中选择一个，生成具有一定挑战性但不过于困难的剧情。如果某项属性过低，可以生成相关的剧情。

  **内容要求**：
  1.**剧情描述**：剧情符合当前阶段和用户状态，事件需要真实、有教育意义，并且能够引起玩家的情感共鸣。事件要真实反映生育养育过程中可能遇到的各种情况。

  2.**选项设计规则**：每个事件必须提供2个不同的选择，所有选项都是现实中常见反应，每个选项都有代价。

  3.**核心属性变化**：
  - **数值约束**：除了财富以外的数值的范围是 0～100，财富最小值是 0，没有最大值。数值的变化是由剧情的发生而导致的，应该在合理的范围内。
  - 示例：对于第一次孕前检查事件，选择公立三甲医院：财富-500，身体状况+5，精神状况-3；选择私立高端医院：财富-2000，身体状况+8，精神状况+5。
  4.**语言风格**：
    - 克制、具体、不过度抒情
    - 多用细节，少用判断
    - 不总结、不升华、不说教
  **注意事项**：
    - 每个事件必须提供2个不同的选择，每个选择都应该有明确的影响方向
    - 属性变化范围：-15 到 15 之间，累计影响要合理
    - 事件要真实反映生育养育过程中可能遇到的各种情况
    - 要体现社会的真实困境，不要美化或过度美化现实
  **返回格式**:
  请严格按照以下 JSON 格式输出，不要添加任何额外的文字说明：

{
  "title": "事件标题（简洁有力，10字以内）",
  "description": "事件详细描述（50-100字，描述具体情境）",
  "choices": [
    {
      "text": "选项1的具体内容（20-30字）",
      "effects": {
        "wealth": 数字,
        "mentalHealth": 数字,
        "physicalHealth": 数字,
        "babyHealth": 数字,
      }
    }
  ]
}
`,
    memory: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$memory$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Memory"]({
        storage: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LibSQLStore"]({
            id: "story-agent-memory",
            url: "file::memory:"
        })
    })
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/mastra/agents/user-background-agent.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userBackgroundAgent",
    ()=>userBackgroundAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$5A5RM7PH$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mastra/core/dist/chunk-5A5RM7PH.js [app-route] (ecmascript)");
;
const userBackgroundAgent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$5A5RM7PH$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Agent"]({
    id: "user-background-agent",
    name: "User Background Agent",
    model: 'iflowcn/glm-4.6',
    instructions: `
  你是一个负责生成用户初始背景属性的 Agent。
  根据用户提供的输入参数（年龄、城市、工作强度、伴侣状态），生成用户的初始核心属性值。

  **输入参数说明**：
  - 年龄：用户的年龄
  - 城市：用户所在的城市（如一线城市、二线城市等，影响财富和生活压力）
  - 工作强度：如 996、965、自由职业等（影响健康、心情和财富）
  - 伴侣状态：如单身、恋爱中、已婚等（影响婚姻值和心情）

  **输出属性说明**：
  1. **健康 (health)**: 范围 0-100。受年龄和工作强度影响较大。
  2. **心情 (mood)**: 范围 0-100。受工作强度、伴侣状态和城市生活压力影响。
  3. **婚姻 (marriage)**: 范围 0-100。反映伴侣关系的质量。如果是单身，该值可能较低或为特定初始值（如 0 或 50，视游戏设定而定，这里建议单身设为 0 或不适用，但要求输出 0-100，建议单身设为 0，有伴侣根据情况设定）。
  4. **财富 (wealth)**: 初始资产。受年龄、城市和工作强度影响。无上限，最小为 0。

  **逻辑参考**：
  - 年龄越大，财富通常越多，但健康可能略有下降。
  - 一线城市财富基础高，但生活成本高（隐含），心情可能受压抑。
  - 高工作强度（996）显著增加财富，但显著降低健康和心情。
  - 伴侣状态为“已婚”或“恋爱”通常会有较高的婚姻初始值（如 60-90），单身则为 0。

  **返回格式**:
  请严格按照以下 JSON 格式输出，不要添加任何额外的文字说明：
  {
    "health": 80,
    "mood": 75,
    "marriage": 60,
    "wealth": 50000
  }
  `
});
}),
"[project]/src/mastra/agents/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "AgentState",
    ()=>AgentState,
    "weatherAgent",
    ()=>weatherAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$5A5RM7PH$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mastra/core/dist/chunk-5A5RM7PH.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$tools$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mastra/tools/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mastra/libsql/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$memory$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@mastra/memory/dist/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$story$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mastra/agents/story-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$user$2d$background$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mastra/agents/user-background-agent.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$story$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$story$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const AgentState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    proverbs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).default([])
});
const weatherAgent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$5A5RM7PH$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Agent"]({
    id: "weather-agent",
    name: "Weather Agent",
    tools: {
        weatherTool: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$tools$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["weatherTool"]
    },
    model: 'iflowcn/glm-4.6',
    instructions: "You are a helpful assistant.",
    memory: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$memory$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Memory"]({
        storage: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LibSQLStore"]({
            id: "weather-agent-memory",
            url: "file::memory:"
        }),
        options: {
            workingMemory: {
                enabled: true,
                schema: AgentState
            }
        }
    })
});
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/mastra/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "mastra",
    ()=>mastra
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$52NRCLCF$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mastra/core/dist/chunk-52NRCLCF.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mastra/libsql/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/mastra/agents/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$story$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mastra/agents/story-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$user$2d$background$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mastra/agents/user-background-agent.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$NRUZYMHE$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mastra/core/dist/chunk-NRUZYMHE.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$story$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$story$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const LOG_LEVEL = process.env.LOG_LEVEL || "info";
const mastra = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$52NRCLCF$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Mastra"]({
    agents: {
        weatherAgent: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["weatherAgent"],
        storyAgent: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$story$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storyAgent"],
        userBackgroundAgent: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$agents$2f$user$2d$background$2d$agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["userBackgroundAgent"]
    },
    storage: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$libsql$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LibSQLStore"]({
        id: "mastra-storage",
        url: ":memory:"
    }),
    logger: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$NRUZYMHE$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConsoleLogger"]({
        level: LOG_LEVEL
    })
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/api/copilotkit/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$copilotkit$2f$runtime__$5b$external$5d$__$2840$copilotkit$2f$runtime$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$copilotkit$2f$runtime$29$__ = __turbopack_context__.i("[externals]/@copilotkit/runtime [external] (@copilotkit/runtime, esm_import, [project]/node_modules/@copilotkit/runtime)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$mastra$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ag-ui/mastra/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mastra/index.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$copilotkit$2f$runtime__$5b$external$5d$__$2840$copilotkit$2f$runtime$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$copilotkit$2f$runtime$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$copilotkit$2f$runtime__$5b$external$5d$__$2840$copilotkit$2f$runtime$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$copilotkit$2f$runtime$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// 1. You can use any service adapter here for multi-agent support.
const serviceAdapter = new __TURBOPACK__imported__module__$5b$externals$5d2f40$copilotkit$2f$runtime__$5b$external$5d$__$2840$copilotkit$2f$runtime$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$copilotkit$2f$runtime$29$__["ExperimentalEmptyAdapter"]();
const POST = async (req)=>{
    // 3. Create the CopilotRuntime instance and utilize the Mastra AG-UI
    //    integration to get the remote agents. Cache this for performance.
    const runtime = new __TURBOPACK__imported__module__$5b$externals$5d2f40$copilotkit$2f$runtime__$5b$external$5d$__$2840$copilotkit$2f$runtime$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$copilotkit$2f$runtime$29$__["CopilotRuntime"]({
        // @ts-expect-error - ignore for now, typing error
        agents: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$mastra$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MastraAgent"].getLocalAgents({
            mastra: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mastra$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mastra"]
        })
    });
    const { handleRequest } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$copilotkit$2f$runtime__$5b$external$5d$__$2840$copilotkit$2f$runtime$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$copilotkit$2f$runtime$29$__["copilotRuntimeNextJSAppRouterEndpoint"])({
        runtime,
        serviceAdapter,
        endpoint: "/api/copilotkit"
    });
    return handleRequest(req);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__544247d7._.js.map