import React from "react";
import "./style.css";

export default function ImageSet({ className, images }) {
  console.log(images);
  return (
    <div className={className}>
      {images.map((imgSrc) => {
        return <img src={imgSrc.url} style={{ width: "100px" }} />;
      })}
    </div>
  );
}
