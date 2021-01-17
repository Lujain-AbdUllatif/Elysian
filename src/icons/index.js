import React from "react";
import { IconContext } from "react-icons";
import { GiMeshNetwork } from "react-icons/gi";
import { FaPhotoVideo } from "react-icons/fa";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
export function NetIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <GiMeshNetwork />
    </IconContext.Provider>
  );
}

export function PicIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaPhotoVideo />
    </IconContext.Provider>
  );
}

export function PlusIcon(props) {
  return (
    <IconContext.Provider
      value={{
        className: props.className,
        color: "#4B4B78",
      }}
    >
      <AiFillPlusCircle onClick={props.onClick} />
    </IconContext.Provider>
  );
}

export function MinusIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <AiOutlineMinusCircle onClick={props.onClick} />
    </IconContext.Provider>
  );
}

export function ArrowIcon(props) {
  return (
    <IconContext.Provider
      value={{ className: props.className, "font-size": "100px" }}
    >
      <IoMdArrowDropdown onClick={props.onClick} />
    </IconContext.Provider>
  );
}
