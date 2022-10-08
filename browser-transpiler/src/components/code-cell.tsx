import React, { useState } from 'react';
import CodeEditor from './codeEditor';
import Preview from './Preview';
import bundle from '../bundler';
import Resizable from './resizable';


const CodeCell = () => {
    const [code, setCode] = useState<string>('');
    const [input, setInput] = useState<string>('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };

    return (
        <Resizable direction='vertical'>
            <div>
                <Resizable direction='horizontal'>
                    <CodeEditor
                        initialValue='const a = 1'
                        onChange={(value) => setInput(value)}
                    />
                </Resizable>

                <Preview code={code} />
            </div>
        </Resizable>
    );
}

export default CodeCell;