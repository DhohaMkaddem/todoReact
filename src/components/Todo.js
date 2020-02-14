import React from "react";

const Todo = props => {
  const complete = () => {
    props.completeTodo(props.id);
  };
  const deleteTodo = () => {
    props.deleteTodo(props.id);
  };
  return (
    <div>
      <button onClick={complete}>{props.isDone ? "Undo" : "Complete"}</button>
      <button onClick={deleteTodo}>Delete</button>
      <span className={props.isDone ? "done" : ""}>{props.todo}</span>
    </div>
  );
};

export default Todo;
