import React, { useState } from 'react';
import { connect } from 'react-redux';

import {addTodo, removeTodo, completeTodo} from './actions/actionCreator' 

import Title from './components/title/Title'
import TodoInput from './components/todo-input/TodoInput'
import TodoList from './components/todo-list/TodoList'
import Footer from './components/footer/Footer'
import './App.css';



const initialState = {
  activeFilter: 'all',
  todoText: ''
}

function App(props) {
  const [tasks, setTasks] = useState(initialState);

  const handleInputChange = ({target: {value}}) => {
    setTasks({
      todoText: value
    })
  }

  const addTodo = ({ key }) => {
  const { todoText } = tasks;

  if (todoText.length > 3 && key === 'Enter') {
    const { addTodo } = props;

    addTodo((new Date()).getTime(), todoText, false);

    setTasks({
      todoText: '',
    })

  } 
}
  const { activeFilter, todoText } = tasks;
  const {todos, removeTodo, completeTodo} = props
  const isTodoExist = todos && todos.length > 0;

  return (
    <div className="app-wrapper">
     <Title title="Todo App"/>
     <TodoInput onKeyPress={addTodo} onChange={handleInputChange} value={todoText}/>
     {isTodoExist && <TodoList todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />}
     {isTodoExist && <Footer amount={todos.length} activeFilter={activeFilter} />}
    </div>
  );
}

// function mapStateToProps(state) {
//   return { todos: state.todos }
// }

export default connect(state => ({
  todos: state.todos
}), {addTodo, removeTodo, completeTodo})(App);
