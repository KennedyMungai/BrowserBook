import React from 'react';
import { Cell } from '../state';
import ActionBar from './action-bar';
import CodeCell from './code-cell';
import TextEditor from './text-editor';
import './cell-list-item.css';


interface CellListItemProps {
    cell: Cell,
};


const CellListItem: React.FunctionComponent<CellListItemProps> = ({ cell }) => {
    let child: React.ReactNode;

    if (cell.type === 'code') {
        child = <>
            <CodeCell cell={cell} />;
        </>
    } else if (cell.type === 'text') {
        child = <TextEditor cell={cell} />
    }

    return (
        <div className='cell-list-item'>
            {child}
            <ActionBar id={cell.id} />
        </div>
    );
}

export default CellListItem;