import React, { useState } from 'react';
import CodeEditor from './codeEditor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Preview from './Preview';
import bundle from '../bundler';


const codeCell = () => {
    const [code, setCode] = useState<string>('');
    const [input, setInput] = useState<string>('');

    const onClick = async () => {
        const output = await bundle(input);
        setCode(output);
    };

    return (
        <div>
            <CodeEditor
                initialValue='const a = 1'
                onChange={(value) => setInput(value)}
            />

            <div className="">
                <button onClick={onClick}>Submit</button>
            </div>
            <Preview code={code} />
        </div>
    );
}