import React, { useEffect, useState } from "react";
import "./style.css";

const Instruction = (props) => {
  return (
    <div className="instruction-div">
      <text className="instruction-text1">Identify the right pictures</text>
      <br></br>
      <text className="instruction-text2">
        Note : you can return the pictures if you have second thoughts
      </text>
    </div>
  );
};

export default Instruction;
