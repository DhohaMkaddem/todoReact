import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const ConnectedTodoList = ({ todos }) => (
  <div>
    {todos.map(el => (
      <Todo
        key={el.id}
        todo={el.todo}
        id={el.id}
        isDone={el.isDone}

        // completeTodo={props.completeTodo}
        // deleteTodo={props.deleteTodo}
      />
    ))}
  </div>
);

const mapStateToProps = state => {
  return { todos: state.todos };
};

const TodoList = connect(mapStateToProps)(ConnectedTodoList);

export default TodoList;
