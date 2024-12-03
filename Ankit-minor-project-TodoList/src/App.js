import React, { useState } from 'react';
import './App.css';  // Ensure the path is correct
import TodoInput from './components/TodoInput';  // Ensure correct path
import Todolist from './components/TodoList';    // Ensure correct path

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO LIST</h1>
        <hr />
        <ul>
          {listTodo.map((listItem, i) => (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
