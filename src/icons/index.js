import React from "react";
import { IconContext } from "react-icons";
import { GiMeshNetwork } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEye, FaEdit } from "react-icons/fa";
import { BiChevronsDown } from "react-icons/bi";

export function NetIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <GiMeshNetwork />
    </IconContext.Provider>
  );
}

export function DeleteIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <RiDeleteBin5Line />
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

export function EditIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <FaEdit />
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
