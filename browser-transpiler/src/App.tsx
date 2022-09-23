import React, { useState } from 'react';
import * as esbuild from 'esbuild-wasm';


function App() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea onChange={(e) => setInput(e.target.value)} value={input}></textarea>
      <div className="">
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export default App;
