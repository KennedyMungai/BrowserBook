import MDEditor from '@uiw/react-md-editor';
import React, { useEffect, useRef, useState } from 'react';


const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            setEditing(false);
        }

        document.addEventListener('click', listener, { capture: true });

        return () => {
            document.removeEventListener('click', listener, { capture: true });
        };
    }, []);


    if (editing) {
        return (
            <div ref={ref}>
                <MDEditor />
            </div>
        );
    }

    return (
        <div onClick={() => setEditing(true)}>
            <MDEditor />
        </div>
    )
}

export default TextEditor;