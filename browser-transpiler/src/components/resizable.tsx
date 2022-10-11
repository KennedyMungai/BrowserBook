import React, { useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';


interface ResizableProps {
    direction: 'horizontal' | 'vertical';
    children: React.ReactNode
};


const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;
    const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [width, setWidth] = useState<number>(window.innerWidth * 0.75);

    useEffect(() => {
        let timer: any;

        const listener = () => {
            if (timer) {
                clearTimeout();
            }

            timer = setTimeout(() => {
                setInnerHeight(window.innerHeight);
                setInnerWidth(window.innerWidth);
            }, 100);

        };

        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener);
        };

    }, []);


    if (direction === 'horizontal') {
        resizableProps = {
            className: 'resize-horizontal',
            height: Infinity,
            width: innerWidth * 0.75,
            resizeHandles: ['e'],
            maxConstraints: [innerWidth * 0.75, Infinity],
            minConstraints: [innerWidth * 0.2, Infinity],
            onResizeStop: (event, data) => {
                setWidth(data.size.width);
            }
        }
    } else {
        resizableProps = {
            height: 300,
            width: Infinity,
            resizeHandles: ['s'],
            maxConstraints: [Infinity, innerHeight * 0.9],
            minConstraints: [Infinity, innerHeight * 0.15]
        }
    }

    return <ResizableBox {...resizableProps}>
        {children}
    </ResizableBox >;
}

export default Resizable;