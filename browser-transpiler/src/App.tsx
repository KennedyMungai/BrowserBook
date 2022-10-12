import React from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CodeCell from './components/code-cell';
import from './components/text-editor';
import { Provider } from 'react-redux';
import { store } from './state';


function App() {
  return (
    <Provider store={store}>
      <div>
        <CodeCell />
      </div>
    </Provider>

  );
}

export default App;
