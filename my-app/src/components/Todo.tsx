import React from "react";
import { List, ListItem } from "@material-ui/core";

function Todo(props: any) {
  return (
    <List>
      <ListItem>
        {props.todos
          .filter((todo: string) => todo !== "")
          .map((todo: string) => (
            <div>
              <li>{todo}</li>
            </div>
          ))}
      </ListItem>
    </List>
  );
}

export default Todo;
