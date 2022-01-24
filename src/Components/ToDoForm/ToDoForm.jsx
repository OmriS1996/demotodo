import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ToDoForm(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formComplete, setFormComplete] = useState(false);

  function handleTitle(e) {
    setTitleInput(e.target.value);
  }

  function handleDescription(e) {
    setDescriptionInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    formChecker();
  }

  function formChecker() {
    if (titleInput.length < 1 && descriptionInput.length < 1) {
      setErrorMessage("Please contain a title and/or description");
      setShowAlert(true);
    } else {
      setFormComplete(true);
      setShowAlert(false);
    }
  }

  function itemPost() {
    axios
      .post("http://localhost:4000/additem", {
        title: titleInput,
        description: descriptionInput,
        userName: props.userName,
        userId: props.userId,
        date: Date.now(),
      })
      .then(function () {
        window.location.reload(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    if (formComplete === true) {
      itemPost();
    }
    setFormComplete(false);
  }, [formComplete]);

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            id="title"
            placeholder="Title"
            onChange={handleTitle}
          />
          <input
            type="text"
            id="desc"
            placeholder="Description"
            onChange={handleDescription}
          />
          <input type="submit" onClick={handleSubmit} />
        </form>
        {showAlert && <div>{errorMessage}</div>}
      </div>
    </>
  );
}
