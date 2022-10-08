import React from 'react';
import { ResizableBox } from 'react-resizable';


interface ResizableProps {
    direction: 'horizontal' | 'vertical';
};


const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    return (
        <div>resizable</div>
    )
}

export default Resizable;