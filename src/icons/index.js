import React from "react";
import { IconContext } from "react-icons";
import { GiMeshNetwork } from "react-icons/gi";
import { BiChevronsDown } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsClock, BsFileEarmarkText } from "react-icons/bs";
import {
  FaAward,
  FaPhotoVideo,
  FaEye,
  FaEdit,
  FaCalendarAlt,
} from "react-icons/fa";
import { AiFillPlusCircle, AiFillClockCircle } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
export function NetIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <GiMeshNetwork />
    </IconContext.Provider>
  );
}

export function TestIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <BsFileEarmarkText />
    </IconContext.Provider>
  );
}

export function DeleteIcon(props) {
  return (
    <IconContext.Provider
      value={{ className: props.className, fontSize: "50px" }}
    >
      <RiDeleteBin5Line />
    </IconContext.Provider>
  );
}

export function ClockIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <AiFillClockCircle />
    </IconContext.Provider>
  );
}

export function ViewIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaEye />
    </IconContext.Provider>
  );
}
export function Award(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaAward />
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

export function EditIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaEdit />
    </IconContext.Provider>
  );
}
export function Clock(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <BsClock />
    </IconContext.Provider>
  );
}
export function Calendar(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaCalendarAlt />
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

export function ScrollIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <BiChevronsDown />
    </IconContext.Provider>
  );
}

export function DeleteXIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <TiDelete onClick={props.onClick} />
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
