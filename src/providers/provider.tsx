'use client'
import { SessionProvider } from "next-auth/react";

interface Provider {
    children: React.ReactNode;
}

export const Provider = ({children} : Provider) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}