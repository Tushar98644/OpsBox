'use client'
import React, { use, useEffect, useState } from "react";
import Sidebar from "./sidebar/sidebar";
import useIsCollapsed from '@/hooks/use-is-collapsed'
import { Navbar } from "./navbar/navbar";
import { Navlinks } from "@/data/navlinks";
import { ThemeSwitch } from "../theme/theme-switch";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useIsCollapsed();

    return (
        <div className="layout relative flex h-full">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />


            <div className="flex flex-col gap-12">
                <main
                    id='content'
                    className={`flex overflow-x-hidden mt-16 transition-all duration-300 md:overflow-y-hidden md:mt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full w-full`}
                >
                    <Navbar links={Navlinks} />
                    <ThemeSwitch />
                    {children}
                </main>
            </div>

        </div>
    );
}

export default Layout;