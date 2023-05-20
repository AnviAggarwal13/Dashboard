import React from 'react'
import '../style.css'


const Header = () => {
  return (
    <div>
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
    </div>
  )
}

export default Header