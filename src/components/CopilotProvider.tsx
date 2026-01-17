"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { usePathname } from "next/navigation";
import "@copilotkit/react-ui/styles.css";

export function CopilotProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  let agentName = "weatherAgent";
  if (pathname === "/test") {
    agentName = "storyAgent";
  } else if (pathname === "/test/user-background") {
    agentName = "userBackgroundAgent";
  }
  return (
    <CopilotKit runtimeUrl="/api/copilotkit" agent={agentName}>
      {children}
    </CopilotKit>
  );
}
