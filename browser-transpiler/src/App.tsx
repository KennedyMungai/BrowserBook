import React, { useState, useEffect, useRef } from 'react';
import CodeEditor from './components/codeEditor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Preview from './components/Preview';
import bundler from './bundler';


function App() {
  const [code, setCode] = useState<string>('');
  const [input, setInput] = useState<string>('');

  const onClick = async () => {
    const output = await bundler(input);

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
