import React, { useState, useEffect } from "react";
import "./style.css";

const TableHeader = (props) => {
  return (
    <div className="container-header">
      <text className="table-header-text">Question</text>
      <text className="table-header-text">Examinee's Answer</text>
      <text className="table-header-text">Correct Answer</text>
    </div>
  );
};

export default TableHeader;
