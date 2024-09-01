'use client'
import dynamic from 'next/dynamic';

import Layout from '@/components/Layout/layout';
import { ProjectEditor } from '@/components/editor/editor';

const PseudoTerminal = dynamic(
    async () => (await import('@/components/terminal')).PseudoTerminal, { ssr: false }
);

const Playground = () => {
    return (
        <div className='flex flex-row w-screen h-screen'>
            <div className='file-tree'>file-tree</div>
            <div className='terminal-editor flex flex-col flex-1'>
                <div className='editor flex-2/3 h-2/3'>
                    <ProjectEditor />
                </div>
                <div className='terminal flex-1/3 h-1/3'>
                    <PseudoTerminal />
                </div>
            </div>
        </div>
    );
}

export default Playground;