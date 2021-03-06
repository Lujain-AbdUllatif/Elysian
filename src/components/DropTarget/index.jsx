import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "./style.css";

const DropTarget = (props) => {
  function dragOver(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    ev.preventDefault();
    const droppedItem = ev.dataTransfer.getData("transfer");
    //console.log("item", droppedItem);
    ev.target.appendChild(document.getElementById(droppedItem));
  }

  return (
    <div
      className={props.className}
      id={props.id}
      onDragOver={dragOver}
      onDrop={drop}
    >
      {props.children}
    </div>
  );
};

export default DropTarget;
