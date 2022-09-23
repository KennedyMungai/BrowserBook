import React, { useState } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  return (
    <div>
      <textarea onChange={(e) => setInput(e.target.value)} value={input}></textarea>
      <div className="">
        <button>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export default App;
