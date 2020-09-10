import React from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ShowTodo from "./components/ShowTodos";

function App() {
  return (
    <div>
      <h1>Todo</h1>
      <InputTodo />
      <ShowTodo />
    </div>
  );
}

export default App;
