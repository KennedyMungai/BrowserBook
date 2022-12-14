import React, { useRef } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import './CodeEditor.css';
import codeShift from 'jscodeshift';
import Highlighter from 'monaco-jsx-highlighter';


interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
};


const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
    const editorRef = useRef<any>();

    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        editorRef.current = monacoEditor;

        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });

        const highlighter = new Highlighter(
            // @ts-ignore
            window.monaco,
            codeShift,
            monacoEditor,
        );

        highlighter.highLightOnDidChangeModelContent(
            () => { },
            () => { },
            undefined,
            () => { }
        );
    };

    const onFormatClick = () => {
        const unformatted = editorRef.current.getModel().getValue();

        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins: [parser],
            semi: true,
        }).replace(/\n$/, "");

        editorRef.current.setValue(formatted);
    };

    return (
        <div className='editor-wrapper'>
            <button onClick={onFormatClick} className='button button-format is-primary is-small'>Format</button>

            <MonacoEditor
                editorDidMount={onEditorDidMount}
                height='100%'
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
        </div>
    );
}

export default CodeEditor;