import React from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';


const CellList: React.FC = () => {
    useTypedSelector((state) => state);

    return (
        <div>cell-list</div>
    )
}

export default CellList;