import React from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';


function App() {
  const [code, setCode] = useState<string>('');
  const [input, setInput] = useState<string>('');

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
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
