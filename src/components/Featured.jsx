import React from 'react'
import '../style.css'

const Featured = () => {
  return (
    <div>
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
    </div>
  )
}

export default Featured