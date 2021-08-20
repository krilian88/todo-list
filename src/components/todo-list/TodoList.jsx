import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../todo/Todo';

import './TodoList.css';

const TodoList = ({ todos, removeTodo, completeTodo }) => (
  <ul className="todo-list">
    {todos.map(({ id, text, isCompleted }) => (
      <Todo removeTodo={removeTodo} id={id} key={id} text={text} isCompleted={isCompleted} completeTodo={completeTodo}/>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func,
}

TodoList.defaultProps = {
  todos: [],
  removeTodo: () => {},
  completeTodo: () => {},
}

export default TodoList;