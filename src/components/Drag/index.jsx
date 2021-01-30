import React, { useState, useEffect } from "react";
import "./style.css";

const Drag = (props) => {
  function startDrag(ev) {
    ev.dataTransfer.setData("transfer", props.id); //check if id
    document.getElementById(`${props.id}`).style.border = "none";

    console.log("OMMGGG WE ARE IN DRAG!!", props.id);
    console.log("whhhat!!", props.id);
  }

  const noAllowDrag = (ev) => {
    ev.stopPropagation();
  };

  return (
    <div
      className="Drag-Img"
      id={props.id}
      draggable="true"
      onDragStart={startDrag}
      onDragOver={noAllowDrag}
      onDragEnd={() => {}}
    >
      {props.children}
    </div>
  );
};

export default Drag;
