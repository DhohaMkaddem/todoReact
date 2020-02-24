import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../js/actions/index";

class ConnectedForm extends Component {
  state = {
    todo: ""
  };

  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todo) {
      this.props.addTodo({
        todo: this.state.todo,
        id: Date.now(),
        isDone: false
      });
      this.setState({ todo: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Let's Do Some Work!!!!!</h1>
          <input value={this.state.todo} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
