import React, { Fragment } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import AddCell from './add-cell';
import CellListItem from './cell-list-item';


const CellList: React.FC = () => {
    const cells = useTypedSelector(({ cells: { order, data } }) => {
        return order.map((id) => {
            return data[id];
        });
    });

    const renderedCells = cells.map((cell) => (
        <Fragment key={cell.id}>
            <CellListItem cell={cell} />
            <AddCell nextCellId={cell.id} />
        </Fragment>
    ));

    return (
        <div>
            <div className={cells.length === 0 ? 'force-visible' : ''}>
                <AddCell nextCellId={null} />
            </div>
            {renderedCells}
        </div>
    )
}

export default CellList;