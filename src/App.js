import React from 'react';
import './App.css';
import ToDoList from './MainModule/ToDoList/index';

function App() {
  // console.log(store.getState(), '---');
  return (
    <div className="App">
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
