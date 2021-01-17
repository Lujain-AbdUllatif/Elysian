import React from "react";
import "./style.css";

export default function TesterHeader({ text }) {
  return (
    <div className="tester-header">
      <h1>{text}</h1>
    </div>
  );
}
