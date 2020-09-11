import React from "react";
import { db } from "../config/fbConfig";

const Todo = ({ todo }) => {
  // toggle complete state of todo
  const hanldeClick = (id) => {
    const todo = db.collection("todos").doc(id);
    return db.runTransaction((trans) => {
      return trans.get(todo).then((doc) => {
        if (doc.exists) {
          let completeState = doc.data().complete;
          trans.update(todo, { ...doc.data(), complete: !completeState });
        }
      });
    });
  };

  // delte todo
  const handleDelete = (id) => {
    console.log(id);
    db.collection("todos")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <div className={todo.complete ? "complete" : ""}>
      <span onClick={() => hanldeClick(todo.id)}>{todo.title}</span>
      <button onClick={() => handleDelete(todo.id)}>Delete </button>
    </div>
  );
};

export default Todo;
