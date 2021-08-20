import React from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

const Todo = ({ text, isCompleted, removeTodo, id, completeTodo }) => (
  <li className="todo">
    <i onClick={() => completeTodo(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i onClick={() => removeTodo(id)} className="fas fa-times" />
  </li>
);

Todo.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  id: PropTypes.string,
  removeTodo: PropTypes.func,
  completeTodo: PropTypes.func
}

Todo.defaultProps = {
  text: '',
  isCompleted: false,
  id: 0,
  removeTodo: () => {},
  completeTodo: () => {},
}

export default Todo;