import React, { useState, useContext, useEffect } from "react";
import ExamineeLine from "../../components/ExamineeLine";
import TableRow from "../../components/TableRow";
import TableHeader from "../../components/TableHeader";
import ExamineeHeader from "../../components/ExamineeHeader";
const ExamineeAnswers = (props) => {
  const examinee = {
    name: "omklthom",
    timer: "09:17:51",
    date: "14/01/2021",
    score: "95",
  };
  return (
    <div>
      <ExamineeHeader text="Examinees Answers" />
      <ExamineeLine data={examinee} />
      <TableHeader />
      <TableRow />
    </div>
  );
};
export default ExamineeAnswers;
