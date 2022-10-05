import React from 'react';
import MonacoEditor from '@monaco-editor/react';


interface CodeEditorProps {
    initialValue: string;
};


const CodeEditor = () => {
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
        value='const a = 1;'
    />
}

export default CodeEditor;