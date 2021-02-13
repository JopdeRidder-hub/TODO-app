import React, { useEffect, useState } from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import "./App.css";
import Todo from "./components/Todo";
import { db } from "./firebase";
import firebase from "firebase";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

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
      <div>
        <Box component="span" display="block" p={1} m={1}>
          <h1>Todo App</h1>
        </Box>
        <Box component="span" display="block" p={2} m={2}>
          <form>
            <Grid container justify="center">
              <FormControl>
                <TextField
                  label="Add your todo"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  variant="outlined"
                />
              </FormControl>
              <Button
                disabled={!input}
                type="submit"
                onClick={addTodo}
                variant="outlined"
                color="primary"
                size="large"
              >
                Add Todo
              </Button>
            </Grid>
          </form>
        </Box>
      </div>
      <div>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
