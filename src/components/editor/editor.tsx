'use client'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';

export const WebEditor = () => {
    return <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />;
}