import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Routing from "./Router";
import ImageSet from "./components/ImageSet";

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
