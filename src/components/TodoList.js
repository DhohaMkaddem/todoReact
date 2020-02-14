import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.todos.map(el => (
        <Todo
          key={el.id}
          todo={el.todo}
          id={el.id}
          isDone={el.isDone}
          completeTodo={props.completeTodo}
          deleteTodo={props.deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
