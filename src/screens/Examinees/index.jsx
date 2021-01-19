import React, { useState, useContext, useEffect } from "react";
import ExamineeList from "../../components/ExamineeList";
import TesterHeader from "../../components/TesterHeader";

const Examinees = (props) => {
  return (
    <div>
      <TesterHeader text="Examinees" />
      <ExamineeList />
    </div>
  );
};
export default Examinees;
