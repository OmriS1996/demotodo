import React, { useEffect, useState } from "react";
import ToDoForm from "../../Components/ToDoForm/ToDoForm";
import ToDoList from "../../Components/ToDoList/ToDoList";

export default function MainPage(props) {
  return (
    <>
      <h1>To Do:</h1>
      <ToDoForm userName={props.userName} userId={props.userId} />
      <ToDoList userId={props.userId} />
    </>
  );
}
