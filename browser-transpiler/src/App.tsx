import React from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CodeCell from './components/code-cell';
import { Provider } from 'react-redux';
import { store } from './state';
import CellList from './components/cell-list';


function App() {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>

  );
}

export default App;
