import React from 'react';
import MonacoEditor from '@monaco-editor/react';


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
        }}
    />
}

export default CodeEditor;