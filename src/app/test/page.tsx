"use client";

import { CopilotSidebar } from "@copilotkit/react-ui";
import { useCopilotChat, useFrontendTool } from "@copilotkit/react-core";
import { StoryView } from "@/components/story-view";
import { useEffect, useState } from "react";
// import { Role, TextMessage } from "@copilotkit/runtime-client-gql";

export default function TestPage() {
  const { visibleMessages, appendMessage } = useCopilotChat();
  const [lastEventJson, setLastEventJson] = useState<string | null>(null);

  useEffect(() => {
    if (visibleMessages && visibleMessages.length > 0) {
      const lastMsg = visibleMessages[visibleMessages.length - 1];
      // @ts-ignore
      if (lastMsg.role === "assistant" && lastMsg.content) {
        // @ts-ignore

        const content = typeof lastMsg.content === 'string' ? lastMsg.content : JSON.stringify(lastMsg.content);
        if (content.trim().startsWith("{") || content.includes("```json")) {
            setLastEventJson(content);
        }
      }
    }
  }, [visibleMessages]);

  const handleChoice = (choiceText: string) => {
    appendMessage(
      // @ts-ignore
      {
        role: "user",
        content: `I choose: ${choiceText}`,
      } as any
    );
    setLastEventJson(null); // Clear previous event to avoid confusion
  };



  return (
    <main className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col items-center justify-center p-8 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Story Tester</h1>
        
        {lastEventJson ? (
          <StoryView json={lastEventJson} onChoice={handleChoice} />
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-xl">Waiting for story event...</p>
            <p className="text-sm mt-2">Open the sidebar and ask to start the story!</p>
          </div>
        )}
      </div>

      <CopilotSidebar
        defaultOpen={true}
        labels={{
          title: "Story Director",
          initial: "Ready to start the story. Type 'Start' or give me a scenario.",
        }}
      />
    </main>
  );
}
