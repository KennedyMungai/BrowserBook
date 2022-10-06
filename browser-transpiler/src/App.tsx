import React, { useState, useEffect, useRef } from 'react';
import CodeEditor from './components/codeEditor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Preview from './components/Preview';


function App() {
  const [code, setCode] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const ref = useRef<any>();

  const onClick = async () => {
    if (!ref.current) {
      return;
    }

    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [
        unpkgPathPlugin(),
        fetchPlugin(input)
      ],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window'
      }
    });

    setCode(result.outputFiles[0].text);
  };

  return (
    <div>
      <CodeEditor
        initialValue='const a = 1'
        onChange={(value) => setInput(value)}
      />

      <div className="">
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
}

export default App;
