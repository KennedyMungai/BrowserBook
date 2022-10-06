import React, { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';
import CodeEditor from './components/codeEditor';
import 'bulmaswatch/superhero/bulmaswatch.min.css';


function App() {
  const [input, setInput] = useState('');
  const ref = useRef<any>();

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    });

  };

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
  };

  useEffect(() => {
    startService();
  }, []);

  return (
    <div>
      <CodeEditor
        initialValue='const a = 1'
        onChange={(value) => setInput(value)}
      />

      <textarea onChange={(e) => setInput(e.target.value)} value={input}></textarea>
      <div className="">
        <button onClick={onClick}>Submit</button>
      </div>
      <iframe />
    </div>
  );
}

export default App;
