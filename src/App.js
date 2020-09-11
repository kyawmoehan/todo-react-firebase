import React from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ShowTodo from "./components/ShowTodos";

function App() {
  return (
    <div id="container">
      <h1 className="text-center my-4">Todo</h1>
      <InputTodo />
      <ShowTodo />
    </div>
  );
}

export default App;
