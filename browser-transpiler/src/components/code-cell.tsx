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
        <div>
            <Resizable direction='horizontal'>
                <CodeEditor
                    initialValue='const a = 1'
                    onChange={(value) => setInput(value)}
                />

                <div className="">
                    <button onClick={onClick}>Submit</button>
                </div>
                <Preview code={code} />
            </Resizable>

        </div>
    );
}

export default CodeCell;