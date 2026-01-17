'use client';
import { useFrontendTool } from "@copilotkit/react-core/v2";
import z from "zod";

export const RegisterFrontendTools = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useFrontendTool({
    name: "getLocalStorage",
    parameters: z.object({
      key: z.string(),
    }),
    async handler({ key }) {
      return localStorage.getItem(key);
    },
  });
  useFrontendTool({
    name: "setLocalStorage",
    parameters: z.object({
      key: z.string(),
      value: z.string(),
    }),
    async handler({ key, value }) {
      localStorage.setItem(key, value);
    },
  });
  return <>{children}</>
}