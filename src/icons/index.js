import React from "react";
import { IconContext } from "react-icons";
import { GiMeshNetwork } from "react-icons/gi";

export function NetIcon(props) {
  return (
    <IconContext.Provider value={{ className: props.className }}>
      <GiMeshNetwork />
    </IconContext.Provider>
  );
}
