import React from "react";
import { IconContext } from "react-icons";
import { GiMeshNetwork } from "react-icons/gi";
import { FaAward, FaCalendarAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";

export function NetIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <GiMeshNetwork />
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
