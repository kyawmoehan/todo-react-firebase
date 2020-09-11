import React, { useState } from "react";
import { db } from "../config/fbConfig";
import { Form, Button } from "react-bootstrap";

const InputTodo = () => {
  let [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // add todo to firebase
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
    <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <Form.Group>
        <Form.Control
          type="text"
          id="todo"
          onChange={handleChange}
          value={todo}
          placeholder="Add Todo"
          required
        />
      </Form.Group>
      <Form.Group className="ml-2">
        <Button variant="info" type="submit">
          Add Todo
        </Button>
      </Form.Group>
    </Form>
  );
};

export default InputTodo;
