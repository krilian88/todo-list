import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from "../constants";
import {load} from 'redux-localstorage-simple'

let TODOS = load({namespace: 'todo-list'})

if (!TODOS || !TODOS.todos || !TODOS.todos.length) {
  TODOS = {
    todos: [],
  }
}

// const TODOS = [
//   {
//     id: 1,
//     text: "Learn ReactJS",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Learn Redux",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "Learn React Router",
//     isCompleted: false,
//   },
// ];

export const todos = (state = TODOS.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: action.isCompleted,
        },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });

    default:
      return state;
  }
};
