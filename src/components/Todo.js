import React, { Component } from "react";
import { deleteTodo, completeTodo } from "../js/actions/index";
import { connect } from "react-redux";

class ConnectedTodo extends Component {
  deleteTodoItem = () => {
    this.props.deleteTodo(this.props.id);
  };

  completeTodoItem = () => {
    this.props.completeTodo(this.props.id);
  };

  render() {
    return (
      <div>
        <button onClick={this.deleteTodoItem}>delete </button>
        <button onClick={this.completeTodoItem}>
          {" "}
          {this.props.isDone ? "Done" : "Complete"}{" "}
        </button>
        <span className={this.props.isDone ? "done" : ""}>
          {this.props.todo}{" "}
        </span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: id => dispatch(deleteTodo(id)),
    completeTodo: id => dispatch(completeTodo(id))
  };
}

const Todo = connect(null, mapDispatchToProps)(ConnectedTodo);

export default Todo;

// const ConnectedTodo = props => {
//   function mapDispatchToProps(dispatch) {
//     return {
//       deleteTodo: id => dispatch(deleteTodo(id))
//     };
//   }
//   // const complete = () => {
//   //   deleteTodo(props.id);
//   // };
//   //
//   return (
//     <div>
//       <button onClick={deleteTodo}>complete </button>
//       <button> delete</button>
//       <span>{props.todo} </span>
//     </div>
//   );
// };
//onClick={complete}>{props.isDone ? "Undo" : "Complete"}
//className={props.isDone ? "done" : ""}>{props.todo}
//onClick={deleteTodo}>Delete
