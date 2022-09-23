import React, { useState } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  return (
    <div>
      <textarea></textarea>
      <div className="">
        <button>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export default App;
