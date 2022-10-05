import React, { useRef } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';


interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
};


const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });
    };

    const onFormatClick = () => {

    };

    return (
        <>
            <div className="">
                <button onClick={onFormatClick}>Format</button>
            </div>

            <MonacoEditor
                editorDidMount={onEditorDidMount}
                height='500px'
                theme='vs-dark'
                language='javascript'
                options={{
                    wordWrap: 'on',
                    minimap: { enabled: false },
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true
                }}
                value={initialValue}
            />
        </>
    );
}

export default CodeEditor;