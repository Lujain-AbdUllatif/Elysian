import React, { useEffect, useState } from "react";
import ReactFileReader from "react-file-reader";
import "./style.css";
//icons imports
import { PlusIcon, DeleteXIcon, PicIcon } from "../../icons/index";
//toBase64
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const PicUpload = ({ picNum, setImages, id }) => {
  //states
  const [testVal, setTestval] = useState("");

  //functions
  // console.log("ORIGINAAAAAAL: ", testVal); // send the obj to base64.
  async function testFunc() {
    try {
      if (testVal != "") {
        const res = await toBase64(testVal);
        return res;
      }
    } catch (err) {
      console.log("ERRORROOOOO: ", err);
    }
  }

  //showImage()
  const showImage = (imageUrl) => {
    const topContainer = document.getElementById(id + "d");
    const imgTag = document.createElement("img");
    imgTag.src = imageUrl;
    imgTag.classList.add("fixed-image");

    topContainer.appendChild(imgTag);
  };

  //deleteImage()
  const deleteImage = (picNum) => {
    const highestParent = document.getElementById(id + "d").parentElement;
    const boxes = highestParent.querySelectorAll(".pic-uploader-container");
    if (boxes.length == 1) {
      const container = document.getElementById(id + "d");
      Array.from(container.children).forEach((child) => {
        if (child.nodeName == "IMG" && !child.classList.contains("delete-icon"))
          container.removeChild(child);
      });
      setImages((prev) => {
        return prev.filter((picObj) => picObj.number != picNum);
      });
    } else {
      const container = document.getElementById(id + "d");
      container.parentElement.removeChild(container);
      setImages((prev) => {
        return prev.filter((picObj) => picObj.number != picNum);
      });
    }
  };

  //useEffect
  useEffect(async () => {
    if (testVal != "") {
      const imageUrl = await testFunc();
      showImage(imageUrl);
      setImages((images) => [...images, { number: picNum, url: imageUrl }]);
    }
  }, [testVal]);

  // console.log("THE ARRAYYYY: ", testVal.split("from"));
  // console.log("the path is: ", testVal.split("from")[0].trim()); // this is the whole path
  // console.log(
  //   "VAAAAL22222 IS: ",
  //   testVal.substr(testVal.lastIndexOf("."))
  // ); /*this is the extension*/

  return (
    <div className="pic-uploader-container" id={id + "d"}>
      <PicIcon className="pic-icon" />
      <PlusIcon className="plus-icon" />

      <img
        className="delete-icon"
        src="img/remove.svg"
        onClick={(e) => {
          const picNum = parseInt(e.target.parentElement.id.split(".")[0]) + 1;
          deleteImage(picNum);
        }}
      />
      <span className="pic-num">{picNum}</span>
      <label>
        <input
          type="file"
          accept="image/*"
          required
          onInvalid={(e) => alert("Missing Images To Upload")}
          id={picNum}
          className="pic-upload"
          onChange={(e) => {
            setTestval(e.target.files[0]);
          }}
        />
      </label>
    </div>
  );
};

export default PicUpload;
