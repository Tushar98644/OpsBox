'use client'
import dynamic from 'next/dynamic';

import { WebEditor } from "@/components/editor/editor";
import Sidebar from '@/components/editor/components/sidebar';
import { FileTree } from '@/components/editor/components/file-tree';

const PseudoTerminal = dynamic(
    async () => (await import('@/components/terminal')).PseudoTerminal, { ssr: false }
);

const Playground = () => {
    const mockRootDir = {
        id: 'root',
        name: 'Root Directory',
        type: 'directory',
        path: '/',
        parentId: '',
        depth: 0,
        dirs: [
            {
                id: 'dir1',
                name: 'Subdirectory 1',
                type: 'directory',
                path: '/dir1',
                parentId: 'root',
                depth: 1,
                dirs: [],
                files: [
                    { id: 'file1', name: 'File 1.txt', type: 'file', path: '/dir1/file1.txt', parentId: 'dir1', depth: 2 },
                    { id: 'file2', name: 'File 2.md', type: 'file', path: '/dir1/file2.md', parentId: 'dir1', depth: 2 }
                ]
            }
        ],
        files: [
            { id: 'file3', name: 'File 3.js', type: 'file', path: '/file3.js', parentId: 'root', depth: 1 }
        ]
    };

    return (
        <div className="root-div grid grid-cols-2 py-8 h-screen w-screen">
            <div className="ide grid grid-cols-5">
                <div className="filetree col-span-1">
                    <Sidebar>
                        <FileTree
                            rootDir={mockRootDir}
                            selectedFile={undefined}
                            onSelect={(file) => console.log(file)}
                        />
                    </Sidebar>
                </div>
                <div className='editor grid col-span-4'>
                    <WebEditor />
                </div>
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