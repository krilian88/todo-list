import React, { useState } from "react";
import { connect } from "react-redux";

import {
  addTodo,
  removeTodo,
  completeTodo,
  changeFilter,
} from "./actions/actionCreator";

import Title from "./components/title/Title";
import TodoInput from "./components/todo-input/TodoInput";
import TodoList from "./components/todo-list/TodoList";
import Footer from "./components/footer/Footer";
import "./App.css";

const initialState = {
  todoText: "",
};

function App(props) {
  const [tasks, setTasks] = useState(initialState);

  const handleInputChange = ({ target: { value } }) => {
    setTasks({
      todoText: value,
    });
  };

  const addTodo = ({ key }) => {
    const { todoText } = tasks;

    if (todoText.length > 3 && key === "Enter") {
      const { addTodo } = props;

      addTodo(new Date().getTime(), todoText, false);

      setTasks({
        todoText: "",
      });
    }
  };

  const filterTodos = (todos, activeFilter) => {
    switch (activeFilter) {
      case "completed":
        return todos.filter((todo) => todo.isCompleted);
      case "active":
        return todos.filter((todo) => !todo.isCompleted);
      default:
        return todos;
    }
  };

  const getActiveTodosCounter = (todos) => todos.filter(todo => !todo.isCompleted).length

  const { todoText } = tasks;
  const { todos, removeTodo, completeTodo, filters, changeFilter } = props;
  const isTodoExist = todos && todos.length > 0;
  const filteredTodos = filterTodos(todos, filters)
  const todosCounter = getActiveTodosCounter(todos)

  return (
    <div className="app-wrapper">
      <Title title="Todo App" />
      <TodoInput
        onKeyPress={addTodo}
        onChange={handleInputChange}
        value={todoText}
      />
      {isTodoExist && (
        <TodoList
          todos={filteredTodos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      )}
      {isTodoExist && (
        <Footer
          amount={todosCounter}
          activeFilter={filters}
          changeFilter={changeFilter}
        />
      )}
    </div>
  );
}

// function mapStateToProps(state) {
//   return { todos: state.todos }
// }

export default connect(
  (state) => ({
    todos: state.todos,
    filters: state.filters,
  }),
  { addTodo, removeTodo, completeTodo, changeFilter }
)(App);
