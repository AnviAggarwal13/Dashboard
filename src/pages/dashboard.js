import React from "react";
import "../style.css";
import Board from "../components/Board";
import Header from "../components/Header";
import Featured from "../components/Featured";
import Banner from "../components/Banner";
import Activities from "../components/Activities";

function Dash() {
  
  return (
    <div className="main">
      <Board />
      <div className="main2">
      <Header />
      <Featured />
      <Activities />
      <Banner />
      </div>
   </div>
  );
}

export default Dash;
