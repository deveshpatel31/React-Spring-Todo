import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'testing1', rowAssigned: "User One"},
    {rowNumber: 2, rowDescription: 'test2', rowAssigned: "User Two"},
    {rowNumber: 3, rowDescription: 'test3', rowAssigned: "User One"},
    {rowNumber: 4, rowDescription: 'test4', rowAssigned: "User three"}
  ])

  const addTodo = () => {
    console.log('Our Add new ToDo button was clicked!');
    if(todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'User Four'
      };
      //todos.push(newTodo);
      setTodos(todos => [...todos, newTodo])
      console.log(todos);   
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todos
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}/>
          <button className='btn btn-primary' onClick={addTodo}>
              Add new Todo
          </button>
          <NewTodoForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
