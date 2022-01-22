import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formComplete, setFormComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleName(e) {
    setTextInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    formChecker();
  }

  function formChecker() {
    if (textInput.length < 1) {
      setErrorMessage("Name must have at least one character");
      setShowAlert(true);
    } else {
      setFormComplete(true);
      setShowAlert(false);
    }
  }

  function namePost() {
    axios
      .post("http://localhost:4000/users", {
        name: textInput,
      })
      .then(function (response) {
        console.log(response);
        sessionStorage.setItem("userName", response.data.userName);
        sessionStorage.setItem("userId", response.data.userId);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    if (formComplete === true) {
      setIsLoading(true);
      namePost();
      setIsLoading(false);
      window.location.reload(false);
    }
  }, [formComplete]);

  return (
    <div>
      <h2>Enter Your Name</h2>
      <form>
        <input type="text" id="name" placeholder="Name" onChange={handleName} />
        {isLoading ? (
          <div>Submitting...</div>
        ) : (
          <input type="submit" onClick={handleSubmit} />
        )}
      </form>
      {showAlert && <div>{errorMessage}</div>}
    </div>
  );
}
