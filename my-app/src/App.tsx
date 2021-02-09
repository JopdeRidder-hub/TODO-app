import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./components/Todo";
import { db } from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState<Array<Object>>([]);
  const [input, setInput] = useState("");

  // When the app loads we need to listen to the database and fetch the new todo's.
  useEffect(() => {
    // every time the app loads this function fires.
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event: any) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </form>
    </div>
  );
}

export default App;
