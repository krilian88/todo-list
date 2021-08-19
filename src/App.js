import React, { useState } from 'react';
import { connect } from 'react-redux';

import {addTask} from './actions/actionCreator' 

import Title from './components/title/Title'
import TodoInput from './components/todo-input/TodoInput'
import TodoList from './components/todo-list/TodoList'
import Footer from './components/footer/Footer'
import './App.css';


const TASKS = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
];

const initialState = {
  activeFilter: 'all',
}

function App() {
  const [todos, setTodos] = useState(initialState);

  const { activeFilter } = ToPropertyDescriptor;
  const tasksList = TASKS;
  const isTasksExist = tasksList && tasksList.length > 0;

  return (
    <div className="app-wrapper">
     <Title title="Todo App"/>
     <TodoInput />
     {isTasksExist && <TodoList tasksList={tasksList}/>}
     {isTasksExist && <Footer amount={tasksList.length} activeFilter={activeFilter} />}
    </div>
  );
}

export default App;
