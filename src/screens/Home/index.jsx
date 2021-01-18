import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

//components imports
import Btn from "../../components/Btn";
const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <img src="img/pic.png" />
        <div className="buttons-container">
          <NavLink exact to="tester-home">
            <Btn label="Tester" />
          </NavLink>
          <Btn label="Examinee" />
        </div>
      </div>
    </div>
  );
};

export default Home;
