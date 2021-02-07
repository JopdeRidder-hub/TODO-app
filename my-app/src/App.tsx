import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState([''])
  const [input, setInput] = useState('')

  const addTodo = (event:any) => {
    event.preventDefault()
    if(input !== ''){
      setTodos([...todos, input])
      setInput('')
    }return
  }
  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
      <TextField value={input} onChange={event => setInput(event.target.value)} id="outlined-basic" variant="outlined" size="small"/>
      <Button type='submit' onClick={addTodo} variant="outlined" color="primary">Add Todo</Button>
      {todos.map(i => <li>{i}</li>)}
      </form>
    </div>
  );
}

export default App;
