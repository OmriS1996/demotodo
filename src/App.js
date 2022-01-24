import Login from "./Pages/Login/LoginPage";
import MainPage from "./Pages/Main/MainPage";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const name = sessionStorage.getItem("userName");
    const uId = sessionStorage.getItem("userId");
    if (name && uId) {
      setUserName(name);
      setUserId(uId);
    }
  }, []);

  return (
    <div className="App">
      {userId ? <MainPage userName={userName} userId={userId} /> : <Login />}
    </div>
  );
}

export default App;
