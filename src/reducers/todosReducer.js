import { ADD_TODO } from "../constants";

const TODOS = [
  {
    id: 1,
    text: "Learn ReactJS",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Learn Redux",
    isCompleted: false,
  },
  {
    id: 3,
    text: "Learn React Router",
    isCompleted: false,
  },
];

export const todos = (state = TODOS, action) => {
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
    default:
      return state;
  }
};
