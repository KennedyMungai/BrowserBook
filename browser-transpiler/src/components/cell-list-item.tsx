import React from 'react';
import { Cell } from '../state';
import CodeCell from './code-cell';


interface CellListItemProps {
    cell: Cell,
};


const CellListItem: React.FunctionComponent<CellListItemProps> = ({ cell }) => {
    return (
        <div>cell-list-item</div>
    )
}

export default CellListItem;