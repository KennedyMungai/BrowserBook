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
    const { updateCell, createBundle } = useActions();

    useEffect(() => {
        const timer = setTimeout(async () => {

        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [cell.content]);

    return (
        <Resizable direction='vertical'>
            <div style={{ display: 'flex', height: 'calc(100% - 10px)', flexDirection: 'row' }}>
                <Resizable direction='horizontal'>
                    <CodeEditor
                        initialValue={cell.content}
                        onChange={(value) => updateCell(cell.id, value)}
                    />
                </Resizable>

                <Preview code={code} err={err} />
            </div>
        </Resizable >
    );
}

export default CodeCell;