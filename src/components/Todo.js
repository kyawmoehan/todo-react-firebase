import React from "react";
import { db } from "../config/fbConfig";
import { Row, Col, Button } from "react-bootstrap";

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
    <Row className="border-bottom py-3">
      <Col>
        <span
          onClick={() => hanldeClick(todo.id)}
          className={todo.complete ? "complete" : ""}
        >
          {todo.title}
        </span>
      </Col>
      <Col>
        <Button
          variant="outline-danger"
          className="float-right"
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </Button>
      </Col>
    </Row>
  );
};

export default Todo;
