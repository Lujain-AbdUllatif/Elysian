import { FaClock, FaAward, FaCalendarAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./style.css";
const ExamineeLine = (props) => {
  return (
    <div className="container">
      <text>Omklthom </text>
      <div>
        <FaClock />
      </div>
      <div>
        <FaCalendarAlt />
      </div>
      <div>
        <FaAward />
      </div>
    </div>
  );
};

export default ExamineeLine;
