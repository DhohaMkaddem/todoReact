import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO
} from "../constants/actions_types";

export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}
export function completeTodo(id) {
  return { type: COMPLETE_TODO, id };
}
export function deleteTodo(id) {
  return { type: DELETE_TODO, id };
}
