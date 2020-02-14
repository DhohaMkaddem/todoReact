import React from "react";

const Form = props => {
  return (
    <div>
      <h1>Let's do ... nothing</h1>
      <form onSubmit={props.onSubmit}>
        <input onChange={props.onChange} value={props.todo} />
        <button>Nothing</button>
      </form>
    </div>
  );
};

export default Form;
