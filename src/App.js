import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import React, { Component, useState, useEffect } from "react";
import Controler from "./component/controler";
function App() {
  const actions = ["top", "right", "bottom", "left", "Speed+", "Speed-"];
  const [action, setAction] = useState("");
  // here to replace the @ip 
  const socket = io.connect("http://192.168.1.35:5000");
  const hundleAction = (action) => {
    console.log("Action shosen = ", action);
    socket.emit("move", {
      move: action,
    });
  };
  const hundleClick = () => {
    socket.emit("click");
  };
  const hundleSpeed = (action) => {
    socket.emit("speed", {
      speed: action,
    });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="buttons_container">
          <span onClick={() => hundleSpeed(actions[4])} className="buttons">
            Speed +
          </span>
          <span onClick={() => hundleSpeed(actions[5])} className="buttons">
            Speed -
          </span>
        </div>
        <div onClick={hundleClick} className="buttons">
          <span>Click</span>
        </div>

        <Controler
          actions={actions}
          setAction={setAction}
          hundleAction={hundleAction}
        />
      </div>
    </div>
  );
}

export default App;
