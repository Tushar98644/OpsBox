"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AuthenticationGuard({
    children,
}: {
    children: React.ReactNode;
}) {
    const { status, data: session } = useSession();
    console.log(status);
    const pathname = usePathname();
    // return a string of the current path
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            if (pathname === "/login") {
                router.back();
            }
        } else if (status === "unauthenticated") {
            if (pathname !== "/" && pathname !== "/login") {
                router.push("/");
            }
        }
    }, [status, pathname, session?.user?.email, router]);

    if (status === "loading") {
        return 'loading...';
    }

    return <>{children}</>;
}