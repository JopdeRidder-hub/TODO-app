import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([""]);
  const [input, setInput] = useState("");

  const addTodo = (event: any) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Todo app</h1>
      <form>
        <FormControl>
          <InputLabel>What is on your todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="outlined"
          color="primary"
        >
          Add Todo
        </Button>
        <Todo todos={todos} />
      </form>
    </div>
  );
}

export default App;
