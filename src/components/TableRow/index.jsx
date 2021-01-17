import React, { useState, useEffect } from "react";
import "./style.css";

const TableRow = (props) => {
  const stepImages = [
    {
      id: 1,
      img:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
    {
      id: 2,
      img:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
    {
      id: 3,
      img:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
    {
      id: 4,
      img:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
    {
      id: 5,
      img:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
    {
      id: 6,
      img:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
    {
      id: 7,
      img:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
  ];
  const correctImages = [
    {
      id: 1,
      img:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
    {
      id: 2,
      img:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
    {
      id: 3,
      img:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
  ];
  return (
    <div className="container-table-row">
      <div className="step">Q1-1</div>
      <div className="wrong">
        {stepImages.map((item) => (
          <img src={item.img} className="img-table" />
        ))}
      </div>
      <div className="correct">
        {correctImages.map((item) => (
          <img src={item.img} className="img-table" />
        ))}
      </div>
    </div>
  );
};

export default TableRow;
