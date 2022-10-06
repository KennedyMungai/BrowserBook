import React from 'react';


interface PreviewProps {
    code: string;
};


const preview: React.FC<PreviewProps> = ({ code }) => {
    return <iframe />;
}

export default preview;