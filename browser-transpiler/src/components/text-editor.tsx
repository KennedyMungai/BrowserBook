import MDEditor from '@uiw/react-md-editor';
import React, { useState } from 'react';


const TextEditor: React.FC = () => {
    const [editing, setEditing] = useState<string>('');

    return (
        <div>
            <MDEditor />
        </div>
    )
}

export default TextEditor;