import React from "react";
import axios from "axios";

export default function DoneButton(props) {
  function donePost() {
    axios
      .post(`http://localhost:4000/updatestatus/${props.itemId}`)
      .then(function () {
        window.location.reload(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={donePost}>Done</button>
    </div>
  );
}
