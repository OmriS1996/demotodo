import React, { useEffect, useState } from "react";

export default function Login() {
  const [showAlert, setShowAlert] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formComplete, setFormComplete] = useState(false);

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

  useEffect(() => {
    if (formComplete === true) {
      localStorage.setItem("name", textInput);
      window.location.reload(false);
    }
  }, [formComplete]);

  return (
    <div>
      <h2>Enter Your Name</h2>
      <form>
        <input type="text" id="name" placeholder="Name" onChange={handleName} />
        <input type="submit" onClick={handleSubmit} />
      </form>
      {showAlert && <div>{errorMessage}</div>}
    </div>
  );
}
