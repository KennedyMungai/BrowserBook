import React from 'react';
import MonacoEditor from '@monaco-editor/react';


interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
};


const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
    const onEditorDidMount = () => {

    };

    return <MonacoEditor
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
        editorDidMount={onEditorDidMount}
    />
}

export default CodeEditor;