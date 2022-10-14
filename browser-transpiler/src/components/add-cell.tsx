import React from 'react';
import { useActions } from '../hooks/use-actions';
import './add-cell.css';


interface AddCellProps {
    nextCellId: string,
};


const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
    const { insertCellBefore } = useActions();

    return (
        <h1>
            <button onClick={ }>Code</button>
            <button onClick={ }>Text</button>
        </h1>
    )
}

export default AddCell;