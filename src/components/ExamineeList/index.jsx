import React, { useState, useEffect } from "react";
import "./style.css";
import ExamineeLine from "../../components/ExamineeLine";
const ExamineeList = (props) => {
  const examinee = [
    { name: "Omklthom", timer: "07:08:19", date: "12.01.2021", score: "90" },
    { name: "Shooq", timer: "08:01:20", date: "11.01.2021", score: "92" },
    { name: "Muhammad", timer: "07:18:18", date: "02.01.2021", score: "91" },
    { name: "Lujain", timer: "10:01:11", date: "12.01.2021", score: "90" },
  ];
  console.log("====>heloo");

  return (
    <div className="container">
      {examinee.map((item, index) => {
        <ExamineeLine key={index} data={item} />;
      })}
    </div>
  );
};

export default ExamineeList;
