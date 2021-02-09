import React from "react";
import "../App.css";
import { db } from "../firebase";

function Todo(props: any) {
  // debugger;
  return (
    <div>
      <div>{props.todo.todo}</div>
      <button
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        DELETE ME
      </button>
    </div>
  );
}

export default Todo;
