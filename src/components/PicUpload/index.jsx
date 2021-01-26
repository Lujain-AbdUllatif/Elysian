import React, { useEffect, useState } from "react";
import ReactFileReader from "react-file-reader";
import "./style.css";
//icons imports
import { PlusIcon, PicIcon } from "../../icons/index";
//toBase64
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const PicUpload = ({ picNum, setImages, pics }) => {
  //states
  const [testVal, setTestval] = useState("");
  // console.log("ORIGINAAAAAAL: ", testVal); // send the obj to base64.

  async function testFunc() {
    try {
      if (testVal) {
        const res = await toBase64(testVal);
        setImages((images) => [...images, { number: picNum, url: res }]);
        console.log("==>res", res);
        console.log("===>imgNum!!", picNum);
      }
    } catch (err) {
      console.log("ERRORROOOOO: ", err);
    }
  }

  // console.log("THE ARRAYYYY: ", testVal.split("from"));
  // console.log("the path is: ", testVal.split("from")[0].trim()); // this is the whole path
  // console.log(
  //   "VAAAAL22222 IS: ",
  //   testVal.substr(testVal.lastIndexOf("."))
  // ); /*this is the extension*/
  return (
    <div className="pic-uploader-container">
      <PicIcon className="pic-icon" />
      <PlusIcon className="plus-icon" />
      <span className="pic-num">{picNum}</span>
      <label htmlFor="pic-upload">
        <input
          type="file"
          id="pic-upload"
          onChange={(e) => {
            console.log("eventt", e);
            setTestval(e.target.files[0]);
            testFunc();
          }}
        />
      </label>
    </div>
  );
};

export default PicUpload;
