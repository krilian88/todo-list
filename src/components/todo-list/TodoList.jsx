import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../todo/Todo';

import './TodoList.css';

const TodoList = ({ todosList }) => (
  <ul className="todo-list">
    {todosList.map(({ id, text, isCompleted }) => (
      <Todo key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasksList: PropTypes.array,
}

TodoList.defaultProps = {
  tasksList: [],
}

export default TodoList;