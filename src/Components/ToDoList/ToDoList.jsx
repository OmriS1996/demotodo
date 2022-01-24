import React, { useEffect, useState } from "react";
import axios from "axios";
import DoneButton from "../DoneButton/DoneButton";
import "./ToDoList.css";

export default function ToDoList(props) {
  const [doneToDoArray, setDoneToDoArray] = useState();
  const [undoneToDoArray, setUndoneToDoArray] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [toDoArray, setToDoArray] = useState();

  async function getToDos() {
    setIsLoading(true);
    try {
      let response = await axios.get(
        `http://localhost:4000/getitems/${props.userId}`
      );

      setToDoArray(response.data);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  function splitToDo(array) {
    let openToDo = [];
    let doneToDo = [];
    for (const item of array) {
      if (item.isDone == 1) {
        doneToDo.push(item);
      } else if (item.isDone == 0) {
        openToDo.push(item);
      }
    }
    setUndoneToDoArray(openToDo);
    setDoneToDoArray(doneToDo);
  }

  useEffect(() => {
    getToDos();
  }, []);

  useEffect(() => {
    if (toDoArray) {
      splitToDo(toDoArray);
    }
  }, [toDoArray]);

  return (
    <div className="container">
      {isLoading && <div>Loading...</div>}
      <h3>Unfinished tasks:</h3>
      {undoneToDoArray &&
        undoneToDoArray.map((toDo) => {
          return (
            <div className="list" key={toDo.itemId}>
              <div className="title-and-time">
                <div>{toDo.title}</div>
                <div>{Date(toDo.date)}</div>
              </div>
              <div className="content">{toDo.description}</div>
              <DoneButton itemId={toDo.itemId} />
            </div>
          );
        })}
      <h3>completed tasks:</h3>
      {doneToDoArray &&
        doneToDoArray.map((toDo) => {
          return (
            <div className="complete-list" key={toDo.itemId}>
              <div className="title-and-time">
                <div>{toDo.title}</div>
                <div>{Date(toDo.date)}</div>
              </div>
              <div className="content">{toDo.description}</div>
            </div>
          );
        })}
    </div>
  );
}
