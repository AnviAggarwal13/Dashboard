import React from 'react'
import '../style.css'

const Board = () => {
  return (
    <div>
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
    </div>
  )
}

export default Board