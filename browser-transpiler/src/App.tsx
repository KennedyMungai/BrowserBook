import React, { useState } from 'react';


function App() {
  const [input, setInput] = useState('');

  return (
    <div>
      <textarea></textarea>
      <div className="">
        <button>Submit</button>
      </div>
      <pre></pre>
    </div>
  );
}

export default App;
