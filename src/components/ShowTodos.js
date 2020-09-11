import React, { useState, useEffect } from "react";
import { db } from "../config/fbConfig";
import Todo from "./Todo";

const ShowTodo = () => {
  let [todos, setTodos] = useState([]);

  // get todo base on add, update and delete
  useEffect(() => {
    db.collection("todos").onSnapshot(function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        if (change.type === "added") {
          setTodos((prev) => {
            return [...prev, { ...change.doc.data(), id: change.doc.id }];
          });
        }
        if (change.type === "modified") {
          console.log("Modified", change.doc.data());
          setTodos((prev) => {
            return prev.map((todo) =>
              todo.id === change.doc.id
                ? { ...change.doc.data(), id: change.doc.id }
                : todo
            );
          });
        }
        if (change.type === "removed") {
          console.log("Delete", change.doc.data());
          setTodos((prev) => {
            return prev.filter((todo) => todo.id !== change.doc.id);
          });
        }
      });
    });
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default ShowTodo;
