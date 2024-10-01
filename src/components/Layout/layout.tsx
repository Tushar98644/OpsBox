'use client'
import React, { use, useEffect, useState } from "react";
import Sidebar from "./sidebar/sidebar";
import useIsCollapsed from '@/hooks/use-is-collapsed'
import { Navbar } from "./navbar/navbar";
import { Navlinks } from "@/data/navlinks";
import { ThemeSwitch } from "../theme/theme-switch";
import { Search } from "../dashboard/search/search";
import { UserButton } from "./user-button";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useIsCollapsed();

    return (
        <div className="layout relative flex h-full">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <div className={`flex flex-col overflow-x-hidden pt-16 transition-all duration-300 md:overflow-y-hidden md:pt-4 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-screen w-full`}>
                <div className="grid grid-cols-2">
                    <Navbar links={Navlinks} />
                    <div className="flex items-center justify-end px-6 space-x-4">
                        <Search />
                        <ThemeSwitch />
                        <UserButton />
                    </div>
                </div>

                <main id='content'>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;