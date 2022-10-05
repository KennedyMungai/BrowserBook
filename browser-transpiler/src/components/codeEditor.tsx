import React from 'react';
import MonacoEditor from '@monaco-editor/react';


const CodeEditor = () => {
    return <MonacoEditor
        height='500px'
        theme='vs-dark'
        language='javascript'
        options={{
            wordWrap: 'on',
        }}
    />
}

export default CodeEditor;