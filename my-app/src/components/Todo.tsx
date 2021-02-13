import React from "react";
import "../App.css";
import { db } from "../firebase";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function Todo(props: any) {
  return (
    <div className="App">
      <Box
        component="span"
        display="block"
        p={2}
        m={2}
        bgcolor="background.paper"
      >
        {props.todo.todo}
        <IconButton aria-label="delete">
          <DeleteIcon
            onClick={(event) =>
              db.collection("todos").doc(props.todo.id).delete()
            }
          />
        </IconButton>
      </Box>
    </div>
  );
}

export default Todo;
