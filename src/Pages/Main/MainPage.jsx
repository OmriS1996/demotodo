import React, { useEffect, useState } from "react";
import ToDoForm from "../../Components/ToDoForm/ToDoForm";

export default function MainPage(props) {
  return (
    <>
      <h1>To Do:</h1>
      <ToDoForm userName={props.userName} />
      <div>this is main page</div>
    </>
  );
}
