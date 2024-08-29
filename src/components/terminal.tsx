'use client'
import { Terminal } from "@xterm/xterm";
import { useEffect, useRef } from "react";
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

export const PseudoTerminal = () => {
    const terminalRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const term = new Terminal({
            cursorBlink: true,
            fontSize: 15,
            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
            theme: {
                background: '#1e1e1e',
                foreground: '#ffffff',
            },
            scrollback: 1000,
        });
        const fitAddon = new FitAddon();
    
        if (terminalRef.current) {
            term.loadAddon(fitAddon);
            term.open(terminalRef.current);
            fitAddon.fit();
            term.focus();
            
            term.onData(data => {
                term.write(data);
                console.log("Received data: ", data);
            });
        }
    
        return () => {
            term.dispose();
        };
    }, []);

    return (
        <div ref={terminalRef} />
    );
}
