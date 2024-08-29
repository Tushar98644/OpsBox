'use client'
import dynamic from 'next/dynamic';

import { WebEditor } from "@/components/editor";

const PseudoTerminal = dynamic(
    async () => (await import('@/components/terminal')).PseudoTerminal, { ssr: false }
);

const Playground = () => {
    return (
        <div className="root-div grid grid-cols-2 py-8 h-screen w-screen">
            <div className="editor">
                <WebEditor />
            </div>
            <div className="utility flex flex-col">
                <div className="web-viewer">
                   <h1>web viewer</h1>
                </div>
                <div className="terminal bg-black">
                        <PseudoTerminal />
                </div>
            </div>
        </div>
    );
}

export default Playground;