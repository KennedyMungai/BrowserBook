import React from 'react';
import { Cell } from '../state';
import ActionBar from './action-bar';
import CodeCell from './code-cell';
import TextEditor from './text-editor';


interface CellListItemProps {
    cell: Cell,
};


const CellListItem: React.FunctionComponent<CellListItemProps> = ({ cell }) => {
    let child: React.ReactNode;

    if (cell.type === 'code') {
        child = <CodeCell cell={cell} />;
    } else if (cell.type === 'text') {
        child = <TextEditor cell={cell} />
    }

    return (
        <div className='cell-list-item'>
            <ActionBar id={cell.id} />
            {child}
        </div>
    );
}

export default CellListItem;