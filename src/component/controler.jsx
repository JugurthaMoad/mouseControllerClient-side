import React, { Component } from "react";
import { ArrowIcon } from "./icons";
const Controler = ({ actions, setAction, hundleAction }) => {
  const topClick = () => {
    console.log(actions[0]);
    hundleAction(actions[0]);
  };
  const bottomClick = () => {
    console.log(actions[2]);
    hundleAction(actions[2]);
  };

  const leftClick = () => {
    console.log(actions[3]);
    hundleAction(actions[3]);
  };

  const rightClick = () => {
    console.log(actions[1]);
    hundleAction(actions[1]);
  };
  return (
    <div className="c_container">
      <div className="controler">
        <div className="line_container">
          <div className="haut">
            <ArrowIcon
              click={topClick}
              onMouseDown={() => {
                console.log("dooooo");
                topClick();
              }}
            />
          </div>
          <div className="gauche">
            <ArrowIcon click={leftClick} />
          </div>
        </div>
        <div className="line_container">
          <div className="droit">
            <ArrowIcon click={rightClick} />
          </div>
          <div className="bas">
            <ArrowIcon click={bottomClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controler;
