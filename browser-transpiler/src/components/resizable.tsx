import React from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';


interface ResizableProps {
    direction: 'horizontal' | 'vertical';
    children: React.ReactNode
};


const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;

    if (direction === 'horizontal') {
        resizableProps = {
            width: 
        }
    } else {
        resizableProps = {
            height: 300,
            width: Infinity,
            resizeHandles: ['s'],
            maxConstraints: [Infinity, window.innerHeight * 0.9],
            minConstraints: [Infinity, window.innerHeight * 0.15]
        }
    }

    return <ResizableBox

    >
        {children}
    </ResizableBox >;
}

export default Resizable;