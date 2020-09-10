import React, { useState } from "react";
import { db } from "../config/fbConfig";

const InputTodo = () => {
  let [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("todos")
      .add({
        title: todo,
        complete: false,
      })
      .then(() => {
        setTodo("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Add Todo</label>
      <input
        type="text"
        id="todo"
        onChange={handleChange}
        value={todo}
        required
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default InputTodo;
