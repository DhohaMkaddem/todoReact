import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

class App extends React.Component {
  state = { todo: "", todos: [] };

  onChange = e => {
    this.setState({ todo: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.todo) {
      this.setState({
        todos: this.state.todos.concat({
          id: Date.now(),
          todo: this.state.todo,
          isDone: false
        }),
        todo: ""
      });
    }
  };

  handleCompleteTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id !== id ? todo : { ...todo, isDone: !todo.isDone }
      )
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { todo, todos } = this.state;
    return (
      <div>
        <Form onChange={this.onChange} todo={todo} onSubmit={this.onSubmit} />
        <TodoList
          todos={todos}
          completeTodo={this.handleCompleteTodo}
          deleteTodo={this.handleDeleteTodo}
        />
      </div>
    );
  }
}
export default App;
