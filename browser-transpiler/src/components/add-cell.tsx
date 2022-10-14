import React from 'react';
import { useActions } from '../hooks/use-actions';
import './add-cell.css';


interface AddCellProps {
    previousCellId: string | null,
};


const AddCell: React.FC<AddCellProps> = ({ previousCellId: nextCellId }) => {
    const { insertCellBefore } = useActions();

    return (
        <div className='add-cell'>
            <div className="add-buttons">
                <button
                    onClick={() => insertCellBefore(nextCellId, 'code')}
                    className='button is-rounded is-primary is-small'
                >
                    <span className="icon is-small">
                        <i className="fas fa-plus"></i>
                    </span>
                    <span>Code</span>
                </button>

                <button
                    onClick={() => insertCellBefore(nextCellId, 'text')}
                    className='button is-rounded is-primary is-small'
                >
                    <span className="icon is-small">
                        <i className="fas fa-plus"></i>
                    </span>
                    <span>Text</span>
                </button>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default AddCell;