module.exports = [
"[externals]/@copilotkit/runtime [external] (@copilotkit/runtime, esm_import, [project]/node_modules/@copilotkit/runtime)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@copilotkit/runtime-43a98c732c372397");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/@ag-ui/core/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AGUIConnectNotImplementedError",
    ()=>AGUIConnectNotImplementedError,
    "AGUIError",
    ()=>AGUIError,
    "ActivityDeltaEventSchema",
    ()=>ActivityDeltaEventSchema,
    "ActivityMessageSchema",
    ()=>ActivityMessageSchema,
    "ActivitySnapshotEventSchema",
    ()=>ActivitySnapshotEventSchema,
    "AssistantMessageSchema",
    ()=>AssistantMessageSchema,
    "BaseEventSchema",
    ()=>BaseEventSchema,
    "BaseMessageSchema",
    ()=>BaseMessageSchema,
    "BinaryInputContentSchema",
    ()=>BinaryInputContentSchema,
    "ContextSchema",
    ()=>ContextSchema,
    "CustomEventSchema",
    ()=>CustomEventSchema,
    "DeveloperMessageSchema",
    ()=>DeveloperMessageSchema,
    "EventSchemas",
    ()=>EventSchemas,
    "EventType",
    ()=>EventType,
    "FunctionCallSchema",
    ()=>FunctionCallSchema,
    "InputContentSchema",
    ()=>InputContentSchema,
    "MessageSchema",
    ()=>MessageSchema,
    "MessagesSnapshotEventSchema",
    ()=>MessagesSnapshotEventSchema,
    "RawEventSchema",
    ()=>RawEventSchema,
    "RoleSchema",
    ()=>RoleSchema,
    "RunAgentInputSchema",
    ()=>RunAgentInputSchema,
    "RunErrorEventSchema",
    ()=>RunErrorEventSchema,
    "RunFinishedEventSchema",
    ()=>RunFinishedEventSchema,
    "RunStartedEventSchema",
    ()=>RunStartedEventSchema,
    "StateDeltaEventSchema",
    ()=>StateDeltaEventSchema,
    "StateSchema",
    ()=>StateSchema,
    "StateSnapshotEventSchema",
    ()=>StateSnapshotEventSchema,
    "StepFinishedEventSchema",
    ()=>StepFinishedEventSchema,
    "StepStartedEventSchema",
    ()=>StepStartedEventSchema,
    "SystemMessageSchema",
    ()=>SystemMessageSchema,
    "TextInputContentSchema",
    ()=>TextInputContentSchema,
    "TextMessageChunkEventSchema",
    ()=>TextMessageChunkEventSchema,
    "TextMessageContentEventSchema",
    ()=>TextMessageContentEventSchema,
    "TextMessageEndEventSchema",
    ()=>TextMessageEndEventSchema,
    "TextMessageStartEventSchema",
    ()=>TextMessageStartEventSchema,
    "ThinkingEndEventSchema",
    ()=>ThinkingEndEventSchema,
    "ThinkingStartEventSchema",
    ()=>ThinkingStartEventSchema,
    "ThinkingTextMessageContentEventSchema",
    ()=>ThinkingTextMessageContentEventSchema,
    "ThinkingTextMessageEndEventSchema",
    ()=>ThinkingTextMessageEndEventSchema,
    "ThinkingTextMessageStartEventSchema",
    ()=>ThinkingTextMessageStartEventSchema,
    "ToolCallArgsEventSchema",
    ()=>ToolCallArgsEventSchema,
    "ToolCallChunkEventSchema",
    ()=>ToolCallChunkEventSchema,
    "ToolCallEndEventSchema",
    ()=>ToolCallEndEventSchema,
    "ToolCallResultEventSchema",
    ()=>ToolCallResultEventSchema,
    "ToolCallSchema",
    ()=>ToolCallSchema,
    "ToolCallStartEventSchema",
    ()=>ToolCallStartEventSchema,
    "ToolMessageSchema",
    ()=>ToolMessageSchema,
    "ToolSchema",
    ()=>ToolSchema,
    "UserMessageSchema",
    ()=>UserMessageSchema
]);
// src/types.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
var FunctionCallSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    arguments: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
var ToolCallSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("function"),
    function: FunctionCallSchema
});
var BaseMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
var TextInputContentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("text"),
    text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
var BinaryInputContentObjectSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("binary"),
    mimeType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    filename: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
var ensureBinaryPayload = (value, ctx)=>{
    if (!value.id && !value.url && !value.data) {
        ctx.addIssue({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
            message: "BinaryInputContent requires at least one of id, url, or data.",
            path: [
                "id"
            ]
        });
    }
};
var BinaryInputContentSchema = BinaryInputContentObjectSchema.superRefine((value, ctx)=>{
    ensureBinaryPayload(value, ctx);
});
var InputContentBaseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
    TextInputContentSchema,
    BinaryInputContentObjectSchema
]);
var InputContentSchema = InputContentBaseSchema.superRefine((value, ctx)=>{
    if (value.type === "binary") {
        ensureBinaryPayload(value, ctx);
    }
});
var DeveloperMessageSchema = BaseMessageSchema.extend({
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("developer"),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
var SystemMessageSchema = BaseMessageSchema.extend({
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("system"),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
var AssistantMessageSchema = BaseMessageSchema.extend({
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("assistant"),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    toolCalls: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ToolCallSchema).optional()
});
var UserMessageSchema = BaseMessageSchema.extend({
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("user"),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(InputContentSchema)
    ])
});
var ToolMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool"),
    toolCallId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
var ActivityMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("activity"),
    activityType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any())
});
var MessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("role", [
    DeveloperMessageSchema,
    SystemMessageSchema,
    AssistantMessageSchema,
    UserMessageSchema,
    ToolMessageSchema,
    ActivityMessageSchema
]);
var RoleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("developer"),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("system"),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("assistant"),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("user"),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool"),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("activity")
]);
var ContextSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
var ToolSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    parameters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
});
var RunAgentInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    threadId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    runId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    parentRunId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
    messages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(MessageSchema),
    tools: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ToolSchema),
    context: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(ContextSchema),
    forwardedProps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
});
var StateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any();
var AGUIError = class extends Error {
    constructor(message){
        super(message);
    }
};
var AGUIConnectNotImplementedError = class extends AGUIError {
    constructor(){
        super("Connect not implemented. This method is not supported by the current agent.");
    }
};
;
var TextMessageRoleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("developer"),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("system"),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("assistant"),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("user")
]);
var EventType = /* @__PURE__ */ ((EventType2)=>{
    EventType2["TEXT_MESSAGE_START"] = "TEXT_MESSAGE_START";
    EventType2["TEXT_MESSAGE_CONTENT"] = "TEXT_MESSAGE_CONTENT";
    EventType2["TEXT_MESSAGE_END"] = "TEXT_MESSAGE_END";
    EventType2["TEXT_MESSAGE_CHUNK"] = "TEXT_MESSAGE_CHUNK";
    EventType2["THINKING_TEXT_MESSAGE_START"] = "THINKING_TEXT_MESSAGE_START";
    EventType2["THINKING_TEXT_MESSAGE_CONTENT"] = "THINKING_TEXT_MESSAGE_CONTENT";
    EventType2["THINKING_TEXT_MESSAGE_END"] = "THINKING_TEXT_MESSAGE_END";
    EventType2["TOOL_CALL_START"] = "TOOL_CALL_START";
    EventType2["TOOL_CALL_ARGS"] = "TOOL_CALL_ARGS";
    EventType2["TOOL_CALL_END"] = "TOOL_CALL_END";
    EventType2["TOOL_CALL_CHUNK"] = "TOOL_CALL_CHUNK";
    EventType2["TOOL_CALL_RESULT"] = "TOOL_CALL_RESULT";
    EventType2["THINKING_START"] = "THINKING_START";
    EventType2["THINKING_END"] = "THINKING_END";
    EventType2["STATE_SNAPSHOT"] = "STATE_SNAPSHOT";
    EventType2["STATE_DELTA"] = "STATE_DELTA";
    EventType2["MESSAGES_SNAPSHOT"] = "MESSAGES_SNAPSHOT";
    EventType2["ACTIVITY_SNAPSHOT"] = "ACTIVITY_SNAPSHOT";
    EventType2["ACTIVITY_DELTA"] = "ACTIVITY_DELTA";
    EventType2["RAW"] = "RAW";
    EventType2["CUSTOM"] = "CUSTOM";
    EventType2["RUN_STARTED"] = "RUN_STARTED";
    EventType2["RUN_FINISHED"] = "RUN_FINISHED";
    EventType2["RUN_ERROR"] = "RUN_ERROR";
    EventType2["STEP_STARTED"] = "STEP_STARTED";
    EventType2["STEP_FINISHED"] = "STEP_FINISHED";
    return EventType2;
})(EventType || {});
var BaseEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].nativeEnum(EventType),
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    rawEvent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional()
});
var TextMessageStartEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("TEXT_MESSAGE_START" /* TEXT_MESSAGE_START */ ),
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    role: TextMessageRoleSchema.default("assistant")
});
var TextMessageContentEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("TEXT_MESSAGE_CONTENT" /* TEXT_MESSAGE_CONTENT */ ),
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    delta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((s)=>s.length > 0, "Delta must not be an empty string")
});
var TextMessageEndEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("TEXT_MESSAGE_END" /* TEXT_MESSAGE_END */ ),
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
var TextMessageChunkEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("TEXT_MESSAGE_CHUNK" /* TEXT_MESSAGE_CHUNK */ ),
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    role: TextMessageRoleSchema.optional(),
    delta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
var ThinkingTextMessageStartEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("THINKING_TEXT_MESSAGE_START" /* THINKING_TEXT_MESSAGE_START */ )
});
var ThinkingTextMessageContentEventSchema = TextMessageContentEventSchema.omit({
    messageId: true,
    type: true
}).extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("THINKING_TEXT_MESSAGE_CONTENT" /* THINKING_TEXT_MESSAGE_CONTENT */ )
});
var ThinkingTextMessageEndEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("THINKING_TEXT_MESSAGE_END" /* THINKING_TEXT_MESSAGE_END */ )
});
var ToolCallStartEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("TOOL_CALL_START" /* TOOL_CALL_START */ ),
    toolCallId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    toolCallName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    parentMessageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
var ToolCallArgsEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("TOOL_CALL_ARGS" /* TOOL_CALL_ARGS */ ),
    toolCallId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    delta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
var ToolCallEndEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("TOOL_CALL_END" /* TOOL_CALL_END */ ),
    toolCallId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
var ToolCallResultEventSchema = BaseEventSchema.extend({
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("TOOL_CALL_RESULT" /* TOOL_CALL_RESULT */ ),
    toolCallId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("tool").optional()
});
var ToolCallChunkEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("TOOL_CALL_CHUNK" /* TOOL_CALL_CHUNK */ ),
    toolCallId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    toolCallName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    parentMessageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    delta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
var ThinkingStartEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("THINKING_START" /* THINKING_START */ ),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
var ThinkingEndEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("THINKING_END" /* THINKING_END */ )
});
var StateSnapshotEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("STATE_SNAPSHOT" /* STATE_SNAPSHOT */ ),
    snapshot: StateSchema
});
var StateDeltaEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("STATE_DELTA" /* STATE_DELTA */ ),
    delta: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any())
});
var MessagesSnapshotEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("MESSAGES_SNAPSHOT" /* MESSAGES_SNAPSHOT */ ),
    messages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(MessageSchema)
});
var ActivitySnapshotEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("ACTIVITY_SNAPSHOT" /* ACTIVITY_SNAPSHOT */ ),
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    activityType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()),
    replace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().default(true)
});
var ActivityDeltaEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("ACTIVITY_DELTA" /* ACTIVITY_DELTA */ ),
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    activityType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    patch: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any())
});
var RawEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("RAW" /* RAW */ ),
    event: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
var CustomEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("CUSTOM" /* CUSTOM */ ),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
});
var RunStartedEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("RUN_STARTED" /* RUN_STARTED */ ),
    threadId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    runId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    parentRunId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    input: RunAgentInputSchema.optional()
});
var RunFinishedEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("RUN_FINISHED" /* RUN_FINISHED */ ),
    threadId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    runId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional()
});
var RunErrorEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("RUN_ERROR" /* RUN_ERROR */ ),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
var StepStartedEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("STEP_STARTED" /* STEP_STARTED */ ),
    stepName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
var StepFinishedEventSchema = BaseEventSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("STEP_FINISHED" /* STEP_FINISHED */ ),
    stepName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
var EventSchemas = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
    TextMessageStartEventSchema,
    TextMessageContentEventSchema,
    TextMessageEndEventSchema,
    TextMessageChunkEventSchema,
    ThinkingStartEventSchema,
    ThinkingEndEventSchema,
    ThinkingTextMessageStartEventSchema,
    ThinkingTextMessageContentEventSchema,
    ThinkingTextMessageEndEventSchema,
    ToolCallStartEventSchema,
    ToolCallArgsEventSchema,
    ToolCallEndEventSchema,
    ToolCallChunkEventSchema,
    ToolCallResultEventSchema,
    StateSnapshotEventSchema,
    StateDeltaEventSchema,
    MessagesSnapshotEventSchema,
    ActivitySnapshotEventSchema,
    ActivityDeltaEventSchema,
    RawEventSchema,
    CustomEventSchema,
    RunStartedEventSchema,
    RunFinishedEventSchema,
    RunErrorEventSchema,
    StepStartedEventSchema,
    StepFinishedEventSchema
]);
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/uuid/dist/esm/native.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"]
};
}),
"[project]/node_modules/uuid/dist/esm/rng.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256);
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomFillSync"])(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/node_modules/uuid/dist/esm/regex.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/node_modules/uuid/dist/esm/validate.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm/regex.js [app-route] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$regex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/node_modules/uuid/dist/esm/stringify.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm/validate.js [app-route] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/node_modules/uuid/dist/esm/v4.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm/native.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm/rng.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm/stringify.js [app-route] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$native$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$rng$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$stringify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/node_modules/uuid/dist/esm/v4.js [app-route] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm/v4.js [app-route] (ecmascript)");
}),
"[project]/node_modules/fast-json-patch/module/helpers.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PatchError",
    ()=>PatchError,
    "_deepClone",
    ()=>_deepClone,
    "_getPathRecursive",
    ()=>_getPathRecursive,
    "_objectKeys",
    ()=>_objectKeys,
    "escapePathComponent",
    ()=>escapePathComponent,
    "getPath",
    ()=>getPath,
    "hasOwnProperty",
    ()=>hasOwnProperty,
    "hasUndefined",
    ()=>hasUndefined,
    "isInteger",
    ()=>isInteger,
    "unescapePathComponent",
    ()=>unescapePathComponent
]);
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2022 Joachim Wester
 * MIT licensed
 */ var __extends = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(obj, key) {
    return _hasOwnProperty.call(obj, key);
}
function _objectKeys(obj) {
    if (Array.isArray(obj)) {
        var keys_1 = new Array(obj.length);
        for(var k = 0; k < keys_1.length; k++){
            keys_1[k] = "" + k;
        }
        return keys_1;
    }
    if (Object.keys) {
        return Object.keys(obj);
    }
    var keys = [];
    for(var i in obj){
        if (hasOwnProperty(obj, i)) {
            keys.push(i);
        }
    }
    return keys;
}
;
function _deepClone(obj) {
    switch(typeof obj){
        case "object":
            return JSON.parse(JSON.stringify(obj)); //Faster than ES5 clone - http://jsperf.com/deep-cloning-of-objects/5
        case "undefined":
            return null; //this is how JSON.stringify behaves for array items
        default:
            return obj; //no need to clone primitives
    }
}
function isInteger(str) {
    var i = 0;
    var len = str.length;
    var charCode;
    while(i < len){
        charCode = str.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            i++;
            continue;
        }
        return false;
    }
    return true;
}
function escapePathComponent(path) {
    if (path.indexOf('/') === -1 && path.indexOf('~') === -1) return path;
    return path.replace(/~/g, '~0').replace(/\//g, '~1');
}
function unescapePathComponent(path) {
    return path.replace(/~1/g, '/').replace(/~0/g, '~');
}
function _getPathRecursive(root, obj) {
    var found;
    for(var key in root){
        if (hasOwnProperty(root, key)) {
            if (root[key] === obj) {
                return escapePathComponent(key) + '/';
            } else if (typeof root[key] === 'object') {
                found = _getPathRecursive(root[key], obj);
                if (found != '') {
                    return escapePathComponent(key) + '/' + found;
                }
            }
        }
    }
    return '';
}
function getPath(root, obj) {
    if (root === obj) {
        return '/';
    }
    var path = _getPathRecursive(root, obj);
    if (path === '') {
        throw new Error("Object not found in root");
    }
    return "/" + path;
}
function hasUndefined(obj) {
    if (obj === undefined) {
        return true;
    }
    if (obj) {
        if (Array.isArray(obj)) {
            for(var i_1 = 0, len = obj.length; i_1 < len; i_1++){
                if (hasUndefined(obj[i_1])) {
                    return true;
                }
            }
        } else if (typeof obj === "object") {
            var objKeys = _objectKeys(obj);
            var objKeysLength = objKeys.length;
            for(var i = 0; i < objKeysLength; i++){
                if (hasUndefined(obj[objKeys[i]])) {
                    return true;
                }
            }
        }
    }
    return false;
}
function patchErrorMessageFormatter(message, args) {
    var messageParts = [
        message
    ];
    for(var key in args){
        var value = typeof args[key] === 'object' ? JSON.stringify(args[key], null, 2) : args[key]; // pretty print
        if (typeof value !== 'undefined') {
            messageParts.push(key + ": " + value);
        }
    }
    return messageParts.join('\n');
}
var PatchError = function(_super) {
    __extends(PatchError, _super);
    function PatchError(message, name, index, operation, tree) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, patchErrorMessageFormatter(message, {
            name: name,
            index: index,
            operation: operation,
            tree: tree
        })) || this;
        _this.name = name;
        _this.index = index;
        _this.operation = operation;
        _this.tree = tree;
        Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain, see https://stackoverflow.com/a/48342359
        _this.message = patchErrorMessageFormatter(message, {
            name: name,
            index: index,
            operation: operation,
            tree: tree
        });
        return _this;
    }
    return PatchError;
}(Error);
;
}),
"[project]/node_modules/fast-json-patch/module/core.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonPatchError",
    ()=>JsonPatchError,
    "_areEquals",
    ()=>_areEquals,
    "applyOperation",
    ()=>applyOperation,
    "applyPatch",
    ()=>applyPatch,
    "applyReducer",
    ()=>applyReducer,
    "deepClone",
    ()=>deepClone,
    "getValueByPointer",
    ()=>getValueByPointer,
    "validate",
    ()=>validate,
    "validator",
    ()=>validator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fast-json-patch/module/helpers.mjs [app-route] (ecmascript)");
;
var JsonPatchError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PatchError"];
var deepClone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"];
/* We use a Javascript hash to store each
 function. Each hash entry (property) uses
 the operation identifiers specified in rfc6902.
 In this way, we can map each patch operation
 to its dedicated function in efficient way.
 */ /* The operations applicable to an object */ var objOps = {
    add: function(obj, key, document) {
        obj[key] = this.value;
        return {
            newDocument: document
        };
    },
    remove: function(obj, key, document) {
        var removed = obj[key];
        delete obj[key];
        return {
            newDocument: document,
            removed: removed
        };
    },
    replace: function(obj, key, document) {
        var removed = obj[key];
        obj[key] = this.value;
        return {
            newDocument: document,
            removed: removed
        };
    },
    move: function(obj, key, document) {
        /* in case move target overwrites an existing value,
        return the removed value, this can be taxing performance-wise,
        and is potentially unneeded */ var removed = getValueByPointer(document, this.path);
        if (removed) {
            removed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(removed);
        }
        var originalValue = applyOperation(document, {
            op: "remove",
            path: this.from
        }).removed;
        applyOperation(document, {
            op: "add",
            path: this.path,
            value: originalValue
        });
        return {
            newDocument: document,
            removed: removed
        };
    },
    copy: function(obj, key, document) {
        var valueToCopy = getValueByPointer(document, this.from);
        // enforce copy by value so further operations don't affect source (see issue #177)
        applyOperation(document, {
            op: "add",
            path: this.path,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(valueToCopy)
        });
        return {
            newDocument: document
        };
    },
    test: function(obj, key, document) {
        return {
            newDocument: document,
            test: _areEquals(obj[key], this.value)
        };
    },
    _get: function(obj, key, document) {
        this.value = obj[key];
        return {
            newDocument: document
        };
    }
};
/* The operations applicable to an array. Many are the same as for the object */ var arrOps = {
    add: function(arr, i, document) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteger"])(i)) {
            arr.splice(i, 0, this.value);
        } else {
            arr[i] = this.value;
        }
        // this may be needed when using '-' in an array
        return {
            newDocument: document,
            index: i
        };
    },
    remove: function(arr, i, document) {
        var removedList = arr.splice(i, 1);
        return {
            newDocument: document,
            removed: removedList[0]
        };
    },
    replace: function(arr, i, document) {
        var removed = arr[i];
        arr[i] = this.value;
        return {
            newDocument: document,
            removed: removed
        };
    },
    move: objOps.move,
    copy: objOps.copy,
    test: objOps.test,
    _get: objOps._get
};
function getValueByPointer(document, pointer) {
    if (pointer == '') {
        return document;
    }
    var getOriginalDestination = {
        op: "_get",
        path: pointer
    };
    applyOperation(document, getOriginalDestination);
    return getOriginalDestination.value;
}
function applyOperation(document, operation, validateOperation, mutateDocument, banPrototypeModifications, index) {
    if (validateOperation === void 0) {
        validateOperation = false;
    }
    if (mutateDocument === void 0) {
        mutateDocument = true;
    }
    if (banPrototypeModifications === void 0) {
        banPrototypeModifications = true;
    }
    if (index === void 0) {
        index = 0;
    }
    if (validateOperation) {
        if (typeof validateOperation == 'function') {
            validateOperation(operation, 0, document, operation.path);
        } else {
            validator(operation, 0);
        }
    }
    /* ROOT OPERATIONS */ if (operation.path === "") {
        var returnValue = {
            newDocument: document
        };
        if (operation.op === 'add') {
            returnValue.newDocument = operation.value;
            return returnValue;
        } else if (operation.op === 'replace') {
            returnValue.newDocument = operation.value;
            returnValue.removed = document; //document we removed
            return returnValue;
        } else if (operation.op === 'move' || operation.op === 'copy') {
            returnValue.newDocument = getValueByPointer(document, operation.from); // get the value by json-pointer in `from` field
            if (operation.op === 'move') {
                returnValue.removed = document;
            }
            return returnValue;
        } else if (operation.op === 'test') {
            returnValue.test = _areEquals(document, operation.value);
            if (returnValue.test === false) {
                throw new JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
            }
            returnValue.newDocument = document;
            return returnValue;
        } else if (operation.op === 'remove') {
            returnValue.removed = document;
            returnValue.newDocument = null;
            return returnValue;
        } else if (operation.op === '_get') {
            operation.value = document;
            return returnValue;
        } else {
            if (validateOperation) {
                throw new JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, document);
            } else {
                return returnValue;
            }
        }
    } else {
        if (!mutateDocument) {
            document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(document);
        }
        var path = operation.path || "";
        var keys = path.split('/');
        var obj = document;
        var t = 1; //skip empty element - http://jsperf.com/to-shift-or-not-to-shift
        var len = keys.length;
        var existingPathFragment = undefined;
        var key = void 0;
        var validateFunction = void 0;
        if (typeof validateOperation == 'function') {
            validateFunction = validateOperation;
        } else {
            validateFunction = validator;
        }
        while(true){
            key = keys[t];
            if (key && key.indexOf('~') != -1) {
                key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unescapePathComponent"])(key);
            }
            if (banPrototypeModifications && (key == '__proto__' || key == 'prototype' && t > 0 && keys[t - 1] == 'constructor')) {
                throw new TypeError('JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README');
            }
            if (validateOperation) {
                if (existingPathFragment === undefined) {
                    if (obj[key] === undefined) {
                        existingPathFragment = keys.slice(0, t).join('/');
                    } else if (t == len - 1) {
                        existingPathFragment = operation.path;
                    }
                    if (existingPathFragment !== undefined) {
                        validateFunction(operation, 0, document, existingPathFragment);
                    }
                }
            }
            t++;
            if (Array.isArray(obj)) {
                if (key === '-') {
                    key = obj.length;
                } else {
                    if (validateOperation && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteger"])(key)) {
                        throw new JsonPatchError("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", index, operation, document);
                    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isInteger"])(key)) {
                        key = ~~key;
                    }
                }
                if (t >= len) {
                    if (validateOperation && operation.op === "add" && key > obj.length) {
                        throw new JsonPatchError("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", index, operation, document);
                    }
                    var returnValue = arrOps[operation.op].call(operation, obj, key, document); // Apply patch
                    if (returnValue.test === false) {
                        throw new JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
                    }
                    return returnValue;
                }
            } else {
                if (t >= len) {
                    var returnValue = objOps[operation.op].call(operation, obj, key, document); // Apply patch
                    if (returnValue.test === false) {
                        throw new JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
                    }
                    return returnValue;
                }
            }
            obj = obj[key];
            // If we have more keys in the path, but the next value isn't a non-null object,
            // throw an OPERATION_PATH_UNRESOLVABLE error instead of iterating again.
            if (validateOperation && t < len && (!obj || typeof obj !== "object")) {
                throw new JsonPatchError('Cannot perform operation at the desired path', 'OPERATION_PATH_UNRESOLVABLE', index, operation, document);
            }
        }
    }
}
function applyPatch(document, patch, validateOperation, mutateDocument, banPrototypeModifications) {
    if (mutateDocument === void 0) {
        mutateDocument = true;
    }
    if (banPrototypeModifications === void 0) {
        banPrototypeModifications = true;
    }
    if (validateOperation) {
        if (!Array.isArray(patch)) {
            throw new JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
        }
    }
    if (!mutateDocument) {
        document = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(document);
    }
    var results = new Array(patch.length);
    for(var i = 0, length_1 = patch.length; i < length_1; i++){
        // we don't need to pass mutateDocument argument because if it was true, we already deep cloned the object, we'll just pass `true`
        results[i] = applyOperation(document, patch[i], validateOperation, true, banPrototypeModifications, i);
        document = results[i].newDocument; // in case root was replaced
    }
    results.newDocument = document;
    return results;
}
function applyReducer(document, operation, index) {
    var operationResult = applyOperation(document, operation);
    if (operationResult.test === false) {
        throw new JsonPatchError("Test operation failed", 'TEST_OPERATION_FAILED', index, operation, document);
    }
    return operationResult.newDocument;
}
function validator(operation, index, document, existingPathFragment) {
    if (typeof operation !== 'object' || operation === null || Array.isArray(operation)) {
        throw new JsonPatchError('Operation is not an object', 'OPERATION_NOT_AN_OBJECT', index, operation, document);
    } else if (!objOps[operation.op]) {
        throw new JsonPatchError('Operation `op` property is not one of operations defined in RFC-6902', 'OPERATION_OP_INVALID', index, operation, document);
    } else if (typeof operation.path !== 'string') {
        throw new JsonPatchError('Operation `path` property is not a string', 'OPERATION_PATH_INVALID', index, operation, document);
    } else if (operation.path.indexOf('/') !== 0 && operation.path.length > 0) {
        // paths that aren't empty string should start with "/"
        throw new JsonPatchError('Operation `path` property must start with "/"', 'OPERATION_PATH_INVALID', index, operation, document);
    } else if ((operation.op === 'move' || operation.op === 'copy') && typeof operation.from !== 'string') {
        throw new JsonPatchError('Operation `from` property is not present (applicable in `move` and `copy` operations)', 'OPERATION_FROM_REQUIRED', index, operation, document);
    } else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && operation.value === undefined) {
        throw new JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_REQUIRED', index, operation, document);
    } else if ((operation.op === 'add' || operation.op === 'replace' || operation.op === 'test') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasUndefined"])(operation.value)) {
        throw new JsonPatchError('Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)', 'OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED', index, operation, document);
    } else if (document) {
        if (operation.op == "add") {
            var pathLen = operation.path.split("/").length;
            var existingPathLen = existingPathFragment.split("/").length;
            if (pathLen !== existingPathLen + 1 && pathLen !== existingPathLen) {
                throw new JsonPatchError('Cannot perform an `add` operation at the desired path', 'OPERATION_PATH_CANNOT_ADD', index, operation, document);
            }
        } else if (operation.op === 'replace' || operation.op === 'remove' || operation.op === '_get') {
            if (operation.path !== existingPathFragment) {
                throw new JsonPatchError('Cannot perform the operation at a path that does not exist', 'OPERATION_PATH_UNRESOLVABLE', index, operation, document);
            }
        } else if (operation.op === 'move' || operation.op === 'copy') {
            var existingValue = {
                op: "_get",
                path: operation.from,
                value: undefined
            };
            var error = validate([
                existingValue
            ], document);
            if (error && error.name === 'OPERATION_PATH_UNRESOLVABLE') {
                throw new JsonPatchError('Cannot perform the operation from a path that does not exist', 'OPERATION_FROM_UNRESOLVABLE', index, operation, document);
            }
        }
    }
}
function validate(sequence, document, externalValidator) {
    try {
        if (!Array.isArray(sequence)) {
            throw new JsonPatchError('Patch sequence must be an array', 'SEQUENCE_NOT_AN_ARRAY');
        }
        if (document) {
            //clone document and sequence so that we can safely try applying operations
            applyPatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(document), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(sequence), externalValidator || true);
        } else {
            externalValidator = externalValidator || validator;
            for(var i = 0; i < sequence.length; i++){
                externalValidator(sequence[i], i, document, undefined);
            }
        }
    } catch (e) {
        if (e instanceof JsonPatchError) {
            return e;
        } else {
            throw e;
        }
    }
}
function _areEquals(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
        if (arrA && arrB) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!_areEquals(a[i], b[i])) return false;
            return true;
        }
        if (arrA != arrB) return false;
        var keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!b.hasOwnProperty(keys[i])) return false;
        for(i = length; i-- !== 0;){
            key = keys[i];
            if (!_areEquals(a[key], b[key])) return false;
        }
        return true;
    }
    return a !== a && b !== b;
}
;
}),
"[project]/node_modules/fast-json-patch/module/duplex.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compare",
    ()=>compare,
    "generate",
    ()=>generate,
    "observe",
    ()=>observe,
    "unobserve",
    ()=>unobserve
]);
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017-2021 Joachim Wester
 * MIT license
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fast-json-patch/module/helpers.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$core$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fast-json-patch/module/core.mjs [app-route] (ecmascript)");
;
;
var beforeDict = new WeakMap();
var Mirror = function() {
    function Mirror(obj) {
        this.observers = new Map();
        this.obj = obj;
    }
    return Mirror;
}();
var ObserverInfo = function() {
    function ObserverInfo(callback, observer) {
        this.callback = callback;
        this.observer = observer;
    }
    return ObserverInfo;
}();
function getMirror(obj) {
    return beforeDict.get(obj);
}
function getObserverFromMirror(mirror, callback) {
    return mirror.observers.get(callback);
}
function removeObserverFromMirror(mirror, observer) {
    mirror.observers.delete(observer.callback);
}
function unobserve(root, observer) {
    observer.unobserve();
}
function observe(obj, callback) {
    var patches = [];
    var observer;
    var mirror = getMirror(obj);
    if (!mirror) {
        mirror = new Mirror(obj);
        beforeDict.set(obj, mirror);
    } else {
        var observerInfo = getObserverFromMirror(mirror, callback);
        observer = observerInfo && observerInfo.observer;
    }
    if (observer) {
        return observer;
    }
    observer = {};
    mirror.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(obj);
    if (callback) {
        observer.callback = callback;
        observer.next = null;
        var dirtyCheck = function() {
            generate(observer);
        };
        var fastCheck = function() {
            clearTimeout(observer.next);
            observer.next = setTimeout(dirtyCheck);
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    observer.patches = patches;
    observer.object = obj;
    observer.unobserve = function() {
        generate(observer);
        clearTimeout(observer.next);
        removeObserverFromMirror(mirror, observer);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    mirror.observers.set(callback, new ObserverInfo(callback, observer));
    return observer;
}
function generate(observer, invertible) {
    if (invertible === void 0) {
        invertible = false;
    }
    var mirror = beforeDict.get(observer.object);
    _generate(mirror.value, observer.object, observer.patches, "", invertible);
    if (observer.patches.length) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$core$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPatch"])(mirror.value, observer.patches);
    }
    var temp = observer.patches;
    if (temp.length > 0) {
        observer.patches = [];
        if (observer.callback) {
            observer.callback(temp);
        }
    }
    return temp;
}
// Dirty check if obj is different from mirror, generate patches and update mirror
function _generate(mirror, obj, patches, path, invertible) {
    if (obj === mirror) {
        return;
    }
    if (typeof obj.toJSON === "function") {
        obj = obj.toJSON();
    }
    var newKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_objectKeys"])(obj);
    var oldKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_objectKeys"])(mirror);
    var changed = false;
    var deleted = false;
    //if ever "move" operation is implemented here, make sure this test runs OK: "should not generate the same patch twice (move)"
    for(var t = oldKeys.length - 1; t >= 0; t--){
        var key = oldKeys[t];
        var oldVal = mirror[key];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasOwnProperty"])(obj, key) && !(obj[key] === undefined && oldVal !== undefined && Array.isArray(obj) === false)) {
            var newVal = obj[key];
            if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null && Array.isArray(oldVal) === Array.isArray(newVal)) {
                _generate(oldVal, newVal, patches, path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key), invertible);
            } else {
                if (oldVal !== newVal) {
                    changed = true;
                    if (invertible) {
                        patches.push({
                            op: "test",
                            path: path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key),
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(oldVal)
                        });
                    }
                    patches.push({
                        op: "replace",
                        path: path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key),
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(newVal)
                    });
                }
            }
        } else if (Array.isArray(mirror) === Array.isArray(obj)) {
            if (invertible) {
                patches.push({
                    op: "test",
                    path: path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key),
                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(oldVal)
                });
            }
            patches.push({
                op: "remove",
                path: path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key)
            });
            deleted = true; // property has been deleted
        } else {
            if (invertible) {
                patches.push({
                    op: "test",
                    path: path,
                    value: mirror
                });
            }
            patches.push({
                op: "replace",
                path: path,
                value: obj
            });
            changed = true;
        }
    }
    if (!deleted && newKeys.length == oldKeys.length) {
        return;
    }
    for(var t = 0; t < newKeys.length; t++){
        var key = newKeys[t];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasOwnProperty"])(mirror, key) && obj[key] !== undefined) {
            patches.push({
                op: "add",
                path: path + "/" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"])(key),
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"])(obj[key])
            });
        }
    }
}
function compare(tree1, tree2, invertible) {
    if (invertible === void 0) {
        invertible = false;
    }
    var patches = [];
    _generate(tree1, tree2, patches, '', invertible);
    return patches;
}
}),
"[project]/node_modules/fast-json-patch/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$core$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fast-json-patch/module/core.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$duplex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fast-json-patch/module/duplex.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fast-json-patch/module/helpers.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
const __TURBOPACK__default__export__ = Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$core$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$duplex$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__, {
    JsonPatchError: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PatchError"],
    deepClone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["_deepClone"],
    escapePathComponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapePathComponent"],
    unescapePathComponent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$helpers$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unescapePathComponent"]
});
}),
"[project]/node_modules/untruncate-json/dist/esm/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>untruncateJson
]);
function isWhitespace(char) {
    return "\u0020\u000D\u000A\u0009".indexOf(char) >= 0;
}
function untruncateJson(json) {
    var contextStack = [
        "topLevel" /* TOP_LEVEL */ 
    ];
    var position = 0;
    var respawnPosition;
    var respawnStackLength;
    var respawnReason;
    var push = function(context) {
        return contextStack.push(context);
    };
    var replace = function(context) {
        return contextStack[contextStack.length - 1] = context;
    };
    var setRespawn = function(reason) {
        if (respawnPosition == null) {
            respawnPosition = position;
            respawnStackLength = contextStack.length;
            respawnReason = reason;
        }
    };
    var clearRespawn = function(reason) {
        if (reason === respawnReason) {
            respawnPosition = undefined;
            respawnStackLength = undefined;
            respawnReason = undefined;
        }
    };
    var pop = function() {
        return contextStack.pop();
    };
    var dontConsumeCharacter = function() {
        return position--;
    };
    var startAny = function(char) {
        if ("0" <= char && char <= "9") {
            push("number" /* NUMBER */ );
            return;
        }
        switch(char){
            case '"':
                push("string" /* STRING */ );
                return;
            case "-":
                push("numberNeedsDigit" /* NUMBER_NEEDS_DIGIT */ );
                return;
            case "t":
                push("true" /* TRUE */ );
                return;
            case "f":
                push("false" /* FALSE */ );
                return;
            case "n":
                push("null" /* NULL */ );
                return;
            case "[":
                push("arrayNeedsValue" /* ARRAY_NEEDS_VALUE */ );
                return;
            case "{":
                push("objectNeedsKey" /* OBJECT_NEEDS_KEY */ );
                return;
        }
    };
    for(var length = json.length; position < length; position++){
        var char = json[position];
        switch(contextStack[contextStack.length - 1]){
            case "topLevel" /* TOP_LEVEL */ :
                startAny(char);
                break;
            case "string" /* STRING */ :
                switch(char){
                    case '"':
                        pop();
                        break;
                    case "\\":
                        setRespawn("stringEscape" /* STRING_ESCAPE */ );
                        push("stringEscaped" /* STRING_ESCAPED */ );
                        break;
                }
                break;
            case "stringEscaped" /* STRING_ESCAPED */ :
                if (char === "u") {
                    push("stringUnicode" /* STRING_UNICODE */ );
                } else {
                    clearRespawn("stringEscape" /* STRING_ESCAPE */ );
                    pop();
                }
                break;
            case "stringUnicode" /* STRING_UNICODE */ :
                if (position - json.lastIndexOf("u", position) === 4) {
                    clearRespawn("stringEscape" /* STRING_ESCAPE */ );
                    pop();
                }
                break;
            case "number" /* NUMBER */ :
                if (char === ".") {
                    replace("numberNeedsDigit" /* NUMBER_NEEDS_DIGIT */ );
                } else if (char === "e" || char === "E") {
                    replace("numberNeedsExponent" /* NUMBER_NEEDS_EXPONENT */ );
                } else if (char < "0" || char > "9") {
                    dontConsumeCharacter();
                    pop();
                }
                break;
            case "numberNeedsDigit" /* NUMBER_NEEDS_DIGIT */ :
                replace("number" /* NUMBER */ );
                break;
            case "numberNeedsExponent" /* NUMBER_NEEDS_EXPONENT */ :
                if (char === "+" || char === "-") {
                    replace("numberNeedsDigit" /* NUMBER_NEEDS_DIGIT */ );
                } else {
                    replace("number" /* NUMBER */ );
                }
                break;
            case "true" /* TRUE */ :
            case "false" /* FALSE */ :
            case "null" /* NULL */ :
                if (char < "a" || char > "z") {
                    dontConsumeCharacter();
                    pop();
                }
                break;
            case "arrayNeedsValue" /* ARRAY_NEEDS_VALUE */ :
                if (char === "]") {
                    pop();
                } else if (!isWhitespace(char)) {
                    clearRespawn("collectionItem" /* COLLECTION_ITEM */ );
                    replace("arrayNeedsComma" /* ARRAY_NEEDS_COMMA */ );
                    startAny(char);
                }
                break;
            case "arrayNeedsComma" /* ARRAY_NEEDS_COMMA */ :
                if (char === "]") {
                    pop();
                } else if (char === ",") {
                    setRespawn("collectionItem" /* COLLECTION_ITEM */ );
                    replace("arrayNeedsValue" /* ARRAY_NEEDS_VALUE */ );
                }
                break;
            case "objectNeedsKey" /* OBJECT_NEEDS_KEY */ :
                if (char === "}") {
                    pop();
                } else if (char === '"') {
                    setRespawn("collectionItem" /* COLLECTION_ITEM */ );
                    replace("objectNeedsColon" /* OBJECT_NEEDS_COLON */ );
                    push("string" /* STRING */ );
                }
                break;
            case "objectNeedsColon" /* OBJECT_NEEDS_COLON */ :
                if (char === ":") {
                    replace("objectNeedsValue" /* OBJECT_NEEDS_VALUE */ );
                }
                break;
            case "objectNeedsValue" /* OBJECT_NEEDS_VALUE */ :
                if (!isWhitespace(char)) {
                    clearRespawn("collectionItem" /* COLLECTION_ITEM */ );
                    replace("objectNeedsComma" /* OBJECT_NEEDS_COMMA */ );
                    startAny(char);
                }
                break;
            case "objectNeedsComma" /* OBJECT_NEEDS_COMMA */ :
                if (char === "}") {
                    pop();
                } else if (char === ",") {
                    setRespawn("collectionItem" /* COLLECTION_ITEM */ );
                    replace("objectNeedsKey" /* OBJECT_NEEDS_KEY */ );
                }
                break;
        }
    }
    if (respawnStackLength != null) {
        contextStack.length = respawnStackLength;
    }
    var result = [
        respawnPosition != null ? json.slice(0, respawnPosition) : json
    ];
    var finishWord = function(word) {
        return result.push(word.slice(json.length - json.lastIndexOf(word[0])));
    };
    for(var i = contextStack.length - 1; i >= 0; i--){
        switch(contextStack[i]){
            case "string" /* STRING */ :
                result.push('"');
                break;
            case "numberNeedsDigit" /* NUMBER_NEEDS_DIGIT */ :
            case "numberNeedsExponent" /* NUMBER_NEEDS_EXPONENT */ :
                result.push("0");
                break;
            case "true" /* TRUE */ :
                finishWord("true");
                break;
            case "false" /* FALSE */ :
                finishWord("false");
                break;
            case "null" /* NULL */ :
                finishWord("null");
                break;
            case "arrayNeedsValue" /* ARRAY_NEEDS_VALUE */ :
            case "arrayNeedsComma" /* ARRAY_NEEDS_COMMA */ :
                result.push("]");
                break;
            case "objectNeedsKey" /* OBJECT_NEEDS_KEY */ :
            case "objectNeedsColon" /* OBJECT_NEEDS_COLON */ :
            case "objectNeedsValue" /* OBJECT_NEEDS_VALUE */ :
            case "objectNeedsComma" /* OBJECT_NEEDS_COMMA */ :
                result.push("}");
                break;
        }
    }
    return result.join("");
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/@bufbuild/protobuf/dist/esm/wire/varint.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Copyright 2008 Google Inc.  All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
// * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Code generated by the Protocol Buffer compiler is owned by the owner
// of the input file used when generating it.  This code is not
// standalone and requires a support library to be linked with it.  This
// support library is itself covered by the above license.
/**
 * Read a 64 bit varint as two JS numbers.
 *
 * Returns tuple:
 * [0]: low bits
 * [1]: high bits
 *
 * Copyright 2008 Google Inc.  All rights reserved.
 *
 * See https://github.com/protocolbuffers/protobuf/blob/8a71927d74a4ce34efe2d8769fda198f52d20d12/js/experimental/runtime/kernel/buffer_decoder.js#L175
 */ __turbopack_context__.s([
    "int64FromString",
    ()=>int64FromString,
    "int64ToString",
    ()=>int64ToString,
    "uInt64ToString",
    ()=>uInt64ToString,
    "varint32read",
    ()=>varint32read,
    "varint32write",
    ()=>varint32write,
    "varint64read",
    ()=>varint64read,
    "varint64write",
    ()=>varint64write
]);
function varint64read() {
    let lowBits = 0;
    let highBits = 0;
    for(let shift = 0; shift < 28; shift += 7){
        let b = this.buf[this.pos++];
        lowBits |= (b & 0x7f) << shift;
        if ((b & 0x80) == 0) {
            this.assertBounds();
            return [
                lowBits,
                highBits
            ];
        }
    }
    let middleByte = this.buf[this.pos++];
    // last four bits of the first 32 bit number
    lowBits |= (middleByte & 0x0f) << 28;
    // 3 upper bits are part of the next 32 bit number
    highBits = (middleByte & 0x70) >> 4;
    if ((middleByte & 0x80) == 0) {
        this.assertBounds();
        return [
            lowBits,
            highBits
        ];
    }
    for(let shift = 3; shift <= 31; shift += 7){
        let b = this.buf[this.pos++];
        highBits |= (b & 0x7f) << shift;
        if ((b & 0x80) == 0) {
            this.assertBounds();
            return [
                lowBits,
                highBits
            ];
        }
    }
    throw new Error("invalid varint");
}
function varint64write(lo, hi, bytes) {
    for(let i = 0; i < 28; i = i + 7){
        const shift = lo >>> i;
        const hasNext = !(shift >>> 7 == 0 && hi == 0);
        const byte = (hasNext ? shift | 0x80 : shift) & 0xff;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    const splitBits = lo >>> 28 & 0x0f | (hi & 0x07) << 4;
    const hasMoreBits = !(hi >> 3 == 0);
    bytes.push((hasMoreBits ? splitBits | 0x80 : splitBits) & 0xff);
    if (!hasMoreBits) {
        return;
    }
    for(let i = 3; i < 31; i = i + 7){
        const shift = hi >>> i;
        const hasNext = !(shift >>> 7 == 0);
        const byte = (hasNext ? shift | 0x80 : shift) & 0xff;
        bytes.push(byte);
        if (!hasNext) {
            return;
        }
    }
    bytes.push(hi >>> 31 & 0x01);
}
// constants for binary math
const TWO_PWR_32_DBL = 0x100000000;
function int64FromString(dec) {
    // Check for minus sign.
    const minus = dec[0] === "-";
    if (minus) {
        dec = dec.slice(1);
    }
    // Work 6 decimal digits at a time, acting like we're converting base 1e6
    // digits to binary. This is safe to do with floating point math because
    // Number.isSafeInteger(ALL_32_BITS * 1e6) == true.
    const base = 1e6;
    let lowBits = 0;
    let highBits = 0;
    function add1e6digit(begin, end) {
        // Note: Number('') is 0.
        const digit1e6 = Number(dec.slice(begin, end));
        highBits *= base;
        lowBits = lowBits * base + digit1e6;
        // Carry bits from lowBits to
        if (lowBits >= TWO_PWR_32_DBL) {
            highBits = highBits + (lowBits / TWO_PWR_32_DBL | 0);
            lowBits = lowBits % TWO_PWR_32_DBL;
        }
    }
    add1e6digit(-24, -18);
    add1e6digit(-18, -12);
    add1e6digit(-12, -6);
    add1e6digit(-6);
    return minus ? negate(lowBits, highBits) : newBits(lowBits, highBits);
}
function int64ToString(lo, hi) {
    let bits = newBits(lo, hi);
    // If we're treating the input as a signed value and the high bit is set, do
    // a manual two's complement conversion before the decimal conversion.
    const negative = bits.hi & 0x80000000;
    if (negative) {
        bits = negate(bits.lo, bits.hi);
    }
    const result = uInt64ToString(bits.lo, bits.hi);
    return negative ? "-" + result : result;
}
function uInt64ToString(lo, hi) {
    ({ lo, hi } = toUnsigned(lo, hi));
    // Skip the expensive conversion if the number is small enough to use the
    // built-in conversions.
    // Number.MAX_SAFE_INTEGER = 0x001FFFFF FFFFFFFF, thus any number with
    // highBits <= 0x1FFFFF can be safely expressed with a double and retain
    // integer precision.
    // Proven by: Number.isSafeInteger(0x1FFFFF * 2**32 + 0xFFFFFFFF) == true.
    if (hi <= 0x1fffff) {
        return String(TWO_PWR_32_DBL * hi + lo);
    }
    // What this code is doing is essentially converting the input number from
    // base-2 to base-1e7, which allows us to represent the 64-bit range with
    // only 3 (very large) digits. Those digits are then trivial to convert to
    // a base-10 string.
    // The magic numbers used here are -
    // 2^24 = 16777216 = (1,6777216) in base-1e7.
    // 2^48 = 281474976710656 = (2,8147497,6710656) in base-1e7.
    // Split 32:32 representation into 16:24:24 representation so our
    // intermediate digits don't overflow.
    const low = lo & 0xffffff;
    const mid = (lo >>> 24 | hi << 8) & 0xffffff;
    const high = hi >> 16 & 0xffff;
    // Assemble our three base-1e7 digits, ignoring carries. The maximum
    // value in a digit at this step is representable as a 48-bit integer, which
    // can be stored in a 64-bit floating point number.
    let digitA = low + mid * 6777216 + high * 6710656;
    let digitB = mid + high * 8147497;
    let digitC = high * 2;
    // Apply carries from A to B and from B to C.
    const base = 10000000;
    if (digitA >= base) {
        digitB += Math.floor(digitA / base);
        digitA %= base;
    }
    if (digitB >= base) {
        digitC += Math.floor(digitB / base);
        digitB %= base;
    }
    // If digitC is 0, then we should have returned in the trivial code path
    // at the top for non-safe integers. Given this, we can assume both digitB
    // and digitA need leading zeros.
    return digitC.toString() + decimalFrom1e7WithLeadingZeros(digitB) + decimalFrom1e7WithLeadingZeros(digitA);
}
function toUnsigned(lo, hi) {
    return {
        lo: lo >>> 0,
        hi: hi >>> 0
    };
}
function newBits(lo, hi) {
    return {
        lo: lo | 0,
        hi: hi | 0
    };
}
/**
 * Returns two's compliment negation of input.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Signed_32-bit_integers
 */ function negate(lowBits, highBits) {
    highBits = ~highBits;
    if (lowBits) {
        lowBits = ~lowBits + 1;
    } else {
        // If lowBits is 0, then bitwise-not is 0xFFFFFFFF,
        // adding 1 to that, results in 0x100000000, which leaves
        // the low bits 0x0 and simply adds one to the high bits.
        highBits += 1;
    }
    return newBits(lowBits, highBits);
}
/**
 * Returns decimal representation of digit1e7 with leading zeros.
 */ const decimalFrom1e7WithLeadingZeros = (digit1e7)=>{
    const partial = String(digit1e7);
    return "0000000".slice(partial.length) + partial;
};
function varint32write(value, bytes) {
    if (value >= 0) {
        // write value as varint 32
        while(value > 0x7f){
            bytes.push(value & 0x7f | 0x80);
            value = value >>> 7;
        }
        bytes.push(value);
    } else {
        for(let i = 0; i < 9; i++){
            bytes.push(value & 127 | 128);
            value = value >> 7;
        }
        bytes.push(1);
    }
}
function varint32read() {
    let b = this.buf[this.pos++];
    let result = b & 0x7f;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7f) << 7;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7f) << 14;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    b = this.buf[this.pos++];
    result |= (b & 0x7f) << 21;
    if ((b & 0x80) == 0) {
        this.assertBounds();
        return result;
    }
    // Extract only last 4 bits
    b = this.buf[this.pos++];
    result |= (b & 0x0f) << 28;
    for(let readBytes = 5; (b & 0x80) !== 0 && readBytes < 10; readBytes++)b = this.buf[this.pos++];
    if ((b & 0x80) != 0) throw new Error("invalid varint");
    this.assertBounds();
    // Result can have 32 bits, convert it to unsigned
    return result >>> 0;
}
}),
"[project]/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "protoInt64",
    ()=>protoInt64
]);
// Copyright 2021-2025 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@bufbuild/protobuf/dist/esm/wire/varint.js [app-route] (ecmascript)");
;
const protoInt64 = /*@__PURE__*/ makeInt64Support();
function makeInt64Support() {
    const dv = new DataView(new ArrayBuffer(8));
    // note that Safari 14 implements BigInt, but not the DataView methods
    const ok = typeof BigInt === "function" && typeof dv.getBigInt64 === "function" && typeof dv.getBigUint64 === "function" && typeof dv.setBigInt64 === "function" && typeof dv.setBigUint64 === "function" && (!!globalThis.Deno || typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1");
    if (ok) {
        const MIN = BigInt("-9223372036854775808");
        const MAX = BigInt("9223372036854775807");
        const UMIN = BigInt("0");
        const UMAX = BigInt("18446744073709551615");
        return {
            zero: BigInt(0),
            supported: true,
            parse (value) {
                const bi = typeof value == "bigint" ? value : BigInt(value);
                if (bi > MAX || bi < MIN) {
                    throw new Error(`invalid int64: ${value}`);
                }
                return bi;
            },
            uParse (value) {
                const bi = typeof value == "bigint" ? value : BigInt(value);
                if (bi > UMAX || bi < UMIN) {
                    throw new Error(`invalid uint64: ${value}`);
                }
                return bi;
            },
            enc (value) {
                dv.setBigInt64(0, this.parse(value), true);
                return {
                    lo: dv.getInt32(0, true),
                    hi: dv.getInt32(4, true)
                };
            },
            uEnc (value) {
                dv.setBigInt64(0, this.uParse(value), true);
                return {
                    lo: dv.getInt32(0, true),
                    hi: dv.getInt32(4, true)
                };
            },
            dec (lo, hi) {
                dv.setInt32(0, lo, true);
                dv.setInt32(4, hi, true);
                return dv.getBigInt64(0, true);
            },
            uDec (lo, hi) {
                dv.setInt32(0, lo, true);
                dv.setInt32(4, hi, true);
                return dv.getBigUint64(0, true);
            }
        };
    }
    return {
        zero: "0",
        supported: false,
        parse (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertInt64String(value);
            return value;
        },
        uParse (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertUInt64String(value);
            return value;
        },
        enc (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertInt64String(value);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["int64FromString"])(value);
        },
        uEnc (value) {
            if (typeof value != "string") {
                value = value.toString();
            }
            assertUInt64String(value);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["int64FromString"])(value);
        },
        dec (lo, hi) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["int64ToString"])(lo, hi);
        },
        uDec (lo, hi) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uInt64ToString"])(lo, hi);
        }
    };
}
function assertInt64String(value) {
    if (!/^-?[0-9]+$/.test(value)) {
        throw new Error("invalid int64: " + value);
    }
}
function assertUInt64String(value) {
    if (!/^[0-9]+$/.test(value)) {
        throw new Error("invalid uint64: " + value);
    }
}
}),
"[project]/node_modules/@bufbuild/protobuf/dist/esm/wire/text-encoding.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "configureTextEncoding",
    ()=>configureTextEncoding,
    "getTextEncoding",
    ()=>getTextEncoding
]);
// Copyright 2021-2025 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const symbol = Symbol.for("@bufbuild/protobuf/text-encoding");
function configureTextEncoding(textEncoding) {
    globalThis[symbol] = textEncoding;
}
function getTextEncoding() {
    if (globalThis[symbol] == undefined) {
        const te = new globalThis.TextEncoder();
        const td = new globalThis.TextDecoder();
        globalThis[symbol] = {
            encodeUtf8 (text) {
                return te.encode(text);
            },
            decodeUtf8 (bytes) {
                return td.decode(bytes);
            },
            checkUtf8 (text) {
                try {
                    encodeURIComponent(text);
                    return true;
                } catch (_) {
                    return false;
                }
            }
        };
    }
    return globalThis[symbol];
}
}),
"[project]/node_modules/@bufbuild/protobuf/dist/esm/wire/binary-encoding.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BinaryReader",
    ()=>BinaryReader,
    "BinaryWriter",
    ()=>BinaryWriter,
    "FLOAT32_MAX",
    ()=>FLOAT32_MAX,
    "FLOAT32_MIN",
    ()=>FLOAT32_MIN,
    "INT32_MAX",
    ()=>INT32_MAX,
    "INT32_MIN",
    ()=>INT32_MIN,
    "UINT32_MAX",
    ()=>UINT32_MAX,
    "WireType",
    ()=>WireType
]);
// Copyright 2021-2025 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@bufbuild/protobuf/dist/esm/wire/varint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$text$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@bufbuild/protobuf/dist/esm/wire/text-encoding.js [app-route] (ecmascript)");
;
;
;
var WireType;
(function(WireType) {
    /**
     * Used for int32, int64, uint32, uint64, sint32, sint64, bool, enum
     */ WireType[WireType["Varint"] = 0] = "Varint";
    /**
     * Used for fixed64, sfixed64, double.
     * Always 8 bytes with little-endian byte order.
     */ WireType[WireType["Bit64"] = 1] = "Bit64";
    /**
     * Used for string, bytes, embedded messages, packed repeated fields
     *
     * Only repeated numeric types (types which use the varint, 32-bit,
     * or 64-bit wire types) can be packed. In proto3, such fields are
     * packed by default.
     */ WireType[WireType["LengthDelimited"] = 2] = "LengthDelimited";
    /**
     * Start of a tag-delimited aggregate, such as a proto2 group, or a message
     * in editions with message_encoding = DELIMITED.
     */ WireType[WireType["StartGroup"] = 3] = "StartGroup";
    /**
     * End of a tag-delimited aggregate.
     */ WireType[WireType["EndGroup"] = 4] = "EndGroup";
    /**
     * Used for fixed32, sfixed32, float.
     * Always 4 bytes with little-endian byte order.
     */ WireType[WireType["Bit32"] = 5] = "Bit32";
})(WireType || (WireType = {}));
const FLOAT32_MAX = 3.4028234663852886e38;
const FLOAT32_MIN = -3.4028234663852886e38;
const UINT32_MAX = 0xffffffff;
const INT32_MAX = 0x7fffffff;
const INT32_MIN = -0x80000000;
class BinaryWriter {
    constructor(encodeUtf8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$text$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTextEncoding"])().encodeUtf8){
        this.encodeUtf8 = encodeUtf8;
        /**
         * Previous fork states.
         */ this.stack = [];
        this.chunks = [];
        this.buf = [];
    }
    /**
     * Return all bytes written and reset this writer.
     */ finish() {
        if (this.buf.length) {
            this.chunks.push(new Uint8Array(this.buf)); // flush the buffer
            this.buf = [];
        }
        let len = 0;
        for(let i = 0; i < this.chunks.length; i++)len += this.chunks[i].length;
        let bytes = new Uint8Array(len);
        let offset = 0;
        for(let i = 0; i < this.chunks.length; i++){
            bytes.set(this.chunks[i], offset);
            offset += this.chunks[i].length;
        }
        this.chunks = [];
        return bytes;
    }
    /**
     * Start a new fork for length-delimited data like a message
     * or a packed repeated field.
     *
     * Must be joined later with `join()`.
     */ fork() {
        this.stack.push({
            chunks: this.chunks,
            buf: this.buf
        });
        this.chunks = [];
        this.buf = [];
        return this;
    }
    /**
     * Join the last fork. Write its length and bytes, then
     * return to the previous state.
     */ join() {
        // get chunk of fork
        let chunk = this.finish();
        // restore previous state
        let prev = this.stack.pop();
        if (!prev) throw new Error("invalid state, fork stack empty");
        this.chunks = prev.chunks;
        this.buf = prev.buf;
        // write length of chunk as varint
        this.uint32(chunk.byteLength);
        return this.raw(chunk);
    }
    /**
     * Writes a tag (field number and wire type).
     *
     * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
     *
     * Generated code should compute the tag ahead of time and call `uint32()`.
     */ tag(fieldNo, type) {
        return this.uint32((fieldNo << 3 | type) >>> 0);
    }
    /**
     * Write a chunk of raw bytes.
     */ raw(chunk) {
        if (this.buf.length) {
            this.chunks.push(new Uint8Array(this.buf));
            this.buf = [];
        }
        this.chunks.push(chunk);
        return this;
    }
    /**
     * Write a `uint32` value, an unsigned 32 bit varint.
     */ uint32(value) {
        assertUInt32(value);
        // write value as varint 32, inlined for speed
        while(value > 0x7f){
            this.buf.push(value & 0x7f | 0x80);
            value = value >>> 7;
        }
        this.buf.push(value);
        return this;
    }
    /**
     * Write a `int32` value, a signed 32 bit varint.
     */ int32(value) {
        assertInt32(value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varint32write"])(value, this.buf);
        return this;
    }
    /**
     * Write a `bool` value, a variant.
     */ bool(value) {
        this.buf.push(value ? 1 : 0);
        return this;
    }
    /**
     * Write a `bytes` value, length-delimited arbitrary data.
     */ bytes(value) {
        this.uint32(value.byteLength); // write length of chunk as varint
        return this.raw(value);
    }
    /**
     * Write a `string` value, length-delimited data converted to UTF-8 text.
     */ string(value) {
        let chunk = this.encodeUtf8(value);
        this.uint32(chunk.byteLength); // write length of chunk as varint
        return this.raw(chunk);
    }
    /**
     * Write a `float` value, 32-bit floating point number.
     */ float(value) {
        assertFloat32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setFloat32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `double` value, a 64-bit floating point number.
     */ double(value) {
        let chunk = new Uint8Array(8);
        new DataView(chunk.buffer).setFloat64(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
     */ fixed32(value) {
        assertUInt32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setUint32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
     */ sfixed32(value) {
        assertInt32(value);
        let chunk = new Uint8Array(4);
        new DataView(chunk.buffer).setInt32(0, value, true);
        return this.raw(chunk);
    }
    /**
     * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
     */ sint32(value) {
        assertInt32(value);
        // zigzag encode
        value = (value << 1 ^ value >> 31) >>> 0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varint32write"])(value, this.buf);
        return this;
    }
    /**
     * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
     */ sfixed64(value) {
        let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoInt64"].enc(value);
        view.setInt32(0, tc.lo, true);
        view.setInt32(4, tc.hi, true);
        return this.raw(chunk);
    }
    /**
     * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
     */ fixed64(value) {
        let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoInt64"].uEnc(value);
        view.setInt32(0, tc.lo, true);
        view.setInt32(4, tc.hi, true);
        return this.raw(chunk);
    }
    /**
     * Write a `int64` value, a signed 64-bit varint.
     */ int64(value) {
        let tc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoInt64"].enc(value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varint64write"])(tc.lo, tc.hi, this.buf);
        return this;
    }
    /**
     * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
     */ sint64(value) {
        const tc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoInt64"].enc(value), // zigzag encode
        sign = tc.hi >> 31, lo = tc.lo << 1 ^ sign, hi = (tc.hi << 1 | tc.lo >>> 31) ^ sign;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varint64write"])(lo, hi, this.buf);
        return this;
    }
    /**
     * Write a `uint64` value, an unsigned 64-bit varint.
     */ uint64(value) {
        const tc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoInt64"].uEnc(value);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varint64write"])(tc.lo, tc.hi, this.buf);
        return this;
    }
}
class BinaryReader {
    constructor(buf, decodeUtf8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$text$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTextEncoding"])().decodeUtf8){
        this.decodeUtf8 = decodeUtf8;
        this.varint64 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varint64read"]; // dirty cast for `this`
        /**
         * Read a `uint32` field, an unsigned 32 bit varint.
         */ this.uint32 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$varint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varint32read"];
        this.buf = buf;
        this.len = buf.length;
        this.pos = 0;
        this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    /**
     * Reads a tag - field number and wire type.
     */ tag() {
        let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
        if (fieldNo <= 0 || wireType < 0 || wireType > 5) throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
        return [
            fieldNo,
            wireType
        ];
    }
    /**
     * Skip one element and return the skipped data.
     *
     * When skipping StartGroup, provide the tags field number to check for
     * matching field number in the EndGroup tag.
     */ skip(wireType, fieldNo) {
        let start = this.pos;
        switch(wireType){
            case WireType.Varint:
                while(this.buf[this.pos++] & 0x80){
                // ignore
                }
                break;
            // @ts-ignore TS7029: Fallthrough case in switch -- ignore instead of expect-error for compiler settings without noFallthroughCasesInSwitch: true
            case WireType.Bit64:
                this.pos += 4;
            case WireType.Bit32:
                this.pos += 4;
                break;
            case WireType.LengthDelimited:
                let len = this.uint32();
                this.pos += len;
                break;
            case WireType.StartGroup:
                for(;;){
                    const [fn, wt] = this.tag();
                    if (wt === WireType.EndGroup) {
                        if (fieldNo !== undefined && fn !== fieldNo) {
                            throw new Error("invalid end group tag");
                        }
                        break;
                    }
                    this.skip(wt, fn);
                }
                break;
            default:
                throw new Error("cant skip wire type " + wireType);
        }
        this.assertBounds();
        return this.buf.subarray(start, this.pos);
    }
    /**
     * Throws error if position in byte array is out of range.
     */ assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
    }
    /**
     * Read a `int32` field, a signed 32 bit varint.
     */ int32() {
        return this.uint32() | 0;
    }
    /**
     * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
     */ sint32() {
        let zze = this.uint32();
        // decode zigzag
        return zze >>> 1 ^ -(zze & 1);
    }
    /**
     * Read a `int64` field, a signed 64-bit varint.
     */ int64() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoInt64"].dec(...this.varint64());
    }
    /**
     * Read a `uint64` field, an unsigned 64-bit varint.
     */ uint64() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoInt64"].uDec(...this.varint64());
    }
    /**
     * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
     */ sint64() {
        let [lo, hi] = this.varint64();
        // decode zig zag
        let s = -(lo & 1);
        lo = (lo >>> 1 | (hi & 1) << 31) ^ s;
        hi = hi >>> 1 ^ s;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoInt64"].dec(lo, hi);
    }
    /**
     * Read a `bool` field, a variant.
     */ bool() {
        let [lo, hi] = this.varint64();
        return lo !== 0 || hi !== 0;
    }
    /**
     * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
     */ fixed32() {
        // biome-ignore lint/suspicious/noAssignInExpressions: no
        return this.view.getUint32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
     */ sfixed32() {
        // biome-ignore lint/suspicious/noAssignInExpressions: no
        return this.view.getInt32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
     */ fixed64() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoInt64"].uDec(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
     */ sfixed64() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$proto$2d$int64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protoInt64"].dec(this.sfixed32(), this.sfixed32());
    }
    /**
     * Read a `float` field, 32-bit floating point number.
     */ float() {
        // biome-ignore lint/suspicious/noAssignInExpressions: no
        return this.view.getFloat32((this.pos += 4) - 4, true);
    }
    /**
     * Read a `double` field, a 64-bit floating point number.
     */ double() {
        // biome-ignore lint/suspicious/noAssignInExpressions: no
        return this.view.getFloat64((this.pos += 8) - 8, true);
    }
    /**
     * Read a `bytes` field, length-delimited arbitrary data.
     */ bytes() {
        let len = this.uint32(), start = this.pos;
        this.pos += len;
        this.assertBounds();
        return this.buf.subarray(start, start + len);
    }
    /**
     * Read a `string` field, length-delimited data converted to UTF-8 text.
     */ string() {
        return this.decodeUtf8(this.bytes());
    }
}
/**
 * Assert a valid signed protobuf 32-bit integer as a number or string.
 */ function assertInt32(arg) {
    if (typeof arg == "string") {
        arg = Number(arg);
    } else if (typeof arg != "number") {
        throw new Error("invalid int32: " + typeof arg);
    }
    if (!Number.isInteger(arg) || arg > INT32_MAX || arg < INT32_MIN) throw new Error("invalid int32: " + arg);
}
/**
 * Assert a valid unsigned protobuf 32-bit integer as a number or string.
 */ function assertUInt32(arg) {
    if (typeof arg == "string") {
        arg = Number(arg);
    } else if (typeof arg != "number") {
        throw new Error("invalid uint32: " + typeof arg);
    }
    if (!Number.isInteger(arg) || arg > UINT32_MAX || arg < 0) throw new Error("invalid uint32: " + arg);
}
/**
 * Assert a valid protobuf float value as a number or string.
 */ function assertFloat32(arg) {
    if (typeof arg == "string") {
        const o = arg;
        arg = Number(arg);
        if (Number.isNaN(arg) && o !== "NaN") {
            throw new Error("invalid float32: " + o);
        }
    } else if (typeof arg != "number") {
        throw new Error("invalid float32: " + typeof arg);
    }
    if (Number.isFinite(arg) && (arg > FLOAT32_MAX || arg < FLOAT32_MIN)) throw new Error("invalid float32: " + arg);
}
}),
"[project]/node_modules/@ag-ui/proto/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AGUI_MEDIA_TYPE",
    ()=>AGUI_MEDIA_TYPE,
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
// src/proto.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ag-ui/core/dist/index.mjs [app-route] (ecmascript)");
// src/generated/events.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@bufbuild/protobuf/dist/esm/wire/binary-encoding.js [app-route] (ecmascript)");
;
;
;
function createBaseStruct() {
    return {
        fields: {}
    };
}
var Struct = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        Object.entries(message.fields).forEach(([key, value])=>{
            if (value !== void 0) {
                Struct_FieldsEntry.encode({
                    key,
                    value
                }, writer.uint32(10).fork()).join();
            }
        });
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseStruct();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
                        if (entry1.value !== void 0) {
                            message.fields[entry1.key] = entry1.value;
                        }
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return Struct.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a;
        const message = createBaseStruct();
        message.fields = Object.entries((_a = object.fields) != null ? _a : {}).reduce((acc, [key, value])=>{
            if (value !== void 0) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
    wrap (object) {
        const struct = createBaseStruct();
        if (object !== void 0) {
            for (const key of Object.keys(object)){
                struct.fields[key] = object[key];
            }
        }
        return struct;
    },
    unwrap (message) {
        const object = {};
        if (message.fields) {
            for (const key of Object.keys(message.fields)){
                object[key] = message.fields[key];
            }
        }
        return object;
    }
};
function createBaseStruct_FieldsEntry() {
    return {
        key: "",
        value: void 0
    };
}
var Struct_FieldsEntry = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== void 0) {
            Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseStruct_FieldsEntry();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.key = reader.string();
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return Struct_FieldsEntry.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b;
        const message = createBaseStruct_FieldsEntry();
        message.key = (_a = object.key) != null ? _a : "";
        message.value = (_b = object.value) != null ? _b : void 0;
        return message;
    }
};
function createBaseValue() {
    return {
        nullValue: void 0,
        numberValue: void 0,
        stringValue: void 0,
        boolValue: void 0,
        structValue: void 0,
        listValue: void 0
    };
}
var Value = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.nullValue !== void 0) {
            writer.uint32(8).int32(message.nullValue);
        }
        if (message.numberValue !== void 0) {
            writer.uint32(17).double(message.numberValue);
        }
        if (message.stringValue !== void 0) {
            writer.uint32(26).string(message.stringValue);
        }
        if (message.boolValue !== void 0) {
            writer.uint32(32).bool(message.boolValue);
        }
        if (message.structValue !== void 0) {
            Struct.encode(Struct.wrap(message.structValue), writer.uint32(42).fork()).join();
        }
        if (message.listValue !== void 0) {
            ListValue.encode(ListValue.wrap(message.listValue), writer.uint32(50).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseValue();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 8) {
                            break;
                        }
                        message.nullValue = reader.int32();
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 17) {
                            break;
                        }
                        message.numberValue = reader.double();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.stringValue = reader.string();
                        continue;
                    }
                case 4:
                    {
                        if (tag !== 32) {
                            break;
                        }
                        message.boolValue = reader.bool();
                        continue;
                    }
                case 5:
                    {
                        if (tag !== 42) {
                            break;
                        }
                        message.structValue = Struct.unwrap(Struct.decode(reader, reader.uint32()));
                        continue;
                    }
                case 6:
                    {
                        if (tag !== 50) {
                            break;
                        }
                        message.listValue = ListValue.unwrap(ListValue.decode(reader, reader.uint32()));
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return Value.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseValue();
        message.nullValue = (_a = object.nullValue) != null ? _a : void 0;
        message.numberValue = (_b = object.numberValue) != null ? _b : void 0;
        message.stringValue = (_c = object.stringValue) != null ? _c : void 0;
        message.boolValue = (_d = object.boolValue) != null ? _d : void 0;
        message.structValue = (_e = object.structValue) != null ? _e : void 0;
        message.listValue = (_f = object.listValue) != null ? _f : void 0;
        return message;
    },
    wrap (value) {
        const result = createBaseValue();
        if (value === null) {
            result.nullValue = 0 /* NULL_VALUE */ ;
        } else if (typeof value === "boolean") {
            result.boolValue = value;
        } else if (typeof value === "number") {
            result.numberValue = value;
        } else if (typeof value === "string") {
            result.stringValue = value;
        } else if (globalThis.Array.isArray(value)) {
            result.listValue = value;
        } else if (typeof value === "object") {
            result.structValue = value;
        } else if (typeof value !== "undefined") {
            throw new globalThis.Error("Unsupported any value type: " + typeof value);
        }
        return result;
    },
    unwrap (message) {
        if (message.stringValue !== void 0) {
            return message.stringValue;
        } else if ((message == null ? void 0 : message.numberValue) !== void 0) {
            return message.numberValue;
        } else if ((message == null ? void 0 : message.boolValue) !== void 0) {
            return message.boolValue;
        } else if ((message == null ? void 0 : message.structValue) !== void 0) {
            return message.structValue;
        } else if ((message == null ? void 0 : message.listValue) !== void 0) {
            return message.listValue;
        } else if ((message == null ? void 0 : message.nullValue) !== void 0) {
            return null;
        }
        return void 0;
    }
};
function createBaseListValue() {
    return {
        values: []
    };
}
var ListValue = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        for (const v of message.values){
            Value.encode(Value.wrap(v), writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseListValue();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.values.push(Value.unwrap(Value.decode(reader, reader.uint32())));
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return ListValue.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a;
        const message = createBaseListValue();
        message.values = ((_a = object.values) == null ? void 0 : _a.map((e)=>e)) || [];
        return message;
    },
    wrap (array) {
        const result = createBaseListValue();
        result.values = array != null ? array : [];
        return result;
    },
    unwrap (message) {
        if ((message == null ? void 0 : message.hasOwnProperty("values")) && globalThis.Array.isArray(message.values)) {
            return message.values;
        } else {
            return message;
        }
    }
};
;
var JsonPatchOperationType = /* @__PURE__ */ ((JsonPatchOperationType2)=>{
    JsonPatchOperationType2[JsonPatchOperationType2["ADD"] = 0] = "ADD";
    JsonPatchOperationType2[JsonPatchOperationType2["REMOVE"] = 1] = "REMOVE";
    JsonPatchOperationType2[JsonPatchOperationType2["REPLACE"] = 2] = "REPLACE";
    JsonPatchOperationType2[JsonPatchOperationType2["MOVE"] = 3] = "MOVE";
    JsonPatchOperationType2[JsonPatchOperationType2["COPY"] = 4] = "COPY";
    JsonPatchOperationType2[JsonPatchOperationType2["TEST"] = 5] = "TEST";
    JsonPatchOperationType2[JsonPatchOperationType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
    return JsonPatchOperationType2;
})(JsonPatchOperationType || {});
function createBaseJsonPatchOperation() {
    return {
        op: 0,
        path: "",
        from: void 0,
        value: void 0
    };
}
var JsonPatchOperation = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.op !== 0) {
            writer.uint32(8).int32(message.op);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.from !== void 0) {
            writer.uint32(26).string(message.from);
        }
        if (message.value !== void 0) {
            Value.encode(Value.wrap(message.value), writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseJsonPatchOperation();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 8) {
                            break;
                        }
                        message.op = reader.int32();
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.path = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.from = reader.string();
                        continue;
                    }
                case 4:
                    {
                        if (tag !== 34) {
                            break;
                        }
                        message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return JsonPatchOperation.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b, _c, _d;
        const message = createBaseJsonPatchOperation();
        message.op = (_a = object.op) != null ? _a : 0;
        message.path = (_b = object.path) != null ? _b : "";
        message.from = (_c = object.from) != null ? _c : void 0;
        message.value = (_d = object.value) != null ? _d : void 0;
        return message;
    }
};
;
function createBaseToolCall() {
    return {
        id: "",
        type: "",
        function: void 0
    };
}
var ToolCall = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.function !== void 0) {
            ToolCall_Function.encode(message.function, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseToolCall();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.id = reader.string();
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.type = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.function = ToolCall_Function.decode(reader, reader.uint32());
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return ToolCall.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b;
        const message = createBaseToolCall();
        message.id = (_a = object.id) != null ? _a : "";
        message.type = (_b = object.type) != null ? _b : "";
        message.function = object.function !== void 0 && object.function !== null ? ToolCall_Function.fromPartial(object.function) : void 0;
        return message;
    }
};
function createBaseToolCall_Function() {
    return {
        name: "",
        arguments: ""
    };
}
var ToolCall_Function = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.arguments !== "") {
            writer.uint32(18).string(message.arguments);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseToolCall_Function();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.name = reader.string();
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.arguments = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return ToolCall_Function.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b;
        const message = createBaseToolCall_Function();
        message.name = (_a = object.name) != null ? _a : "";
        message.arguments = (_b = object.arguments) != null ? _b : "";
        return message;
    }
};
function createBaseMessage() {
    return {
        id: "",
        role: "",
        content: void 0,
        name: void 0,
        toolCalls: [],
        toolCallId: void 0,
        error: void 0
    };
}
var Message = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.role !== "") {
            writer.uint32(18).string(message.role);
        }
        if (message.content !== void 0) {
            writer.uint32(26).string(message.content);
        }
        if (message.name !== void 0) {
            writer.uint32(34).string(message.name);
        }
        for (const v of message.toolCalls){
            ToolCall.encode(v, writer.uint32(42).fork()).join();
        }
        if (message.toolCallId !== void 0) {
            writer.uint32(50).string(message.toolCallId);
        }
        if (message.error !== void 0) {
            writer.uint32(58).string(message.error);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.id = reader.string();
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.role = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.content = reader.string();
                        continue;
                    }
                case 4:
                    {
                        if (tag !== 34) {
                            break;
                        }
                        message.name = reader.string();
                        continue;
                    }
                case 5:
                    {
                        if (tag !== 42) {
                            break;
                        }
                        message.toolCalls.push(ToolCall.decode(reader, reader.uint32()));
                        continue;
                    }
                case 6:
                    {
                        if (tag !== 50) {
                            break;
                        }
                        message.toolCallId = reader.string();
                        continue;
                    }
                case 7:
                    {
                        if (tag !== 58) {
                            break;
                        }
                        message.error = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return Message.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMessage();
        message.id = (_a = object.id) != null ? _a : "";
        message.role = (_b = object.role) != null ? _b : "";
        message.content = (_c = object.content) != null ? _c : void 0;
        message.name = (_d = object.name) != null ? _d : void 0;
        message.toolCalls = ((_e = object.toolCalls) == null ? void 0 : _e.map((e)=>ToolCall.fromPartial(e))) || [];
        message.toolCallId = (_f = object.toolCallId) != null ? _f : void 0;
        message.error = (_g = object.error) != null ? _g : void 0;
        return message;
    }
};
// src/generated/events.ts
var EventType = /* @__PURE__ */ ((EventType3)=>{
    EventType3[EventType3["TEXT_MESSAGE_START"] = 0] = "TEXT_MESSAGE_START";
    EventType3[EventType3["TEXT_MESSAGE_CONTENT"] = 1] = "TEXT_MESSAGE_CONTENT";
    EventType3[EventType3["TEXT_MESSAGE_END"] = 2] = "TEXT_MESSAGE_END";
    EventType3[EventType3["TOOL_CALL_START"] = 3] = "TOOL_CALL_START";
    EventType3[EventType3["TOOL_CALL_ARGS"] = 4] = "TOOL_CALL_ARGS";
    EventType3[EventType3["TOOL_CALL_END"] = 5] = "TOOL_CALL_END";
    EventType3[EventType3["STATE_SNAPSHOT"] = 6] = "STATE_SNAPSHOT";
    EventType3[EventType3["STATE_DELTA"] = 7] = "STATE_DELTA";
    EventType3[EventType3["MESSAGES_SNAPSHOT"] = 8] = "MESSAGES_SNAPSHOT";
    EventType3[EventType3["RAW"] = 9] = "RAW";
    EventType3[EventType3["CUSTOM"] = 10] = "CUSTOM";
    EventType3[EventType3["RUN_STARTED"] = 11] = "RUN_STARTED";
    EventType3[EventType3["RUN_FINISHED"] = 12] = "RUN_FINISHED";
    EventType3[EventType3["RUN_ERROR"] = 13] = "RUN_ERROR";
    EventType3[EventType3["STEP_STARTED"] = 14] = "STEP_STARTED";
    EventType3[EventType3["STEP_FINISHED"] = 15] = "STEP_FINISHED";
    EventType3[EventType3["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
    return EventType3;
})(EventType || {});
function createBaseBaseEvent() {
    return {
        type: 0,
        timestamp: void 0,
        rawEvent: void 0
    };
}
var BaseEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.timestamp !== void 0) {
            writer.uint32(16).int64(message.timestamp);
        }
        if (message.rawEvent !== void 0) {
            Value.encode(Value.wrap(message.rawEvent), writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseBaseEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 8) {
                            break;
                        }
                        message.type = reader.int32();
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 16) {
                            break;
                        }
                        message.timestamp = longToNumber(reader.int64());
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.rawEvent = Value.unwrap(Value.decode(reader, reader.uint32()));
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return BaseEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b, _c;
        const message = createBaseBaseEvent();
        message.type = (_a = object.type) != null ? _a : 0;
        message.timestamp = (_b = object.timestamp) != null ? _b : void 0;
        message.rawEvent = (_c = object.rawEvent) != null ? _c : void 0;
        return message;
    }
};
function createBaseTextMessageStartEvent() {
    return {
        baseEvent: void 0,
        messageId: "",
        role: void 0
    };
}
var TextMessageStartEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.messageId !== "") {
            writer.uint32(18).string(message.messageId);
        }
        if (message.role !== void 0) {
            writer.uint32(26).string(message.role);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseTextMessageStartEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.messageId = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.role = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return TextMessageStartEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b;
        const message = createBaseTextMessageStartEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.messageId = (_a = object.messageId) != null ? _a : "";
        message.role = (_b = object.role) != null ? _b : void 0;
        return message;
    }
};
function createBaseTextMessageContentEvent() {
    return {
        baseEvent: void 0,
        messageId: "",
        delta: ""
    };
}
var TextMessageContentEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.messageId !== "") {
            writer.uint32(18).string(message.messageId);
        }
        if (message.delta !== "") {
            writer.uint32(26).string(message.delta);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseTextMessageContentEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.messageId = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.delta = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return TextMessageContentEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b;
        const message = createBaseTextMessageContentEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.messageId = (_a = object.messageId) != null ? _a : "";
        message.delta = (_b = object.delta) != null ? _b : "";
        return message;
    }
};
function createBaseTextMessageEndEvent() {
    return {
        baseEvent: void 0,
        messageId: ""
    };
}
var TextMessageEndEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.messageId !== "") {
            writer.uint32(18).string(message.messageId);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseTextMessageEndEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.messageId = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return TextMessageEndEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a;
        const message = createBaseTextMessageEndEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.messageId = (_a = object.messageId) != null ? _a : "";
        return message;
    }
};
function createBaseToolCallStartEvent() {
    return {
        baseEvent: void 0,
        toolCallId: "",
        toolCallName: "",
        parentMessageId: void 0
    };
}
var ToolCallStartEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.toolCallId !== "") {
            writer.uint32(18).string(message.toolCallId);
        }
        if (message.toolCallName !== "") {
            writer.uint32(26).string(message.toolCallName);
        }
        if (message.parentMessageId !== void 0) {
            writer.uint32(34).string(message.parentMessageId);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseToolCallStartEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.toolCallId = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.toolCallName = reader.string();
                        continue;
                    }
                case 4:
                    {
                        if (tag !== 34) {
                            break;
                        }
                        message.parentMessageId = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return ToolCallStartEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b, _c;
        const message = createBaseToolCallStartEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.toolCallId = (_a = object.toolCallId) != null ? _a : "";
        message.toolCallName = (_b = object.toolCallName) != null ? _b : "";
        message.parentMessageId = (_c = object.parentMessageId) != null ? _c : void 0;
        return message;
    }
};
function createBaseToolCallArgsEvent() {
    return {
        baseEvent: void 0,
        toolCallId: "",
        delta: ""
    };
}
var ToolCallArgsEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.toolCallId !== "") {
            writer.uint32(18).string(message.toolCallId);
        }
        if (message.delta !== "") {
            writer.uint32(26).string(message.delta);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseToolCallArgsEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.toolCallId = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.delta = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return ToolCallArgsEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b;
        const message = createBaseToolCallArgsEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.toolCallId = (_a = object.toolCallId) != null ? _a : "";
        message.delta = (_b = object.delta) != null ? _b : "";
        return message;
    }
};
function createBaseToolCallEndEvent() {
    return {
        baseEvent: void 0,
        toolCallId: ""
    };
}
var ToolCallEndEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.toolCallId !== "") {
            writer.uint32(18).string(message.toolCallId);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseToolCallEndEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.toolCallId = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return ToolCallEndEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a;
        const message = createBaseToolCallEndEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.toolCallId = (_a = object.toolCallId) != null ? _a : "";
        return message;
    }
};
function createBaseStateSnapshotEvent() {
    return {
        baseEvent: void 0,
        snapshot: void 0
    };
}
var StateSnapshotEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.snapshot !== void 0) {
            Value.encode(Value.wrap(message.snapshot), writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseStateSnapshotEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.snapshot = Value.unwrap(Value.decode(reader, reader.uint32()));
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return StateSnapshotEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a;
        const message = createBaseStateSnapshotEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.snapshot = (_a = object.snapshot) != null ? _a : void 0;
        return message;
    }
};
function createBaseStateDeltaEvent() {
    return {
        baseEvent: void 0,
        delta: []
    };
}
var StateDeltaEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        for (const v of message.delta){
            JsonPatchOperation.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseStateDeltaEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.delta.push(JsonPatchOperation.decode(reader, reader.uint32()));
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return StateDeltaEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a;
        const message = createBaseStateDeltaEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.delta = ((_a = object.delta) == null ? void 0 : _a.map((e)=>JsonPatchOperation.fromPartial(e))) || [];
        return message;
    }
};
function createBaseMessagesSnapshotEvent() {
    return {
        baseEvent: void 0,
        messages: []
    };
}
var MessagesSnapshotEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        for (const v of message.messages){
            Message.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseMessagesSnapshotEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.messages.push(Message.decode(reader, reader.uint32()));
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return MessagesSnapshotEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a;
        const message = createBaseMessagesSnapshotEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.messages = ((_a = object.messages) == null ? void 0 : _a.map((e)=>Message.fromPartial(e))) || [];
        return message;
    }
};
function createBaseRawEvent() {
    return {
        baseEvent: void 0,
        event: void 0,
        source: void 0
    };
}
var RawEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.event !== void 0) {
            Value.encode(Value.wrap(message.event), writer.uint32(18).fork()).join();
        }
        if (message.source !== void 0) {
            writer.uint32(26).string(message.source);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseRawEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.event = Value.unwrap(Value.decode(reader, reader.uint32()));
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.source = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return RawEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b;
        const message = createBaseRawEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.event = (_a = object.event) != null ? _a : void 0;
        message.source = (_b = object.source) != null ? _b : void 0;
        return message;
    }
};
function createBaseCustomEvent() {
    return {
        baseEvent: void 0,
        name: "",
        value: void 0
    };
}
var CustomEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.value !== void 0) {
            Value.encode(Value.wrap(message.value), writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseCustomEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.name = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return CustomEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b;
        const message = createBaseCustomEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.name = (_a = object.name) != null ? _a : "";
        message.value = (_b = object.value) != null ? _b : void 0;
        return message;
    }
};
function createBaseRunStartedEvent() {
    return {
        baseEvent: void 0,
        threadId: "",
        runId: ""
    };
}
var RunStartedEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.threadId !== "") {
            writer.uint32(18).string(message.threadId);
        }
        if (message.runId !== "") {
            writer.uint32(26).string(message.runId);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseRunStartedEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.threadId = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.runId = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return RunStartedEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b;
        const message = createBaseRunStartedEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.threadId = (_a = object.threadId) != null ? _a : "";
        message.runId = (_b = object.runId) != null ? _b : "";
        return message;
    }
};
function createBaseRunFinishedEvent() {
    return {
        baseEvent: void 0,
        threadId: "",
        runId: "",
        result: void 0
    };
}
var RunFinishedEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.threadId !== "") {
            writer.uint32(18).string(message.threadId);
        }
        if (message.runId !== "") {
            writer.uint32(26).string(message.runId);
        }
        if (message.result !== void 0) {
            Value.encode(Value.wrap(message.result), writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseRunFinishedEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.threadId = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.runId = reader.string();
                        continue;
                    }
                case 4:
                    {
                        if (tag !== 34) {
                            break;
                        }
                        message.result = Value.unwrap(Value.decode(reader, reader.uint32()));
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return RunFinishedEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b, _c;
        const message = createBaseRunFinishedEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.threadId = (_a = object.threadId) != null ? _a : "";
        message.runId = (_b = object.runId) != null ? _b : "";
        message.result = (_c = object.result) != null ? _c : void 0;
        return message;
    }
};
function createBaseRunErrorEvent() {
    return {
        baseEvent: void 0,
        code: void 0,
        message: ""
    };
}
var RunErrorEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.code !== void 0) {
            writer.uint32(18).string(message.code);
        }
        if (message.message !== "") {
            writer.uint32(26).string(message.message);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseRunErrorEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.code = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.message = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return RunErrorEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b;
        const message = createBaseRunErrorEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.code = (_a = object.code) != null ? _a : void 0;
        message.message = (_b = object.message) != null ? _b : "";
        return message;
    }
};
function createBaseStepStartedEvent() {
    return {
        baseEvent: void 0,
        stepName: ""
    };
}
var StepStartedEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.stepName !== "") {
            writer.uint32(18).string(message.stepName);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseStepStartedEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.stepName = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return StepStartedEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a;
        const message = createBaseStepStartedEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.stepName = (_a = object.stepName) != null ? _a : "";
        return message;
    }
};
function createBaseStepFinishedEvent() {
    return {
        baseEvent: void 0,
        stepName: ""
    };
}
var StepFinishedEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.stepName !== "") {
            writer.uint32(18).string(message.stepName);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseStepFinishedEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.stepName = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return StepFinishedEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a;
        const message = createBaseStepFinishedEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.stepName = (_a = object.stepName) != null ? _a : "";
        return message;
    }
};
function createBaseTextMessageChunkEvent() {
    return {
        baseEvent: void 0,
        messageId: void 0,
        role: void 0,
        delta: void 0
    };
}
var TextMessageChunkEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.messageId !== void 0) {
            writer.uint32(18).string(message.messageId);
        }
        if (message.role !== void 0) {
            writer.uint32(26).string(message.role);
        }
        if (message.delta !== void 0) {
            writer.uint32(34).string(message.delta);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseTextMessageChunkEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.messageId = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.role = reader.string();
                        continue;
                    }
                case 4:
                    {
                        if (tag !== 34) {
                            break;
                        }
                        message.delta = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return TextMessageChunkEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b, _c;
        const message = createBaseTextMessageChunkEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.messageId = (_a = object.messageId) != null ? _a : void 0;
        message.role = (_b = object.role) != null ? _b : void 0;
        message.delta = (_c = object.delta) != null ? _c : void 0;
        return message;
    }
};
function createBaseToolCallChunkEvent() {
    return {
        baseEvent: void 0,
        toolCallId: void 0,
        toolCallName: void 0,
        parentMessageId: void 0,
        delta: void 0
    };
}
var ToolCallChunkEvent = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.baseEvent !== void 0) {
            BaseEvent.encode(message.baseEvent, writer.uint32(10).fork()).join();
        }
        if (message.toolCallId !== void 0) {
            writer.uint32(18).string(message.toolCallId);
        }
        if (message.toolCallName !== void 0) {
            writer.uint32(26).string(message.toolCallName);
        }
        if (message.parentMessageId !== void 0) {
            writer.uint32(34).string(message.parentMessageId);
        }
        if (message.delta !== void 0) {
            writer.uint32(42).string(message.delta);
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseToolCallChunkEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.baseEvent = BaseEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.toolCallId = reader.string();
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.toolCallName = reader.string();
                        continue;
                    }
                case 4:
                    {
                        if (tag !== 34) {
                            break;
                        }
                        message.parentMessageId = reader.string();
                        continue;
                    }
                case 5:
                    {
                        if (tag !== 42) {
                            break;
                        }
                        message.delta = reader.string();
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return ToolCallChunkEvent.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        var _a, _b, _c, _d;
        const message = createBaseToolCallChunkEvent();
        message.baseEvent = object.baseEvent !== void 0 && object.baseEvent !== null ? BaseEvent.fromPartial(object.baseEvent) : void 0;
        message.toolCallId = (_a = object.toolCallId) != null ? _a : void 0;
        message.toolCallName = (_b = object.toolCallName) != null ? _b : void 0;
        message.parentMessageId = (_c = object.parentMessageId) != null ? _c : void 0;
        message.delta = (_d = object.delta) != null ? _d : void 0;
        return message;
    }
};
function createBaseEvent() {
    return {
        textMessageStart: void 0,
        textMessageContent: void 0,
        textMessageEnd: void 0,
        toolCallStart: void 0,
        toolCallArgs: void 0,
        toolCallEnd: void 0,
        stateSnapshot: void 0,
        stateDelta: void 0,
        messagesSnapshot: void 0,
        raw: void 0,
        custom: void 0,
        runStarted: void 0,
        runFinished: void 0,
        runError: void 0,
        stepStarted: void 0,
        stepFinished: void 0,
        textMessageChunk: void 0,
        toolCallChunk: void 0
    };
}
var Event = {
    encode (message, writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryWriter"]()) {
        if (message.textMessageStart !== void 0) {
            TextMessageStartEvent.encode(message.textMessageStart, writer.uint32(10).fork()).join();
        }
        if (message.textMessageContent !== void 0) {
            TextMessageContentEvent.encode(message.textMessageContent, writer.uint32(18).fork()).join();
        }
        if (message.textMessageEnd !== void 0) {
            TextMessageEndEvent.encode(message.textMessageEnd, writer.uint32(26).fork()).join();
        }
        if (message.toolCallStart !== void 0) {
            ToolCallStartEvent.encode(message.toolCallStart, writer.uint32(34).fork()).join();
        }
        if (message.toolCallArgs !== void 0) {
            ToolCallArgsEvent.encode(message.toolCallArgs, writer.uint32(42).fork()).join();
        }
        if (message.toolCallEnd !== void 0) {
            ToolCallEndEvent.encode(message.toolCallEnd, writer.uint32(50).fork()).join();
        }
        if (message.stateSnapshot !== void 0) {
            StateSnapshotEvent.encode(message.stateSnapshot, writer.uint32(58).fork()).join();
        }
        if (message.stateDelta !== void 0) {
            StateDeltaEvent.encode(message.stateDelta, writer.uint32(66).fork()).join();
        }
        if (message.messagesSnapshot !== void 0) {
            MessagesSnapshotEvent.encode(message.messagesSnapshot, writer.uint32(74).fork()).join();
        }
        if (message.raw !== void 0) {
            RawEvent.encode(message.raw, writer.uint32(82).fork()).join();
        }
        if (message.custom !== void 0) {
            CustomEvent.encode(message.custom, writer.uint32(90).fork()).join();
        }
        if (message.runStarted !== void 0) {
            RunStartedEvent.encode(message.runStarted, writer.uint32(98).fork()).join();
        }
        if (message.runFinished !== void 0) {
            RunFinishedEvent.encode(message.runFinished, writer.uint32(106).fork()).join();
        }
        if (message.runError !== void 0) {
            RunErrorEvent.encode(message.runError, writer.uint32(114).fork()).join();
        }
        if (message.stepStarted !== void 0) {
            StepStartedEvent.encode(message.stepStarted, writer.uint32(122).fork()).join();
        }
        if (message.stepFinished !== void 0) {
            StepFinishedEvent.encode(message.stepFinished, writer.uint32(130).fork()).join();
        }
        if (message.textMessageChunk !== void 0) {
            TextMessageChunkEvent.encode(message.textMessageChunk, writer.uint32(138).fork()).join();
        }
        if (message.toolCallChunk !== void 0) {
            ToolCallChunkEvent.encode(message.toolCallChunk, writer.uint32(146).fork()).join();
        }
        return writer;
    },
    decode (input, length) {
        const reader = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"] ? input : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$bufbuild$2f$protobuf$2f$dist$2f$esm$2f$wire$2f$binary$2d$encoding$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryReader"](input);
        const end = length === void 0 ? reader.len : reader.pos + length;
        const message = createBaseEvent();
        while(reader.pos < end){
            const tag = reader.uint32();
            switch(tag >>> 3){
                case 1:
                    {
                        if (tag !== 10) {
                            break;
                        }
                        message.textMessageStart = TextMessageStartEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 2:
                    {
                        if (tag !== 18) {
                            break;
                        }
                        message.textMessageContent = TextMessageContentEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 3:
                    {
                        if (tag !== 26) {
                            break;
                        }
                        message.textMessageEnd = TextMessageEndEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 4:
                    {
                        if (tag !== 34) {
                            break;
                        }
                        message.toolCallStart = ToolCallStartEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 5:
                    {
                        if (tag !== 42) {
                            break;
                        }
                        message.toolCallArgs = ToolCallArgsEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 6:
                    {
                        if (tag !== 50) {
                            break;
                        }
                        message.toolCallEnd = ToolCallEndEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 7:
                    {
                        if (tag !== 58) {
                            break;
                        }
                        message.stateSnapshot = StateSnapshotEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 8:
                    {
                        if (tag !== 66) {
                            break;
                        }
                        message.stateDelta = StateDeltaEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 9:
                    {
                        if (tag !== 74) {
                            break;
                        }
                        message.messagesSnapshot = MessagesSnapshotEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 10:
                    {
                        if (tag !== 82) {
                            break;
                        }
                        message.raw = RawEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 11:
                    {
                        if (tag !== 90) {
                            break;
                        }
                        message.custom = CustomEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 12:
                    {
                        if (tag !== 98) {
                            break;
                        }
                        message.runStarted = RunStartedEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 13:
                    {
                        if (tag !== 106) {
                            break;
                        }
                        message.runFinished = RunFinishedEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 14:
                    {
                        if (tag !== 114) {
                            break;
                        }
                        message.runError = RunErrorEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 15:
                    {
                        if (tag !== 122) {
                            break;
                        }
                        message.stepStarted = StepStartedEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 16:
                    {
                        if (tag !== 130) {
                            break;
                        }
                        message.stepFinished = StepFinishedEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 17:
                    {
                        if (tag !== 138) {
                            break;
                        }
                        message.textMessageChunk = TextMessageChunkEvent.decode(reader, reader.uint32());
                        continue;
                    }
                case 18:
                    {
                        if (tag !== 146) {
                            break;
                        }
                        message.toolCallChunk = ToolCallChunkEvent.decode(reader, reader.uint32());
                        continue;
                    }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    create (base) {
        return Event.fromPartial(base != null ? base : {});
    },
    fromPartial (object) {
        const message = createBaseEvent();
        message.textMessageStart = object.textMessageStart !== void 0 && object.textMessageStart !== null ? TextMessageStartEvent.fromPartial(object.textMessageStart) : void 0;
        message.textMessageContent = object.textMessageContent !== void 0 && object.textMessageContent !== null ? TextMessageContentEvent.fromPartial(object.textMessageContent) : void 0;
        message.textMessageEnd = object.textMessageEnd !== void 0 && object.textMessageEnd !== null ? TextMessageEndEvent.fromPartial(object.textMessageEnd) : void 0;
        message.toolCallStart = object.toolCallStart !== void 0 && object.toolCallStart !== null ? ToolCallStartEvent.fromPartial(object.toolCallStart) : void 0;
        message.toolCallArgs = object.toolCallArgs !== void 0 && object.toolCallArgs !== null ? ToolCallArgsEvent.fromPartial(object.toolCallArgs) : void 0;
        message.toolCallEnd = object.toolCallEnd !== void 0 && object.toolCallEnd !== null ? ToolCallEndEvent.fromPartial(object.toolCallEnd) : void 0;
        message.stateSnapshot = object.stateSnapshot !== void 0 && object.stateSnapshot !== null ? StateSnapshotEvent.fromPartial(object.stateSnapshot) : void 0;
        message.stateDelta = object.stateDelta !== void 0 && object.stateDelta !== null ? StateDeltaEvent.fromPartial(object.stateDelta) : void 0;
        message.messagesSnapshot = object.messagesSnapshot !== void 0 && object.messagesSnapshot !== null ? MessagesSnapshotEvent.fromPartial(object.messagesSnapshot) : void 0;
        message.raw = object.raw !== void 0 && object.raw !== null ? RawEvent.fromPartial(object.raw) : void 0;
        message.custom = object.custom !== void 0 && object.custom !== null ? CustomEvent.fromPartial(object.custom) : void 0;
        message.runStarted = object.runStarted !== void 0 && object.runStarted !== null ? RunStartedEvent.fromPartial(object.runStarted) : void 0;
        message.runFinished = object.runFinished !== void 0 && object.runFinished !== null ? RunFinishedEvent.fromPartial(object.runFinished) : void 0;
        message.runError = object.runError !== void 0 && object.runError !== null ? RunErrorEvent.fromPartial(object.runError) : void 0;
        message.stepStarted = object.stepStarted !== void 0 && object.stepStarted !== null ? StepStartedEvent.fromPartial(object.stepStarted) : void 0;
        message.stepFinished = object.stepFinished !== void 0 && object.stepFinished !== null ? StepFinishedEvent.fromPartial(object.stepFinished) : void 0;
        message.textMessageChunk = object.textMessageChunk !== void 0 && object.textMessageChunk !== null ? TextMessageChunkEvent.fromPartial(object.textMessageChunk) : void 0;
        message.toolCallChunk = object.toolCallChunk !== void 0 && object.toolCallChunk !== null ? ToolCallChunkEvent.fromPartial(object.toolCallChunk) : void 0;
        return message;
    }
};
function longToNumber(int64) {
    const num = globalThis.Number(int64.toString());
    if (num > globalThis.Number.MAX_SAFE_INTEGER) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    if (num < globalThis.Number.MIN_SAFE_INTEGER) {
        throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    }
    return num;
}
// src/proto.ts
function toCamelCase(str) {
    return str.toLowerCase().replace(/_([a-z])/g, (_, letter)=>letter.toUpperCase());
}
function encode(event) {
    const oneofField = toCamelCase(event.type);
    const { type, timestamp, rawEvent, ...rest } = event;
    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].MESSAGES_SNAPSHOT) {
        rest.messages = rest.messages.map((message)=>{
            const untypedMessage = message;
            if (untypedMessage.toolCalls === void 0) {
                return {
                    ...message,
                    toolCalls: []
                };
            }
            return message;
        });
    }
    if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STATE_DELTA) {
        rest.delta = rest.delta.map((operation)=>({
                ...operation,
                op: JsonPatchOperationType[operation.op.toUpperCase()]
            }));
    }
    const eventMessage = {
        [oneofField]: {
            baseEvent: {
                type: EventType[event.type],
                timestamp,
                rawEvent
            },
            ...rest
        }
    };
    return Event.encode(eventMessage).finish();
}
function decode(data) {
    var _a;
    const event = Event.decode(data);
    const decoded = Object.values(event).find((value)=>value !== void 0);
    if (!decoded) {
        throw new Error("Invalid event");
    }
    decoded.type = EventType[decoded.baseEvent.type];
    decoded.timestamp = decoded.baseEvent.timestamp;
    decoded.rawEvent = decoded.baseEvent.rawEvent;
    if (decoded.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].MESSAGES_SNAPSHOT) {
        for (const message of decoded.messages){
            const untypedMessage = message;
            if (((_a = untypedMessage.toolCalls) == null ? void 0 : _a.length) === 0) {
                untypedMessage.toolCalls = void 0;
            }
        }
    }
    if (decoded.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STATE_DELTA) {
        for (const operation of decoded.delta){
            operation.op = JsonPatchOperationType[operation.op].toLowerCase();
            Object.keys(operation).forEach((key)=>{
                if (operation[key] === void 0) {
                    delete operation[key];
                }
            });
        }
    }
    Object.keys(decoded).forEach((key)=>{
        if (decoded[key] === void 0) {
            delete decoded[key];
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventSchemas"].parse(decoded);
}
// src/index.ts
var AGUI_MEDIA_TYPE = "application/vnd.ag-ui.event+proto";
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/compare-versions/lib/esm/utils.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareSegments",
    ()=>compareSegments,
    "semver",
    ()=>semver,
    "validateAndParse",
    ()=>validateAndParse
]);
const semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
const validateAndParse = (version)=>{
    if (typeof version !== 'string') {
        throw new TypeError('Invalid argument expected string');
    }
    const match = version.match(semver);
    if (!match) {
        throw new Error(`Invalid argument not valid semver ('${version}' received)`);
    }
    match.shift();
    return match;
};
const isWildcard = (s)=>s === '*' || s === 'x' || s === 'X';
const tryParse = (v)=>{
    const n = parseInt(v, 10);
    return isNaN(n) ? v : n;
};
const forceType = (a, b)=>typeof a !== typeof b ? [
        String(a),
        String(b)
    ] : [
        a,
        b
    ];
const compareStrings = (a, b)=>{
    if (isWildcard(a) || isWildcard(b)) return 0;
    const [ap, bp] = forceType(tryParse(a), tryParse(b));
    if (ap > bp) return 1;
    if (ap < bp) return -1;
    return 0;
};
const compareSegments = (a, b)=>{
    for(let i = 0; i < Math.max(a.length, b.length); i++){
        const r = compareStrings(a[i] || '0', b[i] || '0');
        if (r !== 0) return r;
    }
    return 0;
}; //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/compare-versions/lib/esm/compareVersions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareVersions",
    ()=>compareVersions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$compare$2d$versions$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/compare-versions/lib/esm/utils.js [app-route] (ecmascript)");
;
const compareVersions = (v1, v2)=>{
    // validate input and split into segments
    const n1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$compare$2d$versions$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAndParse"])(v1);
    const n2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$compare$2d$versions$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateAndParse"])(v2);
    // pop off the patch
    const p1 = n1.pop();
    const p2 = n2.pop();
    // validate numbers
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$compare$2d$versions$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareSegments"])(n1, n2);
    if (r !== 0) return r;
    // validate pre-release
    if (p1 && p2) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$compare$2d$versions$2f$lib$2f$esm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareSegments"])(p1.split('.'), p2.split('.'));
    } else if (p1 || p2) {
        return p1 ? -1 : 1;
    }
    return 0;
}; //# sourceMappingURL=compareVersions.js.map
}),
"[project]/node_modules/@ag-ui/client/dist/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractAgent",
    ()=>W,
    "BackwardCompatibility_0_0_39",
    ()=>J,
    "FilterToolCallsMiddleware",
    ()=>Q,
    "FunctionMiddleware",
    ()=>K,
    "HttpAgent",
    ()=>ot,
    "Middleware",
    ()=>k,
    "compactEvents",
    ()=>he,
    "convertToLegacyEvents",
    ()=>at,
    "defaultApplyEvents",
    ()=>$,
    "parseProtoStream",
    ()=>nt,
    "parseSSEStream",
    ()=>et,
    "randomUUID",
    ()=>Re,
    "runHttpRequest",
    ()=>tt,
    "structuredClone_",
    ()=>y,
    "transformChunks",
    ()=>j,
    "transformHttpEventStream",
    ()=>st,
    "verifyEvents",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ag-ui/core/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ag-ui/client/node_modules/rxjs/dist/cjs/operators/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ag-ui/client/node_modules/rxjs/dist/cjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm/v4.js [app-route] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/fast-json-patch/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$core$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fast-json-patch/module/core.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$untruncate$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/untruncate-json/dist/esm/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$proto$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ag-ui/proto/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$compare$2d$versions$2f$lib$2f$esm$2f$compareVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/compare-versions/lib/esm/compareVersions.js [app-route] (ecmascript)");
var xt = Object.defineProperty, _t = Object.defineProperties;
var Nt = Object.getOwnPropertyDescriptors;
var Y = Object.getOwnPropertySymbols;
var it = Object.prototype.hasOwnProperty, lt = Object.prototype.propertyIsEnumerable;
var rt = (l, a, e)=>a in l ? xt(l, a, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : l[a] = e, N = (l, a)=>{
    for(var e in a || (a = {}))it.call(a, e) && rt(l, e, a[e]);
    if (Y) for (var e of Y(a))lt.call(a, e) && rt(l, e, a[e]);
    return l;
}, G = (l, a)=>_t(l, Nt(a));
var gt = (l, a)=>{
    var e = {};
    for(var n in l)it.call(l, n) && a.indexOf(n) < 0 && (e[n] = l[n]);
    if (l != null && Y) for (var n of Y(l))a.indexOf(n) < 0 && lt.call(l, n) && (e[n] = l[n]);
    return e;
};
;
;
;
;
var y = (l)=>{
    if (typeof structuredClone == "function") return structuredClone(l);
    try {
        return JSON.parse(JSON.stringify(l));
    } catch (a) {
        return N({}, l);
    }
};
function Re() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
}
;
async function x(l, a, e, n) {
    let t = a, s = e, r;
    for (let o of l)try {
        let i = await n(o, y(t), y(s));
        if (i === void 0) continue;
        if (i.messages !== void 0 && (t = i.messages), i.state !== void 0 && (s = i.state), r = i.stopPropagation, r === !0) break;
    } catch (i) {
        ("TURBOPACK compile-time value", "development") === "test" || process.env.JEST_WORKER_ID !== void 0 || console.error("Subscriber error:", i);
        continue;
    }
    return N(N(N({}, JSON.stringify(t) !== JSON.stringify(a) ? {
        messages: t
    } : {}), JSON.stringify(s) !== JSON.stringify(e) ? {
        state: s
    } : {}), r !== void 0 ? {
        stopPropagation: r
    } : {});
}
;
var $ = (l, a, e, n)=>{
    let t = y(e.messages), s = y(l.state), r = {}, o = (d)=>{
        d.messages !== void 0 && (t = d.messages, r.messages = d.messages), d.state !== void 0 && (s = d.state, r.state = d.state);
    }, i = ()=>{
        let d = y(r);
        return r = {}, d.messages !== void 0 || d.state !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(d) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EMPTY"];
    };
    return a.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concatMap"])(async (d)=>{
        var T, v, c, b, U;
        let I = await x(n, t, s, (E, g, p)=>{
            var m;
            return (m = E.onEvent) == null ? void 0 : m.call(E, {
                event: d,
                agent: e,
                input: l,
                messages: g,
                state: p
            });
        });
        if (o(I), I.stopPropagation === !0) return i();
        switch(d.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_START:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onTextMessageStartEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    if (o(E), E.stopPropagation !== !0) {
                        let { messageId: g, role: p = "assistant" } = d, m = {
                            id: g,
                            role: p,
                            content: ""
                        };
                        t.push(m), o({
                            messages: t
                        });
                    }
                    return i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_CONTENT:
                {
                    let { messageId: E, delta: g } = d, p = t.find((u)=>u.id === E);
                    if (!p) return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${E}'`), i();
                    let m = await x(n, t, s, (u, A, h)=>{
                        var _;
                        return (_ = u.onTextMessageContentEvent) == null ? void 0 : _.call(u, {
                            event: d,
                            messages: A,
                            state: h,
                            agent: e,
                            input: l,
                            textMessageBuffer: typeof p.content == "string" ? p.content : ""
                        });
                    });
                    if (o(m), m.stopPropagation !== !0) {
                        let u = typeof p.content == "string" ? p.content : "";
                        p.content = `${u}${g}`, o({
                            messages: t
                        });
                    }
                    return i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_END:
                {
                    let { messageId: E } = d, g = t.find((m)=>m.id === E);
                    if (!g) return console.warn(`TEXT_MESSAGE_END: No message found with ID '${E}'`), i();
                    let p = await x(n, t, s, (m, u, A)=>{
                        var h;
                        return (h = m.onTextMessageEndEvent) == null ? void 0 : h.call(m, {
                            event: d,
                            messages: u,
                            state: A,
                            agent: e,
                            input: l,
                            textMessageBuffer: typeof g.content == "string" ? g.content : ""
                        });
                    });
                    return o(p), await Promise.all(n.map((m)=>{
                        var u;
                        (u = m.onNewMessage) == null || u.call(m, {
                            message: g,
                            messages: t,
                            state: s,
                            agent: e,
                            input: l
                        });
                    })), i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_START:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onToolCallStartEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    if (o(E), E.stopPropagation !== !0) {
                        let { toolCallId: g, toolCallName: p, parentMessageId: m } = d, u;
                        m && t.length > 0 && t[t.length - 1].id === m ? u = t[t.length - 1] : (u = {
                            id: m || g,
                            role: "assistant",
                            toolCalls: []
                        }, t.push(u)), (T = u.toolCalls) != null || (u.toolCalls = []), u.toolCalls.push({
                            id: g,
                            type: "function",
                            function: {
                                name: p,
                                arguments: ""
                            }
                        }), o({
                            messages: t
                        });
                    }
                    return i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_ARGS:
                {
                    let { toolCallId: E, delta: g } = d, p = t.find((A)=>{
                        var h;
                        return (h = A.toolCalls) == null ? void 0 : h.some((_)=>_.id === E);
                    });
                    if (!p) return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${E}'`), i();
                    let m = p.toolCalls.find((A)=>A.id === E);
                    if (!m) return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${E}'`), i();
                    let u = await x(n, t, s, (A, h, _)=>{
                        var Z;
                        let H = m.function.arguments, F = m.function.name, X = {};
                        try {
                            X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$untruncate$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(H);
                        } catch (ye) {}
                        return (Z = A.onToolCallArgsEvent) == null ? void 0 : Z.call(A, {
                            event: d,
                            messages: h,
                            state: _,
                            agent: e,
                            input: l,
                            toolCallBuffer: H,
                            toolCallName: F,
                            partialToolCallArgs: X
                        });
                    });
                    return o(u), u.stopPropagation !== !0 && (m.function.arguments += g, o({
                        messages: t
                    })), i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_END:
                {
                    let { toolCallId: E } = d, g = t.find((u)=>{
                        var A;
                        return (A = u.toolCalls) == null ? void 0 : A.some((h)=>h.id === E);
                    });
                    if (!g) return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${E}'`), i();
                    let p = g.toolCalls.find((u)=>u.id === E);
                    if (!p) return console.warn(`TOOL_CALL_END: No tool call found with ID '${E}'`), i();
                    let m = await x(n, t, s, (u, A, h)=>{
                        var X;
                        let _ = p.function.arguments, H = p.function.name, F = {};
                        try {
                            F = JSON.parse(_);
                        } catch (Z) {}
                        return (X = u.onToolCallEndEvent) == null ? void 0 : X.call(u, {
                            event: d,
                            messages: A,
                            state: h,
                            agent: e,
                            input: l,
                            toolCallName: H,
                            toolCallArgs: F
                        });
                    });
                    return o(m), await Promise.all(n.map((u)=>{
                        var A;
                        (A = u.onNewToolCall) == null || A.call(u, {
                            toolCall: p,
                            messages: t,
                            state: s,
                            agent: e,
                            input: l
                        });
                    })), i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_RESULT:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onToolCallResultEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    if (o(E), E.stopPropagation !== !0) {
                        let { messageId: g, toolCallId: p, content: m, role: u } = d, A = {
                            id: g,
                            toolCallId: p,
                            role: u || "tool",
                            content: m
                        };
                        t.push(A), await Promise.all(n.map((h)=>{
                            var _;
                            (_ = h.onNewMessage) == null || _.call(h, {
                                message: A,
                                messages: t,
                                state: s,
                                agent: e,
                                input: l
                            });
                        })), o({
                            messages: t
                        });
                    }
                    return i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STATE_SNAPSHOT:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onStateSnapshotEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    if (o(E), E.stopPropagation !== !0) {
                        let { snapshot: g } = d;
                        s = g, o({
                            state: s
                        });
                    }
                    return i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STATE_DELTA:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onStateDeltaEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    if (o(E), E.stopPropagation !== !0) {
                        let { delta: g } = d;
                        try {
                            s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$core$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPatch"])(s, g, !0, !1).newDocument, o({
                                state: s
                            });
                        } catch (p) {
                            let m = p instanceof Error ? p.message : String(p);
                            console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(s, null, 2)}
Patch operations: ${JSON.stringify(g, null, 2)}
Error: ${m}`);
                        }
                    }
                    return i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].MESSAGES_SNAPSHOT:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onMessagesSnapshotEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    if (o(E), E.stopPropagation !== !0) {
                        let { messages: g } = d;
                        t = g, o({
                            messages: t
                        });
                    }
                    return i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].ACTIVITY_SNAPSHOT:
                {
                    let E = d, g = t.findIndex((h)=>h.id === E.messageId), p = g >= 0 ? t[g] : void 0, m = (p == null ? void 0 : p.role) === "activity" ? p : void 0, u = (v = E.replace) != null ? v : !0, A = await x(n, t, s, (h, _, H)=>{
                        var F;
                        return (F = h.onActivitySnapshotEvent) == null ? void 0 : F.call(h, {
                            event: E,
                            messages: _,
                            state: H,
                            agent: e,
                            input: l,
                            activityMessage: m,
                            existingMessage: p
                        });
                    });
                    if (o(A), A.stopPropagation !== !0) {
                        let h = {
                            id: E.messageId,
                            role: "activity",
                            activityType: E.activityType,
                            content: y(E.content)
                        }, _;
                        g === -1 ? (t.push(h), _ = h) : m ? u && (t[g] = G(N({}, m), {
                            activityType: E.activityType,
                            content: y(E.content)
                        })) : u && (t[g] = h, _ = h), o({
                            messages: t
                        }), _ && await Promise.all(n.map((H)=>{
                            var F;
                            return (F = H.onNewMessage) == null ? void 0 : F.call(H, {
                                message: _,
                                messages: t,
                                state: s,
                                agent: e,
                                input: l
                            });
                        }));
                    }
                    return i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].ACTIVITY_DELTA:
                {
                    let E = d, g = t.findIndex((A)=>A.id === E.messageId);
                    if (g === -1) return console.warn(`ACTIVITY_DELTA: No message found with ID '${E.messageId}' to apply patch`), i();
                    let p = t[g];
                    if (p.role !== "activity") return console.warn(`ACTIVITY_DELTA: Message '${E.messageId}' is not an activity message`), i();
                    let m = p, u = await x(n, t, s, (A, h, _)=>{
                        var H;
                        return (H = A.onActivityDeltaEvent) == null ? void 0 : H.call(A, {
                            event: E,
                            messages: h,
                            state: _,
                            agent: e,
                            input: l,
                            activityMessage: m
                        });
                    });
                    if (o(u), u.stopPropagation !== !0) try {
                        let A = y((c = m.content) != null ? c : {}), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$core$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPatch"])(A, (b = E.patch) != null ? b : [], !0, !1).newDocument;
                        t[g] = G(N({}, m), {
                            content: y(_),
                            activityType: E.activityType
                        }), o({
                            messages: t
                        });
                    } catch (A) {
                        let h = A instanceof Error ? A.message : String(A);
                        console.warn(`Failed to apply activity patch for '${E.messageId}': ${h}`);
                    }
                    return i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RAW:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onRawEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    return o(E), i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].CUSTOM:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onCustomEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    return o(E), i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_STARTED:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onRunStartedEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    if (o(E), E.stopPropagation !== !0) {
                        let g = d;
                        if ((U = g.input) != null && U.messages) {
                            for (let p of g.input.messages)t.find((u)=>u.id === p.id) || t.push(p);
                            o({
                                messages: t
                            });
                        }
                    }
                    return i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_FINISHED:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onRunFinishedEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l,
                            result: d.result
                        });
                    });
                    return o(E), i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_ERROR:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onRunErrorEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    return o(E), i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STEP_STARTED:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onStepStartedEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    return o(E), i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STEP_FINISHED:
                {
                    let E = await x(n, t, s, (g, p, m)=>{
                        var u;
                        return (u = g.onStepFinishedEvent) == null ? void 0 : u.call(g, {
                            event: d,
                            messages: p,
                            state: m,
                            agent: e,
                            input: l
                        });
                    });
                    return o(E), i();
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_CHUNK:
                throw new Error("TEXT_MESSAGE_CHUNK must be tranformed before being applied");
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_CHUNK:
                throw new Error("TOOL_CALL_CHUNK must be tranformed before being applied");
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_START:
                return i();
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_END:
                return i();
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_TEXT_MESSAGE_START:
                return i();
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_TEXT_MESSAGE_CONTENT:
                return i();
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_TEXT_MESSAGE_END:
                return i();
        }
        let S = d.type;
        return i();
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeAll"])(), n.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultIfEmpty"])({}) : (d)=>d);
};
;
;
;
var z = (l)=>(a)=>{
        let e = new Map, n = new Map, t = !1, s = !1, r = !1, o = new Map, i = !1, d = !1, I = !1, S = ()=>{
            e.clear(), n.clear(), o.clear(), i = !1, d = !1, t = !1, s = !1, I = !0;
        };
        return a.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((T)=>{
            let v = T.type;
            if (l && console.debug("[VERIFY]:", JSON.stringify(T)), s) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send event type '${v}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));
            if (t && v !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_ERROR && v !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_STARTED) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send event type '${v}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));
            if (r) {
                if (v === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_STARTED) {
                    if (I && !t) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"]("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));
                    t && S();
                }
            } else if (r = !0, v !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_STARTED && v !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_ERROR) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"]("First event must be 'RUN_STARTED'"));
            switch(v){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_START:
                    {
                        let c = T.messageId;
                        return e.has(c) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${c}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`)) : (e.set(c, !0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T));
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_CONTENT:
                    {
                        let c = T.messageId;
                        return e.has(c) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${c}'. Start a text message with 'TEXT_MESSAGE_START' first.`));
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_END:
                    {
                        let c = T.messageId;
                        return e.has(c) ? (e.delete(c), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${c}'. A 'TEXT_MESSAGE_START' event must be sent first.`));
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_START:
                    {
                        let c = T.toolCallId;
                        return n.has(c) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${c}' is already in progress. Complete it with 'TOOL_CALL_END' first.`)) : (n.set(c, !0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T));
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_ARGS:
                    {
                        let c = T.toolCallId;
                        return n.has(c) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${c}'. Start a tool call with 'TOOL_CALL_START' first.`));
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_END:
                    {
                        let c = T.toolCallId;
                        return n.has(c) ? (n.delete(c), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${c}'. A 'TOOL_CALL_START' event must be sent first.`));
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STEP_STARTED:
                    {
                        let c = T.stepName;
                        return o.has(c) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Step "${c}" is already active for 'STEP_STARTED'`)) : (o.set(c, !0), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T));
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STEP_FINISHED:
                    {
                        let c = T.stepName;
                        return o.has(c) ? (o.delete(c), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send 'STEP_FINISHED' for step "${c}" that was not started`));
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_STARTED:
                    return I = !0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_FINISHED:
                    {
                        if (o.size > 0) {
                            let c = Array.from(o.keys()).join(", ");
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send 'RUN_FINISHED' while steps are still active: ${c}`));
                        }
                        if (e.size > 0) {
                            let c = Array.from(e.keys()).join(", ");
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send 'RUN_FINISHED' while text messages are still active: ${c}`));
                        }
                        if (n.size > 0) {
                            let c = Array.from(n.keys()).join(", ");
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"](`Cannot send 'RUN_FINISHED' while tool calls are still active: ${c}`));
                        }
                        return t = !0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T);
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_ERROR:
                    return s = !0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].CUSTOM:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T);
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_TEXT_MESSAGE_START:
                    return i ? d ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"]("Cannot send 'THINKING_TEXT_MESSAGE_START' event: A thinking message is already in progress. Complete it with 'THINKING_TEXT_MESSAGE_END' first.")) : (d = !0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"]("Cannot send 'THINKING_TEXT_MESSAGE_START' event: A thinking step is not in progress. Create one with 'THINKING_START' first."));
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_TEXT_MESSAGE_CONTENT:
                    return d ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"]("Cannot send 'THINKING_TEXT_MESSAGE_CONTENT' event: No active thinking message found. Start a message with 'THINKING_TEXT_MESSAGE_START' first."));
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_TEXT_MESSAGE_END:
                    return d ? (d = !1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"]("Cannot send 'THINKING_TEXT_MESSAGE_END' event: No active thinking message found. A 'THINKING_TEXT_MESSAGE_START' event must be sent first."));
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_START:
                    return i ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"]("Cannot send 'THINKING_START' event: A thinking step is already in progress. End it with 'THINKING_END' first.")) : (i = !0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T));
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_END:
                    return i ? (i = !1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIError"]("Cannot send 'THINKING_END' event: No active thinking step found. A 'THINKING_START' event must be sent first."));
                default:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(T);
            }
        }));
    };
;
;
;
;
var tt = (l, a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defer"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(fetch(l, a))).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["switchMap"])((e)=>{
        var s;
        if (!e.ok) {
            let r = e.headers.get("content-type") || "";
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(e.text()).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((o)=>{
                let i = o;
                if (r.includes("application/json")) try {
                    i = JSON.parse(o);
                } catch (I) {}
                let d = new Error(`HTTP ${e.status}: ${typeof i == "string" ? i : JSON.stringify(i)}`);
                return d.status = e.status, d.payload = i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>d);
            }));
        }
        let n = {
            type: "headers",
            status: e.status,
            headers: e.headers
        }, t = (s = e.body) == null ? void 0 : s.getReader();
        return t ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Observable"]((r)=>(r.next(n), (async ()=>{
                try {
                    for(;;){
                        let { done: o, value: i } = await t.read();
                        if (o) break;
                        let d = {
                            type: "data",
                            data: i
                        };
                        r.next(d);
                    }
                    r.complete();
                } catch (o) {
                    r.error(o);
                }
            })(), ()=>{
                t.cancel().catch((o)=>{
                    if ((o == null ? void 0 : o.name) !== "AbortError") throw o;
                });
            })) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["throwError"])(()=>new Error("Failed to getReader() from response"));
    }));
;
var et = (l)=>{
    let a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subject"], e = new TextDecoder("utf-8", {
        fatal: !1
    }), n = "";
    l.subscribe({
        next: (s)=>{
            if (s.type !== "headers" && s.type === "data" && s.data) {
                let r = e.decode(s.data, {
                    stream: !0
                });
                n += r;
                let o = n.split(/\n\n/);
                n = o.pop() || "";
                for (let i of o)t(i);
            }
        },
        error: (s)=>a.error(s),
        complete: ()=>{
            n && (n += e.decode(), t(n)), a.complete();
        }
    });
    function t(s) {
        let r = s.split(`
`), o = [];
        for (let i of r)i.startsWith("data: ") && o.push(i.slice(6));
        if (o.length > 0) try {
            let i = o.join(`
`), d = JSON.parse(i);
            a.next(d);
        } catch (i) {
            a.error(i);
        }
    }
    return a.asObservable();
};
;
;
var nt = (l)=>{
    let a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subject"], e = new Uint8Array(0);
    l.subscribe({
        next: (t)=>{
            if (t.type !== "headers" && t.type === "data" && t.data) {
                let s = new Uint8Array(e.length + t.data.length);
                s.set(e, 0), s.set(t.data, e.length), e = s, n();
            }
        },
        error: (t)=>a.error(t),
        complete: ()=>{
            if (e.length > 0) try {
                n();
            } catch (t) {
                console.warn("Incomplete or invalid protocol buffer data at stream end");
            }
            a.complete();
        }
    });
    function n() {
        for(; e.length >= 4;){
            let r = 4 + new DataView(e.buffer, e.byteOffset, 4).getUint32(0, !1);
            if (e.length < r) break;
            try {
                let o = e.slice(4, r), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$proto$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"](o);
                a.next(i), e = e.slice(r);
            } catch (o) {
                let i = o instanceof Error ? o.message : String(o);
                a.error(new Error(`Failed to decode protocol buffer message: ${i}`));
                return;
            }
        }
    }
    return a.asObservable();
};
;
;
var st = (l)=>{
    let a = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subject"], e = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReplaySubject"], n = !1;
    return l.subscribe({
        next: (t)=>{
            e.next(t), t.type === "headers" && !n ? (n = !0, t.headers.get("content-type") === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$proto$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUI_MEDIA_TYPE"] ? nt(e).subscribe({
                next: (r)=>a.next(r),
                error: (r)=>a.error(r),
                complete: ()=>a.complete()
            }) : et(e).subscribe({
                next: (r)=>{
                    try {
                        let o = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventSchemas"].parse(r);
                        a.next(o);
                    } catch (o) {
                        a.error(o);
                    }
                },
                error: (r)=>{
                    if ((r == null ? void 0 : r.name) === "AbortError") {
                        a.next({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_ERROR,
                            rawEvent: r
                        }), a.complete();
                        return;
                    }
                    return a.error(r);
                },
                complete: ()=>a.complete()
            })) : n || a.error(new Error("No headers event received before data events"));
        },
        error: (t)=>{
            e.error(t), a.error(t);
        },
        complete: ()=>{
            e.complete();
        }
    }), a.asObservable();
};
;
;
;
;
var C = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "TextMessageStart",
    "TextMessageContent",
    "TextMessageEnd",
    "ActionExecutionStart",
    "ActionExecutionArgs",
    "ActionExecutionEnd",
    "ActionExecutionResult",
    "AgentStateMessage",
    "MetaEvent",
    "RunStarted",
    "RunFinished",
    "RunError",
    "NodeStarted",
    "NodeFinished"
]), Vt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "LangGraphInterruptEvent",
    "PredictState",
    "Exit"
]), Wt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(C.enum.TextMessageStart),
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    parentMessageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}), Yt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(C.enum.TextMessageContent),
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
}), qt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(C.enum.TextMessageEnd),
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
}), Qt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(C.enum.ActionExecutionStart),
    actionExecutionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    actionName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    parentMessageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}), Zt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(C.enum.ActionExecutionArgs),
    actionExecutionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    args: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
}), te = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(C.enum.ActionExecutionEnd),
    actionExecutionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
}), ee = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(C.enum.ActionExecutionResult),
    actionName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    actionExecutionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
}), ne = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(C.enum.AgentStateMessage),
    threadId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    agentName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    nodeName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    runId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    active: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    running: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
}), se = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(C.enum.MetaEvent),
    name: Vt,
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()
}), ae = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(C.enum.RunError),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}), Qn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion("type", [
    Wt,
    Yt,
    qt,
    Qt,
    Zt,
    te,
    ee,
    ne,
    se,
    ae
]), Zn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    parentMessageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}), ts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    arguments: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
    parentMessageId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}), es = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(),
    actionExecutionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    actionName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
;
var le = (l)=>{
    if (typeof l == "string") return l;
    if (!Array.isArray(l)) return;
    let a = l.filter((e)=>e.type === "text").map((e)=>e.text).filter((e)=>e.length > 0);
    if (a.length !== 0) return a.join(`
`);
}, at = (l, a, e)=>(n)=>{
        let t = {}, s = !0, r = !0, o = "", i = null, d = null, I = [], S = {}, T = (v)=>{
            typeof v == "object" && v !== null && ("messages" in v && delete v.messages, t = v);
        };
        return n.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((v)=>{
            switch(v.type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_START:
                    {
                        let c = v;
                        return [
                            {
                                type: C.enum.TextMessageStart,
                                messageId: c.messageId,
                                role: c.role
                            }
                        ];
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_CONTENT:
                    {
                        let c = v;
                        return [
                            {
                                type: C.enum.TextMessageContent,
                                messageId: c.messageId,
                                content: c.delta
                            }
                        ];
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_END:
                    {
                        let c = v;
                        return [
                            {
                                type: C.enum.TextMessageEnd,
                                messageId: c.messageId
                            }
                        ];
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_START:
                    {
                        let c = v;
                        return I.push({
                            id: c.toolCallId,
                            type: "function",
                            function: {
                                name: c.toolCallName,
                                arguments: ""
                            }
                        }), r = !0, S[c.toolCallId] = c.toolCallName, [
                            {
                                type: C.enum.ActionExecutionStart,
                                actionExecutionId: c.toolCallId,
                                actionName: c.toolCallName,
                                parentMessageId: c.parentMessageId
                            }
                        ];
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_ARGS:
                    {
                        let c = v, b = I.find((E)=>E.id === c.toolCallId);
                        if (!b) return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${c.toolCallId}'`), [];
                        b.function.arguments += c.delta;
                        let U = !1;
                        if (d) {
                            let E = d.find((g)=>g.tool == b.function.name);
                            if (E) try {
                                let g = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$untruncate$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(b.function.arguments));
                                E.tool_argument && E.tool_argument in g ? (T(G(N({}, t), {
                                    [E.state_key]: g[E.tool_argument]
                                })), U = !0) : E.tool_argument || (T(G(N({}, t), {
                                    [E.state_key]: g
                                })), U = !0);
                            } catch (g) {}
                        }
                        return [
                            {
                                type: C.enum.ActionExecutionArgs,
                                actionExecutionId: c.toolCallId,
                                args: c.delta
                            },
                            ...U ? [
                                {
                                    type: C.enum.AgentStateMessage,
                                    threadId: l,
                                    agentName: e,
                                    nodeName: o,
                                    runId: a,
                                    running: s,
                                    role: "assistant",
                                    state: JSON.stringify(t),
                                    active: r
                                }
                            ] : []
                        ];
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_END:
                    {
                        let c = v;
                        return [
                            {
                                type: C.enum.ActionExecutionEnd,
                                actionExecutionId: c.toolCallId
                            }
                        ];
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_RESULT:
                    {
                        let c = v;
                        return [
                            {
                                type: C.enum.ActionExecutionResult,
                                actionExecutionId: c.toolCallId,
                                result: c.content,
                                actionName: S[c.toolCallId] || "unknown"
                            }
                        ];
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RAW:
                    return [];
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].CUSTOM:
                    {
                        let c = v;
                        switch(c.name){
                            case "Exit":
                                s = !1;
                                break;
                            case "PredictState":
                                d = c.value;
                                break;
                        }
                        return [
                            {
                                type: C.enum.MetaEvent,
                                name: c.name,
                                value: c.value
                            }
                        ];
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STATE_SNAPSHOT:
                    return T(v.snapshot), [
                        {
                            type: C.enum.AgentStateMessage,
                            threadId: l,
                            agentName: e,
                            nodeName: o,
                            runId: a,
                            running: s,
                            role: "assistant",
                            state: JSON.stringify(t),
                            active: r
                        }
                    ];
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STATE_DELTA:
                    {
                        let b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$json$2d$patch$2f$module$2f$core$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyPatch"])(t, v.delta, !0, !1);
                        return b ? (T(b.newDocument), [
                            {
                                type: C.enum.AgentStateMessage,
                                threadId: l,
                                agentName: e,
                                nodeName: o,
                                runId: a,
                                running: s,
                                role: "assistant",
                                state: JSON.stringify(t),
                                active: r
                            }
                        ]) : [];
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].MESSAGES_SNAPSHOT:
                    return i = v.messages, [
                        {
                            type: C.enum.AgentStateMessage,
                            threadId: l,
                            agentName: e,
                            nodeName: o,
                            runId: a,
                            running: s,
                            role: "assistant",
                            state: JSON.stringify(N(N({}, t), i ? {
                                messages: i
                            } : {})),
                            active: !0
                        }
                    ];
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_STARTED:
                    return [];
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_FINISHED:
                    return i && (t.messages = i), Object.keys(t).length === 0 ? [] : [
                        {
                            type: C.enum.AgentStateMessage,
                            threadId: l,
                            agentName: e,
                            nodeName: o,
                            runId: a,
                            running: s,
                            role: "assistant",
                            state: JSON.stringify(N(N({}, t), i ? {
                                messages: ge(i)
                            } : {})),
                            active: !1
                        }
                    ];
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_ERROR:
                    {
                        let c = v;
                        return [
                            {
                                type: C.enum.RunError,
                                message: c.message,
                                code: c.code
                            }
                        ];
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STEP_STARTED:
                    return o = v.stepName, I = [], d = null, [
                        {
                            type: C.enum.AgentStateMessage,
                            threadId: l,
                            agentName: e,
                            nodeName: o,
                            runId: a,
                            running: s,
                            role: "assistant",
                            state: JSON.stringify(t),
                            active: !0
                        }
                    ];
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STEP_FINISHED:
                    return I = [], d = null, [
                        {
                            type: C.enum.AgentStateMessage,
                            threadId: l,
                            agentName: e,
                            nodeName: o,
                            runId: a,
                            running: s,
                            role: "assistant",
                            state: JSON.stringify(t),
                            active: !1
                        }
                    ];
                default:
                    return [];
            }
        }));
    };
function ge(l) {
    var e;
    let a = [];
    for (let n of l)if (n.role === "assistant" || n.role === "user" || n.role === "system") {
        let t = le(n.content);
        if (t) {
            let s = {
                id: n.id,
                role: n.role,
                content: t
            };
            a.push(s);
        }
        if (n.role === "assistant" && n.toolCalls && n.toolCalls.length > 0) for (let s of n.toolCalls){
            let r = {
                id: s.id,
                name: s.function.name,
                arguments: JSON.parse(s.function.arguments),
                parentMessageId: n.id
            };
            a.push(r);
        }
    } else if (n.role === "tool") {
        let t = "unknown";
        for (let r of l)if (r.role === "assistant" && (e = r.toolCalls) != null && e.length) {
            for (let o of r.toolCalls)if (o.id === n.toolCallId) {
                t = o.function.name;
                break;
            }
        }
        let s = {
            id: n.id,
            result: n.content,
            actionExecutionId: n.toolCallId,
            actionName: t
        };
        a.push(s);
    }
    return a;
}
;
;
;
;
;
;
;
;
;
var j = (l)=>(a)=>{
        let e, n, t, s = ()=>{
            if (!e || t !== "text") throw new Error("No text message to close");
            let i = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_END,
                messageId: e.messageId
            };
            return t = void 0, e = void 0, l && console.debug("[TRANSFORM]: TEXT_MESSAGE_END", JSON.stringify(i)), i;
        }, r = ()=>{
            if (!n || t !== "tool") throw new Error("No tool call to close");
            let i = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_END,
                toolCallId: n.toolCallId
            };
            return t = void 0, n = void 0, l && console.debug("[TRANSFORM]: TOOL_CALL_END", JSON.stringify(i)), i;
        }, o = ()=>t === "text" ? [
                s()
            ] : t === "tool" ? [
                r()
            ] : [];
        return a.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mergeMap"])((i)=>{
            switch(i.type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_START:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_CONTENT:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_END:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_START:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_ARGS:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_END:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_RESULT:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STATE_SNAPSHOT:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STATE_DELTA:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].MESSAGES_SNAPSHOT:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].CUSTOM:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_STARTED:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_FINISHED:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_ERROR:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STEP_STARTED:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STEP_FINISHED:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_START:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_END:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_TEXT_MESSAGE_START:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_TEXT_MESSAGE_CONTENT:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].THINKING_TEXT_MESSAGE_END:
                    return [
                        ...o(),
                        i
                    ];
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RAW:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].ACTIVITY_SNAPSHOT:
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].ACTIVITY_DELTA:
                    return [
                        i
                    ];
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_CHUNK:
                    let I = i, S = [];
                    if ((t !== "text" || I.messageId !== void 0 && I.messageId !== (e == null ? void 0 : e.messageId)) && S.push(...o()), t !== "text") {
                        if (I.messageId === void 0) throw new Error("First TEXT_MESSAGE_CHUNK must have a messageId");
                        e = {
                            messageId: I.messageId
                        }, t = "text";
                        let c = {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_START,
                            messageId: I.messageId,
                            role: I.role || "assistant"
                        };
                        S.push(c), l && console.debug("[TRANSFORM]: TEXT_MESSAGE_START", JSON.stringify(c));
                    }
                    if (I.delta !== void 0) {
                        let c = {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_CONTENT,
                            messageId: e.messageId,
                            delta: I.delta
                        };
                        S.push(c), l && console.debug("[TRANSFORM]: TEXT_MESSAGE_CONTENT", JSON.stringify(c));
                    }
                    return S;
                case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_CHUNK:
                    let T = i, v = [];
                    if ((t !== "tool" || T.toolCallId !== void 0 && T.toolCallId !== (n == null ? void 0 : n.toolCallId)) && v.push(...o()), t !== "tool") {
                        if (T.toolCallId === void 0) throw new Error("First TOOL_CALL_CHUNK must have a toolCallId");
                        if (T.toolCallName === void 0) throw new Error("First TOOL_CALL_CHUNK must have a toolCallName");
                        n = {
                            toolCallId: T.toolCallId,
                            toolCallName: T.toolCallName,
                            parentMessageId: T.parentMessageId
                        }, t = "tool";
                        let c = {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_START,
                            toolCallId: T.toolCallId,
                            toolCallName: T.toolCallName,
                            parentMessageId: T.parentMessageId
                        };
                        v.push(c), l && console.debug("[TRANSFORM]: TOOL_CALL_START", JSON.stringify(c));
                    }
                    if (T.delta !== void 0) {
                        let c = {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_ARGS,
                            toolCallId: n.toolCallId,
                            delta: T.delta
                        };
                        v.push(c), l && console.debug("[TRANSFORM]: TOOL_CALL_ARGS", JSON.stringify(c));
                    }
                    return v;
            }
            let d = i.type;
            return [];
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalize"])(()=>{
            o();
        }));
    };
;
;
;
var k = class {
    runNext(a, e) {
        return e.run(a).pipe(j(!1));
    }
    runNextWithState(a, e) {
        let n = y(a.messages || []), t = y(a.state || {}), s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ReplaySubject"];
        return $(a, s, e, []).subscribe((o)=>{
            o.messages !== void 0 && (n = o.messages), o.state !== void 0 && (t = o.state);
        }), this.runNext(a, e).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["concatMap"])(async (o)=>(s.next(o), await new Promise((i)=>setTimeout(i, 0)), {
                event: o,
                messages: y(n),
                state: y(t)
            })));
    }
}, K = class extends k {
    constructor(e){
        super();
        this.fn = e;
    }
    run(e, n) {
        return this.fn(e, n);
    }
};
;
;
var Q = class extends k {
    constructor(e){
        super();
        this.blockedToolCallIds = new Set;
        if (e.allowedToolCalls && e.disallowedToolCalls) throw new Error("Cannot specify both allowedToolCalls and disallowedToolCalls");
        if (!e.allowedToolCalls && !e.disallowedToolCalls) throw new Error("Must specify either allowedToolCalls or disallowedToolCalls");
        e.allowedToolCalls ? this.allowedTools = new Set(e.allowedToolCalls) : e.disallowedToolCalls && (this.disallowedTools = new Set(e.disallowedToolCalls));
    }
    run(e, n) {
        return this.runNext(e, n).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["filter"])((t)=>{
            if (t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_START) {
                let s = t;
                return this.shouldFilterTool(s.toolCallName) ? (this.blockedToolCallIds.add(s.toolCallId), !1) : !0;
            }
            if (t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_ARGS) {
                let s = t;
                return !this.blockedToolCallIds.has(s.toolCallId);
            }
            if (t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_END) {
                let s = t;
                return !this.blockedToolCallIds.has(s.toolCallId);
            }
            if (t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_RESULT) {
                let s = t;
                return this.blockedToolCallIds.has(s.toolCallId) ? (this.blockedToolCallIds.delete(s.toolCallId), !1) : !0;
            }
            return !0;
        }));
    }
    shouldFilterTool(e) {
        return this.allowedTools ? !this.allowedTools.has(e) : this.disallowedTools ? this.disallowedTools.has(e) : !1;
    }
};
function me(l) {
    let a = l.content;
    if (Array.isArray(a)) {
        let e = a.filter((n)=>typeof n == "object" && n !== null && "type" in n && n.type === "text" && typeof n.text == "string").map((n)=>n.text).join("");
        return G(N({}, l), {
            content: e
        });
    }
    return typeof a == "string" ? l : G(N({}, l), {
        content: ""
    });
}
var J = class extends k {
    run(a, e) {
        let r = a, { parentRunId: n } = r, t = gt(r, [
            "parentRunId"
        ]), s = G(N({}, t), {
            messages: t.messages.map(me)
        });
        return this.runNext(s, e);
    }
};
var mt = {
    name: "@ag-ui/client",
    author: "Markus Ecker <markus.ecker@gmail.com>",
    version: "0.0.42",
    private: !1,
    publishConfig: {
        access: "public"
    },
    main: "./dist/index.js",
    module: "./dist/index.mjs",
    types: "./dist/index.d.ts",
    sideEffects: !1,
    files: [
        "dist/**",
        "README.md"
    ],
    scripts: {
        build: "tsup",
        dev: "tsup --watch",
        clean: "rm -rf dist .turbo node_modules",
        typecheck: "tsc --noEmit",
        test: "jest",
        "link:global": "pnpm link --global",
        "unlink:global": "pnpm unlink --global"
    },
    dependencies: {
        "@ag-ui/core": "workspace:*",
        "@ag-ui/encoder": "workspace:*",
        "@ag-ui/proto": "workspace:*",
        "@types/uuid": "^10.0.0",
        "compare-versions": "^6.1.1",
        "fast-json-patch": "^3.1.1",
        rxjs: "7.8.1",
        "untruncate-json": "^0.0.1",
        uuid: "^11.1.0",
        zod: "^3.22.4"
    },
    devDependencies: {
        "@types/jest": "^29.5.14",
        "@types/node": "^20.11.19",
        jest: "^29.7.0",
        "ts-jest": "^29.1.2",
        tsup: "^8.0.2",
        typescript: "^5.3.3"
    }
};
var W = class {
    constructor({ agentId: a, description: e, threadId: n, initialMessages: t, initialState: s, debug: r } = {}){
        this.debug = !1;
        this.subscribers = [];
        this.isRunning = !1;
        this.middlewares = [];
        this.agentId = a, this.description = e != null ? e : "", this.threadId = n != null ? n : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(), this.messages = y(t != null ? t : []), this.state = y(s != null ? s : {}), this.debug = r != null ? r : !1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$compare$2d$versions$2f$lib$2f$esm$2f$compareVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["compareVersions"])(this.maxVersion, "0.0.39") <= 0 && this.middlewares.unshift(new J);
    }
    get maxVersion() {
        return mt.version;
    }
    subscribe(a) {
        return this.subscribers.push(a), {
            unsubscribe: ()=>{
                this.subscribers = this.subscribers.filter((e)=>e !== a);
            }
        };
    }
    use(...a) {
        let e = a.map((n)=>typeof n == "function" ? new K(n) : n);
        return this.middlewares.push(...e), this;
    }
    async runAgent(a, e) {
        var n;
        try {
            this.isRunning = !0, this.agentId = (n = this.agentId) != null ? n : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            let t = this.prepareRunAgentInput(a), s, r = new Set(this.messages.map((S)=>S.id)), o = [
                {
                    onRunFinishedEvent: (S)=>{
                        s = S.result;
                    }
                },
                ...this.subscribers,
                e != null ? e : {}
            ];
            await this.onInitialize(t, o), this.activeRunDetach$ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subject"];
            let i;
            this.activeRunCompletionPromise = new Promise((S)=>{
                i = S;
            });
            let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(()=>this.middlewares.length === 0 ? this.run(t) : this.middlewares.reduceRight((T, v)=>({
                        run: (c)=>v.run(c, T)
                    }), this).run(t), j(this.debug), z(this.debug), (S)=>S.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["takeUntil"])(this.activeRunDetach$)), (S)=>this.apply(t, S, o), (S)=>this.processApplyEvents(t, S, o), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["catchError"])((S)=>(this.isRunning = !1, this.onError(t, S, o))), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalize"])(()=>{
                this.isRunning = !1, this.onFinalize(t, o), i == null || i(), i = void 0, this.activeRunCompletionPromise = void 0, this.activeRunDetach$ = void 0;
            }));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lastValueFrom"])(d((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(null)));
            let I = y(this.messages).filter((S)=>!r.has(S.id));
            return {
                result: s,
                newMessages: I
            };
        } finally{
            this.isRunning = !1;
        }
    }
    connect(a) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIConnectNotImplementedError"];
    }
    async connectAgent(a, e) {
        var n;
        try {
            this.isRunning = !0, this.agentId = (n = this.agentId) != null ? n : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            let t = this.prepareRunAgentInput(a), s, r = new Set(this.messages.map((S)=>S.id)), o = [
                {
                    onRunFinishedEvent: (S)=>{
                        s = S.result;
                    }
                },
                ...this.subscribers,
                e != null ? e : {}
            ];
            await this.onInitialize(t, o), this.activeRunDetach$ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Subject"];
            let i;
            this.activeRunCompletionPromise = new Promise((S)=>{
                i = S;
            });
            let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipe"])(()=>this.connect(t), j(this.debug), z(this.debug), (S)=>S.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["takeUntil"])(this.activeRunDetach$)), (S)=>this.apply(t, S, o), (S)=>this.processApplyEvents(t, S, o), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["catchError"])((S)=>(this.isRunning = !1, S instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGUIConnectNotImplementedError"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EMPTY"] : this.onError(t, S, o))), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalize"])(()=>{
                this.isRunning = !1, this.onFinalize(t, o), i == null || i(), i = void 0, this.activeRunCompletionPromise = void 0, this.activeRunDetach$ = void 0;
            }));
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lastValueFrom"])(d((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["of"])(null)));
            let I = y(this.messages).filter((S)=>!r.has(S.id));
            return {
                result: s,
                newMessages: I
            };
        } finally{
            this.isRunning = !1;
        }
    }
    abortRun() {}
    async detachActiveRun() {
        var e, n;
        if (!this.activeRunDetach$) return;
        let a = (e = this.activeRunCompletionPromise) != null ? e : Promise.resolve();
        this.activeRunDetach$.next(), (n = this.activeRunDetach$) == null || n.complete(), await a;
    }
    apply(a, e, n) {
        return $(a, e, this, n);
    }
    processApplyEvents(a, e, n) {
        return e.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tap"])((t)=>{
            t.messages && (this.messages = t.messages, n.forEach((s)=>{
                var r;
                (r = s.onMessagesChanged) == null || r.call(s, {
                    messages: this.messages,
                    state: this.state,
                    agent: this,
                    input: a
                });
            })), t.state && (this.state = t.state, n.forEach((s)=>{
                var r;
                (r = s.onStateChanged) == null || r.call(s, {
                    state: this.state,
                    messages: this.messages,
                    agent: this,
                    input: a
                });
            }));
        }));
    }
    prepareRunAgentInput(a) {
        var t, s, r;
        let n = y(this.messages).filter((o)=>o.role !== "activity");
        return {
            threadId: this.threadId,
            runId: (a == null ? void 0 : a.runId) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            tools: y((t = a == null ? void 0 : a.tools) != null ? t : []),
            context: y((s = a == null ? void 0 : a.context) != null ? s : []),
            forwardedProps: y((r = a == null ? void 0 : a.forwardedProps) != null ? r : {}),
            state: y(this.state),
            messages: n
        };
    }
    async onInitialize(a, e) {
        let n = await x(e, this.messages, this.state, (t, s, r)=>{
            var o;
            return (o = t.onRunInitialized) == null ? void 0 : o.call(t, {
                messages: s,
                state: r,
                agent: this,
                input: a
            });
        });
        (n.messages !== void 0 || n.state !== void 0) && (n.messages && (this.messages = n.messages, a.messages = n.messages, e.forEach((t)=>{
            var s;
            (s = t.onMessagesChanged) == null || s.call(t, {
                messages: this.messages,
                state: this.state,
                agent: this,
                input: a
            });
        })), n.state && (this.state = n.state, a.state = n.state, e.forEach((t)=>{
            var s;
            (s = t.onStateChanged) == null || s.call(t, {
                state: this.state,
                messages: this.messages,
                agent: this,
                input: a
            });
        })));
    }
    onError(a, e, n) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["from"])(x(n, this.messages, this.state, (t, s, r)=>{
            var o;
            return (o = t.onRunFailed) == null ? void 0 : o.call(t, {
                error: e,
                messages: s,
                state: r,
                agent: this,
                input: a
            });
        })).pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((t)=>{
            let s = t;
            if ((s.messages !== void 0 || s.state !== void 0) && (s.messages !== void 0 && (this.messages = s.messages, n.forEach((r)=>{
                var o;
                (o = r.onMessagesChanged) == null || o.call(r, {
                    messages: this.messages,
                    state: this.state,
                    agent: this,
                    input: a
                });
            })), s.state !== void 0 && (this.state = s.state, n.forEach((r)=>{
                var o;
                (o = r.onStateChanged) == null || o.call(r, {
                    state: this.state,
                    messages: this.messages,
                    agent: this,
                    input: a
                });
            }))), s.stopPropagation !== !0) throw console.error("Agent execution failed:", e), e;
            return {};
        }));
    }
    async onFinalize(a, e) {
        let n = await x(e, this.messages, this.state, (t, s, r)=>{
            var o;
            return (o = t.onRunFinalized) == null ? void 0 : o.call(t, {
                messages: s,
                state: r,
                agent: this,
                input: a
            });
        });
        (n.messages !== void 0 || n.state !== void 0) && (n.messages !== void 0 && (this.messages = n.messages, e.forEach((t)=>{
            var s;
            (s = t.onMessagesChanged) == null || s.call(t, {
                messages: this.messages,
                state: this.state,
                agent: this,
                input: a
            });
        })), n.state !== void 0 && (this.state = n.state, e.forEach((t)=>{
            var s;
            (s = t.onStateChanged) == null || s.call(t, {
                state: this.state,
                messages: this.messages,
                agent: this,
                input: a
            });
        })));
    }
    clone() {
        let a = Object.create(Object.getPrototypeOf(this));
        return a.agentId = this.agentId, a.description = this.description, a.threadId = this.threadId, a.messages = y(this.messages), a.state = y(this.state), a.debug = this.debug, a.isRunning = this.isRunning, a.subscribers = [
            ...this.subscribers
        ], a.middlewares = [
            ...this.middlewares
        ], a;
    }
    addMessage(a) {
        this.messages.push(a), (async ()=>{
            var e, n, t;
            for (let s of this.subscribers)await ((e = s.onNewMessage) == null ? void 0 : e.call(s, {
                message: a,
                messages: this.messages,
                state: this.state,
                agent: this
            }));
            if (a.role === "assistant" && a.toolCalls) for (let s of a.toolCalls)for (let r of this.subscribers)await ((n = r.onNewToolCall) == null ? void 0 : n.call(r, {
                toolCall: s,
                messages: this.messages,
                state: this.state,
                agent: this
            }));
            for (let s of this.subscribers)await ((t = s.onMessagesChanged) == null ? void 0 : t.call(s, {
                messages: this.messages,
                state: this.state,
                agent: this
            }));
        })();
    }
    addMessages(a) {
        this.messages.push(...a), (async ()=>{
            var e, n, t;
            for (let s of a){
                for (let r of this.subscribers)await ((e = r.onNewMessage) == null ? void 0 : e.call(r, {
                    message: s,
                    messages: this.messages,
                    state: this.state,
                    agent: this
                }));
                if (s.role === "assistant" && s.toolCalls) for (let r of s.toolCalls)for (let o of this.subscribers)await ((n = o.onNewToolCall) == null ? void 0 : n.call(o, {
                    toolCall: r,
                    messages: this.messages,
                    state: this.state,
                    agent: this
                }));
            }
            for (let s of this.subscribers)await ((t = s.onMessagesChanged) == null ? void 0 : t.call(s, {
                messages: this.messages,
                state: this.state,
                agent: this
            }));
        })();
    }
    setMessages(a) {
        this.messages = y(a), (async ()=>{
            var e;
            for (let n of this.subscribers)await ((e = n.onMessagesChanged) == null ? void 0 : e.call(n, {
                messages: this.messages,
                state: this.state,
                agent: this
            }));
        })();
    }
    setState(a) {
        this.state = y(a), (async ()=>{
            var e;
            for (let n of this.subscribers)await ((e = n.onStateChanged) == null ? void 0 : e.call(n, {
                messages: this.messages,
                state: this.state,
                agent: this
            }));
        })();
    }
    legacy_to_be_removed_runAgentBridged(a) {
        var t;
        this.agentId = (t = this.agentId) != null ? t : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        let e = this.prepareRunAgentInput(a);
        return (this.middlewares.length === 0 ? this.run(e) : this.middlewares.reduceRight((r, o)=>({
                run: (i)=>o.run(i, r)
            }), this).run(e)).pipe(j(this.debug), z(this.debug), at(this.threadId, e.runId, this.agentId), (s)=>s.pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$operators$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["map"])((r)=>(this.debug && console.debug("[LEGACY]:", JSON.stringify(r)), r))));
    }
};
var ot = class extends W {
    constructor(e){
        var n;
        super(e);
        this.abortController = new AbortController;
        this.url = e.url, this.headers = y((n = e.headers) != null ? n : {});
    }
    requestInit(e) {
        return {
            method: "POST",
            headers: G(N({}, this.headers), {
                "Content-Type": "application/json",
                Accept: "text/event-stream"
            }),
            body: JSON.stringify(e),
            signal: this.abortController.signal
        };
    }
    runAgent(e, n) {
        var t;
        return this.abortController = (t = e == null ? void 0 : e.abortController) != null ? t : new AbortController, super.runAgent(e, n);
    }
    abortRun() {
        this.abortController.abort(), super.abortRun();
    }
    run(e) {
        let n = tt(this.url, this.requestInit(e));
        return st(n);
    }
    clone() {
        var s;
        let e = super.clone();
        e.url = this.url, e.headers = y((s = this.headers) != null ? s : {});
        let n = new AbortController, t = this.abortController.signal;
        return t.aborted && n.abort(t.reason), e.abortController = n, e;
    }
};
;
function he(l) {
    let a = [], e = new Map, n = new Map;
    for (let t of l)if (t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_START) {
        let s = t, r = s.messageId;
        e.has(r) || e.set(r, {
            contents: [],
            otherEvents: []
        });
        let o = e.get(r);
        o.start = s;
    } else if (t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_CONTENT) {
        let s = t, r = s.messageId;
        e.has(r) || e.set(r, {
            contents: [],
            otherEvents: []
        }), e.get(r).contents.push(s);
    } else if (t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_END) {
        let s = t, r = s.messageId;
        e.has(r) || e.set(r, {
            contents: [],
            otherEvents: []
        });
        let o = e.get(r);
        o.end = s, Rt(r, o, a), e.delete(r);
    } else if (t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_START) {
        let s = t, r = s.toolCallId;
        n.has(r) || n.set(r, {
            args: [],
            otherEvents: []
        });
        let o = n.get(r);
        o.start = s;
    } else if (t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_ARGS) {
        let s = t, r = s.toolCallId;
        n.has(r) || n.set(r, {
            args: [],
            otherEvents: []
        }), n.get(r).args.push(s);
    } else if (t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_END) {
        let s = t, r = s.toolCallId;
        n.has(r) || n.set(r, {
            args: [],
            otherEvents: []
        });
        let o = n.get(r);
        o.end = s, It(r, o, a), n.delete(r);
    } else {
        let s = !1;
        for (let [r, o] of e)if (o.start && !o.end) {
            o.otherEvents.push(t), s = !0;
            break;
        }
        if (!s) {
            for (let [r, o] of n)if (o.start && !o.end) {
                o.otherEvents.push(t), s = !0;
                break;
            }
        }
        s || a.push(t);
    }
    for (let [t, s] of e)Rt(t, s, a);
    for (let [t, s] of n)It(t, s, a);
    return a;
}
function Rt(l, a, e) {
    if (a.start && e.push(a.start), a.contents.length > 0) {
        let n = a.contents.map((s)=>s.delta).join(""), t = {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_CONTENT,
            messageId: l,
            delta: n
        };
        e.push(t);
    }
    a.end && e.push(a.end);
    for (let n of a.otherEvents)e.push(n);
}
function It(l, a, e) {
    if (a.start && e.push(a.start), a.args.length > 0) {
        let n = a.args.map((s)=>s.delta).join(""), t = {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_ARGS,
            toolCallId: l,
            delta: n
        };
        e.push(t);
    }
    a.end && e.push(a.end);
    for (let n of a.otherEvents)e.push(n);
}
;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@ag-ui/mastra/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MastraAgent",
    ()=>C,
    "convertAGUIMessagesToMastra",
    ()=>T,
    "getLocalAgent",
    ()=>U,
    "getLocalAgents",
    ()=>b,
    "getNetwork",
    ()=>D,
    "getRemoteAgents",
    ()=>_
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@ag-ui/client/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ag-ui/core/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$Y22QMA7S$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mastra/core/dist/chunk-Y22QMA7S.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$mastra$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ag-ui/mastra/node_modules/rxjs/dist/cjs/index.js [app-route] (ecmascript)");
var j = Object.defineProperty, J = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var E = (e, r)=>(r = Symbol[e]) ? r : Symbol.for("Symbol." + e);
var N = (e, r, t)=>r in e ? j(e, r, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : e[r] = t, I = (e, r)=>{
    for(var t in r || (r = {}))R.call(r, t) && N(e, t, r[t]);
    if (w) for (var t of w(r))k.call(r, t) && N(e, t, r[t]);
    return e;
}, M = (e, r)=>J(e, B(r));
var v = (e, r)=>{
    var t = {};
    for(var s in e)R.call(e, s) && r.indexOf(s) < 0 && (t[s] = e[s]);
    if (e != null && w) for (var s of w(e))r.indexOf(s) < 0 && k.call(e, s) && (t[s] = e[s]);
    return t;
};
var G = (e, r, t)=>(r = e[E("asyncIterator")]) ? r.call(e) : (e = e[E("iterator")](), r = {}, t = (s, a)=>(a = e[s]) && (r[s] = (n)=>new Promise((c, l, p)=>(n = a.call(e, n), p = n.done, Promise.resolve(n.value).then((d)=>c({
                        value: d,
                        done: p
                    }), l)))), t("next"), t("return"), r);
;
;
;
;
var q = (e)=>e ? typeof e == "string" ? e : Array.isArray(e) ? e.filter((t)=>t.type === "text").map((t)=>t.text.trim()).filter(Boolean).join(`
`) : "" : "";
function T(e) {
    var t, s;
    let r = [];
    for (let a of e)if (a.role === "assistant") {
        let n = q(a.content), c = [];
        n && c.push({
            type: "text",
            text: n
        });
        for (let l of (t = a.toolCalls) != null ? t : [])c.push({
            type: "tool-call",
            toolCallId: l.id,
            toolName: l.function.name,
            args: JSON.parse(l.function.arguments)
        });
        r.push({
            role: "assistant",
            content: c
        });
    } else if (a.role === "user") {
        let n = q(a.content);
        r.push({
            role: "user",
            content: n
        });
    } else if (a.role === "tool") {
        let n = "unknown";
        for (let c of e)if (c.role === "assistant") {
            for (let l of (s = c.toolCalls) != null ? s : [])if (l.id === a.toolCallId) {
                n = l.function.name;
                break;
            }
        }
        r.push({
            role: "tool",
            content: [
                {
                    type: "tool-result",
                    toolCallId: a.toolCallId,
                    toolName: n,
                    result: a.content
                }
            ]
        });
    }
    return r;
}
async function _({ mastraClient: e, resourceId: r }) {
    let t = await e.listAgents();
    return Object.entries(t).reduce((s, [a])=>{
        let n = e.getAgent(a);
        return s[a] = new C({
            agentId: a,
            agent: n,
            resourceId: r
        }), s;
    }, {});
}
function b({ mastra: e, resourceId: r, requestContext: t }) {
    let s = e.listAgents() || {};
    return Object.entries(s).reduce((n, [c, l])=>(n[c] = new C({
            agentId: c,
            agent: l,
            resourceId: r,
            requestContext: t
        }), n), {});
}
function U({ mastra: e, agentId: r, resourceId: t, requestContext: s }) {
    let a = e.getAgent(r);
    if (!a) throw new Error(`Agent ${r} not found`);
    return new C({
        agentId: r,
        agent: a,
        resourceId: t,
        requestContext: s
    });
}
function D({ mastra: e, networkId: r, resourceId: t, requestContext: s }) {
    let a = e.getAgent(r);
    if (!a) throw new Error(`Network ${r} not found`);
    return new C({
        agentId: a.name,
        agent: a,
        resourceId: t,
        requestContext: s
    });
}
var C = class e extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AbstractAgent"] {
    constructor(t){
        let l = t, { agent: s, resourceId: a, requestContext: n } = l, c = v(l, [
            "agent",
            "resourceId",
            "requestContext"
        ]);
        super(c);
        this.config = t;
        this.agent = s, this.resourceId = a, this.requestContext = n != null ? n : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mastra$2f$core$2f$dist$2f$chunk$2d$Y22QMA7S$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestContext"];
    }
    clone() {
        return new e(this.config);
    }
    run(t) {
        let s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["randomUUID"])();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$mastra$2f$node_modules$2f$rxjs$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Observable"]((a)=>((async ()=>{
                var l, p, d;
                let c = {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_STARTED,
                    threadId: t.threadId,
                    runId: t.runId
                };
                if (a.next(c), this.isLocalMastraAgent(this.agent)) {
                    let o = await this.agent.getMemory({
                        requestContext: this.requestContext
                    });
                    if (o && t.state && Object.keys(t.state || {}).length > 0) {
                        let i = await o.getThreadById({
                            threadId: t.threadId
                        });
                        i || (i = {
                            id: t.threadId,
                            title: "",
                            metadata: {},
                            resourceId: (l = this.resourceId) != null ? l : t.threadId,
                            createdAt: new Date,
                            updatedAt: new Date
                        });
                        let A = JSON.parse((d = (p = i.metadata) == null ? void 0 : p.workingMemory) != null ? d : "{}"), u = t.state, { messages: y } = u, x = v(u, [
                            "messages"
                        ]), h = JSON.stringify(I(I({}, A), x));
                        await o.saveThread({
                            thread: M(I({}, i), {
                                metadata: M(I({}, i.metadata), {
                                    workingMemory: h
                                })
                            })
                        });
                    }
                }
                try {
                    await this.streamMastraAgent(t, {
                        onTextPart: (o)=>{
                            let i = {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TEXT_MESSAGE_CHUNK,
                                role: "assistant",
                                messageId: s,
                                delta: o
                            };
                            a.next(i);
                        },
                        onToolCallPart: (o)=>{
                            let i = {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_START,
                                parentMessageId: s,
                                toolCallId: o.toolCallId,
                                toolCallName: o.toolName
                            };
                            a.next(i);
                            let A = {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_ARGS,
                                toolCallId: o.toolCallId,
                                delta: JSON.stringify(o.args)
                            };
                            a.next(A);
                            let y = {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_END,
                                toolCallId: o.toolCallId
                            };
                            a.next(y);
                        },
                        onToolResultPart (o) {
                            let i = {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].TOOL_CALL_RESULT,
                                toolCallId: o.toolCallId,
                                content: JSON.stringify(o.result),
                                messageId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["randomUUID"])(),
                                role: "tool"
                            };
                            a.next(i);
                        },
                        onFinishMessagePart: async ()=>{
                            s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$client$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["randomUUID"])();
                        },
                        onError: (o)=>{
                            console.error("error", o), a.error(o);
                        },
                        onRunFinished: async ()=>{
                            if (this.isLocalMastraAgent(this.agent)) try {
                                let o = await this.agent.getMemory({
                                    requestContext: this.requestContext
                                });
                                if (o) {
                                    let i = await o.getWorkingMemory({
                                        resourceId: this.resourceId,
                                        threadId: t.threadId,
                                        memoryConfig: {
                                            workingMemory: {
                                                enabled: !0
                                            }
                                        }
                                    });
                                    if (typeof i == "string") {
                                        let A = JSON.parse(i);
                                        if (A && !("$schema" in A)) {
                                            let y = {
                                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].STATE_SNAPSHOT,
                                                snapshot: A
                                            };
                                            a.next(y);
                                        }
                                    }
                                }
                            } catch (o) {
                                console.error("Error sending state snapshot", o);
                            }
                            a.next({
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ag$2d$ui$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EventType"].RUN_FINISHED,
                                threadId: t.threadId,
                                runId: t.runId
                            }), a.complete();
                        }
                    });
                } catch (o) {
                    console.error("Stream error:", o), a.error(o);
                }
            })(), ()=>{}));
    }
    isLocalMastraAgent(t) {
        return "getMemory" in t;
    }
    async streamMastraAgent({ threadId: t, runId: s, messages: a, tools: n, context: c }, { onTextPart: l, onFinishMessagePart: p, onToolCallPart: d, onToolResultPart: u, onError: o, onRunFinished: i }) {
        var O, S;
        let A = n.reduce((m, g)=>(m[g.name] = {
                id: g.name,
                description: g.description,
                inputSchema: g.parameters
            }, m), {}), y = (O = this.resourceId) != null ? O : t, x = T(a);
        (S = this.requestContext) == null || S.set("ag-ui", {
            context: c
        });
        let h = this.requestContext;
        if (this.isLocalMastraAgent(this.agent)) try {
            let m = await this.agent.stream(x, {
                memory: {
                    thread: t,
                    resource: y
                },
                runId: s,
                clientTools: A,
                requestContext: h
            });
            if (m && typeof m == "object") {
                try {
                    for(var it = G(m.fullStream), gt, ct, mt; gt = !(ct = await it.next()).done; gt = !1){
                        let g = ct.value;
                        switch(g.type){
                            case "text-delta":
                                {
                                    l == null || l(g.payload.text);
                                    break;
                                }
                            case "tool-call":
                                {
                                    d == null || d({
                                        toolCallId: g.payload.toolCallId,
                                        toolName: g.payload.toolName,
                                        args: g.payload.args
                                    });
                                    break;
                                }
                            case "tool-result":
                                {
                                    u == null || u({
                                        toolCallId: g.payload.toolCallId,
                                        result: g.payload.result
                                    });
                                    break;
                                }
                            case "error":
                                {
                                    o == null || o(new Error(g.payload.error));
                                    break;
                                }
                            case "finish":
                                {
                                    p == null || p();
                                    break;
                                }
                        }
                    }
                } catch (ct) {
                    mt = [
                        ct
                    ];
                } finally{
                    try {
                        gt && (ct = it.return) && await ct.call(it);
                    } finally{
                        if (mt) throw mt[0];
                    }
                }
                await (i == null ? void 0 : i());
            } else throw new Error("Invalid response from local agent");
        } catch (m) {
            o == null || o(m);
        }
        else try {
            let m = await this.agent.stream({
                memory: {
                    thread: t,
                    resource: y
                },
                runId: s,
                messages: x,
                clientTools: A,
                requestContext: h
            });
            if (m && typeof m.processDataStream == "function") await m.processDataStream({
                onChunk: async (g)=>{
                    switch(g.type){
                        case "text-delta":
                            {
                                l == null || l(g.payload.text);
                                break;
                            }
                        case "tool-call":
                            {
                                d == null || d({
                                    toolCallId: g.payload.toolCallId,
                                    toolName: g.payload.toolName,
                                    args: g.payload.args
                                });
                                break;
                            }
                        case "tool-result":
                            {
                                u == null || u({
                                    toolCallId: g.payload.toolCallId,
                                    result: g.payload.result
                                });
                                break;
                            }
                        case "finish":
                            {
                                p == null || p();
                                break;
                            }
                    }
                }
            }), await (i == null ? void 0 : i());
            else throw new Error("Invalid response from remote agent");
        } catch (m) {
            o == null || o(m);
        }
    }
    static async getRemoteAgents(t) {
        return _(t);
    }
    static getLocalAgents(t) {
        return b(t);
    }
    static getLocalAgent(t) {
        return U(t);
    }
    static getNetwork(t) {
        return D(t);
    }
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@lukeed/uuid/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>v4
]);
var IDX = 256, HEX = [], BUFFER;
while(IDX--)HEX[IDX] = (IDX + 256).toString(16).substring(1);
function v4() {
    var i = 0, num, out = '';
    if (!BUFFER || IDX + 16 > 256) {
        BUFFER = Array(i = 256);
        while(i--)BUFFER[i] = 256 * Math.random() | 0;
        i = IDX = 0;
    }
    for(; i < 16; i++){
        num = BUFFER[IDX + i];
        if (i == 6) out += HEX[num & 15 | 64];
        else if (i == 8) out += HEX[num & 63 | 128];
        else out += HEX[num];
        if (i & 1 && i > 1 && i < 11) out += '-';
    }
    IDX++;
    return out;
}
}),
"[project]/node_modules/@ai-sdk/provider-utils-v5/node_modules/@ai-sdk/provider/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AISDKError",
    ()=>AISDKError,
    "APICallError",
    ()=>APICallError,
    "EmptyResponseBodyError",
    ()=>EmptyResponseBodyError,
    "InvalidArgumentError",
    ()=>InvalidArgumentError,
    "InvalidPromptError",
    ()=>InvalidPromptError,
    "InvalidResponseDataError",
    ()=>InvalidResponseDataError,
    "JSONParseError",
    ()=>JSONParseError,
    "LoadAPIKeyError",
    ()=>LoadAPIKeyError,
    "LoadSettingError",
    ()=>LoadSettingError,
    "NoContentGeneratedError",
    ()=>NoContentGeneratedError,
    "NoSuchModelError",
    ()=>NoSuchModelError,
    "TooManyEmbeddingValuesForCallError",
    ()=>TooManyEmbeddingValuesForCallError,
    "TypeValidationError",
    ()=>TypeValidationError,
    "UnsupportedFunctionalityError",
    ()=>UnsupportedFunctionalityError,
    "getErrorMessage",
    ()=>getErrorMessage,
    "isJSONArray",
    ()=>isJSONArray,
    "isJSONObject",
    ()=>isJSONObject,
    "isJSONValue",
    ()=>isJSONValue
]);
// src/errors/ai-sdk-error.ts
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _AISDKError = class _AISDKError extends Error {
    /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */ constructor({ name: name14, message, cause }){
        super(message);
        this[_a] = true;
        this.name = name14;
        this.cause = cause;
    }
    /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */ static isInstance(error) {
        return _AISDKError.hasMarker(error, marker);
    }
    static hasMarker(error, marker15) {
        const markerSymbol = Symbol.for(marker15);
        return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
    }
};
_a = symbol;
var AISDKError = _AISDKError;
// src/errors/api-call-error.ts
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var APICallError = class extends AISDKError {
    constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500), // server error
    data }){
        super({
            name,
            message,
            cause
        });
        this[_a2] = true;
        this.url = url;
        this.requestBodyValues = requestBodyValues;
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.isRetryable = isRetryable;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker2);
    }
};
_a2 = symbol2;
// src/errors/empty-response-body-error.ts
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var EmptyResponseBodyError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "Empty response body" } = {}){
        super({
            name: name2,
            message
        });
        this[_a3] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker3);
    }
};
_a3 = symbol3;
// src/errors/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
// src/errors/invalid-argument-error.ts
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidArgumentError = class extends AISDKError {
    constructor({ message, cause, argument }){
        super({
            name: name3,
            message,
            cause
        });
        this[_a4] = true;
        this.argument = argument;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker4);
    }
};
_a4 = symbol4;
// src/errors/invalid-prompt-error.ts
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var InvalidPromptError = class extends AISDKError {
    constructor({ prompt, message, cause }){
        super({
            name: name4,
            message: `Invalid prompt: ${message}`,
            cause
        });
        this[_a5] = true;
        this.prompt = prompt;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker5);
    }
};
_a5 = symbol5;
// src/errors/invalid-response-data-error.ts
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var InvalidResponseDataError = class extends AISDKError {
    constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }){
        super({
            name: name5,
            message
        });
        this[_a6] = true;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker6);
    }
};
_a6 = symbol6;
// src/errors/json-parse-error.ts
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var JSONParseError = class extends AISDKError {
    constructor({ text, cause }){
        super({
            name: name6,
            message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a7] = true;
        this.text = text;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker7);
    }
};
_a7 = symbol7;
// src/errors/load-api-key-error.ts
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var LoadAPIKeyError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name7,
            message
        });
        this[_a8] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker8);
    }
};
_a8 = symbol8;
// src/errors/load-setting-error.ts
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var LoadSettingError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name8,
            message
        });
        this[_a9] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker9);
    }
};
_a9 = symbol9;
// src/errors/no-content-generated-error.ts
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var NoContentGeneratedError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "No content generated." } = {}){
        super({
            name: name9,
            message
        });
        this[_a10] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker10);
    }
};
_a10 = symbol10;
// src/errors/no-such-model-error.ts
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var NoSuchModelError = class extends AISDKError {
    constructor({ errorName = name10, modelId, modelType, message = `No such ${modelType}: ${modelId}` }){
        super({
            name: errorName,
            message
        });
        this[_a11] = true;
        this.modelId = modelId;
        this.modelType = modelType;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker11);
    }
};
_a11 = symbol11;
// src/errors/too-many-embedding-values-for-call-error.ts
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var TooManyEmbeddingValuesForCallError = class extends AISDKError {
    constructor(options){
        super({
            name: name11,
            message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
        });
        this[_a12] = true;
        this.provider = options.provider;
        this.modelId = options.modelId;
        this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
        this.values = options.values;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker12);
    }
};
_a12 = symbol12;
// src/errors/type-validation-error.ts
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _TypeValidationError = class _TypeValidationError extends AISDKError {
    constructor({ value, cause }){
        super({
            name: name12,
            message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a13] = true;
        this.value = value;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker13);
    }
    /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */ static wrap({ value, cause }) {
        return _TypeValidationError.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError({
            value,
            cause
        });
    }
};
_a13 = symbol13;
var TypeValidationError = _TypeValidationError;
// src/errors/unsupported-functionality-error.ts
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var UnsupportedFunctionalityError = class extends AISDKError {
    constructor({ functionality, message = `'${functionality}' functionality not supported.` }){
        super({
            name: name13,
            message
        });
        this[_a14] = true;
        this.functionality = functionality;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker14);
    }
};
_a14 = symbol14;
// src/json-value/is-json.ts
function isJSONValue(value) {
    if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(isJSONValue);
    }
    if (typeof value === "object") {
        return Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
    }
    return false;
}
function isJSONArray(value) {
    return Array.isArray(value) && value.every(isJSONValue);
}
function isJSONObject(value) {
    return value != null && typeof value === "object" && Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/eventsource-parser/dist/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParseError",
    ()=>ParseError,
    "createParser",
    ()=>createParser
]);
class ParseError extends Error {
    constructor(message, options){
        super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
    }
}
function noop(_arg) {}
function createParser(callbacks) {
    if (typeof callbacks == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks;
    let incompleteLine = "", isFirstChunk = !0, id, data = "", eventType = "";
    function feed(newChunk) {
        const chunk = isFirstChunk ? newChunk.replace(/^\xEF\xBB\xBF/, "") : newChunk, [complete, incomplete] = splitLines(`${incompleteLine}${chunk}`);
        for (const line of complete)parseLine(line);
        incompleteLine = incomplete, isFirstChunk = !1;
    }
    function parseLine(line) {
        if (line === "") {
            dispatchEvent();
            return;
        }
        if (line.startsWith(":")) {
            onComment && onComment(line.slice(line.startsWith(": ") ? 2 : 1));
            return;
        }
        const fieldSeparatorIndex = line.indexOf(":");
        if (fieldSeparatorIndex !== -1) {
            const field = line.slice(0, fieldSeparatorIndex), offset = line[fieldSeparatorIndex + 1] === " " ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
            processField(field, value, line);
            return;
        }
        processField(line, "", line);
    }
    function processField(field, value, line) {
        switch(field){
            case "event":
                eventType = value;
                break;
            case "data":
                data = `${data}${value}
`;
                break;
            case "id":
                id = value.includes("\0") ? void 0 : value;
                break;
            case "retry":
                /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(new ParseError(`Invalid \`retry\` value: "${value}"`, {
                    type: "invalid-retry",
                    value,
                    line
                }));
                break;
            default:
                onError(new ParseError(`Unknown field "${field.length > 20 ? `${field.slice(0, 20)}\u2026` : field}"`, {
                    type: "unknown-field",
                    field,
                    value,
                    line
                }));
                break;
        }
    }
    function dispatchEvent() {
        data.length > 0 && onEvent({
            id,
            event: eventType || void 0,
            // If the data buffer's last character is a U+000A LINE FEED (LF) character,
            // then remove the last character from the data buffer.
            data: data.endsWith(`
`) ? data.slice(0, -1) : data
        }), id = void 0, data = "", eventType = "";
    }
    function reset(options = {}) {
        incompleteLine && options.consume && parseLine(incompleteLine), isFirstChunk = !0, id = void 0, data = "", eventType = "", incompleteLine = "";
    }
    return {
        feed,
        reset
    };
}
function splitLines(chunk) {
    const lines = [];
    let incompleteLine = "", searchIndex = 0;
    for(; searchIndex < chunk.length;){
        const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
        let lineEnd = -1;
        if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = Math.min(crIndex, lfIndex) : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) {
            incompleteLine = chunk.slice(searchIndex);
            break;
        } else {
            const line = chunk.slice(searchIndex, lineEnd);
            lines.push(line), searchIndex = lineEnd + 1, chunk[searchIndex - 1] === "\r" && chunk[searchIndex] === `
` && searchIndex++;
        }
    }
    return [
        lines,
        incompleteLine
    ];
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/eventsource-parser/dist/stream.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventSourceParserStream",
    ()=>EventSourceParserStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/eventsource-parser/dist/index.js [app-route] (ecmascript)");
;
;
class EventSourceParserStream extends TransformStream {
    constructor({ onError, onRetry, onComment } = {}){
        let parser;
        super({
            start (controller) {
                parser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createParser"])({
                    onEvent: (event)=>{
                        controller.enqueue(event);
                    },
                    onError (error) {
                        onError === "terminate" ? controller.error(error) : typeof onError == "function" && onError(error);
                    },
                    onRetry,
                    onComment
                });
            },
            transform (chunk) {
                parser.feed(chunk);
            }
        });
    }
}
;
 //# sourceMappingURL=stream.js.map
}),
"[project]/node_modules/@ai-sdk/provider-utils-v5/dist/index.mjs [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION,
    "asSchema",
    ()=>asSchema,
    "asValidator",
    ()=>asValidator,
    "combineHeaders",
    ()=>combineHeaders,
    "convertAsyncIteratorToReadableStream",
    ()=>convertAsyncIteratorToReadableStream,
    "convertBase64ToUint8Array",
    ()=>convertBase64ToUint8Array,
    "convertToBase64",
    ()=>convertToBase64,
    "convertUint8ArrayToBase64",
    ()=>convertUint8ArrayToBase64,
    "createBinaryResponseHandler",
    ()=>createBinaryResponseHandler,
    "createEventSourceResponseHandler",
    ()=>createEventSourceResponseHandler,
    "createIdGenerator",
    ()=>createIdGenerator,
    "createJsonErrorResponseHandler",
    ()=>createJsonErrorResponseHandler,
    "createJsonResponseHandler",
    ()=>createJsonResponseHandler,
    "createJsonStreamResponseHandler",
    ()=>createJsonStreamResponseHandler,
    "createProviderDefinedToolFactory",
    ()=>createProviderDefinedToolFactory,
    "createProviderDefinedToolFactoryWithOutputSchema",
    ()=>createProviderDefinedToolFactoryWithOutputSchema,
    "createStatusCodeErrorResponseHandler",
    ()=>createStatusCodeErrorResponseHandler,
    "delay",
    ()=>delay,
    "dynamicTool",
    ()=>dynamicTool,
    "executeTool",
    ()=>executeTool,
    "extractResponseHeaders",
    ()=>extractResponseHeaders,
    "generateId",
    ()=>generateId,
    "getErrorMessage",
    ()=>getErrorMessage,
    "getFromApi",
    ()=>getFromApi,
    "getRuntimeEnvironmentUserAgent",
    ()=>getRuntimeEnvironmentUserAgent,
    "injectJsonInstructionIntoMessages",
    ()=>injectJsonInstructionIntoMessages,
    "isAbortError",
    ()=>isAbortError,
    "isParsableJson",
    ()=>isParsableJson,
    "isUrlSupported",
    ()=>isUrlSupported,
    "isValidator",
    ()=>isValidator,
    "jsonSchema",
    ()=>jsonSchema,
    "lazySchema",
    ()=>lazySchema,
    "lazyValidator",
    ()=>lazyValidator,
    "loadApiKey",
    ()=>loadApiKey,
    "loadOptionalSetting",
    ()=>loadOptionalSetting,
    "loadSetting",
    ()=>loadSetting,
    "mediaTypeToExtension",
    ()=>mediaTypeToExtension,
    "parseJSON",
    ()=>parseJSON,
    "parseJsonEventStream",
    ()=>parseJsonEventStream,
    "parseProviderOptions",
    ()=>parseProviderOptions,
    "postFormDataToApi",
    ()=>postFormDataToApi,
    "postJsonToApi",
    ()=>postJsonToApi,
    "postToApi",
    ()=>postToApi,
    "removeUndefinedEntries",
    ()=>removeUndefinedEntries,
    "resolve",
    ()=>resolve,
    "safeParseJSON",
    ()=>safeParseJSON,
    "safeValidateTypes",
    ()=>safeValidateTypes,
    "standardSchemaValidator",
    ()=>standardSchemaValidator,
    "tool",
    ()=>tool,
    "validateTypes",
    ()=>validateTypes,
    "validator",
    ()=>validator,
    "withUserAgentSuffix",
    ()=>withUserAgentSuffix,
    "withoutTrailingSlash",
    ()=>withoutTrailingSlash,
    "zodSchema",
    ()=>zodSchema
]);
// src/generate-id.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/provider-utils-v5/node_modules/@ai-sdk/provider/dist/index.mjs [app-route] (ecmascript)");
// src/parse-json-event-stream.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/eventsource-parser/dist/stream.js [app-route] (ecmascript) <locals>");
// src/zod-schema.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/parse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/core/to-json-schema.js [app-route] (ecmascript)");
// src/zod-to-json-schema/select-parser.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/types.js [app-route] (ecmascript)");
// src/combine-headers.ts
function combineHeaders(...headers) {
    return headers.reduce((combinedHeaders, currentHeaders)=>({
            ...combinedHeaders,
            ...currentHeaders != null ? currentHeaders : {}
        }), {});
}
// src/convert-async-iterator-to-readable-stream.ts
function convertAsyncIteratorToReadableStream(iterator) {
    return new ReadableStream({
        /**
     * Called when the consumer wants to pull more data from the stream.
     *
     * @param {ReadableStreamDefaultController<T>} controller - The controller to enqueue data into the stream.
     * @returns {Promise<void>}
     */ async pull (controller) {
            try {
                const { value, done } = await iterator.next();
                if (done) {
                    controller.close();
                } else {
                    controller.enqueue(value);
                }
            } catch (error) {
                controller.error(error);
            }
        },
        /**
     * Called when the consumer cancels the stream.
     */ cancel () {}
    });
}
// src/delay.ts
async function delay(delayInMs, options) {
    if (delayInMs == null) {
        return Promise.resolve();
    }
    const signal = options == null ? void 0 : options.abortSignal;
    return new Promise((resolve2, reject)=>{
        if (signal == null ? void 0 : signal.aborted) {
            reject(createAbortError());
            return;
        }
        const timeoutId = setTimeout(()=>{
            cleanup();
            resolve2();
        }, delayInMs);
        const cleanup = ()=>{
            clearTimeout(timeoutId);
            signal == null ? void 0 : signal.removeEventListener("abort", onAbort);
        };
        const onAbort = ()=>{
            cleanup();
            reject(createAbortError());
        };
        signal == null ? void 0 : signal.addEventListener("abort", onAbort);
    });
}
function createAbortError() {
    return new DOMException("Delay was aborted", "AbortError");
}
// src/extract-response-headers.ts
function extractResponseHeaders(response) {
    return Object.fromEntries([
        ...response.headers
    ]);
}
;
var createIdGenerator = ({ prefix, size = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {})=>{
    const generator = ()=>{
        const alphabetLength = alphabet.length;
        const chars = new Array(size);
        for(let i = 0; i < size; i++){
            chars[i] = alphabet[Math.random() * alphabetLength | 0];
        }
        return chars.join("");
    };
    if (prefix == null) {
        return generator;
    }
    if (alphabet.includes(separator)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
            argument: "separator",
            message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
        });
    }
    return ()=>`${prefix}${separator}${generator()}`;
};
var generateId = createIdGenerator();
// src/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
;
;
// src/is-abort-error.ts
function isAbortError(error) {
    return (error instanceof Error || error instanceof DOMException) && (error.name === "AbortError" || error.name === "ResponseAborted" || // Next.js
    error.name === "TimeoutError");
}
// src/handle-fetch-error.ts
var FETCH_FAILED_ERROR_MESSAGES = [
    "fetch failed",
    "failed to fetch"
];
function handleFetchError({ error, url, requestBodyValues }) {
    if (isAbortError(error)) {
        return error;
    }
    if (error instanceof TypeError && FETCH_FAILED_ERROR_MESSAGES.includes(error.message.toLowerCase())) {
        const cause = error.cause;
        if (cause != null) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                message: `Cannot connect to API: ${cause.message}`,
                cause,
                url,
                requestBodyValues,
                isRetryable: true
            });
        }
    }
    return error;
}
// src/get-runtime-environment-user-agent.ts
function getRuntimeEnvironmentUserAgent(globalThisAny = globalThis) {
    var _a, _b, _c;
    if (globalThisAny.window) {
        return `runtime/browser`;
    }
    if ((_a = globalThisAny.navigator) == null ? void 0 : _a.userAgent) {
        return `runtime/${globalThisAny.navigator.userAgent.toLowerCase()}`;
    }
    if ((_c = (_b = globalThisAny.process) == null ? void 0 : _b.versions) == null ? void 0 : _c.node) {
        return `runtime/node.js/${globalThisAny.process.version.substring(0)}`;
    }
    if (globalThisAny.EdgeRuntime) {
        return `runtime/vercel-edge`;
    }
    return "runtime/unknown";
}
// src/remove-undefined-entries.ts
function removeUndefinedEntries(record) {
    return Object.fromEntries(Object.entries(record).filter(([_key, value])=>value != null));
}
// src/with-user-agent-suffix.ts
function withUserAgentSuffix(headers, ...userAgentSuffixParts) {
    const cleanedHeaders = removeUndefinedEntries(headers != null ? headers : {});
    const normalizedHeaders = new Headers(cleanedHeaders);
    const currentUserAgentHeader = normalizedHeaders.get("user-agent") || "";
    normalizedHeaders.set("user-agent", [
        currentUserAgentHeader,
        ...userAgentSuffixParts
    ].filter(Boolean).join(" "));
    return Object.fromEntries(normalizedHeaders);
}
// src/version.ts
var VERSION = ("TURBOPACK compile-time truthy", 1) ? "3.0.12" : "TURBOPACK unreachable";
// src/get-from-api.ts
var getOriginalFetch = ()=>globalThis.fetch;
var getFromApi = async ({ url, headers = {}, successfulResponseHandler, failedResponseHandler, abortSignal, fetch = getOriginalFetch() })=>{
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION}`, getRuntimeEnvironmentUserAgent()),
            signal: abortSignal
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!response.ok) {
            let errorInformation;
            try {
                errorInformation = await failedResponseHandler({
                    response,
                    url,
                    requestBodyValues: {}
                });
            } catch (error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: "Failed to process error response",
                    cause: error,
                    statusCode: response.status,
                    url,
                    responseHeaders,
                    requestBodyValues: {}
                });
            }
            throw errorInformation.value;
        }
        try {
            return await successfulResponseHandler({
                response,
                url,
                requestBodyValues: {}
            });
        } catch (error) {
            if (error instanceof Error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to process successful response",
                cause: error,
                statusCode: response.status,
                url,
                responseHeaders,
                requestBodyValues: {}
            });
        }
    } catch (error) {
        throw handleFetchError({
            error,
            url,
            requestBodyValues: {}
        });
    }
};
// src/inject-json-instruction.ts
var DEFAULT_SCHEMA_PREFIX = "JSON schema:";
var DEFAULT_SCHEMA_SUFFIX = "You MUST answer with a JSON object that matches the JSON schema above.";
var DEFAULT_GENERIC_SUFFIX = "You MUST answer with JSON.";
function injectJsonInstruction({ prompt, schema, schemaPrefix = schema != null ? DEFAULT_SCHEMA_PREFIX : void 0, schemaSuffix = schema != null ? DEFAULT_SCHEMA_SUFFIX : DEFAULT_GENERIC_SUFFIX }) {
    return [
        prompt != null && prompt.length > 0 ? prompt : void 0,
        prompt != null && prompt.length > 0 ? "" : void 0,
        // add a newline if prompt is not null
        schemaPrefix,
        schema != null ? JSON.stringify(schema) : void 0,
        schemaSuffix
    ].filter((line)=>line != null).join("\n");
}
function injectJsonInstructionIntoMessages({ messages, schema, schemaPrefix, schemaSuffix }) {
    var _a, _b;
    const systemMessage = ((_a = messages[0]) == null ? void 0 : _a.role) === "system" ? {
        ...messages[0]
    } : {
        role: "system",
        content: ""
    };
    systemMessage.content = injectJsonInstruction({
        prompt: systemMessage.content,
        schema,
        schemaPrefix,
        schemaSuffix
    });
    return [
        systemMessage,
        ...((_b = messages[0]) == null ? void 0 : _b.role) === "system" ? messages.slice(1) : messages
    ];
}
// src/is-url-supported.ts
function isUrlSupported({ mediaType, url, supportedUrls }) {
    url = url.toLowerCase();
    mediaType = mediaType.toLowerCase();
    return Object.entries(supportedUrls).map(([key, value])=>{
        const mediaType2 = key.toLowerCase();
        return mediaType2 === "*" || mediaType2 === "*/*" ? {
            mediaTypePrefix: "",
            regexes: value
        } : {
            mediaTypePrefix: mediaType2.replace(/\*/, ""),
            regexes: value
        };
    }).filter(({ mediaTypePrefix })=>mediaType.startsWith(mediaTypePrefix)).flatMap(({ regexes })=>regexes).some((pattern)=>pattern.test(url));
}
;
function loadApiKey({ apiKey, environmentVariableName, apiKeyParameterName = "apiKey", description }) {
    if (typeof apiKey === "string") {
        return apiKey;
    }
    if (apiKey != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string.`
        });
    }
    if (typeof process === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter. Environment variables is not supported in this environment.`
        });
    }
    apiKey = process.env[environmentVariableName];
    if (apiKey == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key is missing. Pass it using the '${apiKeyParameterName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof apiKey !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoadAPIKeyError"]({
            message: `${description} API key must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
        });
    }
    return apiKey;
}
// src/load-optional-setting.ts
function loadOptionalSetting({ settingValue, environmentVariableName }) {
    if (typeof settingValue === "string") {
        return settingValue;
    }
    if (settingValue != null || typeof process === "undefined") {
        return void 0;
    }
    settingValue = process.env[environmentVariableName];
    if (settingValue == null || typeof settingValue !== "string") {
        return void 0;
    }
    return settingValue;
}
;
function loadSetting({ settingValue, environmentVariableName, settingName, description }) {
    if (typeof settingValue === "string") {
        return settingValue;
    }
    if (settingValue != null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string.`
        });
    }
    if (typeof process === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter. Environment variables is not supported in this environment.`
        });
    }
    settingValue = process.env[environmentVariableName];
    if (settingValue == null) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting is missing. Pass it using the '${settingName}' parameter or the ${environmentVariableName} environment variable.`
        });
    }
    if (typeof settingValue !== "string") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LoadSettingError"]({
            message: `${description} setting must be a string. The value of the ${environmentVariableName} environment variable is not a string.`
        });
    }
    return settingValue;
}
// src/media-type-to-extension.ts
function mediaTypeToExtension(mediaType) {
    var _a;
    const [_type, subtype = ""] = mediaType.toLowerCase().split("/");
    return (_a = ({
        mpeg: "mp3",
        "x-wav": "wav",
        opus: "ogg",
        mp4: "m4a",
        "x-m4a": "m4a"
    })[subtype]) != null ? _a : subtype;
}
;
// src/secure-json-parse.ts
var suspectProtoRx = /"__proto__"\s*:/;
var suspectConstructorRx = /"constructor"\s*:/;
function _parse(text) {
    const obj = JSON.parse(text);
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
        return obj;
    }
    return filter(obj);
}
function filter(obj) {
    let next = [
        obj
    ];
    while(next.length){
        const nodes = next;
        next = [];
        for (const node of nodes){
            if (Object.prototype.hasOwnProperty.call(node, "__proto__")) {
                throw new SyntaxError("Object contains forbidden prototype property");
            }
            if (Object.prototype.hasOwnProperty.call(node, "constructor") && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) {
                throw new SyntaxError("Object contains forbidden prototype property");
            }
            for(const key in node){
                const value = node[key];
                if (value && typeof value === "object") {
                    next.push(value);
                }
            }
        }
    }
    return obj;
}
function secureJsonParse(text) {
    const { stackTraceLimit } = Error;
    Error.stackTraceLimit = 0;
    try {
        return _parse(text);
    } finally{
        Error.stackTraceLimit = stackTraceLimit;
    }
}
;
;
var validatorSymbol = Symbol.for("vercel.ai.validator");
function validator(validate) {
    return {
        [validatorSymbol]: true,
        validate
    };
}
function isValidator(value) {
    return typeof value === "object" && value !== null && validatorSymbol in value && value[validatorSymbol] === true && "validate" in value;
}
function lazyValidator(createValidator) {
    let validator2;
    return ()=>{
        if (validator2 == null) {
            validator2 = createValidator();
        }
        return validator2;
    };
}
function asValidator(value) {
    return isValidator(value) ? value : typeof value === "function" ? value() : standardSchemaValidator(value);
}
function standardSchemaValidator(standardSchema) {
    return validator(async (value)=>{
        const result = await standardSchema["~standard"].validate(value);
        return result.issues == null ? {
            success: true,
            value: result.value
        } : {
            success: false,
            error: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeValidationError"]({
                value,
                cause: result.issues
            })
        };
    });
}
// src/validate-types.ts
async function validateTypes({ value, schema }) {
    const result = await safeValidateTypes({
        value,
        schema
    });
    if (!result.success) {
        throw __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
            value,
            cause: result.error
        });
    }
    return result.value;
}
async function safeValidateTypes({ value, schema }) {
    const validator2 = asValidator(schema);
    try {
        if (validator2.validate == null) {
            return {
                success: true,
                value,
                rawValue: value
            };
        }
        const result = await validator2.validate(value);
        if (result.success) {
            return {
                success: true,
                value: result.value,
                rawValue: value
            };
        }
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: result.error
            }),
            rawValue: value
        };
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeValidationError"].wrap({
                value,
                cause: error
            }),
            rawValue: value
        };
    }
}
// src/parse-json.ts
async function parseJSON({ text, schema }) {
    try {
        const value = secureJsonParse(text);
        if (schema == null) {
            return value;
        }
        return validateTypes({
            value,
            schema
        });
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONParseError"].isInstance(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeValidationError"].isInstance(error)) {
            throw error;
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONParseError"]({
            text,
            cause: error
        });
    }
}
async function safeParseJSON({ text, schema }) {
    try {
        const value = secureJsonParse(text);
        if (schema == null) {
            return {
                success: true,
                value,
                rawValue: value
            };
        }
        return await safeValidateTypes({
            value,
            schema
        });
    } catch (error) {
        return {
            success: false,
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONParseError"].isInstance(error) ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JSONParseError"]({
                text,
                cause: error
            }),
            rawValue: void 0
        };
    }
}
function isParsableJson(input) {
    try {
        secureJsonParse(input);
        return true;
    } catch (e) {
        return false;
    }
}
;
function parseJsonEventStream({ stream, schema }) {
    return stream.pipeThrough(new TextDecoderStream()).pipeThrough(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$eventsource$2d$parser$2f$dist$2f$stream$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EventSourceParserStream"]()).pipeThrough(new TransformStream({
        async transform ({ data }, controller) {
            if (data === "[DONE]") {
                return;
            }
            controller.enqueue(await safeParseJSON({
                text: data,
                schema
            }));
        }
    }));
}
;
async function parseProviderOptions({ provider, providerOptions, schema }) {
    if ((providerOptions == null ? void 0 : providerOptions[provider]) == null) {
        return void 0;
    }
    const parsedProviderOptions = await safeValidateTypes({
        value: providerOptions[provider],
        schema
    });
    if (!parsedProviderOptions.success) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidArgumentError"]({
            argument: "providerOptions",
            message: `invalid ${provider} provider options`,
            cause: parsedProviderOptions.error
        });
    }
    return parsedProviderOptions.value;
}
;
var getOriginalFetch2 = ()=>globalThis.fetch;
var postJsonToApi = async ({ url, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch })=>postToApi({
        url,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: {
            content: JSON.stringify(body),
            values: body
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch
    });
var postFormDataToApi = async ({ url, headers, formData, failedResponseHandler, successfulResponseHandler, abortSignal, fetch })=>postToApi({
        url,
        headers,
        body: {
            content: formData,
            values: Object.fromEntries(formData.entries())
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch
    });
var postToApi = async ({ url, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch = getOriginalFetch2() })=>{
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: withUserAgentSuffix(headers, `ai-sdk/provider-utils/${VERSION}`, getRuntimeEnvironmentUserAgent()),
            body: body.content,
            signal: abortSignal
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!response.ok) {
            let errorInformation;
            try {
                errorInformation = await failedResponseHandler({
                    response,
                    url,
                    requestBodyValues: body.values
                });
            } catch (error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: "Failed to process error response",
                    cause: error,
                    statusCode: response.status,
                    url,
                    responseHeaders,
                    requestBodyValues: body.values
                });
            }
            throw errorInformation.value;
        }
        try {
            return await successfulResponseHandler({
                response,
                url,
                requestBodyValues: body.values
            });
        } catch (error) {
            if (error instanceof Error) {
                if (isAbortError(error) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"].isInstance(error)) {
                    throw error;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to process successful response",
                cause: error,
                statusCode: response.status,
                url,
                responseHeaders,
                requestBodyValues: body.values
            });
        }
    } catch (error) {
        throw handleFetchError({
            error,
            url,
            requestBodyValues: body.values
        });
    }
};
// src/types/tool.ts
function tool(tool2) {
    return tool2;
}
function dynamicTool(tool2) {
    return {
        ...tool2,
        type: "dynamic"
    };
}
// src/provider-defined-tool-factory.ts
function createProviderDefinedToolFactory({ id, name, inputSchema }) {
    return ({ execute, outputSchema, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args })=>tool({
            type: "provider-defined",
            id,
            name,
            args,
            inputSchema,
            outputSchema,
            execute,
            toModelOutput,
            onInputStart,
            onInputDelta,
            onInputAvailable
        });
}
function createProviderDefinedToolFactoryWithOutputSchema({ id, name, inputSchema, outputSchema }) {
    return ({ execute, toModelOutput, onInputStart, onInputDelta, onInputAvailable, ...args })=>tool({
            type: "provider-defined",
            id,
            name,
            args,
            inputSchema,
            outputSchema,
            execute,
            toModelOutput,
            onInputStart,
            onInputDelta,
            onInputAvailable
        });
}
// src/resolve.ts
async function resolve(value) {
    if (typeof value === "function") {
        value = value();
    }
    return Promise.resolve(value);
}
;
var createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable })=>async ({ response, url, requestBodyValues })=>{
        const responseBody = await response.text();
        const responseHeaders = extractResponseHeaders(response);
        if (responseBody.trim() === "") {
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: response.statusText,
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
        try {
            const parsedError = await parseJSON({
                text: responseBody,
                schema: errorSchema
            });
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: errorToMessage(parsedError),
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    data: parsedError,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
                })
            };
        } catch (parseError) {
            return {
                responseHeaders,
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                    message: response.statusText,
                    url,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
    };
var createEventSourceResponseHandler = (chunkSchema)=>async ({ response })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (response.body == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyResponseBodyError"]({});
        }
        return {
            responseHeaders,
            value: parseJsonEventStream({
                stream: response.body,
                schema: chunkSchema
            })
        };
    };
var createJsonStreamResponseHandler = (chunkSchema)=>async ({ response })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (response.body == null) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmptyResponseBodyError"]({});
        }
        let buffer = "";
        return {
            responseHeaders,
            value: response.body.pipeThrough(new TextDecoderStream()).pipeThrough(new TransformStream({
                async transform (chunkText, controller) {
                    if (chunkText.endsWith("\n")) {
                        controller.enqueue(await safeParseJSON({
                            text: buffer + chunkText,
                            schema: chunkSchema
                        }));
                        buffer = "";
                    } else {
                        buffer += chunkText;
                    }
                }
            }))
        };
    };
var createJsonResponseHandler = (responseSchema)=>async ({ response, url, requestBodyValues })=>{
        const responseBody = await response.text();
        const parsedResult = await safeParseJSON({
            text: responseBody,
            schema: responseSchema
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!parsedResult.success) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Invalid JSON response",
                cause: parsedResult.error,
                statusCode: response.status,
                responseHeaders,
                responseBody,
                url,
                requestBodyValues
            });
        }
        return {
            responseHeaders,
            value: parsedResult.value,
            rawValue: parsedResult.rawValue
        };
    };
var createBinaryResponseHandler = ()=>async ({ response, url, requestBodyValues })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (!response.body) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Response body is empty",
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody: void 0
            });
        }
        try {
            const buffer = await response.arrayBuffer();
            return {
                responseHeaders,
                value: new Uint8Array(buffer)
            };
        } catch (error) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                message: "Failed to read response as array buffer",
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody: void 0,
                cause: error
            });
        }
    };
var createStatusCodeErrorResponseHandler = ()=>async ({ response, url, requestBodyValues })=>{
        const responseHeaders = extractResponseHeaders(response);
        const responseBody = await response.text();
        return {
            responseHeaders,
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2d$v5$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APICallError"]({
                message: response.statusText,
                url,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody
            })
        };
    };
;
// src/zod-to-json-schema/get-relative-path.ts
var getRelativePath = (pathA, pathB)=>{
    let i = 0;
    for(; i < pathA.length && i < pathB.length; i++){
        if (pathA[i] !== pathB[i]) break;
    }
    return [
        (pathA.length - i).toString(),
        ...pathB.slice(i)
    ].join("/");
};
// src/zod-to-json-schema/options.ts
var ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
    name: void 0,
    $refStrategy: "root",
    basePath: [
        "#"
    ],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref"
};
var getDefaultOptions = (options)=>typeof options === "string" ? {
        ...defaultOptions,
        name: options
    } : {
        ...defaultOptions,
        ...options
    };
;
// src/zod-to-json-schema/parsers/any.ts
function parseAnyDef() {
    return {};
}
;
function parseArrayDef(def, refs) {
    var _a, _b, _c;
    const res = {
        type: "array"
    };
    if (((_a = def.type) == null ? void 0 : _a._def) && ((_c = (_b = def.type) == null ? void 0 : _b._def) == null ? void 0 : _c.typeName) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny) {
        res.items = parseDef(def.type._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "items"
            ]
        });
    }
    if (def.minLength) {
        res.minItems = def.minLength.value;
    }
    if (def.maxLength) {
        res.maxItems = def.maxLength.value;
    }
    if (def.exactLength) {
        res.minItems = def.exactLength.value;
        res.maxItems = def.exactLength.value;
    }
    return res;
}
// src/zod-to-json-schema/parsers/bigint.ts
function parseBigintDef(def) {
    const res = {
        type: "integer",
        format: "int64"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                if (check.inclusive) {
                    res.minimum = check.value;
                } else {
                    res.exclusiveMinimum = check.value;
                }
                break;
            case "max":
                if (check.inclusive) {
                    res.maximum = check.value;
                } else {
                    res.exclusiveMaximum = check.value;
                }
                break;
            case "multipleOf":
                res.multipleOf = check.value;
                break;
        }
    }
    return res;
}
// src/zod-to-json-schema/parsers/boolean.ts
function parseBooleanDef() {
    return {
        type: "boolean"
    };
}
// src/zod-to-json-schema/parsers/branded.ts
function parseBrandedDef(_def, refs) {
    return parseDef(_def.type._def, refs);
}
// src/zod-to-json-schema/parsers/catch.ts
var parseCatchDef = (def, refs)=>{
    return parseDef(def.innerType._def, refs);
};
// src/zod-to-json-schema/parsers/date.ts
function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy != null ? overrideDateStrategy : refs.dateStrategy;
    if (Array.isArray(strategy)) {
        return {
            anyOf: strategy.map((item, i)=>parseDateDef(def, refs, item))
        };
    }
    switch(strategy){
        case "string":
        case "format:date-time":
            return {
                type: "string",
                format: "date-time"
            };
        case "format:date":
            return {
                type: "string",
                format: "date"
            };
        case "integer":
            return integerDateParser(def);
    }
}
var integerDateParser = (def)=>{
    const res = {
        type: "integer",
        format: "unix-time"
    };
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                res.minimum = check.value;
                break;
            case "max":
                res.maximum = check.value;
                break;
        }
    }
    return res;
};
// src/zod-to-json-schema/parsers/default.ts
function parseDefaultDef(_def, refs) {
    return {
        ...parseDef(_def.innerType._def, refs),
        default: _def.defaultValue()
    };
}
// src/zod-to-json-schema/parsers/effects.ts
function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef();
}
// src/zod-to-json-schema/parsers/enum.ts
function parseEnumDef(def) {
    return {
        type: "string",
        enum: Array.from(def.values)
    };
}
// src/zod-to-json-schema/parsers/intersection.ts
var isJsonSchema7AllOfType = (type)=>{
    if ("type" in type && type.type === "string") return false;
    return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
    const allOf = [
        parseDef(def.left._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "0"
            ]
        }),
        parseDef(def.right._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "1"
            ]
        })
    ].filter((x)=>!!x);
    const mergedAllOf = [];
    allOf.forEach((schema)=>{
        if (isJsonSchema7AllOfType(schema)) {
            mergedAllOf.push(...schema.allOf);
        } else {
            let nestedSchema = schema;
            if ("additionalProperties" in schema && schema.additionalProperties === false) {
                const { additionalProperties, ...rest } = schema;
                nestedSchema = rest;
            }
            mergedAllOf.push(nestedSchema);
        }
    });
    return mergedAllOf.length ? {
        allOf: mergedAllOf
    } : void 0;
}
// src/zod-to-json-schema/parsers/literal.ts
function parseLiteralDef(def) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
        return {
            type: Array.isArray(def.value) ? "array" : "object"
        };
    }
    return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        const: def.value
    };
}
;
// src/zod-to-json-schema/parsers/string.ts
var emojiRegex = void 0;
var zodPatterns = {
    /**
   * `c` was changed to `[cC]` to replicate /i flag
   */ cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    /**
   * `a-z` was added to replicate /i flag
   */ email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */ emoji: ()=>{
        if (emojiRegex === void 0) {
            emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
        }
        return emojiRegex;
    },
    /**
   * Unused
   */ uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    /**
   * Unused
   */ ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    /**
   * Unused
   */ ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
    const res = {
        type: "string"
    };
    if (def.checks) {
        for (const check of def.checks){
            switch(check.kind){
                case "min":
                    res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
                    break;
                case "max":
                    res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
                    break;
                case "email":
                    switch(refs.emailStrategy){
                        case "format:email":
                            addFormat(res, "email", check.message, refs);
                            break;
                        case "format:idn-email":
                            addFormat(res, "idn-email", check.message, refs);
                            break;
                        case "pattern:zod":
                            addPattern(res, zodPatterns.email, check.message, refs);
                            break;
                    }
                    break;
                case "url":
                    addFormat(res, "uri", check.message, refs);
                    break;
                case "uuid":
                    addFormat(res, "uuid", check.message, refs);
                    break;
                case "regex":
                    addPattern(res, check.regex, check.message, refs);
                    break;
                case "cuid":
                    addPattern(res, zodPatterns.cuid, check.message, refs);
                    break;
                case "cuid2":
                    addPattern(res, zodPatterns.cuid2, check.message, refs);
                    break;
                case "startsWith":
                    addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
                    break;
                case "endsWith":
                    addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
                    break;
                case "datetime":
                    addFormat(res, "date-time", check.message, refs);
                    break;
                case "date":
                    addFormat(res, "date", check.message, refs);
                    break;
                case "time":
                    addFormat(res, "time", check.message, refs);
                    break;
                case "duration":
                    addFormat(res, "duration", check.message, refs);
                    break;
                case "length":
                    res.minLength = typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value;
                    res.maxLength = typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value;
                    break;
                case "includes":
                    {
                        addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
                        break;
                    }
                case "ip":
                    {
                        if (check.version !== "v6") {
                            addFormat(res, "ipv4", check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addFormat(res, "ipv6", check.message, refs);
                        }
                        break;
                    }
                case "base64url":
                    addPattern(res, zodPatterns.base64url, check.message, refs);
                    break;
                case "jwt":
                    addPattern(res, zodPatterns.jwt, check.message, refs);
                    break;
                case "cidr":
                    {
                        if (check.version !== "v6") {
                            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
                        }
                        break;
                    }
                case "emoji":
                    addPattern(res, zodPatterns.emoji(), check.message, refs);
                    break;
                case "ulid":
                    {
                        addPattern(res, zodPatterns.ulid, check.message, refs);
                        break;
                    }
                case "base64":
                    {
                        switch(refs.base64Strategy){
                            case "format:binary":
                                {
                                    addFormat(res, "binary", check.message, refs);
                                    break;
                                }
                            case "contentEncoding:base64":
                                {
                                    res.contentEncoding = "base64";
                                    break;
                                }
                            case "pattern:zod":
                                {
                                    addPattern(res, zodPatterns.base64, check.message, refs);
                                    break;
                                }
                        }
                        break;
                    }
                case "nanoid":
                    {
                        addPattern(res, zodPatterns.nanoid, check.message, refs);
                    }
                case "toLowerCase":
                case "toUpperCase":
                case "trim":
                    break;
                default:
                    /* @__PURE__ */ ((_)=>{})(check);
            }
        }
    }
    return res;
}
function escapeLiteralCheckValue(literal, refs) {
    return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
    let result = "";
    for(let i = 0; i < source.length; i++){
        if (!ALPHA_NUMERIC.has(source[i])) {
            result += "\\";
        }
        result += source[i];
    }
    return result;
}
function addFormat(schema, value, message, refs) {
    var _a;
    if (schema.format || ((_a = schema.anyOf) == null ? void 0 : _a.some((x)=>x.format))) {
        if (!schema.anyOf) {
            schema.anyOf = [];
        }
        if (schema.format) {
            schema.anyOf.push({
                format: schema.format
            });
            delete schema.format;
        }
        schema.anyOf.push({
            format: value,
            ...message && refs.errorMessages && {
                errorMessage: {
                    format: message
                }
            }
        });
    } else {
        schema.format = value;
    }
}
function addPattern(schema, regex, message, refs) {
    var _a;
    if (schema.pattern || ((_a = schema.allOf) == null ? void 0 : _a.some((x)=>x.pattern))) {
        if (!schema.allOf) {
            schema.allOf = [];
        }
        if (schema.pattern) {
            schema.allOf.push({
                pattern: schema.pattern
            });
            delete schema.pattern;
        }
        schema.allOf.push({
            pattern: stringifyRegExpWithFlags(regex, refs),
            ...message && refs.errorMessages && {
                errorMessage: {
                    pattern: message
                }
            }
        });
    } else {
        schema.pattern = stringifyRegExpWithFlags(regex, refs);
    }
}
function stringifyRegExpWithFlags(regex, refs) {
    var _a;
    if (!refs.applyRegexFlags || !regex.flags) {
        return regex.source;
    }
    const flags = {
        i: regex.flags.includes("i"),
        // Case-insensitive
        m: regex.flags.includes("m"),
        // `^` and `$` matches adjacent to newline characters
        s: regex.flags.includes("s")
    };
    const source = flags.i ? regex.source.toLowerCase() : regex.source;
    let pattern = "";
    let isEscaped = false;
    let inCharGroup = false;
    let inCharRange = false;
    for(let i = 0; i < source.length; i++){
        if (isEscaped) {
            pattern += source[i];
            isEscaped = false;
            continue;
        }
        if (flags.i) {
            if (inCharGroup) {
                if (source[i].match(/[a-z]/)) {
                    if (inCharRange) {
                        pattern += source[i];
                        pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
                        inCharRange = false;
                    } else if (source[i + 1] === "-" && ((_a = source[i + 2]) == null ? void 0 : _a.match(/[a-z]/))) {
                        pattern += source[i];
                        inCharRange = true;
                    } else {
                        pattern += `${source[i]}${source[i].toUpperCase()}`;
                    }
                    continue;
                }
            } else if (source[i].match(/[a-z]/)) {
                pattern += `[${source[i]}${source[i].toUpperCase()}]`;
                continue;
            }
        }
        if (flags.m) {
            if (source[i] === "^") {
                pattern += `(^|(?<=[\r
]))`;
                continue;
            } else if (source[i] === "$") {
                pattern += `($|(?=[\r
]))`;
                continue;
            }
        }
        if (flags.s && source[i] === ".") {
            pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
            continue;
        }
        pattern += source[i];
        if (source[i] === "\\") {
            isEscaped = true;
        } else if (inCharGroup && source[i] === "]") {
            inCharGroup = false;
        } else if (!inCharGroup && source[i] === "[") {
            inCharGroup = true;
        }
    }
    try {
        new RegExp(pattern);
    } catch (e) {
        console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
        return regex.source;
    }
    return pattern;
}
// src/zod-to-json-schema/parsers/record.ts
function parseRecordDef(def, refs) {
    var _a, _b, _c, _d, _e, _f;
    const schema = {
        type: "object",
        additionalProperties: (_a = parseDef(def.valueType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        })) != null ? _a : refs.allowedAdditionalProperties
    };
    if (((_b = def.keyType) == null ? void 0 : _b._def.typeName) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && ((_c = def.keyType._def.checks) == null ? void 0 : _c.length)) {
        const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    } else if (((_d = def.keyType) == null ? void 0 : _d._def.typeName) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) {
        return {
            ...schema,
            propertyNames: {
                enum: def.keyType._def.values
            }
        };
    } else if (((_e = def.keyType) == null ? void 0 : _e._def.typeName) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded && def.keyType._def.type._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && ((_f = def.keyType._def.type._def.checks) == null ? void 0 : _f.length)) {
        const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    }
    return schema;
}
// src/zod-to-json-schema/parsers/map.ts
function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
        return parseRecordDef(def, refs);
    }
    const keys = parseDef(def.keyType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "0"
        ]
    }) || parseAnyDef();
    const values = parseDef(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "1"
        ]
    }) || parseAnyDef();
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [
                keys,
                values
            ],
            minItems: 2,
            maxItems: 2
        }
    };
}
// src/zod-to-json-schema/parsers/native-enum.ts
function parseNativeEnumDef(def) {
    const object = def.values;
    const actualKeys = Object.keys(def.values).filter((key)=>{
        return typeof object[object[key]] !== "number";
    });
    const actualValues = actualKeys.map((key)=>object[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values)=>typeof values)));
    return {
        type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : [
            "string",
            "number"
        ],
        enum: actualValues
    };
}
// src/zod-to-json-schema/parsers/never.ts
function parseNeverDef() {
    return {
        not: parseAnyDef()
    };
}
// src/zod-to-json-schema/parsers/null.ts
function parseNullDef() {
    return {
        type: "null"
    };
}
// src/zod-to-json-schema/parsers/union.ts
var primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
};
function parseUnionDef(def, refs) {
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    if (options.every((x)=>x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
        const types = options.reduce((types2, x)=>{
            const type = primitiveMappings[x._def.typeName];
            return type && !types2.includes(type) ? [
                ...types2,
                type
            ] : types2;
        }, []);
        return {
            type: types.length > 1 ? types : types[0]
        };
    } else if (options.every((x)=>x._def.typeName === "ZodLiteral" && !x.description)) {
        const types = options.reduce((acc, x)=>{
            const type = typeof x._def.value;
            switch(type){
                case "string":
                case "number":
                case "boolean":
                    return [
                        ...acc,
                        type
                    ];
                case "bigint":
                    return [
                        ...acc,
                        "integer"
                    ];
                case "object":
                    if (x._def.value === null) return [
                        ...acc,
                        "null"
                    ];
                case "symbol":
                case "undefined":
                case "function":
                default:
                    return acc;
            }
        }, []);
        if (types.length === options.length) {
            const uniqueTypes = types.filter((x, i, a)=>a.indexOf(x) === i);
            return {
                type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
                enum: options.reduce((acc, x)=>{
                    return acc.includes(x._def.value) ? acc : [
                        ...acc,
                        x._def.value
                    ];
                }, [])
            };
        }
    } else if (options.every((x)=>x._def.typeName === "ZodEnum")) {
        return {
            type: "string",
            enum: options.reduce((acc, x)=>[
                    ...acc,
                    ...x._def.values.filter((x2)=>!acc.includes(x2))
                ], [])
        };
    }
    return asAnyOf(def, refs);
}
var asAnyOf = (def, refs)=>{
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i)=>parseDef(x._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "anyOf",
                `${i}`
            ]
        })).filter((x)=>!!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? {
        anyOf
    } : void 0;
};
// src/zod-to-json-schema/parsers/nullable.ts
function parseNullableDef(def, refs) {
    if ([
        "ZodString",
        "ZodNumber",
        "ZodBigInt",
        "ZodBoolean",
        "ZodNull"
    ].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
        return {
            type: [
                primitiveMappings[def.innerType._def.typeName],
                "null"
            ]
        };
    }
    const base = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "0"
        ]
    });
    return base && {
        anyOf: [
            base,
            {
                type: "null"
            }
        ]
    };
}
// src/zod-to-json-schema/parsers/number.ts
function parseNumberDef(def) {
    const res = {
        type: "number"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "int":
                res.type = "integer";
                break;
            case "min":
                if (check.inclusive) {
                    res.minimum = check.value;
                } else {
                    res.exclusiveMinimum = check.value;
                }
                break;
            case "max":
                if (check.inclusive) {
                    res.maximum = check.value;
                } else {
                    res.exclusiveMaximum = check.value;
                }
                break;
            case "multipleOf":
                res.multipleOf = check.value;
                break;
        }
    }
    return res;
}
// src/zod-to-json-schema/parsers/object.ts
function parseObjectDef(def, refs) {
    const result = {
        type: "object",
        properties: {}
    };
    const required = [];
    const shape = def.shape();
    for(const propName in shape){
        let propDef = shape[propName];
        if (propDef === void 0 || propDef._def === void 0) {
            continue;
        }
        const propOptional = safeIsOptional(propDef);
        const parsedDef = parseDef(propDef._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "properties",
                propName
            ],
            propertyPath: [
                ...refs.currentPath,
                "properties",
                propName
            ]
        });
        if (parsedDef === void 0) {
            continue;
        }
        result.properties[propName] = parsedDef;
        if (!propOptional) {
            required.push(propName);
        }
    }
    if (required.length) {
        result.required = required;
    }
    const additionalProperties = decideAdditionalProperties(def, refs);
    if (additionalProperties !== void 0) {
        result.additionalProperties = additionalProperties;
    }
    return result;
}
function decideAdditionalProperties(def, refs) {
    if (def.catchall._def.typeName !== "ZodNever") {
        return parseDef(def.catchall._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        });
    }
    switch(def.unknownKeys){
        case "passthrough":
            return refs.allowedAdditionalProperties;
        case "strict":
            return refs.rejectedAdditionalProperties;
        case "strip":
            return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
    }
}
function safeIsOptional(schema) {
    try {
        return schema.isOptional();
    } catch (e) {
        return true;
    }
}
// src/zod-to-json-schema/parsers/optional.ts
var parseOptionalDef = (def, refs)=>{
    var _a;
    if (refs.currentPath.toString() === ((_a = refs.propertyPath) == null ? void 0 : _a.toString())) {
        return parseDef(def.innerType._def, refs);
    }
    const innerSchema = parseDef(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "1"
        ]
    });
    return innerSchema ? {
        anyOf: [
            {
                not: parseAnyDef()
            },
            innerSchema
        ]
    } : parseAnyDef();
};
// src/zod-to-json-schema/parsers/pipeline.ts
var parsePipelineDef = (def, refs)=>{
    if (refs.pipeStrategy === "input") {
        return parseDef(def.in._def, refs);
    } else if (refs.pipeStrategy === "output") {
        return parseDef(def.out._def, refs);
    }
    const a = parseDef(def.in._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            "0"
        ]
    });
    const b = parseDef(def.out._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            a ? "1" : "0"
        ]
    });
    return {
        allOf: [
            a,
            b
        ].filter((x)=>x !== void 0)
    };
};
// src/zod-to-json-schema/parsers/promise.ts
function parsePromiseDef(def, refs) {
    return parseDef(def.type._def, refs);
}
// src/zod-to-json-schema/parsers/set.ts
function parseSetDef(def, refs) {
    const items = parseDef(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items"
        ]
    });
    const schema = {
        type: "array",
        uniqueItems: true,
        items
    };
    if (def.minSize) {
        schema.minItems = def.minSize.value;
    }
    if (def.maxSize) {
        schema.maxItems = def.maxSize.value;
    }
    return schema;
}
// src/zod-to-json-schema/parsers/tuple.ts
function parseTupleDef(def, refs) {
    if (def.rest) {
        return {
            type: "array",
            minItems: def.items.length,
            items: def.items.map((x, i)=>parseDef(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === void 0 ? acc : [
                    ...acc,
                    x
                ], []),
            additionalItems: parseDef(def.rest._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "additionalItems"
                ]
            })
        };
    } else {
        return {
            type: "array",
            minItems: def.items.length,
            maxItems: def.items.length,
            items: def.items.map((x, i)=>parseDef(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === void 0 ? acc : [
                    ...acc,
                    x
                ], [])
        };
    }
}
// src/zod-to-json-schema/parsers/undefined.ts
function parseUndefinedDef() {
    return {
        not: parseAnyDef()
    };
}
// src/zod-to-json-schema/parsers/unknown.ts
function parseUnknownDef() {
    return parseAnyDef();
}
// src/zod-to-json-schema/parsers/readonly.ts
var parseReadonlyDef = (def, refs)=>{
    return parseDef(def.innerType._def, refs);
};
// src/zod-to-json-schema/select-parser.ts
var selectParser = (def, typeName, refs)=>{
    switch(typeName){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString:
            return parseStringDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNumber:
            return parseNumberDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodObject:
            return parseObjectDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBigInt:
            return parseBigintDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBoolean:
            return parseBooleanDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDate:
            return parseDateDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUndefined:
            return parseUndefinedDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNull:
            return parseNullDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodArray:
            return parseArrayDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnion:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDiscriminatedUnion:
            return parseUnionDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodIntersection:
            return parseIntersectionDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodTuple:
            return parseTupleDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodRecord:
            return parseRecordDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLiteral:
            return parseLiteralDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum:
            return parseEnumDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNativeEnum:
            return parseNativeEnumDef(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNullable:
            return parseNullableDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodOptional:
            return parseOptionalDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodMap:
            return parseMapDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSet:
            return parseSetDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLazy:
            return ()=>def.getter()._def;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPromise:
            return parsePromiseDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNaN:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNever:
            return parseNeverDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEffects:
            return parseEffectsDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny:
            return parseAnyDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnknown:
            return parseUnknownDef();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDefault:
            return parseDefaultDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded:
            return parseBrandedDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodReadonly:
            return parseReadonlyDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodCatch:
            return parseCatchDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPipeline:
            return parsePipelineDef(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodFunction:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodVoid:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSymbol:
            return void 0;
        default:
            return /* @__PURE__ */ ((_)=>void 0)(typeName);
    }
};
// src/zod-to-json-schema/parse-def.ts
function parseDef(def, refs, forceResolution = false) {
    var _a;
    const seenItem = refs.seen.get(def);
    if (refs.override) {
        const overrideResult = (_a = refs.override) == null ? void 0 : _a.call(refs, def, refs, seenItem, forceResolution);
        if (overrideResult !== ignoreOverride) {
            return overrideResult;
        }
    }
    if (seenItem && !forceResolution) {
        const seenSchema = get$ref(seenItem, refs);
        if (seenSchema !== void 0) {
            return seenSchema;
        }
    }
    const newItem = {
        def,
        path: refs.currentPath,
        jsonSchema: void 0
    };
    refs.seen.set(def, newItem);
    const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
    const jsonSchema2 = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
    if (jsonSchema2) {
        addMeta(def, refs, jsonSchema2);
    }
    if (refs.postProcess) {
        const postProcessResult = refs.postProcess(jsonSchema2, def, refs);
        newItem.jsonSchema = jsonSchema2;
        return postProcessResult;
    }
    newItem.jsonSchema = jsonSchema2;
    return jsonSchema2;
}
var get$ref = (item, refs)=>{
    switch(refs.$refStrategy){
        case "root":
            return {
                $ref: item.path.join("/")
            };
        case "relative":
            return {
                $ref: getRelativePath(refs.currentPath, item.path)
            };
        case "none":
        case "seen":
            {
                if (item.path.length < refs.currentPath.length && item.path.every((value, index)=>refs.currentPath[index] === value)) {
                    console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
                    return parseAnyDef();
                }
                return refs.$refStrategy === "seen" ? parseAnyDef() : void 0;
            }
    }
};
var addMeta = (def, refs, jsonSchema2)=>{
    if (def.description) {
        jsonSchema2.description = def.description;
    }
    return jsonSchema2;
};
// src/zod-to-json-schema/refs.ts
var getRefs = (options)=>{
    const _options = getDefaultOptions(options);
    const currentPath = _options.name !== void 0 ? [
        ..._options.basePath,
        _options.definitionPath,
        _options.name
    ] : _options.basePath;
    return {
        ..._options,
        currentPath,
        propertyPath: void 0,
        seen: new Map(Object.entries(_options.definitions).map(([name, def])=>[
                def._def,
                {
                    def: def._def,
                    path: [
                        ..._options.basePath,
                        _options.definitionPath,
                        name
                    ],
                    // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
                    jsonSchema: void 0
                }
            ]))
    };
};
// src/zod-to-json-schema/zod-to-json-schema.ts
var zodToJsonSchema = (schema, options)=>{
    var _a;
    const refs = getRefs(options);
    let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name2, schema2])=>{
        var _a2;
        return {
            ...acc,
            [name2]: (_a2 = parseDef(schema2._def, {
                ...refs,
                currentPath: [
                    ...refs.basePath,
                    refs.definitionPath,
                    name2
                ]
            }, true)) != null ? _a2 : parseAnyDef()
        };
    }, {}) : void 0;
    const name = typeof options === "string" ? options : (options == null ? void 0 : options.nameStrategy) === "title" ? void 0 : options == null ? void 0 : options.name;
    const main = (_a = parseDef(schema._def, name === void 0 ? refs : {
        ...refs,
        currentPath: [
            ...refs.basePath,
            refs.definitionPath,
            name
        ]
    }, false)) != null ? _a : parseAnyDef();
    const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
    if (title !== void 0) {
        main.title = title;
    }
    const combined = name === void 0 ? definitions ? {
        ...main,
        [refs.definitionPath]: definitions
    } : main : {
        $ref: [
            ...refs.$refStrategy === "relative" ? [] : refs.basePath,
            refs.definitionPath,
            name
        ].join("/"),
        [refs.definitionPath]: {
            ...definitions,
            [name]: main
        }
    };
    combined.$schema = "http://json-schema.org/draft-07/schema#";
    return combined;
};
// src/zod-to-json-schema/index.ts
var zod_to_json_schema_default = zodToJsonSchema;
// src/zod-schema.ts
function zod3Schema(zodSchema2, options) {
    var _a;
    const useReferences = (_a = options == null ? void 0 : options.useReferences) != null ? _a : false;
    return jsonSchema(// defer json schema creation to avoid unnecessary computation when only validation is needed
    ()=>zod_to_json_schema_default(zodSchema2, {
            $refStrategy: useReferences ? "root" : "none"
        }), {
        validate: async (value)=>{
            const result = await zodSchema2.safeParseAsync(value);
            return result.success ? {
                success: true,
                value: result.data
            } : {
                success: false,
                error: result.error
            };
        }
    });
}
function zod4Schema(zodSchema2, options) {
    var _a;
    const useReferences = (_a = options == null ? void 0 : options.useReferences) != null ? _a : false;
    return jsonSchema(// defer json schema creation to avoid unnecessary computation when only validation is needed
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toJSONSchema"](zodSchema2, {
            target: "draft-7",
            io: "output",
            reused: useReferences ? "ref" : "inline"
        }), {
        validate: async (value)=>{
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeParseAsync"](zodSchema2, value);
            return result.success ? {
                success: true,
                value: result.data
            } : {
                success: false,
                error: result.error
            };
        }
    });
}
function isZod4Schema(zodSchema2) {
    return "_zod" in zodSchema2;
}
function zodSchema(zodSchema2, options) {
    if (isZod4Schema(zodSchema2)) {
        return zod4Schema(zodSchema2, options);
    } else {
        return zod3Schema(zodSchema2, options);
    }
}
// src/schema.ts
var schemaSymbol = Symbol.for("vercel.ai.schema");
function lazySchema(createSchema) {
    let schema;
    return ()=>{
        if (schema == null) {
            schema = createSchema();
        }
        return schema;
    };
}
function jsonSchema(jsonSchema2, { validate } = {}) {
    return {
        [schemaSymbol]: true,
        _type: void 0,
        // should never be used directly
        [validatorSymbol]: true,
        get jsonSchema () {
            if (typeof jsonSchema2 === "function") {
                jsonSchema2 = jsonSchema2();
            }
            return jsonSchema2;
        },
        validate
    };
}
function isSchema(value) {
    return typeof value === "object" && value !== null && schemaSymbol in value && value[schemaSymbol] === true && "jsonSchema" in value && "validate" in value;
}
function asSchema(schema) {
    return schema == null ? jsonSchema({
        properties: {},
        additionalProperties: false
    }) : isSchema(schema) ? schema : typeof schema === "function" ? schema() : zodSchema(schema);
}
// src/uint8-utils.ts
var { btoa, atob } = globalThis;
function convertBase64ToUint8Array(base64String) {
    const base64Url = base64String.replace(/-/g, "+").replace(/_/g, "/");
    const latin1string = atob(base64Url);
    return Uint8Array.from(latin1string, (byte)=>byte.codePointAt(0));
}
function convertUint8ArrayToBase64(array) {
    let latin1string = "";
    for(let i = 0; i < array.length; i++){
        latin1string += String.fromCodePoint(array[i]);
    }
    return btoa(latin1string);
}
function convertToBase64(value) {
    return value instanceof Uint8Array ? convertUint8ArrayToBase64(value) : value;
}
// src/without-trailing-slash.ts
function withoutTrailingSlash(url) {
    return url == null ? void 0 : url.replace(/\/$/, "");
}
// src/is-async-iterable.ts
function isAsyncIterable(obj) {
    return obj != null && typeof obj[Symbol.asyncIterator] === "function";
}
// src/types/execute-tool.ts
async function* executeTool({ execute, input, options }) {
    const result = execute(input, options);
    if (isAsyncIterable(result)) {
        let lastOutput;
        for await (const output of result){
            lastOutput = output;
            yield {
                type: "preliminary",
                output
            };
        }
        yield {
            type: "final",
            output: lastOutput
        };
    } else {
        yield {
            type: "final",
            output: await result
        };
    }
}
;
;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/@isaacs/ttlcache/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// A simple TTL cache with max capacity option, ms resolution,
// autopurge, and reasonably optimized performance
// Relies on the fact that integer Object keys are kept sorted,
// and managed very efficiently by V8.
/* istanbul ignore next */ const perf = typeof performance === 'object' && performance && typeof performance.now === 'function' ? performance : Date;
const now = ()=>perf.now();
const isPosInt = (n)=>n && n === Math.floor(n) && n > 0 && isFinite(n);
const isPosIntOrInf = (n)=>n === Infinity || isPosInt(n);
class TTLCache {
    constructor({ max = Infinity, ttl, updateAgeOnGet = false, checkAgeOnGet = false, noUpdateTTL = false, dispose, noDisposeOnSet = false } = {}){
        // {[expirationTime]: [keys]}
        this.expirations = Object.create(null);
        // {key=>val}
        this.data = new Map();
        // {key=>expiration}
        this.expirationMap = new Map();
        if (ttl !== undefined && !isPosIntOrInf(ttl)) {
            throw new TypeError('ttl must be positive integer or Infinity if set');
        }
        if (!isPosIntOrInf(max)) {
            throw new TypeError('max must be positive integer or Infinity');
        }
        this.ttl = ttl;
        this.max = max;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.checkAgeOnGet = !!checkAgeOnGet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDisposeOnSet = !!noDisposeOnSet;
        if (dispose !== undefined) {
            if (typeof dispose !== 'function') {
                throw new TypeError('dispose must be function if set');
            }
            this.dispose = dispose;
        }
        this.timer = undefined;
        this.timerExpiration = undefined;
    }
    setTimer(expiration, ttl) {
        if (this.timerExpiration < expiration) {
            return;
        }
        if (this.timer) {
            clearTimeout(this.timer);
        }
        const t = setTimeout(()=>{
            this.timer = undefined;
            this.timerExpiration = undefined;
            this.purgeStale();
            for(const exp in this.expirations){
                this.setTimer(exp, exp - now());
                break;
            }
        }, ttl);
        /* istanbul ignore else - affordance for non-node envs */ if (t.unref) t.unref();
        this.timerExpiration = expiration;
        this.timer = t;
    }
    // hang onto the timer so we can clearTimeout if all items
    // are deleted.  Deno doesn't have Timer.unref(), so it
    // hangs otherwise.
    cancelTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timerExpiration = undefined;
            this.timer = undefined;
        }
    }
    /* istanbul ignore next */ cancelTimers() {
        process.emitWarning('TTLCache.cancelTimers has been renamed to ' + 'TTLCache.cancelTimer (no "s"), and will be removed in the next ' + 'major version update');
        return this.cancelTimer();
    }
    clear() {
        const entries = this.dispose !== TTLCache.prototype.dispose ? [
            ...this
        ] : [];
        this.data.clear();
        this.expirationMap.clear();
        // no need for any purging now
        this.cancelTimer();
        this.expirations = Object.create(null);
        for (const [key, val] of entries){
            this.dispose(val, key, 'delete');
        }
    }
    setTTL(key, ttl = this.ttl) {
        const current = this.expirationMap.get(key);
        if (current !== undefined) {
            // remove from the expirations list, so it isn't purged
            const exp = this.expirations[current];
            if (!exp || exp.length <= 1) {
                delete this.expirations[current];
            } else {
                this.expirations[current] = exp.filter((k)=>k !== key);
            }
        }
        if (ttl !== Infinity) {
            const expiration = Math.floor(now() + ttl);
            this.expirationMap.set(key, expiration);
            if (!this.expirations[expiration]) {
                this.expirations[expiration] = [];
                this.setTimer(expiration, ttl);
            }
            this.expirations[expiration].push(key);
        } else {
            this.expirationMap.set(key, Infinity);
        }
    }
    set(key, val, { ttl = this.ttl, noUpdateTTL = this.noUpdateTTL, noDisposeOnSet = this.noDisposeOnSet } = {}) {
        if (!isPosIntOrInf(ttl)) {
            throw new TypeError('ttl must be positive integer or Infinity');
        }
        if (this.expirationMap.has(key)) {
            if (!noUpdateTTL) {
                this.setTTL(key, ttl);
            }
            // has old value
            const oldValue = this.data.get(key);
            if (oldValue !== val) {
                this.data.set(key, val);
                if (!noDisposeOnSet) {
                    this.dispose(oldValue, key, 'set');
                }
            }
        } else {
            this.setTTL(key, ttl);
            this.data.set(key, val);
        }
        while(this.size > this.max){
            this.purgeToCapacity();
        }
        return this;
    }
    has(key) {
        return this.data.has(key);
    }
    getRemainingTTL(key) {
        const expiration = this.expirationMap.get(key);
        return expiration === Infinity ? expiration : expiration !== undefined ? Math.max(0, Math.ceil(expiration - now())) : 0;
    }
    get(key, { updateAgeOnGet = this.updateAgeOnGet, ttl = this.ttl, checkAgeOnGet = this.checkAgeOnGet } = {}) {
        const val = this.data.get(key);
        if (checkAgeOnGet && this.getRemainingTTL(key) === 0) {
            this.delete(key);
            return undefined;
        }
        if (updateAgeOnGet) {
            this.setTTL(key, ttl);
        }
        return val;
    }
    dispose(_, __) {}
    delete(key) {
        const current = this.expirationMap.get(key);
        if (current !== undefined) {
            const value = this.data.get(key);
            this.data.delete(key);
            this.expirationMap.delete(key);
            const exp = this.expirations[current];
            if (exp) {
                if (exp.length <= 1) {
                    delete this.expirations[current];
                } else {
                    this.expirations[current] = exp.filter((k)=>k !== key);
                }
            }
            this.dispose(value, key, 'delete');
            if (this.size === 0) {
                this.cancelTimer();
            }
            return true;
        }
        return false;
    }
    purgeToCapacity() {
        for(const exp in this.expirations){
            const keys = this.expirations[exp];
            if (this.size - keys.length >= this.max) {
                delete this.expirations[exp];
                const entries = [];
                for (const key of keys){
                    entries.push([
                        key,
                        this.data.get(key)
                    ]);
                    this.data.delete(key);
                    this.expirationMap.delete(key);
                }
                for (const [key, val] of entries){
                    this.dispose(val, key, 'evict');
                }
            } else {
                const s = this.size - this.max;
                const entries = [];
                for (const key of keys.splice(0, s)){
                    entries.push([
                        key,
                        this.data.get(key)
                    ]);
                    this.data.delete(key);
                    this.expirationMap.delete(key);
                }
                for (const [key, val] of entries){
                    this.dispose(val, key, 'evict');
                }
                return;
            }
        }
    }
    get size() {
        return this.data.size;
    }
    purgeStale() {
        const n = Math.ceil(now());
        for(const exp in this.expirations){
            if (exp === 'Infinity' || exp > n) {
                return;
            }
            /* istanbul ignore next
       * mysterious need for a guard here?
       * https://github.com/isaacs/ttlcache/issues/26 */ const keys = [
                ...this.expirations[exp] || []
            ];
            const entries = [];
            delete this.expirations[exp];
            for (const key of keys){
                entries.push([
                    key,
                    this.data.get(key)
                ]);
                this.data.delete(key);
                this.expirationMap.delete(key);
            }
            for (const [key, val] of entries){
                this.dispose(val, key, 'stale');
            }
        }
        if (this.size === 0) {
            this.cancelTimer();
        }
    }
    *entries() {
        for(const exp in this.expirations){
            for (const key of this.expirations[exp]){
                yield [
                    key,
                    this.data.get(key)
                ];
            }
        }
    }
    *keys() {
        for(const exp in this.expirations){
            for (const key of this.expirations[exp]){
                yield key;
            }
        }
    }
    *values() {
        for(const exp in this.expirations){
            for (const key of this.expirations[exp]){
                yield this.data.get(key);
            }
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
module.exports = TTLCache;
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/Types.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseAnyOf.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAnyOf",
    ()=>parseAnyOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
;
const parseAnyOf = (schema, refs)=>{
    return schema.anyOf.length ? schema.anyOf.length === 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema.anyOf[0], {
        ...refs,
        path: [
            ...refs.path,
            "anyOf",
            0
        ]
    }) : `z.union([${schema.anyOf.map((schema, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema, {
            ...refs,
            path: [
                ...refs.path,
                "anyOf",
                i
            ]
        })).join(", ")}])` : `z.any()`;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseBoolean.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseBoolean",
    ()=>parseBoolean
]);
const parseBoolean = (_schema)=>{
    return "z.boolean()";
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseDefault.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDefault",
    ()=>parseDefault
]);
const parseDefault = (_schema)=>{
    return "z.any()";
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseMultipleType.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseMultipleType",
    ()=>parseMultipleType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
;
const parseMultipleType = (schema, refs)=>{
    return `z.union([${schema.type.map((type)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])({
            ...schema,
            type
        }, {
            ...refs,
            withoutDefaults: true
        })).join(", ")}])`;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNot.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNot",
    ()=>parseNot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
;
const parseNot = (schema, refs)=>{
    return `z.any().refine((value) => !${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema.not, {
        ...refs,
        path: [
            ...refs.path,
            "not"
        ]
    })}.safeParse(value).success, "Invalid input: Should NOT be valid against schema")`;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNull.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNull",
    ()=>parseNull
]);
const parseNull = (_schema)=>{
    return "z.null()";
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/utils/half.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "half",
    ()=>half
]);
const half = (arr)=>{
    return [
        arr.slice(0, arr.length / 2),
        arr.slice(arr.length / 2)
    ];
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseAllOf.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAllOf",
    ()=>parseAllOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$half$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/half.js [app-route] (ecmascript)");
;
;
const originalIndex = Symbol("Original index");
const ensureOriginalIndex = (arr)=>{
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        const item = arr[i];
        if (typeof item === "boolean") {
            newArr.push(item ? {
                [originalIndex]: i
            } : {
                [originalIndex]: i,
                not: {}
            });
        } else if (originalIndex in item) {
            return arr;
        } else {
            newArr.push({
                ...item,
                [originalIndex]: i
            });
        }
    }
    return newArr;
};
function parseAllOf(schema, refs) {
    if (schema.allOf.length === 0) {
        return "z.never()";
    } else if (schema.allOf.length === 1) {
        const item = schema.allOf[0];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(item, {
            ...refs,
            path: [
                ...refs.path,
                "allOf",
                item[originalIndex]
            ]
        });
    } else {
        const [left, right] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$half$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["half"])(ensureOriginalIndex(schema.allOf));
        return `z.intersection(${parseAllOf({
            allOf: left
        }, refs)}, ${parseAllOf({
            allOf: right
        }, refs)})`;
    }
}
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/utils/withMessage.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withMessage",
    ()=>withMessage
]);
function withMessage(schema, key, get) {
    const value = schema[key];
    let r = "";
    if (value !== undefined) {
        const got = get({
            value,
            json: JSON.stringify(value)
        });
        if (got) {
            const opener = got[0];
            const prefix = got.length === 3 ? got[1] : "";
            const closer = got.length === 3 ? got[2] : got[1];
            r += opener;
            if (schema.errorMessage?.[key] !== undefined) {
                r += prefix + JSON.stringify(schema.errorMessage[key]);
            }
            r;
            r += closer;
        }
    }
    return r;
}
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseArray.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseArray",
    ()=>parseArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/withMessage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
;
;
const parseArray = (schema, refs)=>{
    if (Array.isArray(schema.items)) {
        return `z.tuple([${schema.items.map((v, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(v, {
                ...refs,
                path: [
                    ...refs.path,
                    "items",
                    i
                ]
            }))}])`;
    }
    let r = !schema.items ? "z.array(z.any())" : `z.array(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema.items, {
        ...refs,
        path: [
            ...refs.path,
            "items"
        ]
    })})`;
    r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "minItems", ({ json })=>[
            `.min(${json}`,
            ", ",
            ")"
        ]);
    r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "maxItems", ({ json })=>[
            `.max(${json}`,
            ", ",
            ")"
        ]);
    if (schema.uniqueItems === true) {
        r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "uniqueItems", ()=>[
                ".unique(",
                "",
                ")"
            ]);
    }
    return r;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseConst.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseConst",
    ()=>parseConst
]);
const parseConst = (schema)=>{
    return `z.literal(${JSON.stringify(schema.const)})`;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseEnum.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseEnum",
    ()=>parseEnum
]);
const parseEnum = (schema)=>{
    if (schema.enum.length === 0) {
        return "z.never()";
    } else if (schema.enum.length === 1) {
        // union does not work when there is only one element
        return `z.literal(${JSON.stringify(schema.enum[0])})`;
    } else if (schema.enum.every((x)=>typeof x === "string")) {
        return `z.enum([${schema.enum.map((x)=>JSON.stringify(x))}])`;
    } else {
        return `z.union([${schema.enum.map((x)=>`z.literal(${JSON.stringify(x)})`).join(", ")}])`;
    }
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseIfThenElse.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseIfThenElse",
    ()=>parseIfThenElse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
;
const parseIfThenElse = (schema, refs)=>{
    const $if = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema.if, {
        ...refs,
        path: [
            ...refs.path,
            "if"
        ]
    });
    const $then = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema.then, {
        ...refs,
        path: [
            ...refs.path,
            "then"
        ]
    });
    const $else = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema.else, {
        ...refs,
        path: [
            ...refs.path,
            "else"
        ]
    });
    return `z.union([${$then}, ${$else}]).superRefine((value,ctx) => {
  const result = ${$if}.safeParse(value).success
    ? ${$then}.safeParse(value)
    : ${$else}.safeParse(value);
  if (!result.success) {
    result.error.errors.forEach((error) => ctx.addIssue(error))
  }
})`;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNumber.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNumber",
    ()=>parseNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/withMessage.js [app-route] (ecmascript)");
;
const parseNumber = (schema)=>{
    let r = "z.number()";
    if (schema.type === "integer") {
        r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "type", ()=>[
                ".int(",
                ")"
            ]);
    } else {
        r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "format", ({ value })=>{
            if (value === "int64") {
                return [
                    ".int(",
                    ")"
                ];
            }
        });
    }
    r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "multipleOf", ({ value, json })=>{
        if (value === 1) {
            if (r.startsWith("z.number().int(")) {
                return;
            }
            return [
                ".int(",
                ")"
            ];
        }
        return [
            `.multipleOf(${json}`,
            ", ",
            ")"
        ];
    });
    if (typeof schema.minimum === "number") {
        if (schema.exclusiveMinimum === true) {
            r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "minimum", ({ json })=>[
                    `.gt(${json}`,
                    ", ",
                    ")"
                ]);
        } else {
            r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "minimum", ({ json })=>[
                    `.gte(${json}`,
                    ", ",
                    ")"
                ]);
        }
    } else if (typeof schema.exclusiveMinimum === "number") {
        r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "exclusiveMinimum", ({ json })=>[
                `.gt(${json}`,
                ", ",
                ")"
            ]);
    }
    if (typeof schema.maximum === "number") {
        if (schema.exclusiveMaximum === true) {
            r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "maximum", ({ json })=>[
                    `.lt(${json}`,
                    ", ",
                    ")"
                ]);
        } else {
            r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "maximum", ({ json })=>[
                    `.lte(${json}`,
                    ", ",
                    ")"
                ]);
        }
    } else if (typeof schema.exclusiveMaximum === "number") {
        r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "exclusiveMaximum", ({ json })=>[
                `.lt(${json}`,
                ", ",
                ")"
            ]);
    }
    return r;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseOneOf.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseOneOf",
    ()=>parseOneOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
;
const parseOneOf = (schema, refs)=>{
    return schema.oneOf.length ? schema.oneOf.length === 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema.oneOf[0], {
        ...refs,
        path: [
            ...refs.path,
            "oneOf",
            0
        ]
    }) : `z.any().superRefine((x, ctx) => {
    const schemas = [${schema.oneOf.map((schema, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema, {
            ...refs,
            path: [
                ...refs.path,
                "oneOf",
                i
            ]
        })).join(", ")}];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  })` : "z.any()";
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/utils/jsdocs.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addJsdocs",
    ()=>addJsdocs,
    "expandJsdocs",
    ()=>expandJsdocs
]);
const expandJsdocs = (jsdocs)=>{
    const lines = jsdocs.split("\n");
    const result = lines.length === 1 ? lines[0] : `\n${lines.map((x)=>`* ${x}`).join("\n")}\n`;
    return `/**${result}*/\n`;
};
const addJsdocs = (schema, parsed)=>{
    const description = schema.description;
    if (!description) {
        return parsed;
    }
    return `\n${expandJsdocs(description)}${parsed}`;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseObject.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseObject",
    ()=>parseObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseAnyOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseAnyOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseOneOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseOneOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseAllOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseAllOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$jsdocs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/jsdocs.js [app-route] (ecmascript)");
;
;
;
;
;
function parseObject(objectSchema, refs) {
    let properties = undefined;
    if (objectSchema.properties) {
        if (!Object.keys(objectSchema.properties).length) {
            properties = "z.object({})";
        } else {
            properties = "z.object({ ";
            properties += Object.keys(objectSchema.properties).map((key)=>{
                const propSchema = objectSchema.properties[key];
                let result = `${JSON.stringify(key)}: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(propSchema, {
                    ...refs,
                    path: [
                        ...refs.path,
                        "properties",
                        key
                    ]
                })}`;
                if (refs.withJsdocs && typeof propSchema === "object") {
                    result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$jsdocs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addJsdocs"])(propSchema, result);
                }
                const hasDefault = typeof propSchema === "object" && propSchema.default !== undefined;
                const required = Array.isArray(objectSchema.required) ? objectSchema.required.includes(key) : typeof propSchema === "object" && propSchema.required === true;
                const optional = !hasDefault && !required;
                return optional ? `${result}.optional()` : result;
            }).join(", ");
            properties += " })";
        }
    }
    const additionalProperties = objectSchema.additionalProperties !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(objectSchema.additionalProperties, {
        ...refs,
        path: [
            ...refs.path,
            "additionalProperties"
        ]
    }) : undefined;
    let patternProperties = undefined;
    if (objectSchema.patternProperties) {
        const parsedPatternProperties = Object.fromEntries(Object.entries(objectSchema.patternProperties).map(([key, value])=>{
            return [
                key,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(value, {
                    ...refs,
                    path: [
                        ...refs.path,
                        "patternProperties",
                        key
                    ]
                })
            ];
        }, {}));
        patternProperties = "";
        if (properties) {
            if (additionalProperties) {
                patternProperties += `.catchall(z.union([${[
                    ...Object.values(parsedPatternProperties),
                    additionalProperties
                ].join(", ")}]))`;
            } else if (Object.keys(parsedPatternProperties).length > 1) {
                patternProperties += `.catchall(z.union([${Object.values(parsedPatternProperties).join(", ")}]))`;
            } else {
                patternProperties += `.catchall(${Object.values(parsedPatternProperties)})`;
            }
        } else {
            if (additionalProperties) {
                patternProperties += `z.record(z.union([${[
                    ...Object.values(parsedPatternProperties),
                    additionalProperties
                ].join(", ")}]))`;
            } else if (Object.keys(parsedPatternProperties).length > 1) {
                patternProperties += `z.record(z.union([${Object.values(parsedPatternProperties).join(", ")}]))`;
            } else {
                patternProperties += `z.record(${Object.values(parsedPatternProperties)})`;
            }
        }
        patternProperties += ".superRefine((value, ctx) => {\n";
        patternProperties += "for (const key in value) {\n";
        if (additionalProperties) {
            if (objectSchema.properties) {
                patternProperties += `let evaluated = [${Object.keys(objectSchema.properties).map((key)=>JSON.stringify(key)).join(", ")}].includes(key)\n`;
            } else {
                patternProperties += `let evaluated = false\n`;
            }
        }
        for(const key in objectSchema.patternProperties){
            patternProperties += "if (key.match(new RegExp(" + JSON.stringify(key) + "))) {\n";
            if (additionalProperties) {
                patternProperties += "evaluated = true\n";
            }
            patternProperties += "const result = " + parsedPatternProperties[key] + ".safeParse(value[key])\n";
            patternProperties += "if (!result.success) {\n";
            patternProperties += `ctx.addIssue({
          path: [...ctx.path, key],
          code: 'custom',
          message: \`Invalid input: Key matching regex /\${key}/ must match schema\`,
          params: {
            issues: result.error.issues
          }
        })\n`;
            patternProperties += "}\n";
            patternProperties += "}\n";
        }
        if (additionalProperties) {
            patternProperties += "if (!evaluated) {\n";
            patternProperties += "const result = " + additionalProperties + ".safeParse(value[key])\n";
            patternProperties += "if (!result.success) {\n";
            patternProperties += `ctx.addIssue({
          path: [...ctx.path, key],
          code: 'custom',
          message: \`Invalid input: must match catchall schema\`,
          params: {
            issues: result.error.issues
          }
        })\n`;
            patternProperties += "}\n";
            patternProperties += "}\n";
        }
        patternProperties += "}\n";
        patternProperties += "})";
    }
    let output = properties ? patternProperties ? properties + patternProperties : additionalProperties ? additionalProperties === "z.never()" ? properties + ".strict()" : properties + `.catchall(${additionalProperties})` : properties : patternProperties ? patternProperties : additionalProperties ? `z.record(${additionalProperties})` : "z.record(z.any())";
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["its"].an.anyOf(objectSchema)) {
        output += `.and(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseAnyOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyOf"])({
            ...objectSchema,
            anyOf: objectSchema.anyOf.map((x)=>typeof x === "object" && !x.type && (x.properties || x.additionalProperties || x.patternProperties) ? {
                    ...x,
                    type: "object"
                } : x)
        }, refs)})`;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["its"].a.oneOf(objectSchema)) {
        output += `.and(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseOneOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseOneOf"])({
            ...objectSchema,
            oneOf: objectSchema.oneOf.map((x)=>typeof x === "object" && !x.type && (x.properties || x.additionalProperties || x.patternProperties) ? {
                    ...x,
                    type: "object"
                } : x)
        }, refs)})`;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["its"].an.allOf(objectSchema)) {
        output += `.and(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseAllOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAllOf"])({
            ...objectSchema,
            allOf: objectSchema.allOf.map((x)=>typeof x === "object" && !x.type && (x.properties || x.additionalProperties || x.patternProperties) ? {
                    ...x,
                    type: "object"
                } : x)
        }, refs)})`;
    }
    return output;
}
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseString.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseString",
    ()=>parseString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/withMessage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
;
;
const parseString = (schema)=>{
    let r = "z.string()";
    r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "format", ({ value })=>{
        switch(value){
            case "email":
                return [
                    ".email(",
                    ")"
                ];
            case "ip":
                return [
                    ".ip(",
                    ")"
                ];
            case "ipv4":
                return [
                    '.ip({ version: "v4"',
                    ", message: ",
                    " })"
                ];
            case "ipv6":
                return [
                    '.ip({ version: "v6"',
                    ", message: ",
                    " })"
                ];
            case "uri":
                return [
                    ".url(",
                    ")"
                ];
            case "uuid":
                return [
                    ".uuid(",
                    ")"
                ];
            case "date-time":
                return [
                    ".datetime({ offset: true",
                    ", message: ",
                    " })"
                ];
            case "time":
                return [
                    ".time(",
                    ")"
                ];
            case "date":
                return [
                    ".date(",
                    ")"
                ];
            case "binary":
                return [
                    ".base64(",
                    ")"
                ];
            case "duration":
                return [
                    ".duration(",
                    ")"
                ];
        }
    });
    r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "pattern", ({ json })=>[
            `.regex(new RegExp(${json})`,
            ", ",
            ")"
        ]);
    r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "minLength", ({ json })=>[
            `.min(${json}`,
            ", ",
            ")"
        ]);
    r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "maxLength", ({ json })=>[
            `.max(${json}`,
            ", ",
            ")"
        ]);
    r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "contentEncoding", ({ value })=>{
        if (value === "base64") {
            return [
                ".base64(",
                ")"
            ];
        }
    });
    const contentMediaType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "contentMediaType", ({ value })=>{
        if (value === "application/json") {
            return [
                ".transform((str, ctx) => { try { return JSON.parse(str); } catch (err) { ctx.addIssue({ code: \"custom\", message: \"Invalid JSON\" }); }}",
                ", ",
                ")"
            ];
        }
    });
    if (contentMediaType != "") {
        r += contentMediaType;
        r += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMessage"])(schema, "contentSchema", ({ value })=>{
            if (value && value instanceof Object) {
                return [
                    `.pipe(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(value)}`,
                    ", ",
                    ")"
                ];
            }
        });
    }
    return r;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSimpleDiscriminatedOneOf.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseSimpleDiscriminatedOneOf",
    ()=>parseSimpleDiscriminatedOneOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
;
const parseSimpleDiscriminatedOneOf = (schema, refs)=>{
    return schema.oneOf.length ? schema.oneOf.length === 1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema.oneOf[0], {
        ...refs,
        path: [
            ...refs.path,
            "oneOf",
            0
        ]
    }) : `z.discriminatedUnion("${schema.discriminator.propertyName}", [${schema.oneOf.map((schema, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema, {
            ...refs,
            path: [
                ...refs.path,
                "oneOf",
                i
            ]
        })).join(", ")}])` : "z.any()";
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/utils/omit.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "omit",
    ()=>omit
]);
const omit = (obj, ...keys)=>Object.keys(obj).reduce((acc, key)=>{
        if (!keys.includes(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNullable.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNullable",
    ()=>parseNullable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$omit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/omit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
;
;
const parseNullable = (schema, refs)=>{
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$omit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["omit"])(schema, "nullable"), refs, true)}.nullable()`;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "its",
    ()=>its,
    "parseSchema",
    ()=>parseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseAnyOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseAnyOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseBoolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseBoolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseDefault$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseDefault.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseMultipleType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseMultipleType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNot.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseAllOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseAllOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseArray$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseArray.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseConst$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseConst.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseEnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseEnum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseIfThenElse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseIfThenElse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNumber.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseString$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseString.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseOneOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseOneOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSimpleDiscriminatedOneOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSimpleDiscriminatedOneOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNullable.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const parseSchema = (schema, refs = {
    seen: new Map(),
    path: []
}, blockMeta)=>{
    if (typeof schema !== "object") return schema ? "z.any()" : "z.never()";
    if (refs.parserOverride) {
        const custom = refs.parserOverride(schema, refs);
        if (typeof custom === "string") {
            return custom;
        }
    }
    let seen = refs.seen.get(schema);
    if (seen) {
        if (seen.r !== undefined) {
            return seen.r;
        }
        if (refs.depth === undefined || seen.n >= refs.depth) {
            return "z.any()";
        }
        seen.n += 1;
    } else {
        seen = {
            r: undefined,
            n: 0
        };
        refs.seen.set(schema, seen);
    }
    let parsed = selectParser(schema, refs);
    if (!blockMeta) {
        if (!refs.withoutDescribes) {
            parsed = addDescribes(schema, parsed);
        }
        if (!refs.withoutDefaults) {
            parsed = addDefaults(schema, parsed);
        }
        parsed = addAnnotations(schema, parsed);
    }
    seen.r = parsed;
    return parsed;
};
const addDescribes = (schema, parsed)=>{
    if (schema.description) {
        parsed += `.describe(${JSON.stringify(schema.description)})`;
    }
    return parsed;
};
const addDefaults = (schema, parsed)=>{
    if (schema.default !== undefined) {
        parsed += `.default(${JSON.stringify(schema.default)})`;
    }
    return parsed;
};
const addAnnotations = (schema, parsed)=>{
    if (schema.readOnly) {
        parsed += ".readonly()";
    }
    return parsed;
};
const selectParser = (schema, refs)=>{
    if (its.a.nullable(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNullable"])(schema, refs);
    } else if (its.an.object(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseObject"])(schema, refs);
    } else if (its.an.array(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseArray$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseArray"])(schema, refs);
    } else if (its.an.anyOf(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseAnyOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyOf"])(schema, refs);
    } else if (its.an.allOf(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseAllOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAllOf"])(schema, refs);
    } else if (its.a.simpleDiscriminatedOneOf(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSimpleDiscriminatedOneOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSimpleDiscriminatedOneOf"])(schema, refs);
    } else if (its.a.oneOf(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseOneOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseOneOf"])(schema, refs);
    } else if (its.a.not(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNot"])(schema, refs);
    } else if (its.an.enum(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseEnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseEnum"])(schema); //<-- needs to come before primitives
    } else if (its.a.const(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseConst$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseConst"])(schema);
    } else if (its.a.multipleType(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseMultipleType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseMultipleType"])(schema, refs);
    } else if (its.a.primitive(schema, "string")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseString$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseString"])(schema);
    } else if (its.a.primitive(schema, "number") || its.a.primitive(schema, "integer")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNumber"])(schema);
    } else if (its.a.primitive(schema, "boolean")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseBoolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBoolean"])(schema);
    } else if (its.a.primitive(schema, "null")) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNull"])(schema);
    } else if (its.a.conditional(schema)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseIfThenElse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseIfThenElse"])(schema, refs);
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseDefault$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDefault"])(schema);
    }
};
const its = {
    an: {
        object: (x)=>x.type === "object",
        array: (x)=>x.type === "array",
        anyOf: (x)=>x.anyOf !== undefined,
        allOf: (x)=>x.allOf !== undefined,
        enum: (x)=>x.enum !== undefined
    },
    a: {
        nullable: (x)=>x.nullable === true,
        multipleType: (x)=>Array.isArray(x.type),
        not: (x)=>x.not !== undefined,
        const: (x)=>x.const !== undefined,
        primitive: (x, p)=>x.type === p,
        conditional: (x)=>Boolean("if" in x && x.if && "then" in x && "else" in x && x.then && x.else),
        simpleDiscriminatedOneOf: (x)=>{
            if (!x.oneOf || !Array.isArray(x.oneOf) || x.oneOf.length === 0 || !x.discriminator || typeof x.discriminator !== "object" || !("propertyName" in x.discriminator) || typeof x.discriminator.propertyName !== "string") {
                return false;
            }
            const discriminatorProp = x.discriminator.propertyName;
            return x.oneOf.every((schema)=>{
                if (!schema || typeof schema !== "object" || schema.type !== "object" || !schema.properties || typeof schema.properties !== "object" || !(discriminatorProp in schema.properties)) {
                    return false;
                }
                const property = schema.properties[discriminatorProp];
                return property && typeof property === "object" && property.type === "string" && // Ensure discriminator has a constant value (const or single-value enum)
                (property.const !== undefined || property.enum && Array.isArray(property.enum) && property.enum.length === 1) && // Ensure discriminator property is required
                Array.isArray(schema.required) && schema.required.includes(discriminatorProp);
            });
        },
        oneOf: (x)=>x.oneOf !== undefined
    }
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/jsonSchemaToZod.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jsonSchemaToZod",
    ()=>jsonSchemaToZod
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$jsdocs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/jsdocs.js [app-route] (ecmascript)");
;
;
const jsonSchemaToZod = (schema, { module, name, type, noImport, ...rest } = {})=>{
    if (type && (!name || module !== "esm")) {
        throw new Error("Option `type` requires `name` to be set and `module` to be `esm`");
    }
    let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSchema"])(schema, {
        module,
        name,
        path: [],
        seen: new Map(),
        ...rest
    });
    const jsdocs = rest.withJsdocs && typeof schema !== "boolean" && schema.description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$jsdocs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["expandJsdocs"])(schema.description) : "";
    if (module === "cjs") {
        result = `${jsdocs}module.exports = ${name ? `{ ${JSON.stringify(name)}: ${result} }` : result}
`;
        if (!noImport) {
            result = `${jsdocs}const { z } = require("zod")

${result}`;
        }
    } else if (module === "esm") {
        result = `${jsdocs}export ${name ? `const ${name} =` : `default`} ${result}
`;
        if (!noImport) {
            result = `import { z } from "zod"

${result}`;
        }
    } else if (name) {
        result = `${jsdocs}const ${name} = ${result}`;
    }
    if (type && name) {
        let typeName = typeof type === "string" ? type : `${name[0].toUpperCase()}${name.substring(1)}`;
        result += `export type ${typeName} = z.infer<typeof ${name}>
`;
    }
    return result;
};
}),
"[project]/node_modules/json-schema-to-zod/dist/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$Types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/Types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$jsonSchemaToZod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/jsonSchemaToZod.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseAllOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseAllOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseAnyOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseAnyOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseArray$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseArray.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseBoolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseBoolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseConst$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseConst.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseDefault$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseDefault.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseEnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseEnum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseIfThenElse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseIfThenElse.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseMultipleType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseMultipleType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNot$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNot.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNull$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNull.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseNumber.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseOneOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseOneOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseSimpleDiscriminatedOneOf$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseSimpleDiscriminatedOneOf.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$parsers$2f$parseString$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/parsers/parseString.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$half$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/half.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$jsdocs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/jsdocs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$omit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/omit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$utils$2f$withMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/json-schema-to-zod/dist/esm/utils/withMessage.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$json$2d$schema$2d$to$2d$zod$2f$dist$2f$esm$2f$jsonSchemaToZod$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonSchemaToZod"];
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/Options.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultOptions",
    ()=>defaultOptions,
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "ignoreOverride",
    ()=>ignoreOverride,
    "jsonDescription",
    ()=>jsonDescription
]);
const ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
const jsonDescription = (jsonSchema, def)=>{
    if (def.description) {
        try {
            return {
                ...jsonSchema,
                ...JSON.parse(def.description)
            };
        } catch  {}
    }
    return jsonSchema;
};
const defaultOptions = {
    name: undefined,
    $refStrategy: "root",
    basePath: [
        "#"
    ],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    markdownDescription: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref",
    openAiAnyTypeName: "OpenAiAnyType"
};
const getDefaultOptions = (options)=>typeof options === "string" ? {
        ...defaultOptions,
        name: options
    } : {
        ...defaultOptions,
        ...options
    };
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/Refs.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRefs",
    ()=>getRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Options.js [app-route] (ecmascript)");
;
const getRefs = (options)=>{
    const _options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultOptions"])(options);
    const currentPath = _options.name !== undefined ? [
        ..._options.basePath,
        _options.definitionPath,
        _options.name
    ] : _options.basePath;
    return {
        ..._options,
        flags: {
            hasReferencedOpenAiAnyType: false
        },
        currentPath: currentPath,
        propertyPath: undefined,
        seen: new Map(Object.entries(_options.definitions).map(([name, def])=>[
                def._def,
                {
                    def: def._def,
                    path: [
                        ..._options.basePath,
                        _options.definitionPath,
                        name
                    ],
                    // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
                    jsonSchema: undefined
                }
            ]))
    };
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addErrorMessage",
    ()=>addErrorMessage,
    "setResponseValueAndErrors",
    ()=>setResponseValueAndErrors
]);
function addErrorMessage(res, key, errorMessage, refs) {
    if (!refs?.errorMessages) return;
    if (errorMessage) {
        res.errorMessage = {
            ...res.errorMessage,
            [key]: errorMessage
        };
    }
}
function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
    res[key] = value;
    addErrorMessage(res, key, errorMessage, refs);
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/getRelativePath.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRelativePath",
    ()=>getRelativePath
]);
const getRelativePath = (pathA, pathB)=>{
    let i = 0;
    for(; i < pathA.length && i < pathB.length; i++){
        if (pathA[i] !== pathB[i]) break;
    }
    return [
        (pathA.length - i).toString(),
        ...pathB.slice(i)
    ].join("/");
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseAnyDef",
    ()=>parseAnyDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$getRelativePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/getRelativePath.js [app-route] (ecmascript)");
;
function parseAnyDef(refs) {
    if (refs.target !== "openAi") {
        return {};
    }
    const anyDefinitionPath = [
        ...refs.basePath,
        refs.definitionPath,
        refs.openAiAnyTypeName
    ];
    refs.flags.hasReferencedOpenAiAnyType = true;
    return {
        $ref: refs.$refStrategy === "relative" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$getRelativePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRelativePath"])(anyDefinitionPath, refs.currentPath) : anyDefinitionPath.join("/")
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/array.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseArrayDef",
    ()=>parseArrayDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
;
;
function parseArrayDef(def, refs) {
    const res = {
        type: "array"
    };
    if (def.type?._def && def.type?._def?.typeName !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny) {
        res.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.type._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "items"
            ]
        });
    }
    if (def.minLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minItems", def.minLength.value, def.minLength.message, refs);
    }
    if (def.maxLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
    }
    if (def.exactLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
    }
    return res;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseBigintDef",
    ()=>parseBigintDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-route] (ecmascript)");
;
function parseBigintDef(def, refs) {
    const res = {
        type: "integer",
        format: "int64"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMinimum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMinimum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                }
                break;
            case "max":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMaximum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMaximum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                }
                break;
            case "multipleOf":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "multipleOf", check.value, check.message, refs);
                break;
        }
    }
    return res;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseBooleanDef",
    ()=>parseBooleanDef
]);
function parseBooleanDef() {
    return {
        type: "boolean"
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseBrandedDef",
    ()=>parseBrandedDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
function parseBrandedDef(_def, refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(_def.type._def, refs);
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseCatchDef",
    ()=>parseCatchDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
const parseCatchDef = (def, refs)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/date.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDateDef",
    ()=>parseDateDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-route] (ecmascript)");
;
function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy ?? refs.dateStrategy;
    if (Array.isArray(strategy)) {
        return {
            anyOf: strategy.map((item, i)=>parseDateDef(def, refs, item))
        };
    }
    switch(strategy){
        case "string":
        case "format:date-time":
            return {
                type: "string",
                format: "date-time"
            };
        case "format:date":
            return {
                type: "string",
                format: "date"
            };
        case "integer":
            return integerDateParser(def, refs);
    }
}
const integerDateParser = (def, refs)=>{
    const res = {
        type: "integer",
        format: "unix-time"
    };
    if (refs.target === "openApi3") {
        return res;
    }
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                break;
            case "max":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                break;
        }
    }
    return res;
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/default.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDefaultDef",
    ()=>parseDefaultDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
function parseDefaultDef(_def, refs) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(_def.innerType._def, refs),
        default: _def.defaultValue()
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseEffectsDef",
    ()=>parseEffectsDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
;
;
function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(_def.schema._def, refs) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseEnumDef",
    ()=>parseEnumDef
]);
function parseEnumDef(def) {
    return {
        type: "string",
        enum: Array.from(def.values)
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseIntersectionDef",
    ()=>parseIntersectionDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
const isJsonSchema7AllOfType = (type)=>{
    if ("type" in type && type.type === "string") return false;
    return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
    const allOf = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.left._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "0"
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.right._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "1"
            ]
        })
    ].filter((x)=>!!x);
    let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? {
        unevaluatedProperties: false
    } : undefined;
    const mergedAllOf = [];
    // If either of the schemas is an allOf, merge them into a single allOf
    allOf.forEach((schema)=>{
        if (isJsonSchema7AllOfType(schema)) {
            mergedAllOf.push(...schema.allOf);
            if (schema.unevaluatedProperties === undefined) {
                // If one of the schemas has no unevaluatedProperties set,
                // the merged schema should also have no unevaluatedProperties set
                unevaluatedProperties = undefined;
            }
        } else {
            let nestedSchema = schema;
            if ("additionalProperties" in schema && schema.additionalProperties === false) {
                const { additionalProperties, ...rest } = schema;
                nestedSchema = rest;
            } else {
                // As soon as one of the schemas has additionalProperties set not to false, we allow unevaluatedProperties
                unevaluatedProperties = undefined;
            }
            mergedAllOf.push(nestedSchema);
        }
    });
    return mergedAllOf.length ? {
        allOf: mergedAllOf,
        ...unevaluatedProperties
    } : undefined;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseLiteralDef",
    ()=>parseLiteralDef
]);
function parseLiteralDef(def, refs) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
        return {
            type: Array.isArray(def.value) ? "array" : "object"
        };
    }
    if (refs.target === "openApi3") {
        return {
            type: parsedType === "bigint" ? "integer" : parsedType,
            enum: [
                def.value
            ]
        };
    }
    return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        const: def.value
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseStringDef",
    ()=>parseStringDef,
    "zodPatterns",
    ()=>zodPatterns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-route] (ecmascript)");
;
let emojiRegex = undefined;
const zodPatterns = {
    /**
     * `c` was changed to `[cC]` to replicate /i flag
     */ cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    /**
     * `a-z` was added to replicate /i flag
     */ email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    /**
     * Constructed a valid Unicode RegExp
     *
     * Lazily instantiate since this type of regex isn't supported
     * in all envs (e.g. React Native).
     *
     * See:
     * https://github.com/colinhacks/zod/issues/2433
     * Fix in Zod:
     * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
     */ emoji: ()=>{
        if (emojiRegex === undefined) {
            emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
        }
        return emojiRegex;
    },
    /**
     * Unused
     */ uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    /**
     * Unused
     */ ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    /**
     * Unused
     */ ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
    const res = {
        type: "string"
    };
    if (def.checks) {
        for (const check of def.checks){
            switch(check.kind){
                case "min":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
                    break;
                case "max":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
                    break;
                case "email":
                    switch(refs.emailStrategy){
                        case "format:email":
                            addFormat(res, "email", check.message, refs);
                            break;
                        case "format:idn-email":
                            addFormat(res, "idn-email", check.message, refs);
                            break;
                        case "pattern:zod":
                            addPattern(res, zodPatterns.email, check.message, refs);
                            break;
                    }
                    break;
                case "url":
                    addFormat(res, "uri", check.message, refs);
                    break;
                case "uuid":
                    addFormat(res, "uuid", check.message, refs);
                    break;
                case "regex":
                    addPattern(res, check.regex, check.message, refs);
                    break;
                case "cuid":
                    addPattern(res, zodPatterns.cuid, check.message, refs);
                    break;
                case "cuid2":
                    addPattern(res, zodPatterns.cuid2, check.message, refs);
                    break;
                case "startsWith":
                    addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
                    break;
                case "endsWith":
                    addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
                    break;
                case "datetime":
                    addFormat(res, "date-time", check.message, refs);
                    break;
                case "date":
                    addFormat(res, "date", check.message, refs);
                    break;
                case "time":
                    addFormat(res, "time", check.message, refs);
                    break;
                case "duration":
                    addFormat(res, "duration", check.message, refs);
                    break;
                case "length":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
                    break;
                case "includes":
                    {
                        addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
                        break;
                    }
                case "ip":
                    {
                        if (check.version !== "v6") {
                            addFormat(res, "ipv4", check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addFormat(res, "ipv6", check.message, refs);
                        }
                        break;
                    }
                case "base64url":
                    addPattern(res, zodPatterns.base64url, check.message, refs);
                    break;
                case "jwt":
                    addPattern(res, zodPatterns.jwt, check.message, refs);
                    break;
                case "cidr":
                    {
                        if (check.version !== "v6") {
                            addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
                        }
                        break;
                    }
                case "emoji":
                    addPattern(res, zodPatterns.emoji(), check.message, refs);
                    break;
                case "ulid":
                    {
                        addPattern(res, zodPatterns.ulid, check.message, refs);
                        break;
                    }
                case "base64":
                    {
                        switch(refs.base64Strategy){
                            case "format:binary":
                                {
                                    addFormat(res, "binary", check.message, refs);
                                    break;
                                }
                            case "contentEncoding:base64":
                                {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "contentEncoding", "base64", check.message, refs);
                                    break;
                                }
                            case "pattern:zod":
                                {
                                    addPattern(res, zodPatterns.base64, check.message, refs);
                                    break;
                                }
                        }
                        break;
                    }
                case "nanoid":
                    {
                        addPattern(res, zodPatterns.nanoid, check.message, refs);
                    }
                case "toLowerCase":
                case "toUpperCase":
                case "trim":
                    break;
                default:
                    ((_)=>{})(check);
            }
        }
    }
    return res;
}
function escapeLiteralCheckValue(literal, refs) {
    return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
const ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
    let result = "";
    for(let i = 0; i < source.length; i++){
        if (!ALPHA_NUMERIC.has(source[i])) {
            result += "\\";
        }
        result += source[i];
    }
    return result;
}
// Adds a "format" keyword to the schema. If a format exists, both formats will be joined in an allOf-node, along with subsequent ones.
function addFormat(schema, value, message, refs) {
    if (schema.format || schema.anyOf?.some((x)=>x.format)) {
        if (!schema.anyOf) {
            schema.anyOf = [];
        }
        if (schema.format) {
            schema.anyOf.push({
                format: schema.format,
                ...schema.errorMessage && refs.errorMessages && {
                    errorMessage: {
                        format: schema.errorMessage.format
                    }
                }
            });
            delete schema.format;
            if (schema.errorMessage) {
                delete schema.errorMessage.format;
                if (Object.keys(schema.errorMessage).length === 0) {
                    delete schema.errorMessage;
                }
            }
        }
        schema.anyOf.push({
            format: value,
            ...message && refs.errorMessages && {
                errorMessage: {
                    format: message
                }
            }
        });
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "format", value, message, refs);
    }
}
// Adds a "pattern" keyword to the schema. If a pattern exists, both patterns will be joined in an allOf-node, along with subsequent ones.
function addPattern(schema, regex, message, refs) {
    if (schema.pattern || schema.allOf?.some((x)=>x.pattern)) {
        if (!schema.allOf) {
            schema.allOf = [];
        }
        if (schema.pattern) {
            schema.allOf.push({
                pattern: schema.pattern,
                ...schema.errorMessage && refs.errorMessages && {
                    errorMessage: {
                        pattern: schema.errorMessage.pattern
                    }
                }
            });
            delete schema.pattern;
            if (schema.errorMessage) {
                delete schema.errorMessage.pattern;
                if (Object.keys(schema.errorMessage).length === 0) {
                    delete schema.errorMessage;
                }
            }
        }
        schema.allOf.push({
            pattern: stringifyRegExpWithFlags(regex, refs),
            ...message && refs.errorMessages && {
                errorMessage: {
                    pattern: message
                }
            }
        });
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
    }
}
// Mutate z.string.regex() in a best attempt to accommodate for regex flags when applyRegexFlags is true
function stringifyRegExpWithFlags(regex, refs) {
    if (!refs.applyRegexFlags || !regex.flags) {
        return regex.source;
    }
    // Currently handled flags
    const flags = {
        i: regex.flags.includes("i"),
        m: regex.flags.includes("m"),
        s: regex.flags.includes("s")
    };
    // The general principle here is to step through each character, one at a time, applying mutations as flags require. We keep track when the current character is escaped, and when it's inside a group /like [this]/ or (also) a range like /[a-z]/. The following is fairly brittle imperative code; edit at your peril!
    const source = flags.i ? regex.source.toLowerCase() : regex.source;
    let pattern = "";
    let isEscaped = false;
    let inCharGroup = false;
    let inCharRange = false;
    for(let i = 0; i < source.length; i++){
        if (isEscaped) {
            pattern += source[i];
            isEscaped = false;
            continue;
        }
        if (flags.i) {
            if (inCharGroup) {
                if (source[i].match(/[a-z]/)) {
                    if (inCharRange) {
                        pattern += source[i];
                        pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
                        inCharRange = false;
                    } else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
                        pattern += source[i];
                        inCharRange = true;
                    } else {
                        pattern += `${source[i]}${source[i].toUpperCase()}`;
                    }
                    continue;
                }
            } else if (source[i].match(/[a-z]/)) {
                pattern += `[${source[i]}${source[i].toUpperCase()}]`;
                continue;
            }
        }
        if (flags.m) {
            if (source[i] === "^") {
                pattern += `(^|(?<=[\r\n]))`;
                continue;
            } else if (source[i] === "$") {
                pattern += `($|(?=[\r\n]))`;
                continue;
            }
        }
        if (flags.s && source[i] === ".") {
            pattern += inCharGroup ? `${source[i]}\r\n` : `[${source[i]}\r\n]`;
            continue;
        }
        pattern += source[i];
        if (source[i] === "\\") {
            isEscaped = true;
        } else if (inCharGroup && source[i] === "]") {
            inCharGroup = false;
        } else if (!inCharGroup && source[i] === "[") {
            inCharGroup = true;
        }
    }
    try {
        new RegExp(pattern);
    } catch  {
        console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
        return regex.source;
    }
    return pattern;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseRecordDef",
    ()=>parseRecordDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
;
;
;
;
;
function parseRecordDef(def, refs) {
    if (refs.target === "openAi") {
        console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
    }
    if (refs.target === "openApi3" && def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) {
        return {
            type: "object",
            required: def.keyType._def.values,
            properties: def.keyType._def.values.reduce((acc, key)=>({
                    ...acc,
                    [key]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
                        ...refs,
                        currentPath: [
                            ...refs.currentPath,
                            "properties",
                            key
                        ]
                    }) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs)
                }), {}),
            additionalProperties: refs.rejectedAdditionalProperties
        };
    }
    const schema = {
        type: "object",
        additionalProperties: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        }) ?? refs.allowedAdditionalProperties
    };
    if (refs.target === "openApi3") {
        return schema;
    }
    if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && def.keyType._def.checks?.length) {
        const { type, ...keyType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseStringDef"])(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    } else if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) {
        return {
            ...schema,
            propertyNames: {
                enum: def.keyType._def.values
            }
        };
    } else if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded && def.keyType._def.type._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && def.keyType._def.type._def.checks?.length) {
        const { type, ...keyType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBrandedDef"])(def.keyType._def, refs);
        return {
            ...schema,
            propertyNames: keyType
        };
    }
    return schema;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/map.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseMapDef",
    ()=>parseMapDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
;
;
;
function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseRecordDef"])(def, refs);
    }
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.keyType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "0"
        ]
    }) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "1"
        ]
    }) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [
                keys,
                values
            ],
            minItems: 2,
            maxItems: 2
        }
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNativeEnumDef",
    ()=>parseNativeEnumDef
]);
function parseNativeEnumDef(def) {
    const object = def.values;
    const actualKeys = Object.keys(def.values).filter((key)=>{
        return typeof object[object[key]] !== "number";
    });
    const actualValues = actualKeys.map((key)=>object[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values)=>typeof values)));
    return {
        type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : [
            "string",
            "number"
        ],
        enum: actualValues
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/never.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNeverDef",
    ()=>parseNeverDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
;
function parseNeverDef(refs) {
    return refs.target === "openAi" ? undefined : {
        not: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])({
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "not"
            ]
        })
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/null.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNullDef",
    ()=>parseNullDef
]);
function parseNullDef(refs) {
    return refs.target === "openApi3" ? {
        enum: [
            "null"
        ],
        nullable: true
    } : {
        type: "null"
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseUnionDef",
    ()=>parseUnionDef,
    "primitiveMappings",
    ()=>primitiveMappings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
const primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
};
function parseUnionDef(def, refs) {
    if (refs.target === "openApi3") return asAnyOf(def, refs);
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    // This blocks tries to look ahead a bit to produce nicer looking schemas with type array instead of anyOf.
    if (options.every((x)=>x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
        // all types in union are primitive and lack checks, so might as well squash into {type: [...]}
        const types = options.reduce((types, x)=>{
            const type = primitiveMappings[x._def.typeName]; //Can be safely casted due to row 43
            return type && !types.includes(type) ? [
                ...types,
                type
            ] : types;
        }, []);
        return {
            type: types.length > 1 ? types : types[0]
        };
    } else if (options.every((x)=>x._def.typeName === "ZodLiteral" && !x.description)) {
        // all options literals
        const types = options.reduce((acc, x)=>{
            const type = typeof x._def.value;
            switch(type){
                case "string":
                case "number":
                case "boolean":
                    return [
                        ...acc,
                        type
                    ];
                case "bigint":
                    return [
                        ...acc,
                        "integer"
                    ];
                case "object":
                    if (x._def.value === null) return [
                        ...acc,
                        "null"
                    ];
                case "symbol":
                case "undefined":
                case "function":
                default:
                    return acc;
            }
        }, []);
        if (types.length === options.length) {
            // all the literals are primitive, as far as null can be considered primitive
            const uniqueTypes = types.filter((x, i, a)=>a.indexOf(x) === i);
            return {
                type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
                enum: options.reduce((acc, x)=>{
                    return acc.includes(x._def.value) ? acc : [
                        ...acc,
                        x._def.value
                    ];
                }, [])
            };
        }
    } else if (options.every((x)=>x._def.typeName === "ZodEnum")) {
        return {
            type: "string",
            enum: options.reduce((acc, x)=>[
                    ...acc,
                    ...x._def.values.filter((x)=>!acc.includes(x))
                ], [])
        };
    }
    return asAnyOf(def, refs);
}
const asAnyOf = (def, refs)=>{
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "anyOf",
                `${i}`
            ]
        })).filter((x)=>!!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? {
        anyOf
    } : undefined;
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNullableDef",
    ()=>parseNullableDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-route] (ecmascript)");
;
;
function parseNullableDef(def, refs) {
    if ([
        "ZodString",
        "ZodNumber",
        "ZodBigInt",
        "ZodBoolean",
        "ZodNull"
    ].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
        if (refs.target === "openApi3") {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primitiveMappings"][def.innerType._def.typeName],
                nullable: true
            };
        }
        return {
            type: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primitiveMappings"][def.innerType._def.typeName],
                "null"
            ]
        };
    }
    if (refs.target === "openApi3") {
        const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath
            ]
        });
        if (base && "$ref" in base) return {
            allOf: [
                base
            ],
            nullable: true
        };
        return base && {
            ...base,
            nullable: true
        };
    }
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "0"
        ]
    });
    return base && {
        anyOf: [
            base,
            {
                type: "null"
            }
        ]
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/number.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNumberDef",
    ()=>parseNumberDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-route] (ecmascript)");
;
function parseNumberDef(def, refs) {
    const res = {
        type: "number"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "int":
                res.type = "integer";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addErrorMessage"])(res, "type", check.message, refs);
                break;
            case "min":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMinimum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMinimum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                }
                break;
            case "max":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMaximum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMaximum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                }
                break;
            case "multipleOf":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "multipleOf", check.value, check.message, refs);
                break;
        }
    }
    return res;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/object.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseObjectDef",
    ()=>parseObjectDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
function parseObjectDef(def, refs) {
    const forceOptionalIntoNullable = refs.target === "openAi";
    const result = {
        type: "object",
        properties: {}
    };
    const required = [];
    const shape = def.shape();
    for(const propName in shape){
        let propDef = shape[propName];
        if (propDef === undefined || propDef._def === undefined) {
            continue;
        }
        let propOptional = safeIsOptional(propDef);
        if (propOptional && forceOptionalIntoNullable) {
            if (propDef._def.typeName === "ZodOptional") {
                propDef = propDef._def.innerType;
            }
            if (!propDef.isNullable()) {
                propDef = propDef.nullable();
            }
            propOptional = false;
        }
        const parsedDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(propDef._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "properties",
                propName
            ],
            propertyPath: [
                ...refs.currentPath,
                "properties",
                propName
            ]
        });
        if (parsedDef === undefined) {
            continue;
        }
        result.properties[propName] = parsedDef;
        if (!propOptional) {
            required.push(propName);
        }
    }
    if (required.length) {
        result.required = required;
    }
    const additionalProperties = decideAdditionalProperties(def, refs);
    if (additionalProperties !== undefined) {
        result.additionalProperties = additionalProperties;
    }
    return result;
}
function decideAdditionalProperties(def, refs) {
    if (def.catchall._def.typeName !== "ZodNever") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.catchall._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        });
    }
    switch(def.unknownKeys){
        case "passthrough":
            return refs.allowedAdditionalProperties;
        case "strict":
            return refs.rejectedAdditionalProperties;
        case "strip":
            return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
    }
}
function safeIsOptional(schema) {
    try {
        return schema.isOptional();
    } catch  {
        return true;
    }
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseOptionalDef",
    ()=>parseOptionalDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
;
;
const parseOptionalDef = (def, refs)=>{
    if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
    }
    const innerSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "1"
        ]
    });
    return innerSchema ? {
        anyOf: [
            {
                not: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs)
            },
            innerSchema
        ]
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePipelineDef",
    ()=>parsePipelineDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
const parsePipelineDef = (def, refs)=>{
    if (refs.pipeStrategy === "input") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.in._def, refs);
    } else if (refs.pipeStrategy === "output") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.out._def, refs);
    }
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.in._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            "0"
        ]
    });
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.out._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            a ? "1" : "0"
        ]
    });
    return {
        allOf: [
            a,
            b
        ].filter((x)=>x !== undefined)
    };
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parsePromiseDef",
    ()=>parsePromiseDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
function parsePromiseDef(def, refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.type._def, refs);
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/set.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseSetDef",
    ()=>parseSetDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
;
function parseSetDef(def, refs) {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items"
        ]
    });
    const schema = {
        type: "array",
        uniqueItems: true,
        items
    };
    if (def.minSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "minItems", def.minSize.value, def.minSize.message, refs);
    }
    if (def.maxSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
    }
    return schema;
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseTupleDef",
    ()=>parseTupleDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
function parseTupleDef(def, refs) {
    if (def.rest) {
        return {
            type: "array",
            minItems: def.items.length,
            items: def.items.map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === undefined ? acc : [
                    ...acc,
                    x
                ], []),
            additionalItems: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.rest._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "additionalItems"
                ]
            })
        };
    } else {
        return {
            type: "array",
            minItems: def.items.length,
            maxItems: def.items.length,
            items: def.items.map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === undefined ? acc : [
                    ...acc,
                    x
                ], [])
        };
    }
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseUndefinedDef",
    ()=>parseUndefinedDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
;
function parseUndefinedDef(refs) {
    return {
        not: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs)
    };
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseUnknownDef",
    ()=>parseUnknownDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
;
function parseUnknownDef(refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
}
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseReadonlyDef",
    ()=>parseReadonlyDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
;
const parseReadonlyDef = (def, refs)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/selectParser.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectParser",
    ()=>selectParser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/array.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$bigint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$catch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/date.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$default$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/default.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$effects$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$intersection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$literal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$map$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/map.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$never$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/never.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$null$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/null.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/number.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/set.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$tuple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$undefined$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$unknown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$readonly$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const selectParser = (def, typeName, refs)=>{
    switch(typeName){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseStringDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNumber:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNumberDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodObject:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseObjectDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBigInt:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$bigint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBigintDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBoolean:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBooleanDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDate:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDateDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUndefined:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$undefined$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUndefinedDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNull:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$null$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNullDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodArray:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseArrayDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnion:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDiscriminatedUnion:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUnionDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodIntersection:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$intersection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseIntersectionDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodTuple:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$tuple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseTupleDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodRecord:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseRecordDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLiteral:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$literal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseLiteralDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseEnumDef"])(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNativeEnum:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNativeEnumDef"])(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNullable:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNullableDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodOptional:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseOptionalDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodMap:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$map$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseMapDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSet:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseSetDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLazy:
            return ()=>def.getter()._def;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPromise:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePromiseDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNaN:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNever:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$never$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseNeverDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEffects:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$effects$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseEffectsDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnknown:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$unknown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUnknownDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDefault:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$default$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDefaultDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseBrandedDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodReadonly:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$readonly$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseReadonlyDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodCatch:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$catch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseCatchDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPipeline:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePipelineDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodFunction:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodVoid:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSymbol:
            return undefined;
        default:
            return ((_)=>undefined)(typeName);
    }
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseDef",
    ()=>parseDef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Options.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$selectParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/selectParser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$getRelativePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/getRelativePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
;
;
;
;
function parseDef(def, refs, forceResolution = false) {
    const seenItem = refs.seen.get(def);
    if (refs.override) {
        const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
        if (overrideResult !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ignoreOverride"]) {
            return overrideResult;
        }
    }
    if (seenItem && !forceResolution) {
        const seenSchema = get$ref(seenItem, refs);
        if (seenSchema !== undefined) {
            return seenSchema;
        }
    }
    const newItem = {
        def,
        path: refs.currentPath,
        jsonSchema: undefined
    };
    refs.seen.set(def, newItem);
    const jsonSchemaOrGetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$selectParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["selectParser"])(def, def.typeName, refs);
    // If the return was a function, then the inner definition needs to be extracted before a call to parseDef (recursive)
    const jsonSchema = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
    if (jsonSchema) {
        addMeta(def, refs, jsonSchema);
    }
    if (refs.postProcess) {
        const postProcessResult = refs.postProcess(jsonSchema, def, refs);
        newItem.jsonSchema = jsonSchema;
        return postProcessResult;
    }
    newItem.jsonSchema = jsonSchema;
    return jsonSchema;
}
const get$ref = (item, refs)=>{
    switch(refs.$refStrategy){
        case "root":
            return {
                $ref: item.path.join("/")
            };
        case "relative":
            return {
                $ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$getRelativePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRelativePath"])(refs.currentPath, item.path)
            };
        case "none":
        case "seen":
            {
                if (item.path.length < refs.currentPath.length && item.path.every((value, index)=>refs.currentPath[index] === value)) {
                    console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
                }
                return refs.$refStrategy === "seen" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs) : undefined;
            }
    }
};
const addMeta = (def, refs, jsonSchema)=>{
    if (def.description) {
        jsonSchema.description = def.description;
        if (refs.markdownDescription) {
            jsonSchema.markdownDescription = def.description;
        }
    }
    return jsonSchema;
};
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/parseTypes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zodToJsonSchema",
    ()=>zodToJsonSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Refs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Refs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
;
;
;
const zodToJsonSchema = (schema, options)=>{
    const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Refs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRefs"])(options);
    let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name, schema])=>({
            ...acc,
            [name]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(schema._def, {
                ...refs,
                currentPath: [
                    ...refs.basePath,
                    refs.definitionPath,
                    name
                ]
            }, true) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs)
        }), {}) : undefined;
    const name = typeof options === "string" ? options : options?.nameStrategy === "title" ? undefined : options?.name;
    const main = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseDef"])(schema._def, name === undefined ? refs : {
        ...refs,
        currentPath: [
            ...refs.basePath,
            refs.definitionPath,
            name
        ]
    }, false) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseAnyDef"])(refs);
    const title = typeof options === "object" && options.name !== undefined && options.nameStrategy === "title" ? options.name : undefined;
    if (title !== undefined) {
        main.title = title;
    }
    if (refs.flags.hasReferencedOpenAiAnyType) {
        if (!definitions) {
            definitions = {};
        }
        if (!definitions[refs.openAiAnyTypeName]) {
            definitions[refs.openAiAnyTypeName] = {
                // Skipping "object" as no properties can be defined and additionalProperties must be "false"
                type: [
                    "string",
                    "number",
                    "integer",
                    "boolean",
                    "array",
                    "null"
                ],
                items: {
                    $ref: refs.$refStrategy === "relative" ? "1" : [
                        ...refs.basePath,
                        refs.definitionPath,
                        refs.openAiAnyTypeName
                    ].join("/")
                }
            };
        }
    }
    const combined = name === undefined ? definitions ? {
        ...main,
        [refs.definitionPath]: definitions
    } : main : {
        $ref: [
            ...refs.$refStrategy === "relative" ? [] : refs.basePath,
            refs.definitionPath,
            name
        ].join("/"),
        [refs.definitionPath]: {
            ...definitions,
            [name]: main
        }
    };
    if (refs.target === "jsonSchema7") {
        combined.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") {
        combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
    }
    if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) {
        console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
    }
    return combined;
};
;
}),
"[project]/node_modules/zod-to-json-schema/dist/esm/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Options.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Refs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/Refs.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$getRelativePath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/getRelativePath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseTypes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parseTypes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$array$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/array.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$bigint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$catch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$date$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/date.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$default$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/default.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$effects$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$enum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$intersection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$literal$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$map$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/map.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$never$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/never.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$null$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/null.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$number$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/number.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$object$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/object.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$optional$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$readonly$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$set$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/set.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$tuple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$undefined$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$unknown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$selectParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/selectParser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["zodToJsonSchema"];
}),
"[project]/node_modules/zod-from-json-schema/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertJsonSchemaToZod",
    ()=>convertJsonSchemaToZod,
    "createUniqueItemsValidator",
    ()=>createUniqueItemsValidator,
    "isValidWithSchema",
    ()=>isValidWithSchema,
    "jsonSchemaObjectToZodRawShape",
    ()=>jsonSchemaObjectToZodRawShape
]);
// src/core/converter.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod-from-json-schema/node_modules/zod/v4/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-from-json-schema/node_modules/zod/v4/classic/index.js [app-route] (ecmascript)");
;
;
var TypeHandler = class {
    apply(types, schema) {
        if (!schema.type) return;
        const allowedTypes = Array.isArray(schema.type) ? schema.type : [
            schema.type
        ];
        const typeSet = new Set(allowedTypes);
        if (!typeSet.has("string")) {
            types.string = false;
        }
        if (!typeSet.has("number") && !typeSet.has("integer")) {
            types.number = false;
        }
        if (!typeSet.has("boolean")) {
            types.boolean = false;
        }
        if (!typeSet.has("null")) {
            types.null = false;
        }
        if (!typeSet.has("array")) {
            types.array = false;
        }
        if (!typeSet.has("object")) {
            types.object = false;
        }
        if (typeSet.has("integer") && types.number !== false) {
            const currentNumber = types.number || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number();
            if (currentNumber instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodNumber) {
                types.number = currentNumber.int();
            }
        }
    }
};
;
var ConstHandler = class {
    apply(types, schema) {
        if (schema.const === void 0) return;
        const constValue = schema.const;
        types.string = false;
        types.number = false;
        types.boolean = false;
        types.null = false;
        types.array = false;
        types.object = false;
        if (typeof constValue === "string") {
            types.string = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal(constValue);
        } else if (typeof constValue === "number") {
            types.number = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal(constValue);
        } else if (typeof constValue === "boolean") {
            types.boolean = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal(constValue);
        } else if (constValue === null) {
            types.null = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].null();
        } else if (Array.isArray(constValue)) {
            types.array = void 0;
        } else if (typeof constValue === "object") {
            types.object = void 0;
        }
    }
};
;
var EnumHandler = class {
    apply(types, schema) {
        if (!schema.enum) return;
        if (schema.enum.length === 0) {
            if (!schema.type) {
                types.string = false;
                types.number = false;
                types.boolean = false;
                types.null = false;
                types.array = false;
                types.object = false;
            }
            return;
        }
        const valuesByType = {
            string: schema.enum.filter((v)=>typeof v === "string"),
            number: schema.enum.filter((v)=>typeof v === "number"),
            boolean: schema.enum.filter((v)=>typeof v === "boolean"),
            null: schema.enum.filter((v)=>v === null),
            array: schema.enum.filter((v)=>Array.isArray(v)),
            object: schema.enum.filter((v)=>typeof v === "object" && v !== null && !Array.isArray(v))
        };
        types.string = this.createTypeSchema(valuesByType.string, "string");
        types.number = this.createTypeSchema(valuesByType.number, "number");
        types.boolean = this.createTypeSchema(valuesByType.boolean, "boolean");
        types.null = valuesByType.null.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].null() : false;
        types.array = valuesByType.array.length > 0 ? void 0 : false;
        types.object = valuesByType.object.length > 0 ? void 0 : false;
    }
    createTypeSchema(values, type) {
        if (values.length === 0) return false;
        if (values.length === 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal(values[0]);
        }
        if (type === "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum(values);
        }
        if (type === "number") {
            const [first, second, ...rest] = values;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal(first),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal(second),
                ...rest.map((v)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal(v))
            ]);
        }
        if (type === "boolean") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].union([
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal(true),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].literal(false)
            ]);
        }
        return false;
    }
};
;
var FileHandler = class {
    apply(types, schema) {
        const stringSchema = schema;
        if (stringSchema.type === "string" && stringSchema.format === "binary" && stringSchema.contentEncoding === "binary") {
            let fileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].file();
            if (stringSchema.minLength !== void 0) {
                fileSchema = fileSchema.min(stringSchema.minLength);
            }
            if (stringSchema.maxLength !== void 0) {
                fileSchema = fileSchema.max(stringSchema.maxLength);
            }
            if (stringSchema.contentMediaType !== void 0) {
                fileSchema = fileSchema.mime(stringSchema.contentMediaType);
            }
            types.file = fileSchema;
            types.string = false;
        }
    }
};
;
var ImplicitStringHandler = class {
    apply(types, schema) {
        const stringSchema = schema;
        if (schema.type === void 0 && (stringSchema.minLength !== void 0 || stringSchema.maxLength !== void 0 || stringSchema.pattern !== void 0)) {
            if (types.string === void 0) {
                types.string = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string();
            }
        }
    }
};
var MinLengthHandler = class {
    apply(types, schema) {
        const stringSchema = schema;
        if (stringSchema.minLength === void 0) return;
        if (types.string !== false) {
            const currentString = types.string || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string();
            if (currentString instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodString) {
                types.string = currentString.refine((value)=>{
                    const graphemeLength = Array.from(value).length;
                    return graphemeLength >= stringSchema.minLength;
                }, {
                    message: `String must be at least ${stringSchema.minLength} characters long`
                });
            }
        }
    }
};
var MaxLengthHandler = class {
    apply(types, schema) {
        const stringSchema = schema;
        if (stringSchema.maxLength === void 0) return;
        if (types.string !== false) {
            const currentString = types.string || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string();
            if (currentString instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodString) {
                types.string = currentString.refine((value)=>{
                    const graphemeLength = Array.from(value).length;
                    return graphemeLength <= stringSchema.maxLength;
                }, {
                    message: `String must be at most ${stringSchema.maxLength} characters long`
                });
            }
        }
    }
};
var PatternHandler = class {
    apply(types, schema) {
        const stringSchema = schema;
        if (!stringSchema.pattern) return;
        if (types.string !== false) {
            const currentString = types.string || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string();
            if (currentString instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodString) {
                const regex = new RegExp(stringSchema.pattern);
                types.string = currentString.regex(regex);
            }
        }
    }
};
;
var MinimumHandler = class {
    apply(types, schema) {
        const numberSchema = schema;
        if (numberSchema.minimum === void 0) return;
        if (types.number !== false) {
            const currentNumber = types.number || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number();
            if (currentNumber instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodNumber) {
                types.number = currentNumber.min(numberSchema.minimum);
            }
        }
    }
};
var MaximumHandler = class {
    apply(types, schema) {
        const numberSchema = schema;
        if (numberSchema.maximum === void 0) return;
        if (types.number !== false) {
            const currentNumber = types.number || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number();
            if (currentNumber instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodNumber) {
                types.number = currentNumber.max(numberSchema.maximum);
            }
        }
    }
};
var ExclusiveMinimumHandler = class {
    apply(types, schema) {
        const numberSchema = schema;
        if (numberSchema.exclusiveMinimum === void 0) return;
        if (types.number !== false) {
            const currentNumber = types.number || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number();
            if (currentNumber instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodNumber) {
                if (typeof numberSchema.exclusiveMinimum === "number") {
                    types.number = currentNumber.gt(numberSchema.exclusiveMinimum);
                } else {
                    types.number = false;
                }
            }
        }
    }
};
var ExclusiveMaximumHandler = class {
    apply(types, schema) {
        const numberSchema = schema;
        if (numberSchema.exclusiveMaximum === void 0) return;
        if (types.number !== false) {
            const currentNumber = types.number || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number();
            if (currentNumber instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodNumber) {
                if (typeof numberSchema.exclusiveMaximum === "number") {
                    types.number = currentNumber.lt(numberSchema.exclusiveMaximum);
                } else {
                    types.number = false;
                }
            }
        }
    }
};
var MultipleOfHandler = class {
    apply(types, schema) {
        const numberSchema = schema;
        if (numberSchema.multipleOf === void 0) return;
        if (types.number !== false) {
            const currentNumber = types.number || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number();
            if (currentNumber instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodNumber) {
                types.number = currentNumber.refine((value)=>{
                    if (numberSchema.multipleOf === 0) return false;
                    const quotient = value / numberSchema.multipleOf;
                    const rounded = Math.round(quotient);
                    const tolerance = Math.min(Math.abs(value) * Number.EPSILON * 10, Math.abs(numberSchema.multipleOf) * Number.EPSILON * 10);
                    return Math.abs(quotient - rounded) <= tolerance / Math.abs(numberSchema.multipleOf);
                }, {
                    message: `Must be a multiple of ${numberSchema.multipleOf}`
                });
            }
        }
    }
};
;
var ImplicitArrayHandler = class {
    apply(types, schema) {
        const arraySchema = schema;
        if (schema.type === void 0 && (arraySchema.minItems !== void 0 || arraySchema.maxItems !== void 0 || arraySchema.items !== void 0 || arraySchema.prefixItems !== void 0)) {
            if (types.array === void 0) {
                types.array = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any());
            }
        }
    }
};
var MinItemsHandler = class {
    apply(types, schema) {
        const arraySchema = schema;
        if (arraySchema.minItems === void 0) return;
        if (types.array !== false) {
            types.array = (types.array || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any())).min(arraySchema.minItems);
        }
    }
};
var MaxItemsHandler = class {
    apply(types, schema) {
        const arraySchema = schema;
        if (arraySchema.maxItems === void 0) return;
        if (types.array !== false) {
            types.array = (types.array || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any())).max(arraySchema.maxItems);
        }
    }
};
var ItemsHandler = class {
    apply(types, schema) {
        const arraySchema = schema;
        if (types.array === false) return;
        if (Array.isArray(arraySchema.items)) {
            types.array = types.array || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any());
        } else if (arraySchema.items && typeof arraySchema.items !== "boolean" && !arraySchema.prefixItems) {
            const itemSchema = convertJsonSchemaToZod(arraySchema.items);
            let newArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(itemSchema);
            if (types.array && types.array instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodArray) {
                const existingDef = types.array._def;
                if (existingDef.checks) {
                    existingDef.checks.forEach((check)=>{
                        if (check._zod && check._zod.def) {
                            const def = check._zod.def;
                            if (def.check === "min_length" && def.minimum !== void 0) {
                                newArray = newArray.min(def.minimum);
                            } else if (def.check === "max_length" && def.maximum !== void 0) {
                                newArray = newArray.max(def.maximum);
                            }
                        }
                    });
                }
            }
            types.array = newArray;
        } else if (typeof arraySchema.items === "boolean" && arraySchema.items === false) {
            if (!arraySchema.prefixItems) {
                types.array = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any()).max(0);
            } else {
                types.array = types.array || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any());
            }
        } else if (typeof arraySchema.items === "boolean" && arraySchema.items === true) {
            types.array = types.array || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any());
        } else if (arraySchema.prefixItems) {
            types.array = types.array || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any());
        }
    }
};
;
var TupleHandler = class {
    apply(types, schema) {
        if (schema.type !== "array") return;
        const arraySchema = schema;
        if (!Array.isArray(arraySchema.items)) return;
        if (types.array === false) return;
        const itemSchemas = arraySchema.items.map((itemSchema)=>convertJsonSchemaToZod(itemSchema));
        let tuple;
        if (itemSchemas.length === 0) {
            tuple = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].tuple([]);
        } else {
            tuple = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].tuple(itemSchemas);
        }
        if (arraySchema.minItems !== void 0 && arraySchema.minItems > itemSchemas.length) {
            tuple = false;
        }
        if (arraySchema.maxItems !== void 0 && arraySchema.maxItems < itemSchemas.length) {
            tuple = false;
        }
        types.tuple = tuple;
        types.array = false;
    }
};
;
var PropertiesHandler = class {
    apply(types, schema) {
        const objectSchema = schema;
        if (types.object === false) return;
        if (objectSchema.properties || objectSchema.required || objectSchema.additionalProperties !== void 0) {
            types.object = types.object || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({}).passthrough();
        }
    }
};
var ImplicitObjectHandler = class {
    apply(types, schema) {
        const objectSchema = schema;
        if (schema.type === void 0 && (objectSchema.maxProperties !== void 0 || objectSchema.minProperties !== void 0)) {
            if (types.object === void 0) {
                types.object = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({}).passthrough();
            }
        }
    }
};
var MaxPropertiesHandler = class {
    apply(types, schema) {
        const objectSchema = schema;
        if (objectSchema.maxProperties === void 0) return;
        if (types.object !== false) {
            const baseObject = types.object || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({}).passthrough();
            types.object = baseObject.refine((obj)=>Object.keys(obj).length <= objectSchema.maxProperties, {
                message: `Object must have at most ${objectSchema.maxProperties} properties`
            });
        }
    }
};
var MinPropertiesHandler = class {
    apply(types, schema) {
        const objectSchema = schema;
        if (objectSchema.minProperties === void 0) return;
        if (types.object !== false) {
            const baseObject = types.object || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({}).passthrough();
            types.object = baseObject.refine((obj)=>Object.keys(obj).length >= objectSchema.minProperties, {
                message: `Object must have at least ${objectSchema.minProperties} properties`
            });
        }
    }
};
// src/core/utils.ts
function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return a === b;
    if (typeof a !== typeof b) return false;
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        return a.every((item, index)=>deepEqual(item, b[index]));
    }
    if (typeof a === "object" && typeof b === "object") {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        return keysA.every((key)=>keysB.includes(key) && deepEqual(a[key], b[key]));
    }
    return false;
}
function createUniqueItemsValidator() {
    return (value)=>{
        if (!Array.isArray(value)) {
            return true;
        }
        const seen = [];
        return value.every((item)=>{
            const isDuplicate = seen.some((seenItem)=>deepEqual(item, seenItem));
            if (isDuplicate) {
                return false;
            }
            seen.push(item);
            return true;
        });
    };
}
function isValidWithSchema(schema, value) {
    return schema.safeParse(value).success;
}
// src/handlers/refinement/not.ts
var NotHandler = class {
    apply(zodSchema, schema) {
        if (!schema.not) return zodSchema;
        const notSchema = convertJsonSchemaToZod(schema.not);
        return zodSchema.refine((value)=>!isValidWithSchema(notSchema, value), {
            message: "Value must not match the 'not' schema"
        });
    }
};
// src/handlers/refinement/uniqueItems.ts
var UniqueItemsHandler = class {
    apply(zodSchema, schema) {
        const arraySchema = schema;
        if (arraySchema.uniqueItems !== true) return zodSchema;
        return zodSchema.refine(createUniqueItemsValidator(), {
            message: "Array items must be unique"
        });
    }
};
;
var AllOfHandler = class {
    apply(zodSchema, schema) {
        if (!schema.allOf || schema.allOf.length === 0) return zodSchema;
        const allOfSchemas = schema.allOf.map((s)=>convertJsonSchemaToZod(s));
        return allOfSchemas.reduce((acc, s)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].intersection(acc, s), zodSchema);
    }
};
;
var AnyOfHandler = class {
    apply(zodSchema, schema) {
        if (!schema.anyOf || schema.anyOf.length === 0) return zodSchema;
        const anyOfSchema = schema.anyOf.length === 1 ? convertJsonSchemaToZod(schema.anyOf[0]) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].union([
            convertJsonSchemaToZod(schema.anyOf[0]),
            convertJsonSchemaToZod(schema.anyOf[1]),
            ...schema.anyOf.slice(2).map((s)=>convertJsonSchemaToZod(s))
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].intersection(zodSchema, anyOfSchema);
    }
};
// src/handlers/refinement/oneOf.ts
var OneOfHandler = class {
    apply(zodSchema, schema) {
        if (!schema.oneOf || schema.oneOf.length === 0) return zodSchema;
        const oneOfSchemas = schema.oneOf.map((s)=>convertJsonSchemaToZod(s));
        return zodSchema.refine((value)=>{
            let validCount = 0;
            for (const oneOfSchema of oneOfSchemas){
                const result = oneOfSchema.safeParse(value);
                if (result.success) {
                    validCount++;
                    if (validCount > 1) return false;
                }
            }
            return validCount === 1;
        }, {
            message: "Value must match exactly one of the oneOf schemas"
        });
    }
};
// src/handlers/refinement/arrayItems.ts
var PrefixItemsHandler = class {
    apply(zodSchema, schema) {
        const arraySchema = schema;
        if (arraySchema.prefixItems && Array.isArray(arraySchema.prefixItems)) {
            const prefixItems = arraySchema.prefixItems;
            const prefixSchemas = prefixItems.map((itemSchema)=>convertJsonSchemaToZod(itemSchema));
            return zodSchema.refine((value)=>{
                if (!Array.isArray(value)) return true;
                for(let i = 0; i < Math.min(value.length, prefixSchemas.length); i++){
                    if (!isValidWithSchema(prefixSchemas[i], value[i])) {
                        return false;
                    }
                }
                if (value.length > prefixSchemas.length) {
                    if (typeof arraySchema.items === "boolean" && arraySchema.items === false) {
                        return false;
                    } else if (arraySchema.items && typeof arraySchema.items === "object" && !Array.isArray(arraySchema.items)) {
                        const additionalItemSchema = convertJsonSchemaToZod(arraySchema.items);
                        for(let i = prefixSchemas.length; i < value.length; i++){
                            if (!isValidWithSchema(additionalItemSchema, value[i])) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            }, {
                message: "Array does not match prefixItems schema"
            });
        }
        return zodSchema;
    }
};
;
var ObjectPropertiesHandler = class {
    apply(zodSchema, schema) {
        const objectSchema = schema;
        if (!objectSchema.properties && !objectSchema.required && objectSchema.additionalProperties !== false) {
            return zodSchema;
        }
        if (zodSchema instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodObject || zodSchema instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].ZodRecord) {
            const shape = {};
            if (objectSchema.properties) {
                for (const [key, propSchema] of Object.entries(objectSchema.properties)){
                    if (propSchema !== void 0) {
                        shape[key] = convertJsonSchemaToZod(propSchema);
                    }
                }
            }
            if (objectSchema.required && Array.isArray(objectSchema.required)) {
                const required = new Set(objectSchema.required);
                for (const key of Object.keys(shape)){
                    if (!required.has(key)) {
                        shape[key] = shape[key].optional();
                    }
                }
            } else {
                for (const key of Object.keys(shape)){
                    shape[key] = shape[key].optional();
                }
            }
            if (objectSchema.additionalProperties === false) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object(shape);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object(shape).passthrough();
            }
        }
        return zodSchema.refine((value)=>{
            if (typeof value !== "object" || value === null || Array.isArray(value)) {
                return true;
            }
            if (objectSchema.properties) {
                for (const [propName, propSchema] of Object.entries(objectSchema.properties)){
                    if (propSchema !== void 0) {
                        const propExists = Object.getOwnPropertyDescriptor(value, propName) !== void 0;
                        if (propExists) {
                            const zodPropSchema = convertJsonSchemaToZod(propSchema);
                            const propResult = zodPropSchema.safeParse(value[propName]);
                            if (!propResult.success) {
                                return false;
                            }
                        }
                    }
                }
            }
            if (objectSchema.required && Array.isArray(objectSchema.required)) {
                for (const requiredProp of objectSchema.required){
                    const propExists = Object.getOwnPropertyDescriptor(value, requiredProp) !== void 0;
                    if (!propExists) {
                        return false;
                    }
                }
            }
            if (objectSchema.additionalProperties === false && objectSchema.properties) {
                const allowedProps = new Set(Object.keys(objectSchema.properties));
                for(const prop in value){
                    if (!allowedProps.has(prop)) {
                        return false;
                    }
                }
            }
            return true;
        }, {
            message: "Object constraints validation failed"
        });
    }
};
// src/handlers/refinement/enumComplex.ts
var EnumComplexHandler = class {
    apply(zodSchema, schema) {
        if (!schema.enum || schema.enum.length === 0) return zodSchema;
        const complexValues = schema.enum.filter((v)=>Array.isArray(v) || typeof v === "object" && v !== null);
        if (complexValues.length === 0) return zodSchema;
        return zodSchema.refine((value)=>{
            if (typeof value !== "object" || value === null) return true;
            return complexValues.some((enumValue)=>deepEqual(value, enumValue));
        }, {
            message: "Value must match one of the enum values"
        });
    }
};
// src/handlers/refinement/constComplex.ts
var ConstComplexHandler = class {
    apply(zodSchema, schema) {
        if (schema.const === void 0) return zodSchema;
        const constValue = schema.const;
        if (typeof constValue !== "object" || constValue === null) {
            return zodSchema;
        }
        return zodSchema.refine((value)=>deepEqual(value, constValue), {
            message: "Value must equal the const value"
        });
    }
};
// src/handlers/refinement/metadata.ts
var MetadataHandler = class {
    apply(zodSchema, schema) {
        if (schema.description) {
            zodSchema = zodSchema.describe(schema.description);
        }
        return zodSchema;
    }
};
;
var ProtoRequiredHandler = class {
    apply(zodSchema, schema) {
        var _a;
        const objectSchema = schema;
        if (!((_a = objectSchema.required) == null ? void 0 : _a.includes("__proto__")) || schema.type !== void 0) {
            return zodSchema;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any().refine((value)=>this.validateRequired(value, objectSchema.required), {
            message: "Missing required properties"
        });
    }
    validateRequired(value, required) {
        if (typeof value !== "object" || value === null || Array.isArray(value)) {
            return true;
        }
        return required.every((prop)=>Object.prototype.hasOwnProperty.call(value, prop));
    }
};
// src/handlers/refinement/contains.ts
var ContainsHandler = class {
    apply(zodSchema, schema) {
        var _a;
        const arraySchema = schema;
        if (arraySchema.contains === void 0) return zodSchema;
        const containsSchema = convertJsonSchemaToZod(arraySchema.contains);
        const minContains = (_a = arraySchema.minContains) != null ? _a : 1;
        const maxContains = arraySchema.maxContains;
        return zodSchema.refine((value)=>{
            if (!Array.isArray(value)) {
                return true;
            }
            let matchCount = 0;
            for (const item of value){
                if (isValidWithSchema(containsSchema, item)) {
                    matchCount++;
                }
            }
            if (matchCount < minContains) {
                return false;
            }
            if (maxContains !== void 0 && matchCount > maxContains) {
                return false;
            }
            return true;
        }, {
            message: "Array must contain required items matching the schema"
        });
    }
};
// src/handlers/refinement/default.ts
var DefaultHandler = class {
    apply(zodSchema, schema) {
        const { default: v } = schema;
        if (v === void 0) return zodSchema;
        if (!zodSchema.safeParse(v).success) {
            return zodSchema;
        }
        return zodSchema.default(v);
    }
};
// src/core/converter.ts
var primitiveHandlers = [
    // Type constraints - should run first
    new ConstHandler(),
    new EnumHandler(),
    new TypeHandler(),
    // File schema detection - must run before string constraints
    new FileHandler(),
    // Implicit type detection - must run before other constraints
    new ImplicitStringHandler(),
    new ImplicitArrayHandler(),
    new ImplicitObjectHandler(),
    // String constraints
    new MinLengthHandler(),
    new MaxLengthHandler(),
    new PatternHandler(),
    // Number constraints
    new MinimumHandler(),
    new MaximumHandler(),
    new ExclusiveMinimumHandler(),
    new ExclusiveMaximumHandler(),
    new MultipleOfHandler(),
    // Array constraints - TupleHandler must run before ItemsHandler
    new TupleHandler(),
    new MinItemsHandler(),
    new MaxItemsHandler(),
    new ItemsHandler(),
    // Object constraints
    new MaxPropertiesHandler(),
    new MinPropertiesHandler(),
    new PropertiesHandler()
];
var refinementHandlers = [
    // Handle special cases first
    new ProtoRequiredHandler(),
    new EnumComplexHandler(),
    new ConstComplexHandler(),
    // Logical combinations
    new AllOfHandler(),
    new AnyOfHandler(),
    new OneOfHandler(),
    // Type-specific refinements
    new PrefixItemsHandler(),
    new ObjectPropertiesHandler(),
    // Array refinements
    new ContainsHandler(),
    // Other refinements
    new NotHandler(),
    new UniqueItemsHandler(),
    new DefaultHandler(),
    // Metadata last
    new MetadataHandler()
];
function convertJsonSchemaToZod(schema) {
    if (typeof schema === "boolean") {
        return schema ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].never();
    }
    const types = {};
    for (const handler of primitiveHandlers){
        handler.apply(types, schema);
    }
    const allowedSchemas = [];
    if (types.string !== false) {
        allowedSchemas.push(types.string || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string());
    }
    if (types.number !== false) {
        allowedSchemas.push(types.number || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].number());
    }
    if (types.boolean !== false) {
        allowedSchemas.push(types.boolean || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean());
    }
    if (types.null !== false) {
        allowedSchemas.push(types.null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].null());
    }
    if (types.array !== false) {
        allowedSchemas.push(types.array || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any()));
    }
    if (types.tuple !== false && types.tuple !== void 0) {
        allowedSchemas.push(types.tuple);
    }
    if (types.object !== false) {
        if (types.object) {
            allowedSchemas.push(types.object);
        } else {
            const objectSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].custom((val)=>{
                return typeof val === "object" && val !== null && !Array.isArray(val);
            }, "Must be an object, not an array");
            allowedSchemas.push(objectSchema);
        }
    }
    if (types.file !== false && types.file !== void 0) {
        allowedSchemas.push(types.file);
    }
    let zodSchema;
    if (allowedSchemas.length === 0) {
        zodSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].never();
    } else if (allowedSchemas.length === 1) {
        zodSchema = allowedSchemas[0];
    } else {
        const hasConstraints = Object.keys(schema).some((key)=>key !== "$schema" && key !== "title" && key !== "description");
        if (!hasConstraints) {
            zodSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any();
        } else {
            zodSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$from$2d$json$2d$schema$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].union(allowedSchemas);
        }
    }
    for (const handler of refinementHandlers){
        zodSchema = handler.apply(zodSchema, schema);
    }
    return zodSchema;
}
// src/index.ts
function jsonSchemaObjectToZodRawShape(schema) {
    var _a;
    const raw = {};
    const requiredArray = Array.isArray(schema.required) ? schema.required : [];
    const requiredFields = new Set(requiredArray);
    for (const [key, value] of Object.entries((_a = schema.properties) != null ? _a : {})){
        if (value === void 0) continue;
        let zodType = convertJsonSchemaToZod(value);
        if (requiredArray.length > 0) {
            if (!requiredFields.has(key)) {
                zodType = zodType.optional();
            }
        } else {
            zodType = zodType.optional();
        }
        raw[key] = zodType;
    }
    return raw;
}
;
}),
"[project]/node_modules/zod-from-json-schema-v3/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertJsonSchemaToZod",
    ()=>convertJsonSchemaToZod,
    "jsonSchemaObjectToZodRawShape",
    ()=>jsonSchemaObjectToZodRawShape
]);
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
;
function convertJsonSchemaToZod(schema) {
    function addMetadata(zodSchema, jsonSchema) {
        if (jsonSchema.description) {
            zodSchema = zodSchema.describe(jsonSchema.description);
        }
        return zodSchema;
    }
    if (schema.const !== void 0) {
        if (typeof schema.const === "string") {
            return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(schema.const), schema);
        } else if (typeof schema.const === "number") {
            return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(schema.const), schema);
        } else if (typeof schema.const === "boolean") {
            return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(schema.const), schema);
        } else if (schema.const === null) {
            return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].null(), schema);
        }
        return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(schema.const), schema);
    }
    if (schema.type) {
        switch(schema.type){
            case "string":
                {
                    if (schema.enum) {
                        if (schema.enum.length === 0) {
                            return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), schema);
                        }
                        return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(schema.enum), schema);
                    }
                    let stringSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string();
                    if (schema.minLength !== void 0) {
                        stringSchema = stringSchema.min(schema.minLength);
                    }
                    if (schema.maxLength !== void 0) {
                        stringSchema = stringSchema.max(schema.maxLength);
                    }
                    if (schema.pattern !== void 0) {
                        const regex = new RegExp(schema.pattern);
                        stringSchema = stringSchema.regex(regex);
                    }
                    return addMetadata(stringSchema, schema);
                }
            case "number":
            case "integer":
                {
                    if (schema.enum) {
                        if (schema.enum.length === 0) {
                            return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(), schema);
                        }
                        const options = schema.enum.map((val)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(val));
                        if (options.length === 1) {
                            return addMetadata(options[0], schema);
                        }
                        if (options.length >= 2) {
                            const unionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                                options[0],
                                options[1],
                                ...options.slice(2)
                            ]);
                            return addMetadata(unionSchema, schema);
                        }
                    }
                    let numberSchema = schema.type === "integer" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number();
                    if (schema.minimum !== void 0) {
                        numberSchema = numberSchema.min(schema.minimum);
                    }
                    if (schema.maximum !== void 0) {
                        numberSchema = numberSchema.max(schema.maximum);
                    }
                    if (schema.exclusiveMinimum !== void 0) {
                        numberSchema = numberSchema.gt(schema.exclusiveMinimum);
                    }
                    if (schema.exclusiveMaximum !== void 0) {
                        numberSchema = numberSchema.lt(schema.exclusiveMaximum);
                    }
                    if (schema.multipleOf !== void 0) {
                        numberSchema = numberSchema.multipleOf(schema.multipleOf);
                    }
                    return addMetadata(numberSchema, schema);
                }
            case "boolean":
                if (schema.enum) {
                    if (schema.enum.length === 0) {
                        return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(), schema);
                    }
                    const options = schema.enum.map((val)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(val));
                    if (options.length === 1) {
                        return addMetadata(options[0], schema);
                    }
                    if (options.length >= 2) {
                        const unionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                            options[0],
                            options[1],
                            ...options.slice(2)
                        ]);
                        return addMetadata(unionSchema, schema);
                    }
                }
                return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(), schema);
            case "null":
                return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].null(), schema);
            case "object":
                if (schema.properties) {
                    const shape = {};
                    for (const [key, propSchema] of Object.entries(schema.properties)){
                        shape[key] = convertJsonSchemaToZod(propSchema);
                    }
                    if (schema.required && Array.isArray(schema.required)) {
                        const required = new Set(schema.required);
                        for (const key of Object.keys(shape)){
                            if (!required.has(key)) {
                                shape[key] = shape[key].optional();
                            }
                        }
                    } else {
                        for (const key of Object.keys(shape)){
                            shape[key] = shape[key].optional();
                        }
                    }
                    let zodSchema;
                    if (schema.additionalProperties !== false) {
                        zodSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(shape).passthrough();
                    } else {
                        zodSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(shape);
                    }
                    return addMetadata(zodSchema, schema);
                }
                return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}), schema);
            case "array":
                {
                    let arraySchema;
                    if (schema.items) {
                        arraySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(convertJsonSchemaToZod(schema.items));
                    } else {
                        arraySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any());
                    }
                    if (schema.minItems !== void 0) {
                        arraySchema = arraySchema.min(schema.minItems);
                    }
                    if (schema.maxItems !== void 0) {
                        arraySchema = arraySchema.max(schema.maxItems);
                    }
                    if (schema.uniqueItems === true) {
                        arraySchema = arraySchema.refine((items)=>{
                            const seen = /* @__PURE__ */ new Set();
                            return items.every((item)=>{
                                if (typeof item === "string" || typeof item === "number" || typeof item === "boolean") {
                                    if (seen.has(item)) return false;
                                    seen.add(item);
                                    return true;
                                }
                                const serialized = JSON.stringify(item);
                                if (seen.has(serialized)) return false;
                                seen.add(serialized);
                                return true;
                            });
                        }, {
                            message: "Array items must be unique"
                        });
                    }
                    return addMetadata(arraySchema, schema);
                }
        }
    }
    if (schema.enum) {
        if (schema.enum.length === 0) {
            return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].never(), schema);
        }
        const allStrings = schema.enum.every((val)=>typeof val === "string");
        if (allStrings) {
            return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(schema.enum), schema);
        } else {
            const options = schema.enum.map((val)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(val));
            if (options.length === 1) {
                return addMetadata(options[0], schema);
            }
            if (options.length >= 2) {
                const unionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
                    options[0],
                    options[1],
                    ...options.slice(2)
                ]);
                return addMetadata(unionSchema, schema);
            }
        }
    }
    if (schema.anyOf && schema.anyOf.length >= 2) {
        const schemas = schema.anyOf.map(convertJsonSchemaToZod);
        return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
            schemas[0],
            schemas[1],
            ...schemas.slice(2)
        ]), schema);
    }
    if (schema.allOf) {
        return addMetadata(schema.allOf.reduce((acc, s)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].intersection(acc, convertJsonSchemaToZod(s)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({})), schema);
    }
    if (schema.oneOf && schema.oneOf.length >= 2) {
        const schemas = schema.oneOf.map(convertJsonSchemaToZod);
        return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
            schemas[0],
            schemas[1],
            ...schemas.slice(2)
        ]), schema);
    }
    return addMetadata(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any(), schema);
}
function jsonSchemaObjectToZodRawShape(schema) {
    var _a;
    let raw = {};
    for (const [key, value] of Object.entries((_a = schema.properties) != null ? _a : {})){
        raw[key] = convertJsonSchemaToZod(value);
    }
    return raw;
}
;
}),
"[project]/node_modules/@ai-sdk/provider-v5/dist/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AISDKError",
    ()=>AISDKError,
    "APICallError",
    ()=>APICallError,
    "EmptyResponseBodyError",
    ()=>EmptyResponseBodyError,
    "InvalidArgumentError",
    ()=>InvalidArgumentError,
    "InvalidPromptError",
    ()=>InvalidPromptError,
    "InvalidResponseDataError",
    ()=>InvalidResponseDataError,
    "JSONParseError",
    ()=>JSONParseError,
    "LoadAPIKeyError",
    ()=>LoadAPIKeyError,
    "LoadSettingError",
    ()=>LoadSettingError,
    "NoContentGeneratedError",
    ()=>NoContentGeneratedError,
    "NoSuchModelError",
    ()=>NoSuchModelError,
    "TooManyEmbeddingValuesForCallError",
    ()=>TooManyEmbeddingValuesForCallError,
    "TypeValidationError",
    ()=>TypeValidationError,
    "UnsupportedFunctionalityError",
    ()=>UnsupportedFunctionalityError,
    "getErrorMessage",
    ()=>getErrorMessage,
    "isJSONArray",
    ()=>isJSONArray,
    "isJSONObject",
    ()=>isJSONObject,
    "isJSONValue",
    ()=>isJSONValue
]);
// src/errors/ai-sdk-error.ts
var marker = "vercel.ai.error";
var symbol = Symbol.for(marker);
var _a;
var _AISDKError = class _AISDKError extends Error {
    /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */ constructor({ name: name14, message, cause }){
        super(message);
        this[_a] = true;
        this.name = name14;
        this.cause = cause;
    }
    /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */ static isInstance(error) {
        return _AISDKError.hasMarker(error, marker);
    }
    static hasMarker(error, marker15) {
        const markerSymbol = Symbol.for(marker15);
        return error != null && typeof error === "object" && markerSymbol in error && typeof error[markerSymbol] === "boolean" && error[markerSymbol] === true;
    }
};
_a = symbol;
var AISDKError = _AISDKError;
// src/errors/api-call-error.ts
var name = "AI_APICallError";
var marker2 = `vercel.ai.error.${name}`;
var symbol2 = Symbol.for(marker2);
var _a2;
var APICallError = class extends AISDKError {
    constructor({ message, url, requestBodyValues, statusCode, responseHeaders, responseBody, cause, isRetryable = statusCode != null && (statusCode === 408 || // request timeout
    statusCode === 409 || // conflict
    statusCode === 429 || // too many requests
    statusCode >= 500), // server error
    data }){
        super({
            name,
            message,
            cause
        });
        this[_a2] = true;
        this.url = url;
        this.requestBodyValues = requestBodyValues;
        this.statusCode = statusCode;
        this.responseHeaders = responseHeaders;
        this.responseBody = responseBody;
        this.isRetryable = isRetryable;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker2);
    }
};
_a2 = symbol2;
// src/errors/empty-response-body-error.ts
var name2 = "AI_EmptyResponseBodyError";
var marker3 = `vercel.ai.error.${name2}`;
var symbol3 = Symbol.for(marker3);
var _a3;
var EmptyResponseBodyError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "Empty response body" } = {}){
        super({
            name: name2,
            message
        });
        this[_a3] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker3);
    }
};
_a3 = symbol3;
// src/errors/get-error-message.ts
function getErrorMessage(error) {
    if (error == null) {
        return "unknown error";
    }
    if (typeof error === "string") {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return JSON.stringify(error);
}
// src/errors/invalid-argument-error.ts
var name3 = "AI_InvalidArgumentError";
var marker4 = `vercel.ai.error.${name3}`;
var symbol4 = Symbol.for(marker4);
var _a4;
var InvalidArgumentError = class extends AISDKError {
    constructor({ message, cause, argument }){
        super({
            name: name3,
            message,
            cause
        });
        this[_a4] = true;
        this.argument = argument;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker4);
    }
};
_a4 = symbol4;
// src/errors/invalid-prompt-error.ts
var name4 = "AI_InvalidPromptError";
var marker5 = `vercel.ai.error.${name4}`;
var symbol5 = Symbol.for(marker5);
var _a5;
var InvalidPromptError = class extends AISDKError {
    constructor({ prompt, message, cause }){
        super({
            name: name4,
            message: `Invalid prompt: ${message}`,
            cause
        });
        this[_a5] = true;
        this.prompt = prompt;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker5);
    }
};
_a5 = symbol5;
// src/errors/invalid-response-data-error.ts
var name5 = "AI_InvalidResponseDataError";
var marker6 = `vercel.ai.error.${name5}`;
var symbol6 = Symbol.for(marker6);
var _a6;
var InvalidResponseDataError = class extends AISDKError {
    constructor({ data, message = `Invalid response data: ${JSON.stringify(data)}.` }){
        super({
            name: name5,
            message
        });
        this[_a6] = true;
        this.data = data;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker6);
    }
};
_a6 = symbol6;
// src/errors/json-parse-error.ts
var name6 = "AI_JSONParseError";
var marker7 = `vercel.ai.error.${name6}`;
var symbol7 = Symbol.for(marker7);
var _a7;
var JSONParseError = class extends AISDKError {
    constructor({ text, cause }){
        super({
            name: name6,
            message: `JSON parsing failed: Text: ${text}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a7] = true;
        this.text = text;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker7);
    }
};
_a7 = symbol7;
// src/errors/load-api-key-error.ts
var name7 = "AI_LoadAPIKeyError";
var marker8 = `vercel.ai.error.${name7}`;
var symbol8 = Symbol.for(marker8);
var _a8;
var LoadAPIKeyError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name7,
            message
        });
        this[_a8] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker8);
    }
};
_a8 = symbol8;
// src/errors/load-setting-error.ts
var name8 = "AI_LoadSettingError";
var marker9 = `vercel.ai.error.${name8}`;
var symbol9 = Symbol.for(marker9);
var _a9;
var LoadSettingError = class extends AISDKError {
    // used in isInstance
    constructor({ message }){
        super({
            name: name8,
            message
        });
        this[_a9] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker9);
    }
};
_a9 = symbol9;
// src/errors/no-content-generated-error.ts
var name9 = "AI_NoContentGeneratedError";
var marker10 = `vercel.ai.error.${name9}`;
var symbol10 = Symbol.for(marker10);
var _a10;
var NoContentGeneratedError = class extends AISDKError {
    // used in isInstance
    constructor({ message = "No content generated." } = {}){
        super({
            name: name9,
            message
        });
        this[_a10] = true;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker10);
    }
};
_a10 = symbol10;
// src/errors/no-such-model-error.ts
var name10 = "AI_NoSuchModelError";
var marker11 = `vercel.ai.error.${name10}`;
var symbol11 = Symbol.for(marker11);
var _a11;
var NoSuchModelError = class extends AISDKError {
    constructor({ errorName = name10, modelId, modelType, message = `No such ${modelType}: ${modelId}` }){
        super({
            name: errorName,
            message
        });
        this[_a11] = true;
        this.modelId = modelId;
        this.modelType = modelType;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker11);
    }
};
_a11 = symbol11;
// src/errors/too-many-embedding-values-for-call-error.ts
var name11 = "AI_TooManyEmbeddingValuesForCallError";
var marker12 = `vercel.ai.error.${name11}`;
var symbol12 = Symbol.for(marker12);
var _a12;
var TooManyEmbeddingValuesForCallError = class extends AISDKError {
    constructor(options){
        super({
            name: name11,
            message: `Too many values for a single embedding call. The ${options.provider} model "${options.modelId}" can only embed up to ${options.maxEmbeddingsPerCall} values per call, but ${options.values.length} values were provided.`
        });
        this[_a12] = true;
        this.provider = options.provider;
        this.modelId = options.modelId;
        this.maxEmbeddingsPerCall = options.maxEmbeddingsPerCall;
        this.values = options.values;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker12);
    }
};
_a12 = symbol12;
// src/errors/type-validation-error.ts
var name12 = "AI_TypeValidationError";
var marker13 = `vercel.ai.error.${name12}`;
var symbol13 = Symbol.for(marker13);
var _a13;
var _TypeValidationError = class _TypeValidationError extends AISDKError {
    constructor({ value, cause }){
        super({
            name: name12,
            message: `Type validation failed: Value: ${JSON.stringify(value)}.
Error message: ${getErrorMessage(cause)}`,
            cause
        });
        this[_a13] = true;
        this.value = value;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker13);
    }
    /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */ static wrap({ value, cause }) {
        return _TypeValidationError.isInstance(cause) && cause.value === value ? cause : new _TypeValidationError({
            value,
            cause
        });
    }
};
_a13 = symbol13;
var TypeValidationError = _TypeValidationError;
// src/errors/unsupported-functionality-error.ts
var name13 = "AI_UnsupportedFunctionalityError";
var marker14 = `vercel.ai.error.${name13}`;
var symbol14 = Symbol.for(marker14);
var _a14;
var UnsupportedFunctionalityError = class extends AISDKError {
    constructor({ functionality, message = `'${functionality}' functionality not supported.` }){
        super({
            name: name13,
            message
        });
        this[_a14] = true;
        this.functionality = functionality;
    }
    static isInstance(error) {
        return AISDKError.hasMarker(error, marker14);
    }
};
_a14 = symbol14;
// src/json-value/is-json.ts
function isJSONValue(value) {
    if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return true;
    }
    if (Array.isArray(value)) {
        return value.every(isJSONValue);
    }
    if (typeof value === "object") {
        return Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
    }
    return false;
}
function isJSONArray(value) {
    return Array.isArray(value) && value.every(isJSONValue);
}
function isJSONObject(value) {
    return value != null && typeof value === "object" && Object.entries(value).every(([key, val])=>typeof key === "string" && isJSONValue(val));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/radash/dist/esm/typed.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isArray",
    ()=>isArray,
    "isDate",
    ()=>isDate,
    "isEmpty",
    ()=>isEmpty,
    "isEqual",
    ()=>isEqual,
    "isFloat",
    ()=>isFloat,
    "isFunction",
    ()=>isFunction,
    "isInt",
    ()=>isInt,
    "isNumber",
    ()=>isNumber,
    "isObject",
    ()=>isObject,
    "isPrimitive",
    ()=>isPrimitive,
    "isPromise",
    ()=>isPromise,
    "isString",
    ()=>isString,
    "isSymbol",
    ()=>isSymbol
]);
const isSymbol = (value)=>{
    return !!value && value.constructor === Symbol;
};
const isArray = Array.isArray;
const isObject = (value)=>{
    return !!value && value.constructor === Object;
};
const isPrimitive = (value)=>{
    return value === void 0 || value === null || typeof value !== "object" && typeof value !== "function";
};
const isFunction = (value)=>{
    return !!(value && value.constructor && value.call && value.apply);
};
const isString = (value)=>{
    return typeof value === "string" || value instanceof String;
};
const isInt = (value)=>{
    return isNumber(value) && value % 1 === 0;
};
const isFloat = (value)=>{
    return isNumber(value) && value % 1 !== 0;
};
const isNumber = (value)=>{
    try {
        return Number(value) === value;
    } catch  {
        return false;
    }
};
const isDate = (value)=>{
    return Object.prototype.toString.call(value) === "[object Date]";
};
const isPromise = (value)=>{
    if (!value) return false;
    if (!value.then) return false;
    if (!isFunction(value.then)) return false;
    return true;
};
const isEmpty = (value)=>{
    if (value === true || value === false) return true;
    if (value === null || value === void 0) return true;
    if (isNumber(value)) return value === 0;
    if (isDate(value)) return isNaN(value.getTime());
    if (isFunction(value)) return false;
    if (isSymbol(value)) return false;
    const length = value.length;
    if (isNumber(length)) return length === 0;
    const size = value.size;
    if (isNumber(size)) return size === 0;
    const keys = Object.keys(value).length;
    return keys === 0;
};
const isEqual = (x, y)=>{
    if (Object.is(x, y)) return true;
    if (x instanceof Date && y instanceof Date) {
        return x.getTime() === y.getTime();
    }
    if (x instanceof RegExp && y instanceof RegExp) {
        return x.toString() === y.toString();
    }
    if (typeof x !== "object" || x === null || typeof y !== "object" || y === null) {
        return false;
    }
    const keysX = Reflect.ownKeys(x);
    const keysY = Reflect.ownKeys(y);
    if (keysX.length !== keysY.length) return false;
    for(let i = 0; i < keysX.length; i++){
        if (!Reflect.has(y, keysX[i])) return false;
        if (!isEqual(x[keysX[i]], y[keysX[i]])) return false;
    }
    return true;
};
;
 //# sourceMappingURL=typed.mjs.map
}),
"[project]/node_modules/base64-js/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
    }
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength){
        parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}
}),
"[project]/node_modules/xxhash-wasm/esm/xxhash-wasm.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>e
]);
const t = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    48,
    8,
    96,
    3,
    127,
    127,
    127,
    1,
    127,
    96,
    3,
    127,
    127,
    127,
    0,
    96,
    2,
    127,
    127,
    0,
    96,
    1,
    127,
    1,
    127,
    96,
    3,
    127,
    127,
    126,
    1,
    126,
    96,
    3,
    126,
    127,
    127,
    1,
    126,
    96,
    2,
    127,
    126,
    0,
    96,
    1,
    127,
    1,
    126,
    3,
    11,
    10,
    0,
    0,
    2,
    1,
    3,
    4,
    5,
    6,
    1,
    7,
    5,
    3,
    1,
    0,
    1,
    7,
    85,
    9,
    3,
    109,
    101,
    109,
    2,
    0,
    5,
    120,
    120,
    104,
    51,
    50,
    0,
    0,
    6,
    105,
    110,
    105,
    116,
    51,
    50,
    0,
    2,
    8,
    117,
    112,
    100,
    97,
    116,
    101,
    51,
    50,
    0,
    3,
    8,
    100,
    105,
    103,
    101,
    115,
    116,
    51,
    50,
    0,
    4,
    5,
    120,
    120,
    104,
    54,
    52,
    0,
    5,
    6,
    105,
    110,
    105,
    116,
    54,
    52,
    0,
    7,
    8,
    117,
    112,
    100,
    97,
    116,
    101,
    54,
    52,
    0,
    8,
    8,
    100,
    105,
    103,
    101,
    115,
    116,
    54,
    52,
    0,
    9,
    10,
    251,
    22,
    10,
    242,
    1,
    1,
    4,
    127,
    32,
    0,
    32,
    1,
    106,
    33,
    3,
    32,
    1,
    65,
    16,
    79,
    4,
    127,
    32,
    3,
    65,
    16,
    107,
    33,
    6,
    32,
    2,
    65,
    168,
    136,
    141,
    161,
    2,
    106,
    33,
    3,
    32,
    2,
    65,
    137,
    235,
    208,
    208,
    7,
    107,
    33,
    4,
    32,
    2,
    65,
    207,
    140,
    162,
    142,
    6,
    106,
    33,
    5,
    3,
    64,
    32,
    3,
    32,
    0,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    33,
    3,
    32,
    4,
    32,
    0,
    65,
    4,
    106,
    34,
    0,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    33,
    4,
    32,
    2,
    32,
    0,
    65,
    4,
    106,
    34,
    0,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    33,
    2,
    32,
    5,
    32,
    0,
    65,
    4,
    106,
    34,
    0,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    33,
    5,
    32,
    6,
    32,
    0,
    65,
    4,
    106,
    34,
    0,
    79,
    13,
    0,
    11,
    32,
    2,
    65,
    12,
    119,
    32,
    5,
    65,
    18,
    119,
    106,
    32,
    4,
    65,
    7,
    119,
    106,
    32,
    3,
    65,
    1,
    119,
    106,
    5,
    32,
    2,
    65,
    177,
    207,
    217,
    178,
    1,
    106,
    11,
    32,
    1,
    106,
    32,
    0,
    32,
    1,
    65,
    15,
    113,
    16,
    1,
    11,
    146,
    1,
    0,
    32,
    1,
    32,
    2,
    106,
    33,
    2,
    3,
    64,
    32,
    1,
    65,
    4,
    106,
    32,
    2,
    75,
    69,
    4,
    64,
    32,
    0,
    32,
    1,
    40,
    2,
    0,
    65,
    189,
    220,
    202,
    149,
    124,
    108,
    106,
    65,
    17,
    119,
    65,
    175,
    214,
    211,
    190,
    2,
    108,
    33,
    0,
    32,
    1,
    65,
    4,
    106,
    33,
    1,
    12,
    1,
    11,
    11,
    3,
    64,
    32,
    1,
    32,
    2,
    79,
    69,
    4,
    64,
    32,
    0,
    32,
    1,
    45,
    0,
    0,
    65,
    177,
    207,
    217,
    178,
    1,
    108,
    106,
    65,
    11,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    33,
    0,
    32,
    1,
    65,
    1,
    106,
    33,
    1,
    12,
    1,
    11,
    11,
    32,
    0,
    32,
    0,
    65,
    15,
    118,
    115,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    34,
    0,
    65,
    13,
    118,
    32,
    0,
    115,
    65,
    189,
    220,
    202,
    149,
    124,
    108,
    34,
    0,
    65,
    16,
    118,
    32,
    0,
    115,
    11,
    63,
    0,
    32,
    0,
    65,
    8,
    106,
    32,
    1,
    65,
    168,
    136,
    141,
    161,
    2,
    106,
    54,
    2,
    0,
    32,
    0,
    65,
    12,
    106,
    32,
    1,
    65,
    137,
    235,
    208,
    208,
    7,
    107,
    54,
    2,
    0,
    32,
    0,
    65,
    16,
    106,
    32,
    1,
    54,
    2,
    0,
    32,
    0,
    65,
    20,
    106,
    32,
    1,
    65,
    207,
    140,
    162,
    142,
    6,
    106,
    54,
    2,
    0,
    11,
    195,
    4,
    1,
    6,
    127,
    32,
    1,
    32,
    2,
    106,
    33,
    6,
    32,
    0,
    65,
    24,
    106,
    33,
    4,
    32,
    0,
    65,
    40,
    106,
    40,
    2,
    0,
    33,
    3,
    32,
    0,
    32,
    0,
    40,
    2,
    0,
    32,
    2,
    106,
    54,
    2,
    0,
    32,
    0,
    65,
    4,
    106,
    34,
    5,
    32,
    5,
    40,
    2,
    0,
    32,
    2,
    65,
    16,
    79,
    32,
    0,
    40,
    2,
    0,
    65,
    16,
    79,
    114,
    114,
    54,
    2,
    0,
    32,
    2,
    32,
    3,
    106,
    65,
    16,
    73,
    4,
    64,
    32,
    3,
    32,
    4,
    106,
    32,
    1,
    32,
    2,
    252,
    10,
    0,
    0,
    32,
    0,
    65,
    40,
    106,
    32,
    2,
    32,
    3,
    106,
    54,
    2,
    0,
    15,
    11,
    32,
    3,
    4,
    64,
    32,
    3,
    32,
    4,
    106,
    32,
    1,
    65,
    16,
    32,
    3,
    107,
    34,
    2,
    252,
    10,
    0,
    0,
    32,
    0,
    65,
    8,
    106,
    34,
    3,
    32,
    3,
    40,
    2,
    0,
    32,
    4,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    54,
    2,
    0,
    32,
    0,
    65,
    12,
    106,
    34,
    3,
    32,
    3,
    40,
    2,
    0,
    32,
    4,
    65,
    4,
    106,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    54,
    2,
    0,
    32,
    0,
    65,
    16,
    106,
    34,
    3,
    32,
    3,
    40,
    2,
    0,
    32,
    4,
    65,
    8,
    106,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    54,
    2,
    0,
    32,
    0,
    65,
    20,
    106,
    34,
    3,
    32,
    3,
    40,
    2,
    0,
    32,
    4,
    65,
    12,
    106,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    54,
    2,
    0,
    32,
    0,
    65,
    40,
    106,
    65,
    0,
    54,
    2,
    0,
    32,
    1,
    32,
    2,
    106,
    33,
    1,
    11,
    32,
    1,
    32,
    6,
    65,
    16,
    107,
    77,
    4,
    64,
    32,
    6,
    65,
    16,
    107,
    33,
    8,
    32,
    0,
    65,
    8,
    106,
    40,
    2,
    0,
    33,
    2,
    32,
    0,
    65,
    12,
    106,
    40,
    2,
    0,
    33,
    3,
    32,
    0,
    65,
    16,
    106,
    40,
    2,
    0,
    33,
    5,
    32,
    0,
    65,
    20,
    106,
    40,
    2,
    0,
    33,
    7,
    3,
    64,
    32,
    2,
    32,
    1,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    33,
    2,
    32,
    3,
    32,
    1,
    65,
    4,
    106,
    34,
    1,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    33,
    3,
    32,
    5,
    32,
    1,
    65,
    4,
    106,
    34,
    1,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    33,
    5,
    32,
    7,
    32,
    1,
    65,
    4,
    106,
    34,
    1,
    40,
    2,
    0,
    65,
    247,
    148,
    175,
    175,
    120,
    108,
    106,
    65,
    13,
    119,
    65,
    177,
    243,
    221,
    241,
    121,
    108,
    33,
    7,
    32,
    8,
    32,
    1,
    65,
    4,
    106,
    34,
    1,
    79,
    13,
    0,
    11,
    32,
    0,
    65,
    8,
    106,
    32,
    2,
    54,
    2,
    0,
    32,
    0,
    65,
    12,
    106,
    32,
    3,
    54,
    2,
    0,
    32,
    0,
    65,
    16,
    106,
    32,
    5,
    54,
    2,
    0,
    32,
    0,
    65,
    20,
    106,
    32,
    7,
    54,
    2,
    0,
    11,
    32,
    1,
    32,
    6,
    73,
    4,
    64,
    32,
    4,
    32,
    1,
    32,
    6,
    32,
    1,
    107,
    34,
    1,
    252,
    10,
    0,
    0,
    32,
    0,
    65,
    40,
    106,
    32,
    1,
    54,
    2,
    0,
    11,
    11,
    97,
    1,
    1,
    127,
    32,
    0,
    65,
    16,
    106,
    40,
    2,
    0,
    33,
    1,
    32,
    0,
    65,
    4,
    106,
    40,
    2,
    0,
    4,
    127,
    32,
    1,
    65,
    12,
    119,
    32,
    0,
    65,
    20,
    106,
    40,
    2,
    0,
    65,
    18,
    119,
    106,
    32,
    0,
    65,
    12,
    106,
    40,
    2,
    0,
    65,
    7,
    119,
    106,
    32,
    0,
    65,
    8,
    106,
    40,
    2,
    0,
    65,
    1,
    119,
    106,
    5,
    32,
    1,
    65,
    177,
    207,
    217,
    178,
    1,
    106,
    11,
    32,
    0,
    40,
    2,
    0,
    106,
    32,
    0,
    65,
    24,
    106,
    32,
    0,
    65,
    40,
    106,
    40,
    2,
    0,
    16,
    1,
    11,
    255,
    3,
    2,
    3,
    126,
    1,
    127,
    32,
    0,
    32,
    1,
    106,
    33,
    6,
    32,
    1,
    65,
    32,
    79,
    4,
    126,
    32,
    6,
    65,
    32,
    107,
    33,
    6,
    32,
    2,
    66,
    214,
    235,
    130,
    238,
    234,
    253,
    137,
    245,
    224,
    0,
    124,
    33,
    3,
    32,
    2,
    66,
    177,
    169,
    172,
    193,
    173,
    184,
    212,
    166,
    61,
    125,
    33,
    4,
    32,
    2,
    66,
    249,
    234,
    208,
    208,
    231,
    201,
    161,
    228,
    225,
    0,
    124,
    33,
    5,
    3,
    64,
    32,
    3,
    32,
    0,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    33,
    3,
    32,
    4,
    32,
    0,
    65,
    8,
    106,
    34,
    0,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    33,
    4,
    32,
    2,
    32,
    0,
    65,
    8,
    106,
    34,
    0,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    33,
    2,
    32,
    5,
    32,
    0,
    65,
    8,
    106,
    34,
    0,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    33,
    5,
    32,
    6,
    32,
    0,
    65,
    8,
    106,
    34,
    0,
    79,
    13,
    0,
    11,
    32,
    2,
    66,
    12,
    137,
    32,
    5,
    66,
    18,
    137,
    124,
    32,
    4,
    66,
    7,
    137,
    124,
    32,
    3,
    66,
    1,
    137,
    124,
    32,
    3,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    133,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    66,
    157,
    163,
    181,
    234,
    131,
    177,
    141,
    138,
    250,
    0,
    125,
    32,
    4,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    133,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    66,
    157,
    163,
    181,
    234,
    131,
    177,
    141,
    138,
    250,
    0,
    125,
    32,
    2,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    133,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    66,
    157,
    163,
    181,
    234,
    131,
    177,
    141,
    138,
    250,
    0,
    125,
    32,
    5,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    133,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    66,
    157,
    163,
    181,
    234,
    131,
    177,
    141,
    138,
    250,
    0,
    125,
    5,
    32,
    2,
    66,
    197,
    207,
    217,
    178,
    241,
    229,
    186,
    234,
    39,
    124,
    11,
    32,
    1,
    173,
    124,
    32,
    0,
    32,
    1,
    65,
    31,
    113,
    16,
    6,
    11,
    134,
    2,
    0,
    32,
    1,
    32,
    2,
    106,
    33,
    2,
    3,
    64,
    32,
    2,
    32,
    1,
    65,
    8,
    106,
    79,
    4,
    64,
    32,
    1,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    32,
    0,
    133,
    66,
    27,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    66,
    157,
    163,
    181,
    234,
    131,
    177,
    141,
    138,
    250,
    0,
    125,
    33,
    0,
    32,
    1,
    65,
    8,
    106,
    33,
    1,
    12,
    1,
    11,
    11,
    32,
    1,
    65,
    4,
    106,
    32,
    2,
    77,
    4,
    64,
    32,
    0,
    32,
    1,
    53,
    2,
    0,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    133,
    66,
    23,
    137,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    66,
    249,
    243,
    221,
    241,
    153,
    246,
    153,
    171,
    22,
    124,
    33,
    0,
    32,
    1,
    65,
    4,
    106,
    33,
    1,
    11,
    3,
    64,
    32,
    1,
    32,
    2,
    73,
    4,
    64,
    32,
    0,
    32,
    1,
    49,
    0,
    0,
    66,
    197,
    207,
    217,
    178,
    241,
    229,
    186,
    234,
    39,
    126,
    133,
    66,
    11,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    33,
    0,
    32,
    1,
    65,
    1,
    106,
    33,
    1,
    12,
    1,
    11,
    11,
    32,
    0,
    32,
    0,
    66,
    33,
    136,
    133,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    34,
    0,
    32,
    0,
    66,
    29,
    136,
    133,
    66,
    249,
    243,
    221,
    241,
    153,
    246,
    153,
    171,
    22,
    126,
    34,
    0,
    32,
    0,
    66,
    32,
    136,
    133,
    11,
    77,
    0,
    32,
    0,
    65,
    8,
    106,
    32,
    1,
    66,
    214,
    235,
    130,
    238,
    234,
    253,
    137,
    245,
    224,
    0,
    124,
    55,
    3,
    0,
    32,
    0,
    65,
    16,
    106,
    32,
    1,
    66,
    177,
    169,
    172,
    193,
    173,
    184,
    212,
    166,
    61,
    125,
    55,
    3,
    0,
    32,
    0,
    65,
    24,
    106,
    32,
    1,
    55,
    3,
    0,
    32,
    0,
    65,
    32,
    106,
    32,
    1,
    66,
    249,
    234,
    208,
    208,
    231,
    201,
    161,
    228,
    225,
    0,
    124,
    55,
    3,
    0,
    11,
    244,
    4,
    2,
    3,
    127,
    4,
    126,
    32,
    1,
    32,
    2,
    106,
    33,
    5,
    32,
    0,
    65,
    40,
    106,
    33,
    4,
    32,
    0,
    65,
    200,
    0,
    106,
    40,
    2,
    0,
    33,
    3,
    32,
    0,
    32,
    0,
    41,
    3,
    0,
    32,
    2,
    173,
    124,
    55,
    3,
    0,
    32,
    2,
    32,
    3,
    106,
    65,
    32,
    73,
    4,
    64,
    32,
    3,
    32,
    4,
    106,
    32,
    1,
    32,
    2,
    252,
    10,
    0,
    0,
    32,
    0,
    65,
    200,
    0,
    106,
    32,
    2,
    32,
    3,
    106,
    54,
    2,
    0,
    15,
    11,
    32,
    3,
    4,
    64,
    32,
    3,
    32,
    4,
    106,
    32,
    1,
    65,
    32,
    32,
    3,
    107,
    34,
    2,
    252,
    10,
    0,
    0,
    32,
    0,
    65,
    8,
    106,
    34,
    3,
    32,
    3,
    41,
    3,
    0,
    32,
    4,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    55,
    3,
    0,
    32,
    0,
    65,
    16,
    106,
    34,
    3,
    32,
    3,
    41,
    3,
    0,
    32,
    4,
    65,
    8,
    106,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    55,
    3,
    0,
    32,
    0,
    65,
    24,
    106,
    34,
    3,
    32,
    3,
    41,
    3,
    0,
    32,
    4,
    65,
    16,
    106,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    55,
    3,
    0,
    32,
    0,
    65,
    32,
    106,
    34,
    3,
    32,
    3,
    41,
    3,
    0,
    32,
    4,
    65,
    24,
    106,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    55,
    3,
    0,
    32,
    0,
    65,
    200,
    0,
    106,
    65,
    0,
    54,
    2,
    0,
    32,
    1,
    32,
    2,
    106,
    33,
    1,
    11,
    32,
    1,
    65,
    32,
    106,
    32,
    5,
    77,
    4,
    64,
    32,
    5,
    65,
    32,
    107,
    33,
    2,
    32,
    0,
    65,
    8,
    106,
    41,
    3,
    0,
    33,
    6,
    32,
    0,
    65,
    16,
    106,
    41,
    3,
    0,
    33,
    7,
    32,
    0,
    65,
    24,
    106,
    41,
    3,
    0,
    33,
    8,
    32,
    0,
    65,
    32,
    106,
    41,
    3,
    0,
    33,
    9,
    3,
    64,
    32,
    6,
    32,
    1,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    33,
    6,
    32,
    7,
    32,
    1,
    65,
    8,
    106,
    34,
    1,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    33,
    7,
    32,
    8,
    32,
    1,
    65,
    8,
    106,
    34,
    1,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    33,
    8,
    32,
    9,
    32,
    1,
    65,
    8,
    106,
    34,
    1,
    41,
    3,
    0,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    124,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    33,
    9,
    32,
    2,
    32,
    1,
    65,
    8,
    106,
    34,
    1,
    79,
    13,
    0,
    11,
    32,
    0,
    65,
    8,
    106,
    32,
    6,
    55,
    3,
    0,
    32,
    0,
    65,
    16,
    106,
    32,
    7,
    55,
    3,
    0,
    32,
    0,
    65,
    24,
    106,
    32,
    8,
    55,
    3,
    0,
    32,
    0,
    65,
    32,
    106,
    32,
    9,
    55,
    3,
    0,
    11,
    32,
    1,
    32,
    5,
    73,
    4,
    64,
    32,
    4,
    32,
    1,
    32,
    5,
    32,
    1,
    107,
    34,
    1,
    252,
    10,
    0,
    0,
    32,
    0,
    65,
    200,
    0,
    106,
    32,
    1,
    54,
    2,
    0,
    11,
    11,
    188,
    2,
    1,
    5,
    126,
    32,
    0,
    65,
    24,
    106,
    41,
    3,
    0,
    33,
    1,
    32,
    0,
    41,
    3,
    0,
    34,
    2,
    66,
    32,
    90,
    4,
    126,
    32,
    0,
    65,
    8,
    106,
    41,
    3,
    0,
    34,
    3,
    66,
    1,
    137,
    32,
    0,
    65,
    16,
    106,
    41,
    3,
    0,
    34,
    4,
    66,
    7,
    137,
    124,
    32,
    1,
    66,
    12,
    137,
    32,
    0,
    65,
    32,
    106,
    41,
    3,
    0,
    34,
    5,
    66,
    18,
    137,
    124,
    124,
    32,
    3,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    133,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    66,
    157,
    163,
    181,
    234,
    131,
    177,
    141,
    138,
    250,
    0,
    125,
    32,
    4,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    133,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    66,
    157,
    163,
    181,
    234,
    131,
    177,
    141,
    138,
    250,
    0,
    125,
    32,
    1,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    133,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    66,
    157,
    163,
    181,
    234,
    131,
    177,
    141,
    138,
    250,
    0,
    125,
    32,
    5,
    66,
    207,
    214,
    211,
    190,
    210,
    199,
    171,
    217,
    66,
    126,
    66,
    31,
    137,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    133,
    66,
    135,
    149,
    175,
    175,
    152,
    182,
    222,
    155,
    158,
    127,
    126,
    66,
    157,
    163,
    181,
    234,
    131,
    177,
    141,
    138,
    250,
    0,
    125,
    5,
    32,
    1,
    66,
    197,
    207,
    217,
    178,
    241,
    229,
    186,
    234,
    39,
    124,
    11,
    32,
    2,
    124,
    32,
    0,
    65,
    40,
    106,
    32,
    2,
    66,
    31,
    131,
    167,
    16,
    6,
    11
]);
async function e() {
    return function(t) {
        const { exports: { mem: e, xxh32: n, xxh64: r, init32: i, update32: a, digest32: o, init64: s, update64: u, digest64: c } } = t;
        let h = new Uint8Array(e.buffer);
        function g(t, n) {
            if (e.buffer.byteLength < t + n) {
                const r = Math.ceil((t + n - e.buffer.byteLength) / 65536);
                e.grow(r), h = new Uint8Array(e.buffer);
            }
        }
        function f(t, e, n, r, i, a) {
            g(t);
            const o = new Uint8Array(t);
            return h.set(o), n(0, e), o.set(h.subarray(0, t)), {
                update (e) {
                    let n;
                    return h.set(o), "string" == typeof e ? (g(3 * e.length, t), n = w.encodeInto(e, h.subarray(t)).written) : (g(e.byteLength, t), h.set(e, t), n = e.byteLength), r(0, t, n), o.set(h.subarray(0, t)), this;
                },
                digest: ()=>(h.set(o), a(i(0)))
            };
        }
        function y(t) {
            return t >>> 0;
        }
        const b = 2n ** 64n - 1n;
        function d(t) {
            return t & b;
        }
        const w = new TextEncoder, l = 0, p = 0n;
        function x(t, e = l) {
            return g(3 * t.length, 0), y(n(0, w.encodeInto(t, h).written, e));
        }
        function L(t, e = p) {
            return g(3 * t.length, 0), d(r(0, w.encodeInto(t, h).written, e));
        }
        return {
            h32: x,
            h32ToString: (t, e = l)=>x(t, e).toString(16).padStart(8, "0"),
            h32Raw: (t, e = l)=>(g(t.byteLength, 0), h.set(t), y(n(0, t.byteLength, e))),
            create32: (t = l)=>f(48, t, i, a, o, y),
            h64: L,
            h64ToString: (t, e = p)=>L(t, e).toString(16).padStart(16, "0"),
            h64Raw: (t, e = p)=>(g(t.byteLength, 0), h.set(t), d(r(0, t.byteLength, e))),
            create64: (t = p)=>f(88, t, s, u, c, d)
        };
    }((await WebAssembly.instantiate(t)).instance);
}
;
 //# sourceMappingURL=xxhash-wasm.js.map
}),
"[project]/node_modules/lru-cache/dist/esm/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LRUCache",
    ()=>LRUCache
]);
/**
 * @module LRUCache
 */ const defaultPerf = typeof performance === 'object' && performance && typeof performance.now === 'function' ? performance : Date;
const warned = new Set();
/* c8 ignore start */ const PROCESS = typeof process === 'object' && !!process ? process : {};
/* c8 ignore start */ const emitWarning = (msg, type, code, fn)=>{
    typeof PROCESS.emitWarning === 'function' ? PROCESS.emitWarning(msg, type, code, fn) : console.error(`[${code}] ${type}: ${msg}`);
};
let AC = globalThis.AbortController;
let AS = globalThis.AbortSignal;
/* c8 ignore start */ if (typeof AC === 'undefined') {
    //@ts-ignore
    AS = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_, fn) {
            this._onabort.push(fn);
        }
    };
    //@ts-ignore
    AC = class AbortController {
        constructor(){
            warnACPolyfill();
        }
        signal = new AS();
        abort(reason) {
            if (this.signal.aborted) return;
            //@ts-ignore
            this.signal.reason = reason;
            //@ts-ignore
            this.signal.aborted = true;
            //@ts-ignore
            for (const fn of this.signal._onabort){
                fn(reason);
            }
            this.signal.onabort?.(reason);
        }
    };
    let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== '1';
    const warnACPolyfill = ()=>{
        if (!printACPolyfillWarning) return;
        printACPolyfillWarning = false;
        emitWarning('AbortController is not defined. If using lru-cache in ' + 'node 14, load an AbortController polyfill from the ' + '`node-abort-controller` package. A minimal polyfill is ' + 'provided for use by LRUCache.fetch(), but it should not be ' + 'relied upon in other contexts (eg, passing it to other APIs that ' + 'use AbortController/AbortSignal might have undesirable effects). ' + 'You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.', 'NO_ABORT_CONTROLLER', 'ENOTSUP', warnACPolyfill);
    };
}
/* c8 ignore stop */ const shouldWarn = (code)=>!warned.has(code);
const TYPE = Symbol('type');
const isPosInt = (n)=>n && n === Math.floor(n) && n > 0 && isFinite(n);
/* c8 ignore start */ // This is a little bit ridiculous, tbh.
// The maximum array length is 2^32-1 or thereabouts on most JS impls.
// And well before that point, you're caching the entire world, I mean,
// that's ~32GB of just integers for the next/prev links, plus whatever
// else to hold that many keys and values.  Just filling the memory with
// zeroes at init time is brutal when you get that big.
// But why not be complete?
// Maybe in the future, these limits will have expanded.
const getUintArray = (max)=>!isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
/* c8 ignore stop */ class ZeroArray extends Array {
    constructor(size){
        super(size);
        this.fill(0);
    }
}
class Stack {
    heap;
    length;
    // private constructor
    static #constructing = false;
    static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls) return [];
        Stack.#constructing = true;
        const s = new Stack(max, HeapCls);
        Stack.#constructing = false;
        return s;
    }
    constructor(max, HeapCls){
        /* c8 ignore start */ if (!Stack.#constructing) {
            throw new TypeError('instantiate Stack using Stack.create(n)');
        }
        /* c8 ignore stop */ this.heap = new HeapCls(max);
        this.length = 0;
    }
    push(n) {
        this.heap[this.length++] = n;
    }
    pop() {
        return this.heap[--this.length];
    }
}
class LRUCache {
    // options that cannot be changed without disaster
    #max;
    #maxSize;
    #dispose;
    #onInsert;
    #disposeAfter;
    #fetchMethod;
    #memoMethod;
    #perf;
    /**
     * {@link LRUCache.OptionsBase.perf}
     */ get perf() {
        return this.#perf;
    }
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */ ttl;
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */ ttlResolution;
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */ ttlAutopurge;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */ updateAgeOnGet;
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */ updateAgeOnHas;
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */ allowStale;
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */ noDisposeOnSet;
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */ noUpdateTTL;
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */ maxEntrySize;
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */ sizeCalculation;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */ noDeleteOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */ noDeleteOnStaleGet;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */ allowStaleOnFetchAbort;
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */ allowStaleOnFetchRejection;
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */ ignoreFetchAbort;
    // computed properties
    #size;
    #calculatedSize;
    #keyMap;
    #keyList;
    #valList;
    #next;
    #prev;
    #head;
    #tail;
    #free;
    #disposed;
    #sizes;
    #starts;
    #ttls;
    #autopurgeTimers;
    #hasDispose;
    #hasFetchMethod;
    #hasDisposeAfter;
    #hasOnInsert;
    /**
     * Do not call this method unless you need to inspect the
     * inner workings of the cache.  If anything returned by this
     * object is modified in any way, strange breakage may occur.
     *
     * These fields are private for a reason!
     *
     * @internal
     */ static unsafeExposeInternals(c) {
        return {
            // properties
            starts: c.#starts,
            ttls: c.#ttls,
            autopurgeTimers: c.#autopurgeTimers,
            sizes: c.#sizes,
            keyMap: c.#keyMap,
            keyList: c.#keyList,
            valList: c.#valList,
            next: c.#next,
            prev: c.#prev,
            get head () {
                return c.#head;
            },
            get tail () {
                return c.#tail;
            },
            free: c.#free,
            // methods
            isBackgroundFetch: (p)=>c.#isBackgroundFetch(p),
            backgroundFetch: (k, index, options, context)=>c.#backgroundFetch(k, index, options, context),
            moveToTail: (index)=>c.#moveToTail(index),
            indexes: (options)=>c.#indexes(options),
            rindexes: (options)=>c.#rindexes(options),
            isStale: (index)=>c.#isStale(index)
        };
    }
    // Protected read-only members
    /**
     * {@link LRUCache.OptionsBase.max} (read-only)
     */ get max() {
        return this.#max;
    }
    /**
     * {@link LRUCache.OptionsBase.maxSize} (read-only)
     */ get maxSize() {
        return this.#maxSize;
    }
    /**
     * The total computed size of items in the cache (read-only)
     */ get calculatedSize() {
        return this.#calculatedSize;
    }
    /**
     * The number of items stored in the cache (read-only)
     */ get size() {
        return this.#size;
    }
    /**
     * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
     */ get fetchMethod() {
        return this.#fetchMethod;
    }
    get memoMethod() {
        return this.#memoMethod;
    }
    /**
     * {@link LRUCache.OptionsBase.dispose} (read-only)
     */ get dispose() {
        return this.#dispose;
    }
    /**
     * {@link LRUCache.OptionsBase.onInsert} (read-only)
     */ get onInsert() {
        return this.#onInsert;
    }
    /**
     * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
     */ get disposeAfter() {
        return this.#disposeAfter;
    }
    constructor(options){
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, onInsert, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort, perf } = options;
        if (perf !== undefined) {
            if (typeof perf?.now !== 'function') {
                throw new TypeError('perf option must have a now() method if specified');
            }
        }
        this.#perf = perf ?? defaultPerf;
        if (max !== 0 && !isPosInt(max)) {
            throw new TypeError('max option must be a nonnegative integer');
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
            throw new Error('invalid max value: ' + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!this.#maxSize && !this.maxEntrySize) {
                throw new TypeError('cannot set sizeCalculation without setting maxSize or maxEntrySize');
            }
            if (typeof this.sizeCalculation !== 'function') {
                throw new TypeError('sizeCalculation set to non-function');
            }
        }
        if (memoMethod !== undefined && typeof memoMethod !== 'function') {
            throw new TypeError('memoMethod must be a function if defined');
        }
        this.#memoMethod = memoMethod;
        if (fetchMethod !== undefined && typeof fetchMethod !== 'function') {
            throw new TypeError('fetchMethod must be a function if specified');
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = new Map();
        this.#keyList = new Array(max).fill(undefined);
        this.#valList = new Array(max).fill(undefined);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === 'function') {
            this.#dispose = dispose;
        }
        if (typeof onInsert === 'function') {
            this.#onInsert = onInsert;
        }
        if (typeof disposeAfter === 'function') {
            this.#disposeAfter = disposeAfter;
            this.#disposed = [];
        } else {
            this.#disposeAfter = undefined;
            this.#disposed = undefined;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasOnInsert = !!this.#onInsert;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        // NB: maxEntrySize is set to maxSize if it's set
        if (this.maxEntrySize !== 0) {
            if (this.#maxSize !== 0) {
                if (!isPosInt(this.#maxSize)) {
                    throw new TypeError('maxSize must be a positive integer if specified');
                }
            }
            if (!isPosInt(this.maxEntrySize)) {
                throw new TypeError('maxEntrySize must be a positive integer if specified');
            }
            this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!isPosInt(this.ttl)) {
                throw new TypeError('ttl must be a positive integer if specified');
            }
            this.#initializeTTLTracking();
        }
        // do not allow completely unbounded caches
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
            throw new TypeError('At least one of max, maxSize, or ttl is required');
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
            const code = 'LRU_CACHE_UNBOUNDED';
            if (shouldWarn(code)) {
                warned.add(code);
                const msg = 'TTL caching without ttlAutopurge, max, or maxSize can ' + 'result in unbounded memory consumption.';
                emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache);
            }
        }
    }
    /**
     * Return the number of ms left in the item's TTL. If item is not in cache,
     * returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
     */ getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
    }
    #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        const purgeTimers = this.ttlAutopurge ? new Array(this.#max) : undefined;
        this.#autopurgeTimers = purgeTimers;
        this.#setItemTTL = (index, ttl, start = this.#perf.now())=>{
            starts[index] = ttl !== 0 ? start : 0;
            ttls[index] = ttl;
            // clear out the purge timer if we're setting TTL to 0, and
            // previously had a ttl purge timer running, so it doesn't
            // fire unnecessarily.
            if (purgeTimers?.[index]) {
                clearTimeout(purgeTimers[index]);
                purgeTimers[index] = undefined;
            }
            if (ttl !== 0 && purgeTimers) {
                const t = setTimeout(()=>{
                    if (this.#isStale(index)) {
                        this.#delete(this.#keyList[index], 'expire');
                    }
                }, ttl + 1);
                // unref() not supported on all platforms
                /* c8 ignore start */ if (t.unref) {
                    t.unref();
                }
                /* c8 ignore stop */ purgeTimers[index] = t;
            }
        };
        this.#updateItemAge = (index)=>{
            starts[index] = ttls[index] !== 0 ? this.#perf.now() : 0;
        };
        this.#statusTTL = (status, index)=>{
            if (ttls[index]) {
                const ttl = ttls[index];
                const start = starts[index];
                /* c8 ignore next */ if (!ttl || !start) return;
                status.ttl = ttl;
                status.start = start;
                status.now = cachedNow || getNow();
                const age = status.now - start;
                status.remainingTTL = ttl - age;
            }
        };
        // debounce calls to perf.now() to 1s so we're not hitting
        // that costly call repeatedly.
        let cachedNow = 0;
        const getNow = ()=>{
            const n = this.#perf.now();
            if (this.ttlResolution > 0) {
                cachedNow = n;
                const t = setTimeout(()=>cachedNow = 0, this.ttlResolution);
                // not available on all platforms
                /* c8 ignore start */ if (t.unref) {
                    t.unref();
                }
            /* c8 ignore stop */ }
            return n;
        };
        this.getRemainingTTL = (key)=>{
            const index = this.#keyMap.get(key);
            if (index === undefined) {
                return 0;
            }
            const ttl = ttls[index];
            const start = starts[index];
            if (!ttl || !start) {
                return Infinity;
            }
            const age = (cachedNow || getNow()) - start;
            return ttl - age;
        };
        this.#isStale = (index)=>{
            const s = starts[index];
            const t = ttls[index];
            return !!t && !!s && (cachedNow || getNow()) - s > t;
        };
    }
    // conditionally set private methods related to TTL
    #updateItemAge = ()=>{};
    #statusTTL = ()=>{};
    #setItemTTL = ()=>{};
    /* c8 ignore stop */ #isStale = ()=>false;
    #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = (index)=>{
            this.#calculatedSize -= sizes[index];
            sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation)=>{
            // provisionally accept background fetches.
            // actual value size will be checked when they return.
            if (this.#isBackgroundFetch(v)) {
                return 0;
            }
            if (!isPosInt(size)) {
                if (sizeCalculation) {
                    if (typeof sizeCalculation !== 'function') {
                        throw new TypeError('sizeCalculation must be a function');
                    }
                    size = sizeCalculation(v, k);
                    if (!isPosInt(size)) {
                        throw new TypeError('sizeCalculation return invalid (expect positive integer)');
                    }
                } else {
                    throw new TypeError('invalid size value (must be positive integer). ' + 'When maxSize or maxEntrySize is used, sizeCalculation ' + 'or size must be set.');
                }
            }
            return size;
        };
        this.#addItemSize = (index, size, status)=>{
            sizes[index] = size;
            if (this.#maxSize) {
                const maxSize = this.#maxSize - sizes[index];
                while(this.#calculatedSize > maxSize){
                    this.#evict(true);
                }
            }
            this.#calculatedSize += sizes[index];
            if (status) {
                status.entrySize = size;
                status.totalCalculatedSize = this.#calculatedSize;
            }
        };
    }
    #removeItemSize = (_i)=>{};
    #addItemSize = (_i, _s, _st)=>{};
    #requireSize = (_k, _v, size, sizeCalculation)=>{
        if (size || sizeCalculation) {
            throw new TypeError('cannot set size without setting maxSize or maxEntrySize on cache');
        }
        return 0;
    };
    *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for(let i = this.#tail; true;){
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#head) {
                    break;
                } else {
                    i = this.#prev[i];
                }
            }
        }
    }
    *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for(let i = this.#head; true;){
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#tail) {
                    break;
                } else {
                    i = this.#next[i];
                }
            }
        }
    }
    #isValidIndex(index) {
        return index !== undefined && this.#keyMap.get(this.#keyList[index]) === index;
    }
    /**
     * Return a generator yielding `[key, value]` pairs,
     * in order from most recently used to least recently used.
     */ *entries() {
        for (const i of this.#indexes()){
            if (this.#valList[i] !== undefined && this.#keyList[i] !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield [
                    this.#keyList[i],
                    this.#valList[i]
                ];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.entries}
     *
     * Return a generator yielding `[key, value]` pairs,
     * in order from least recently used to most recently used.
     */ *rentries() {
        for (const i of this.#rindexes()){
            if (this.#valList[i] !== undefined && this.#keyList[i] !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield [
                    this.#keyList[i],
                    this.#valList[i]
                ];
            }
        }
    }
    /**
     * Return a generator yielding the keys in the cache,
     * in order from most recently used to least recently used.
     */ *keys() {
        for (const i of this.#indexes()){
            const k = this.#keyList[i];
            if (k !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.keys}
     *
     * Return a generator yielding the keys in the cache,
     * in order from least recently used to most recently used.
     */ *rkeys() {
        for (const i of this.#rindexes()){
            const k = this.#keyList[i];
            if (k !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Return a generator yielding the values in the cache,
     * in order from most recently used to least recently used.
     */ *values() {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            if (v !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.values}
     *
     * Return a generator yielding the values in the cache,
     * in order from least recently used to most recently used.
     */ *rvalues() {
        for (const i of this.#rindexes()){
            const v = this.#valList[i];
            if (v !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Iterating over the cache itself yields the same results as
     * {@link LRUCache.entries}
     */ [Symbol.iterator]() {
        return this.entries();
    }
    /**
     * A String value that is used in the creation of the default string
     * description of an object. Called by the built-in method
     * `Object.prototype.toString`.
     */ [Symbol.toStringTag] = 'LRUCache';
    /**
     * Find a value for which the supplied fn method returns a truthy value,
     * similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
     */ find(fn, getOptions = {}) {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            if (fn(value, this.#keyList[i], this)) {
                return this.get(this.#keyList[i], getOptions);
            }
        }
    }
    /**
     * Call the supplied function on each item in the cache, in order from most
     * recently used to least recently used.
     *
     * `fn` is called as `fn(value, key, cache)`.
     *
     * If `thisp` is provided, function will be called in the `this`-context of
     * the provided object, or the cache if no `thisp` object is provided.
     *
     * Does not update age or recenty of use, or iterate over stale values.
     */ forEach(fn, thisp = this) {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * The same as {@link LRUCache.forEach} but items are iterated over in
     * reverse order.  (ie, less recently used items are iterated over first.)
     */ rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * Delete any stale entries. Returns true if anything was removed,
     * false otherwise.
     */ purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({
            allowStale: true
        })){
            if (this.#isStale(i)) {
                this.#delete(this.#keyList[i], 'expire');
                deleted = true;
            }
        }
        return deleted;
    }
    /**
     * Get the extended info about a given entry, to get its value, size, and
     * TTL info simultaneously. Returns `undefined` if the key is not present.
     *
     * Unlike {@link LRUCache#dump}, which is designed to be portable and survive
     * serialization, the `start` value is always the current timestamp, and the
     * `ttl` is a calculated remaining time to live (negative if expired).
     *
     * Always returns stale values, if their info is found in the cache, so be
     * sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
     * if relevant.
     */ info(key) {
        const i = this.#keyMap.get(key);
        if (i === undefined) return undefined;
        const v = this.#valList[i];
        /* c8 ignore start - this isn't tested for the info function,
         * but it's the same logic as found in other places. */ const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        if (value === undefined) return undefined;
        /* c8 ignore end */ const entry = {
            value
        };
        if (this.#ttls && this.#starts) {
            const ttl = this.#ttls[i];
            const start = this.#starts[i];
            if (ttl && start) {
                const remain = ttl - (this.#perf.now() - start);
                entry.ttl = remain;
                entry.start = Date.now();
            }
        }
        if (this.#sizes) {
            entry.size = this.#sizes[i];
        }
        return entry;
    }
    /**
     * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
     * passed to {@link LRUCache#load}.
     *
     * The `start` fields are calculated relative to a portable `Date.now()`
     * timestamp, even if `performance.now()` is available.
     *
     * Stale entries are always included in the `dump`, even if
     * {@link LRUCache.OptionsBase.allowStale} is false.
     *
     * Note: this returns an actual array, not a generator, so it can be more
     * easily passed around.
     */ dump() {
        const arr = [];
        for (const i of this.#indexes({
            allowStale: true
        })){
            const key = this.#keyList[i];
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined || key === undefined) continue;
            const entry = {
                value
            };
            if (this.#ttls && this.#starts) {
                entry.ttl = this.#ttls[i];
                // always dump the start relative to a portable timestamp
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = this.#perf.now() - this.#starts[i];
                entry.start = Math.floor(Date.now() - age);
            }
            if (this.#sizes) {
                entry.size = this.#sizes[i];
            }
            arr.unshift([
                key,
                entry
            ]);
        }
        return arr;
    }
    /**
     * Reset the cache and load in the items in entries in the order listed.
     *
     * The shape of the resulting cache may be different if the same options are
     * not used in both caches.
     *
     * The `start` fields are assumed to be calculated relative to a portable
     * `Date.now()` timestamp, even if `performance.now()` is available.
     */ load(arr) {
        this.clear();
        for (const [key, entry] of arr){
            if (entry.start) {
                // entry.start is a portable timestamp, but we may be using
                // node's performance.now(), so calculate the offset, so that
                // we get the intended remaining TTL, no matter how long it's
                // been on ice.
                //
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = Date.now() - entry.start;
                entry.start = this.#perf.now() - age;
            }
            this.set(key, entry.value, entry);
        }
    }
    /**
     * Add a value to the cache.
     *
     * Note: if `undefined` is specified as a value, this is an alias for
     * {@link LRUCache#delete}
     *
     * Fields on the {@link LRUCache.SetOptions} options param will override
     * their corresponding values in the constructor options for the scope
     * of this single `set()` operation.
     *
     * If `start` is provided, then that will set the effective start
     * time for the TTL calculation. Note that this must be a previous
     * value of `performance.now()` if supported, or a previous value of
     * `Date.now()` if not.
     *
     * Options object may also include `size`, which will prevent
     * calling the `sizeCalculation` function and just use the specified
     * number if it is a positive integer, and `noDisposeOnSet` which
     * will prevent calling a `dispose` function in the case of
     * overwrites.
     *
     * If the `size` (or return value of `sizeCalculation`) for a given
     * entry is greater than `maxEntrySize`, then the item will not be
     * added to the cache.
     *
     * Will update the recency of the entry.
     *
     * If the value is `undefined`, then this is an alias for
     * `cache.delete(key)`. `undefined` is never stored in the cache.
     */ set(k, v, setOptions = {}) {
        if (v === undefined) {
            this.delete(k);
            return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        // if the item doesn't fit, don't do anything
        // NB: maxEntrySize set to maxSize by default
        if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
                status.set = 'miss';
                status.maxEntrySizeExceeded = true;
            }
            // have to delete, in case something is there already.
            this.#delete(k, 'set');
            return this;
        }
        let index = this.#size === 0 ? undefined : this.#keyMap.get(k);
        if (index === undefined) {
            // addition
            index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
            this.#keyList[index] = k;
            this.#valList[index] = v;
            this.#keyMap.set(k, index);
            this.#next[this.#tail] = index;
            this.#prev[index] = this.#tail;
            this.#tail = index;
            this.#size++;
            this.#addItemSize(index, size, status);
            if (status) status.set = 'add';
            noUpdateTTL = false;
            if (this.#hasOnInsert) {
                this.#onInsert?.(v, k, 'add');
            }
        } else {
            // update
            this.#moveToTail(index);
            const oldVal = this.#valList[index];
            if (v !== oldVal) {
                if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
                    oldVal.__abortController.abort(new Error('replaced'));
                    const { __staleWhileFetching: s } = oldVal;
                    if (s !== undefined && !noDisposeOnSet) {
                        if (this.#hasDispose) {
                            this.#dispose?.(s, k, 'set');
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([
                                s,
                                k,
                                'set'
                            ]);
                        }
                    }
                } else if (!noDisposeOnSet) {
                    if (this.#hasDispose) {
                        this.#dispose?.(oldVal, k, 'set');
                    }
                    if (this.#hasDisposeAfter) {
                        this.#disposed?.push([
                            oldVal,
                            k,
                            'set'
                        ]);
                    }
                }
                this.#removeItemSize(index);
                this.#addItemSize(index, size, status);
                this.#valList[index] = v;
                if (status) {
                    status.set = 'replace';
                    const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
                    if (oldValue !== undefined) status.oldValue = oldValue;
                }
            } else if (status) {
                status.set = 'update';
            }
            if (this.#hasOnInsert) {
                this.onInsert?.(v, k, v === oldVal ? 'update' : 'replace');
            }
        }
        if (ttl !== 0 && !this.#ttls) {
            this.#initializeTTLTracking();
        }
        if (this.#ttls) {
            if (!noUpdateTTL) {
                this.#setItemTTL(index, ttl, start);
            }
            if (status) this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
        return this;
    }
    /**
     * Evict the least recently used item, returning its value or
     * `undefined` if cache is empty.
     */ pop() {
        try {
            while(this.#size){
                const val = this.#valList[this.#head];
                this.#evict(true);
                if (this.#isBackgroundFetch(val)) {
                    if (val.__staleWhileFetching) {
                        return val.__staleWhileFetching;
                    }
                } else if (val !== undefined) {
                    return val;
                }
            }
        } finally{
            if (this.#hasDisposeAfter && this.#disposed) {
                const dt = this.#disposed;
                let task;
                while(task = dt?.shift()){
                    this.#disposeAfter?.(...task);
                }
            }
        }
    }
    #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error('evicted'));
        } else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
                this.#dispose?.(v, k, 'evict');
            }
            if (this.#hasDisposeAfter) {
                this.#disposed?.push([
                    v,
                    k,
                    'evict'
                ]);
            }
        }
        this.#removeItemSize(head);
        if (this.#autopurgeTimers?.[head]) {
            clearTimeout(this.#autopurgeTimers[head]);
            this.#autopurgeTimers[head] = undefined;
        }
        // if we aren't about to use the index, then null these out
        if (free) {
            this.#keyList[head] = undefined;
            this.#valList[head] = undefined;
            this.#free.push(head);
        }
        if (this.#size === 1) {
            this.#head = this.#tail = 0;
            this.#free.length = 0;
        } else {
            this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
    }
    /**
     * Check if a key is in the cache, without updating the recency of use.
     * Will return false if the item is stale, even though it is technically
     * in the cache.
     *
     * Check if a key is in the cache, without updating the recency of
     * use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
     * to `true` in either the options or the constructor.
     *
     * Will return `false` if the item is stale, even though it is technically in
     * the cache. The difference can be determined (if it matters) by using a
     * `status` argument, and inspecting the `has` field.
     *
     * Will not update item age unless
     * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
     */ has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === undefined) {
                return false;
            }
            if (!this.#isStale(index)) {
                if (updateAgeOnHas) {
                    this.#updateItemAge(index);
                }
                if (status) {
                    status.has = 'hit';
                    this.#statusTTL(status, index);
                }
                return true;
            } else if (status) {
                status.has = 'stale';
                this.#statusTTL(status, index);
            }
        } else if (status) {
            status.has = 'miss';
        }
        return false;
    }
    /**
     * Like {@link LRUCache#get} but doesn't update recency or delete stale
     * items.
     *
     * Returns `undefined` if the item is stale, unless
     * {@link LRUCache.OptionsBase.allowStale} is set.
     */ peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index === undefined || !allowStale && this.#isStale(index)) {
            return;
        }
        const v = this.#valList[index];
        // either stale and allowed, or forcing a refresh of non-stale value
        return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
    }
    #backgroundFetch(k, index, options, context) {
        const v = index === undefined ? undefined : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
            return v;
        }
        const ac = new AC();
        const { signal } = options;
        // when/if our AC signals, then stop listening to theirs.
        signal?.addEventListener('abort', ()=>ac.abort(signal.reason), {
            signal: ac.signal
        });
        const fetchOpts = {
            signal: ac.signal,
            options,
            context
        };
        const cb = (v, updateCache = false)=>{
            const { aborted } = ac.signal;
            const ignoreAbort = options.ignoreFetchAbort && v !== undefined;
            if (options.status) {
                if (aborted && !updateCache) {
                    options.status.fetchAborted = true;
                    options.status.fetchError = ac.signal.reason;
                    if (ignoreAbort) options.status.fetchAbortIgnored = true;
                } else {
                    options.status.fetchResolved = true;
                }
            }
            if (aborted && !ignoreAbort && !updateCache) {
                return fetchFail(ac.signal.reason);
            }
            // either we didn't abort, and are still here, or we did, and ignored
            const bf = p;
            // if nothing else has been written there but we're set to update the
            // cache and ignore the abort, or if it's still pending on this specific
            // background request, then write it to the cache.
            const vl = this.#valList[index];
            if (vl === p || ignoreAbort && updateCache && vl === undefined) {
                if (v === undefined) {
                    if (bf.__staleWhileFetching !== undefined) {
                        this.#valList[index] = bf.__staleWhileFetching;
                    } else {
                        this.#delete(k, 'fetch');
                    }
                } else {
                    if (options.status) options.status.fetchUpdated = true;
                    this.set(k, v, fetchOpts.options);
                }
            }
            return v;
        };
        const eb = (er)=>{
            if (options.status) {
                options.status.fetchRejected = true;
                options.status.fetchError = er;
            }
            return fetchFail(er);
        };
        const fetchFail = (er)=>{
            const { aborted } = ac.signal;
            const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
            const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
            const noDelete = allowStale || options.noDeleteOnFetchRejection;
            const bf = p;
            if (this.#valList[index] === p) {
                // if we allow stale on fetch rejections, then we need to ensure that
                // the stale value is not removed from the cache when the fetch fails.
                const del = !noDelete || bf.__staleWhileFetching === undefined;
                if (del) {
                    this.#delete(k, 'fetch');
                } else if (!allowStaleAborted) {
                    // still replace the *promise* with the stale value,
                    // since we are done with the promise at this point.
                    // leave it untouched if we're still waiting for an
                    // aborted background fetch that hasn't yet returned.
                    this.#valList[index] = bf.__staleWhileFetching;
                }
            }
            if (allowStale) {
                if (options.status && bf.__staleWhileFetching !== undefined) {
                    options.status.returnedStale = true;
                }
                return bf.__staleWhileFetching;
            } else if (bf.__returned === bf) {
                throw er;
            }
        };
        const pcall = (res, rej)=>{
            const fmp = this.#fetchMethod?.(k, v, fetchOpts);
            if (fmp && fmp instanceof Promise) {
                fmp.then((v)=>res(v === undefined ? undefined : v), rej);
            }
            // ignored, we go until we finish, regardless.
            // defer check until we are actually aborting,
            // so fetchMethod can override.
            ac.signal.addEventListener('abort', ()=>{
                if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
                    res(undefined);
                    // when it eventually resolves, update the cache.
                    if (options.allowStaleOnFetchAbort) {
                        res = (v)=>cb(v, true);
                    }
                }
            });
        };
        if (options.status) options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
            __abortController: ac,
            __staleWhileFetching: v,
            __returned: undefined
        });
        if (index === undefined) {
            // internal, don't expose status.
            this.set(k, bf, {
                ...fetchOpts.options,
                status: undefined
            });
            index = this.#keyMap.get(k);
        } else {
            this.#valList[index] = bf;
        }
        return bf;
    }
    #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod) return false;
        const b = p;
        return !!b && b instanceof Promise && b.hasOwnProperty('__staleWhileFetching') && b.__abortController instanceof AC;
    }
    async fetch(k, fetchOptions = {}) {
        const { // get options
        allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, // set options
        ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, // fetch exclusive options
        noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context, forceRefresh = false, status, signal } = fetchOptions;
        if (!this.#hasFetchMethod) {
            if (status) status.fetch = 'get';
            return this.get(k, {
                allowStale,
                updateAgeOnGet,
                noDeleteOnStaleGet,
                status
            });
        }
        const options = {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            ttl,
            noDisposeOnSet,
            size,
            sizeCalculation,
            noUpdateTTL,
            noDeleteOnFetchRejection,
            allowStaleOnFetchRejection,
            allowStaleOnFetchAbort,
            ignoreFetchAbort,
            status,
            signal
        };
        let index = this.#keyMap.get(k);
        if (index === undefined) {
            if (status) status.fetch = 'miss';
            const p = this.#backgroundFetch(k, index, options, context);
            return p.__returned = p;
        } else {
            // in cache, maybe already fetching
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                const stale = allowStale && v.__staleWhileFetching !== undefined;
                if (status) {
                    status.fetch = 'inflight';
                    if (stale) status.returnedStale = true;
                }
                return stale ? v.__staleWhileFetching : v.__returned = v;
            }
            // if we force a refresh, that means do NOT serve the cached value,
            // unless we are already in the process of refreshing the cache.
            const isStale = this.#isStale(index);
            if (!forceRefresh && !isStale) {
                if (status) status.fetch = 'hit';
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                if (status) this.#statusTTL(status, index);
                return v;
            }
            // ok, it is stale or a forced refresh, and not already fetching.
            // refresh the cache.
            const p = this.#backgroundFetch(k, index, options, context);
            const hasStale = p.__staleWhileFetching !== undefined;
            const staleVal = hasStale && allowStale;
            if (status) {
                status.fetch = isStale ? 'stale' : 'refresh';
                if (staleVal && isStale) status.returnedStale = true;
            }
            return staleVal ? p.__staleWhileFetching : p.__returned = p;
        }
    }
    async forceFetch(k, fetchOptions = {}) {
        const v = await this.fetch(k, fetchOptions);
        if (v === undefined) throw new Error('fetch() returned undefined');
        return v;
    }
    memo(k, memoOptions = {}) {
        const memoMethod = this.#memoMethod;
        if (!memoMethod) {
            throw new Error('no memoMethod provided to constructor');
        }
        const { context, forceRefresh, ...options } = memoOptions;
        const v = this.get(k, options);
        if (!forceRefresh && v !== undefined) return v;
        const vv = memoMethod(k, v, {
            options,
            context
        });
        this.set(k, vv, options);
        return vv;
    }
    /**
     * Return a value from the cache. Will update the recency of the cache
     * entry found.
     *
     * If the key is not found, get() will return `undefined`.
     */ get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const value = this.#valList[index];
            const fetching = this.#isBackgroundFetch(value);
            if (status) this.#statusTTL(status, index);
            if (this.#isStale(index)) {
                if (status) status.get = 'stale';
                // delete only if not an in-flight background fetch
                if (!fetching) {
                    if (!noDeleteOnStaleGet) {
                        this.#delete(k, 'expire');
                    }
                    if (status && allowStale) status.returnedStale = true;
                    return allowStale ? value : undefined;
                } else {
                    if (status && allowStale && value.__staleWhileFetching !== undefined) {
                        status.returnedStale = true;
                    }
                    return allowStale ? value.__staleWhileFetching : undefined;
                }
            } else {
                if (status) status.get = 'hit';
                // if we're currently fetching it, we don't actually have it yet
                // it's not stale, which means this isn't a staleWhileRefetching.
                // If it's not stale, and fetching, AND has a __staleWhileFetching
                // value, then that means the user fetched with {forceRefresh:true},
                // so it's safe to return that value.
                if (fetching) {
                    return value.__staleWhileFetching;
                }
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                return value;
            }
        } else if (status) {
            status.get = 'miss';
        }
    }
    #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
    }
    #moveToTail(index) {
        // if tail already, nothing to do
        // if head, move head to next[index]
        // else
        //   move next[prev[index]] to next[index] (head has no prev)
        //   move prev[next[index]] to prev[index]
        // prev[index] = tail
        // next[tail] = index
        // tail = index
        if (index !== this.#tail) {
            if (index === this.#head) {
                this.#head = this.#next[index];
            } else {
                this.#connect(this.#prev[index], this.#next[index]);
            }
            this.#connect(this.#tail, index);
            this.#tail = index;
        }
    }
    /**
     * Deletes a key out of the cache.
     *
     * Returns true if the key was deleted, false otherwise.
     */ delete(k) {
        return this.#delete(k, 'delete');
    }
    #delete(k, reason) {
        let deleted = false;
        if (this.#size !== 0) {
            const index = this.#keyMap.get(k);
            if (index !== undefined) {
                if (this.#autopurgeTimers?.[index]) {
                    clearTimeout(this.#autopurgeTimers?.[index]);
                    this.#autopurgeTimers[index] = undefined;
                }
                deleted = true;
                if (this.#size === 1) {
                    this.#clear(reason);
                } else {
                    this.#removeItemSize(index);
                    const v = this.#valList[index];
                    if (this.#isBackgroundFetch(v)) {
                        v.__abortController.abort(new Error('deleted'));
                    } else if (this.#hasDispose || this.#hasDisposeAfter) {
                        if (this.#hasDispose) {
                            this.#dispose?.(v, k, reason);
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([
                                v,
                                k,
                                reason
                            ]);
                        }
                    }
                    this.#keyMap.delete(k);
                    this.#keyList[index] = undefined;
                    this.#valList[index] = undefined;
                    if (index === this.#tail) {
                        this.#tail = this.#prev[index];
                    } else if (index === this.#head) {
                        this.#head = this.#next[index];
                    } else {
                        const pi = this.#prev[index];
                        this.#next[pi] = this.#next[index];
                        const ni = this.#next[index];
                        this.#prev[ni] = this.#prev[index];
                    }
                    this.#size--;
                    this.#free.push(index);
                }
            }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
        return deleted;
    }
    /**
     * Clear the cache entirely, throwing away all values.
     */ clear() {
        return this.#clear('delete');
    }
    #clear(reason) {
        for (const index of this.#rindexes({
            allowStale: true
        })){
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error('deleted'));
            } else {
                const k = this.#keyList[index];
                if (this.#hasDispose) {
                    this.#dispose?.(v, k, reason);
                }
                if (this.#hasDisposeAfter) {
                    this.#disposed?.push([
                        v,
                        k,
                        reason
                    ]);
                }
            }
        }
        this.#keyMap.clear();
        this.#valList.fill(undefined);
        this.#keyList.fill(undefined);
        if (this.#ttls && this.#starts) {
            this.#ttls.fill(0);
            this.#starts.fill(0);
            for (const t of this.#autopurgeTimers ?? []){
                if (t !== undefined) clearTimeout(t);
            }
            this.#autopurgeTimers?.fill(undefined);
        }
        if (this.#sizes) {
            this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/p-map/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>pMap,
    "pMapIterable",
    ()=>pMapIterable,
    "pMapSkip",
    ()=>pMapSkip
]);
async function pMap(iterable, mapper, { concurrency = Number.POSITIVE_INFINITY, stopOnError = true, signal } = {}) {
    return new Promise((resolve_, reject_)=>{
        if (iterable[Symbol.iterator] === undefined && iterable[Symbol.asyncIterator] === undefined) {
            throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof iterable})`);
        }
        if (typeof mapper !== 'function') {
            throw new TypeError('Mapper function is required');
        }
        if (!(Number.isSafeInteger(concurrency) && concurrency >= 1 || concurrency === Number.POSITIVE_INFINITY)) {
            throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
        }
        const result = [];
        const errors = [];
        const skippedIndexesMap = new Map();
        let isRejected = false;
        let isResolved = false;
        let isIterableDone = false;
        let resolvingCount = 0;
        let currentIndex = 0;
        const iterator = iterable[Symbol.iterator] === undefined ? iterable[Symbol.asyncIterator]() : iterable[Symbol.iterator]();
        const signalListener = ()=>{
            reject(signal.reason);
        };
        const cleanup = ()=>{
            signal?.removeEventListener('abort', signalListener);
        };
        const resolve = (value)=>{
            resolve_(value);
            cleanup();
        };
        const reject = (reason)=>{
            isRejected = true;
            isResolved = true;
            reject_(reason);
            cleanup();
        };
        if (signal) {
            if (signal.aborted) {
                reject(signal.reason);
            }
            signal.addEventListener('abort', signalListener, {
                once: true
            });
        }
        const next = async ()=>{
            if (isResolved) {
                return;
            }
            const nextItem = await iterator.next();
            const index = currentIndex;
            currentIndex++;
            // Note: `iterator.next()` can be called many times in parallel.
            // This can cause multiple calls to this `next()` function to
            // receive a `nextItem` with `done === true`.
            // The shutdown logic that rejects/resolves must be protected
            // so it runs only one time as the `skippedIndex` logic is
            // non-idempotent.
            if (nextItem.done) {
                isIterableDone = true;
                if (resolvingCount === 0 && !isResolved) {
                    if (!stopOnError && errors.length > 0) {
                        reject(new AggregateError(errors)); // eslint-disable-line unicorn/error-message
                        return;
                    }
                    isResolved = true;
                    if (skippedIndexesMap.size === 0) {
                        resolve(result);
                        return;
                    }
                    const pureResult = [];
                    // Support multiple `pMapSkip`'s.
                    for (const [index, value] of result.entries()){
                        if (skippedIndexesMap.get(index) === pMapSkip) {
                            continue;
                        }
                        pureResult.push(value);
                    }
                    resolve(pureResult);
                }
                return;
            }
            resolvingCount++;
            // Intentionally detached
            (async ()=>{
                try {
                    const element = await nextItem.value;
                    if (isResolved) {
                        return;
                    }
                    const value = await mapper(element, index);
                    // Use Map to stage the index of the element.
                    if (value === pMapSkip) {
                        skippedIndexesMap.set(index, value);
                    }
                    result[index] = value;
                    resolvingCount--;
                    await next();
                } catch (error) {
                    if (stopOnError) {
                        reject(error);
                    } else {
                        errors.push(error);
                        resolvingCount--;
                        // In that case we can't really continue regardless of `stopOnError` state
                        // since an iterable is likely to continue throwing after it throws once.
                        // If we continue calling `next()` indefinitely we will likely end up
                        // in an infinite loop of failed iteration.
                        try {
                            await next();
                        } catch (error) {
                            reject(error);
                        }
                    }
                }
            })();
        };
        // Create the concurrent runners in a detached (non-awaited)
        // promise. We need this so we can await the `next()` calls
        // to stop creating runners before hitting the concurrency limit
        // if the iterable has already been marked as done.
        // NOTE: We *must* do this for async iterators otherwise we'll spin up
        // infinite `next()` calls by default and never start the event loop.
        (async ()=>{
            for(let index = 0; index < concurrency; index++){
                try {
                    // eslint-disable-next-line no-await-in-loop
                    await next();
                } catch (error) {
                    reject(error);
                    break;
                }
                if (isIterableDone || isRejected) {
                    break;
                }
            }
        })();
    });
}
function pMapIterable(iterable, mapper, { concurrency = Number.POSITIVE_INFINITY, backpressure = concurrency } = {}) {
    if (iterable[Symbol.iterator] === undefined && iterable[Symbol.asyncIterator] === undefined) {
        throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof iterable})`);
    }
    if (typeof mapper !== 'function') {
        throw new TypeError('Mapper function is required');
    }
    if (!(Number.isSafeInteger(concurrency) && concurrency >= 1 || concurrency === Number.POSITIVE_INFINITY)) {
        throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
    }
    if (!(Number.isSafeInteger(backpressure) && backpressure >= concurrency || backpressure === Number.POSITIVE_INFINITY)) {
        throw new TypeError(`Expected \`backpressure\` to be an integer from \`concurrency\` (${concurrency}) and up or \`Infinity\`, got \`${backpressure}\` (${typeof backpressure})`);
    }
    return {
        async *[Symbol.asyncIterator] () {
            const iterator = iterable[Symbol.asyncIterator] === undefined ? iterable[Symbol.iterator]() : iterable[Symbol.asyncIterator]();
            const promises = [];
            let pendingPromisesCount = 0;
            let isDone = false;
            let index = 0;
            function trySpawn() {
                if (isDone || !(pendingPromisesCount < concurrency && promises.length < backpressure)) {
                    return;
                }
                pendingPromisesCount++;
                const promise = (async ()=>{
                    const { done, value } = await iterator.next();
                    if (done) {
                        pendingPromisesCount--;
                        return {
                            done: true
                        };
                    }
                    // Spawn if still below concurrency and backpressure limit
                    trySpawn();
                    try {
                        const returnValue = await mapper(await value, index++);
                        pendingPromisesCount--;
                        if (returnValue === pMapSkip) {
                            const index = promises.indexOf(promise);
                            if (index > 0) {
                                promises.splice(index, 1);
                            }
                        }
                        // Spawn if still below backpressure limit and just dropped below concurrency limit
                        trySpawn();
                        return {
                            done: false,
                            value: returnValue
                        };
                    } catch (error) {
                        pendingPromisesCount--;
                        isDone = true;
                        return {
                            error
                        };
                    }
                })();
                promises.push(promise);
            }
            trySpawn();
            while(promises.length > 0){
                const { error, done, value } = await promises[0]; // eslint-disable-line no-await-in-loop
                promises.shift();
                if (error) {
                    throw error;
                }
                if (done) {
                    return;
                }
                // Spawn if just dropped below backpressure limit and below the concurrency limit
                trySpawn();
                if (value === pMapSkip) {
                    continue;
                }
                yield value;
            }
        }
    };
}
const pMapSkip = Symbol('skip');
}),
"[externals]/@libsql/client [external] (@libsql/client, esm_import, [project]/node_modules/@libsql/client)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@libsql/client-6da938047d5fc1cd");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/async-mutex/index.mjs [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "E_ALREADY_LOCKED",
    ()=>E_ALREADY_LOCKED,
    "E_CANCELED",
    ()=>E_CANCELED,
    "E_TIMEOUT",
    ()=>E_TIMEOUT,
    "Mutex",
    ()=>Mutex,
    "Semaphore",
    ()=>Semaphore,
    "tryAcquire",
    ()=>tryAcquire,
    "withTimeout",
    ()=>withTimeout
]);
const E_TIMEOUT = new Error('timeout while waiting for mutex to become available');
const E_ALREADY_LOCKED = new Error('mutex already locked');
const E_CANCELED = new Error('request for lock canceled');
var __awaiter$2 = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Semaphore {
    constructor(_value, _cancelError = E_CANCELED){
        this._value = _value;
        this._cancelError = _cancelError;
        this._queue = [];
        this._weightedWaiters = [];
    }
    acquire(weight = 1, priority = 0) {
        if (weight <= 0) throw new Error(`invalid weight ${weight}: must be positive`);
        return new Promise((resolve, reject)=>{
            const task = {
                resolve,
                reject,
                weight,
                priority
            };
            const i = findIndexFromEnd(this._queue, (other)=>priority <= other.priority);
            if (i === -1 && weight <= this._value) {
                // Needs immediate dispatch, skip the queue
                this._dispatchItem(task);
            } else {
                this._queue.splice(i + 1, 0, task);
            }
        });
    }
    runExclusive(callback_1) {
        return __awaiter$2(this, arguments, void 0, function*(callback, weight = 1, priority = 0) {
            const [value, release] = yield this.acquire(weight, priority);
            try {
                return yield callback(value);
            } finally{
                release();
            }
        });
    }
    waitForUnlock(weight = 1, priority = 0) {
        if (weight <= 0) throw new Error(`invalid weight ${weight}: must be positive`);
        if (this._couldLockImmediately(weight, priority)) {
            return Promise.resolve();
        } else {
            return new Promise((resolve)=>{
                if (!this._weightedWaiters[weight - 1]) this._weightedWaiters[weight - 1] = [];
                insertSorted(this._weightedWaiters[weight - 1], {
                    resolve,
                    priority
                });
            });
        }
    }
    isLocked() {
        return this._value <= 0;
    }
    getValue() {
        return this._value;
    }
    setValue(value) {
        this._value = value;
        this._dispatchQueue();
    }
    release(weight = 1) {
        if (weight <= 0) throw new Error(`invalid weight ${weight}: must be positive`);
        this._value += weight;
        this._dispatchQueue();
    }
    cancel() {
        this._queue.forEach((entry)=>entry.reject(this._cancelError));
        this._queue = [];
    }
    _dispatchQueue() {
        this._drainUnlockWaiters();
        while(this._queue.length > 0 && this._queue[0].weight <= this._value){
            this._dispatchItem(this._queue.shift());
            this._drainUnlockWaiters();
        }
    }
    _dispatchItem(item) {
        const previousValue = this._value;
        this._value -= item.weight;
        item.resolve([
            previousValue,
            this._newReleaser(item.weight)
        ]);
    }
    _newReleaser(weight) {
        let called = false;
        return ()=>{
            if (called) return;
            called = true;
            this.release(weight);
        };
    }
    _drainUnlockWaiters() {
        if (this._queue.length === 0) {
            for(let weight = this._value; weight > 0; weight--){
                const waiters = this._weightedWaiters[weight - 1];
                if (!waiters) continue;
                waiters.forEach((waiter)=>waiter.resolve());
                this._weightedWaiters[weight - 1] = [];
            }
        } else {
            const queuedPriority = this._queue[0].priority;
            for(let weight = this._value; weight > 0; weight--){
                const waiters = this._weightedWaiters[weight - 1];
                if (!waiters) continue;
                const i = waiters.findIndex((waiter)=>waiter.priority <= queuedPriority);
                (i === -1 ? waiters : waiters.splice(0, i)).forEach((waiter)=>waiter.resolve());
            }
        }
    }
    _couldLockImmediately(weight, priority) {
        return (this._queue.length === 0 || this._queue[0].priority < priority) && weight <= this._value;
    }
}
function insertSorted(a, v) {
    const i = findIndexFromEnd(a, (other)=>v.priority <= other.priority);
    a.splice(i + 1, 0, v);
}
function findIndexFromEnd(a, predicate) {
    for(let i = a.length - 1; i >= 0; i--){
        if (predicate(a[i])) {
            return i;
        }
    }
    return -1;
}
var __awaiter$1 = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Mutex {
    constructor(cancelError){
        this._semaphore = new Semaphore(1, cancelError);
    }
    acquire() {
        return __awaiter$1(this, arguments, void 0, function*(priority = 0) {
            const [, releaser] = yield this._semaphore.acquire(1, priority);
            return releaser;
        });
    }
    runExclusive(callback, priority = 0) {
        return this._semaphore.runExclusive(()=>callback(), 1, priority);
    }
    isLocked() {
        return this._semaphore.isLocked();
    }
    waitForUnlock(priority = 0) {
        return this._semaphore.waitForUnlock(1, priority);
    }
    release() {
        if (this._semaphore.isLocked()) this._semaphore.release();
    }
    cancel() {
        return this._semaphore.cancel();
    }
}
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function withTimeout(sync, timeout, timeoutError = E_TIMEOUT) {
    return {
        acquire: (weightOrPriority, priority)=>{
            let weight;
            if (isSemaphore(sync)) {
                weight = weightOrPriority;
            } else {
                weight = undefined;
                priority = weightOrPriority;
            }
            if (weight !== undefined && weight <= 0) {
                throw new Error(`invalid weight ${weight}: must be positive`);
            }
            return new Promise((resolve, reject)=>__awaiter(this, void 0, void 0, function*() {
                    let isTimeout = false;
                    const handle = setTimeout(()=>{
                        isTimeout = true;
                        reject(timeoutError);
                    }, timeout);
                    try {
                        const ticket = yield isSemaphore(sync) ? sync.acquire(weight, priority) : sync.acquire(priority);
                        if (isTimeout) {
                            const release = Array.isArray(ticket) ? ticket[1] : ticket;
                            release();
                        } else {
                            clearTimeout(handle);
                            resolve(ticket);
                        }
                    } catch (e) {
                        if (!isTimeout) {
                            clearTimeout(handle);
                            reject(e);
                        }
                    }
                }));
        },
        runExclusive (callback, weight, priority) {
            return __awaiter(this, void 0, void 0, function*() {
                let release = ()=>undefined;
                try {
                    const ticket = yield this.acquire(weight, priority);
                    if (Array.isArray(ticket)) {
                        release = ticket[1];
                        return yield callback(ticket[0]);
                    } else {
                        release = ticket;
                        return yield callback();
                    }
                } finally{
                    release();
                }
            });
        },
        release (weight) {
            sync.release(weight);
        },
        cancel () {
            return sync.cancel();
        },
        waitForUnlock: (weightOrPriority, priority)=>{
            let weight;
            if (isSemaphore(sync)) {
                weight = weightOrPriority;
            } else {
                weight = undefined;
                priority = weightOrPriority;
            }
            if (weight !== undefined && weight <= 0) {
                throw new Error(`invalid weight ${weight}: must be positive`);
            }
            return new Promise((resolve, reject)=>{
                const handle = setTimeout(()=>reject(timeoutError), timeout);
                (isSemaphore(sync) ? sync.waitForUnlock(weight, priority) : sync.waitForUnlock(priority)).then(()=>{
                    clearTimeout(handle);
                    resolve();
                });
            });
        },
        isLocked: ()=>sync.isLocked(),
        getValue: ()=>sync.getValue(),
        setValue: (value)=>sync.setValue(value)
    };
}
function isSemaphore(sync) {
    return sync.getValue !== undefined;
}
// eslint-disable-next-lisne @typescript-eslint/explicit-module-boundary-types
function tryAcquire(sync, alreadyAcquiredError = E_ALREADY_LOCKED) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return withTimeout(sync, 0, alreadyAcquiredError);
}
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5aadfe2c._.js.map