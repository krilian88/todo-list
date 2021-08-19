import { ADD_TODO } from '../constants';

export const addTodo = (id, text, isCompleted) => ({
  type: ADD_TODO,
  id,
  text,
  isCompleted
});