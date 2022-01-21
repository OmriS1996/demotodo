import Login from "./Pages/Login/LoginPage";
import MainPage from "./Pages/Main/MainPage";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <div className="App">
      {userName ? <MainPage userName={userName} /> : <Login />}
    </div>
  );
}

export default App;
