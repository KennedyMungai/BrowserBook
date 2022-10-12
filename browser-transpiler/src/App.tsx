import React from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
import { Provider } from 'react-redux';


function App() {
  return (
    <div>
      <CodeCell />
    </div>
  );
}

export default App;
