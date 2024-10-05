'use client'
import { SessionProvider } from "next-auth/react";
import { ChildProps } from "@/app/types/children";

export const Provider = ({ children } : ChildProps) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}