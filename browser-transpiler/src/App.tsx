import React, { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';


function App() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  const ref = useRef<any>();

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    });

  };

  const onClick = () => {
    if (!ref.current) {
      return;
    }

    console.log(ref.current);
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
