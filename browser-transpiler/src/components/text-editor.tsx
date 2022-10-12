import MDEditor from '@uiw/react-md-editor';
import React, { useEffect, useState } from 'react';


const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState<boolean>(false);

    if (editing) {
        return (
            <div>
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