import React from "react";
import { db } from "../config/fbConfig";

const Todo = ({ todo }) => {
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
      {todo.title}
      <button onClick={() => handleDelete(todo.id)}>Delete </button>
    </div>
  );
};

export default Todo;
