import React, { useEffect, useState } from "react";
import { ScrollIcon } from "../../icons";
const ScrollToTop = (props) => {
  const [visible, setVisiblity] = React.useState(false);
  const [ScrollClick, setScrollClick] = React.useState(false);
  const questions = props.questions;

  useEffect(() => {
    if (questions.length > 3) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [questions]);

  const ScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
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
