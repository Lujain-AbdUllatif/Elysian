import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";

import "./style.css";

const LogIn = () => {
  const [isChecked, setIsChecked] = useState(0);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    var url;
    if (isChecked) {
      url = "http://localhost:4000/tester/signin";
    } else {
      url = "http://localhost:4000/examinee/signin";
    }
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        console.log(obj);
        if (obj.access_token) window.location.pathname = "/tester-home";
        else return obj;
      })
      .catch((error) => {
        console.log(error);
        document.getElementById("msg").innerHTML = "Try again";
      });
    return;
  }
  return (
    <div className="card">
      <div className="logo">
        <img className="logo" src="img/pic.png" />
      </div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p id="msg"></p>

        <div id="checkBox">
          {" "}
          <label for="role-box"> Tester ?</label>
          <input
            type="checkbox"
            name="role"
            id="role-box"
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
        <input className="submit" type="submit" placeholder="LOG IN " />
        <div>
          <br />
          <p>
            Don't Have An Account ? <NavLink to="/">Sign Up</NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
