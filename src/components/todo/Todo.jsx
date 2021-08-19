import React from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

const Todo = ({ text, isCompleted }) => (
  <li className="todo">
    <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i className="fas fa-times" />
  </li>
);

Todo.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
}

Todo.defaultProps = {
  text: '',
  isCompleted: false,
}

export default Todo;