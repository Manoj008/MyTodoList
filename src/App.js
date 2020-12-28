import React, { useState, useEffect } from "react";
import "./styles.css";

import Form from "./componenets/Form";
import TodoList from "./componenets/TodoList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getFromLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getFromLocal = () => {
    if (localStorage.getItem("todos") === null) {
      setTodos([]);
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  };
  return (
    <div className="App">
      <h1>My ToDo List</h1>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}
