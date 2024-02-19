import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./App.css";

const App = () => {
  return (
    <div className="main-app-container">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
