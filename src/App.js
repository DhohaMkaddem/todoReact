import React from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import "./App.css";

const App = () => (
  <>
    <div>
      <Form />
    </div>
    <div>
      <TodoList />
    </div>
  </>
);

export default App;
