import React, { useState, useEffect } from 'react';
import CodeEditor from './codeEditor';
import Preview from './Preview';
import bundle from '../bundler';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';


interface CodeCellProps {
    cell: Cell,
}


const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
    const [code, setCode] = useState<string>('');
    const [input, setInput] = useState<string>('');
    const [err, setErr] = useState<string>('');

    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundle(input);
            setCode(output.code);
            setErr(output.err);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [input]);

    return (
        <Resizable direction='vertical'>
            <div>
                <Resizable direction='horizontal'>
                    <CodeEditor
                        initialValue='const a = 1'
                        onChange={(value) => setInput(value)}
                    />
                </Resizable>

                <Preview code={code} err={err} />
            </div>
        </Resizable>
    );
}

export default CodeCell;