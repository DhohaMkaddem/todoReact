import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from "../constants/actions_types";

const initState = {
  todos: []
};

export default function todos(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.todo] };
    case COMPLETE_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id !== action.id ? todo : { ...todo, isDone: !todo.isDone }
        )
      };

    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    default:
      return initState;
  }
}
