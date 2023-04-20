import React from "react";
// import Block from "./block";
import "./style.css";
import { useEffect, useState } from "react";
import Chart from "./chart";
import PieRechartComponent from "./chart2";

function Dash() {
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
      const data = await res.json();
      console.log(data);
      setdata(data?.data);
    };
    fetchDatas();
  }, []);
  return (
    <div className="main">
      <div className="board">
        <div
          style={{
            backgroundColor: "black",
            width: "280px",
            height: "944px",
            borderRadius: "30px",
            display: "flex",
            color: "white",
            fontSize: 36,
            fontWeight: 700,
            FontFace: "Montserrat",
            marginLeft: "40px",
          }}
        >
          <span id="head">Board.</span>

          <div className="option">
            <p>
              <i className="fa-solid fa-chart-pie"></i>Dashboard
            </p>
            <p>
              <i className="fa-solid fa-tags"></i>Transactions
            </p>
            <p>
              <i className="fa-solid fa-calendar"></i>Schedules
            </p>
            <p>
              <i className="fa-solid fa-user"></i>Users
            </p>
            <p>
              <i className="fa-solid fa-gear"></i>Settings
            </p>
          </div>

          <div className="contact">
            <p>Help</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="header">
        <h2>Dashboard</h2>
        <ul id="header">
          <li>
            <div className="search">
              <span>
                Search...<i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </li>
          <li>
            <i class="fa-solid fa-bell"></i>
          </li>
          <li>
            <i class="fa-solid fa-user"></i>
          </li>
        </ul>
      </div>
      <section id="featured">
        <div className="box1">
         <span>Total Revenues</span> <i class="fa-regular fa-money-bill-1"></i>
          <p>$2,129,430</p>
        </div>
        <div className="box2">
          <span>Total Transactions</span> <i className="fa-solid fa-tags"></i>
          <p> 1,520</p>
         
        </div>
        <div className="box3">
          <span>Total Likes</span><i class="fa-regular fa-thumbs-up"></i>
          <p>9,271</p>
          
        </div>
        <div className="box4">
         <span> Total Users </span><i class="fa-solid fa-user-group"></i>
          <p>
          892
          </p>
        </div>
      </section>

      <div id="chart">
        Activities
        <div id="date2">May-June 2021</div>
        <Chart data ={data}/>
      </div>
<section id="banner">
<div id="products">
        Top products
        <div id="date">May-June 2021</div>
        <PieRechartComponent />
      </div>
      <div id="schedule">
        <div id="date">See All </div>
        Today's schedule
        <div id="green">h</div>
      
      <div id="meet1">
        <h2>Meeting with suppliers from Kuta Bali</h2>
        <p>14.00-15.00</p>
        <p>at Sunset Road, Kuta, Bali</p>
      </div>
      <div id="blue">h</div>
      <div id="meet2">
        <h2>Check operation at Giga Factory 1</h2>
        <p>18.00-20.00</p>
        <p>at Central Jakarta</p>
      </div>
      </div>
</section>
      
    </div>
  );
}

export default Dash;
