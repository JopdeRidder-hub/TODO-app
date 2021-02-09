import React from "react";
import "../App.css";

function Todo(props: any) {
  return (
    <div>
      <div>{props.todos.todo}</div>
      <button>DELETE ME</button>
    </div>
  );
}

export default Todo;
