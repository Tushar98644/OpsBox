'use client'

import { Terminal } from "@xterm/xterm";
import { useEffect, useRef } from "react";
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

export const PseudoTerminal = () => {
    const terminalRef = useRef<HTMLDivElement>(null);
    const commandRef = useRef<string>('');

    useEffect(() => {
        if (typeof self != undefined) {
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

                term.onData((data) => {
                    const code = data.charCodeAt(0);

                    if (code === 13) { // Enter key
                        term.writeln(''); // Move to a new line after pressing Enter
                        commandRef.current = ''; // Reset the command
                    } else if (code === 127) { // Backspace key
                        if (commandRef.current.length > 0) {
                            // Remove the last character from the command string
                            commandRef.current = commandRef.current.slice(0, -1);

                            // Move the cursor one position to the left and erase the character
                            term.write('\b \b');
                        }
                    } else {
                        // Add the character to the command string
                        commandRef.current += data;
                        term.write(data); // Display the character in the terminal
                    }
                });
            }

            return () => {
                term.dispose();
            };
        }

    }, []);

    return (
        <div ref={terminalRef} />
    );
}