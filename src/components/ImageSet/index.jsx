import React from "react";
import "./style.css";

export default function ImageSet({ className, images }) {
  return (
    <div className={className}>
      {images.map((imgSrc) => {
        return <img src={imgSrc} style={{ width: "100px" }} />;
      })}
    </div>
  );
}
