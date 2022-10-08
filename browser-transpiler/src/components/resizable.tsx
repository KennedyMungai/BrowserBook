import React from 'react';
import { ResizableBox } from 'react-resizable';
import './resizable.css';


interface ResizableProps {
    direction: 'horizontal' | 'vertical';
    children: React.ReactNode
};


const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    return <ResizableBox
        height={direction === 'vertical' ? 300 : Infinity}
        width={Infinity}
        resizeHandles={['s']}
        maxConstraints={[Infinity, window.innerHeight * 0.9]}
        minConstraints={[Infinity, window.innerHeight * 0.15]}
    >
        {children}
    </ResizableBox >;
}

export default Resizable;