import React, { useEffect } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';


interface ResizableProps {
    direction: 'horizontal' | 'vertical';
    children: React.ReactNode
};


const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;

    useEffect(() => {
        const listener = () => {
            console.log(window.innerWidth, window.innerHeight);
        }
    }, []);


    if (direction === 'horizontal') {
        resizableProps = {
            className: 'resize-horizontal',
            height: Infinity,
            width: window.innerWidth * 0.75,
            resizeHandles: ['e'],
            maxConstraints: [window.innerWidth * 0.75, Infinity],
            minConstraints: [window.innerWidth * 0.2, Infinity]
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

    return <ResizableBox {...resizableProps}>
        {children}
    </ResizableBox >;
}

export default Resizable;