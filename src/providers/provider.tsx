'use client'
import { SessionProvider } from "next-auth/react";
import AuthenticationGuard from "./auth-gaurd";

interface Provider {
    children: React.ReactNode;
}

export const Provider = ({children} : Provider) => {
    return (
        <SessionProvider>
            <AuthenticationGuard>
                {children}
            </AuthenticationGuard>
        </SessionProvider>
    )
}