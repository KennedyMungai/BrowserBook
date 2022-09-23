import React, { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';


function App() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    const service = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    });

    console.log(service);
  };

  const onClick = () => {
    console.log(input);
  };

  useEffect(() => {
    startService();
  }, []);
  

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
