import React from "react";
import "./style.css";

export default function TesterHeader({ text }) {
  return (
    <div className="tester-header">
      <h2>{text}</h2>
    </div>
  );
}
