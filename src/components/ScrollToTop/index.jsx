import React, { useEffect, useState } from "react";
import { ScrollIcon } from "../../icons";
const ScrollToTop = (props) => {
  const [visible, setVisiblity] = React.useState(false);
  // const [ScrollClick, setScrollClick] = React.useState(false);
  const questions = props.questions;
  console.log("questions1:", questions.length);
  useEffect(() => {
    if (questions.length < 3) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [questions]);

  const ScrollToTop = () =>
    window.scrollTo({ top: questions.length, behavior: "smooth" });
  {
    console.log("scroll");
  }
  if (!visible) {
    return false;
  }
  return (
    <button>
      <ScrollIcon onClick={ScrollToTop} className="scroll-icon" />
    </button>
  );
};
export default ScrollToTop;
