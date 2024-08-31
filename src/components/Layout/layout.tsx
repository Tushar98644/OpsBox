'use client'
import React, { use, useEffect, useState } from "react";
import Sidebar from "../dashboard/sidebar/sidebar";
import useIsCollapsed from '@/hooks/use-is-collapsed'

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useIsCollapsed();

    return (
        <div className="layout relative flex h-full">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

            <main
                id='content'
                className={`overflow-x-hidden mt-16 transition-all duration-300 md:overflow-y-hidden md:mt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full w-full`}
            >
                {children}
            </main>
        </div>
    );
}

export default Layout;