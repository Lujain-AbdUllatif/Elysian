import React from "react";
import { IconContext } from "react-icons";
import { GiMeshNetwork } from "react-icons/gi";
import { BsFileEarmarkText } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";

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

export function ClockIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <AiFillClockCircle />
    </IconContext.Provider>
  );
}
