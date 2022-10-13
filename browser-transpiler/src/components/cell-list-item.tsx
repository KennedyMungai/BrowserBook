import React from 'react';
import { Cell } from '../state';


interface CellListItemProps {
    cell: Cell,

};


const CellListItem: React.FunctionComponent<CellListItemProps> = () => {
    return (
        <div>cell-list-item</div>
    )
}

export default CellListItem;