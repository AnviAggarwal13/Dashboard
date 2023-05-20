import React from 'react';
import PieRechartComponent from './chart2';
import '../style.css';

const Banner = () => {
  return (
    <div>
        <section id="banner">
<div id="products">
        Top products
        <div id="date">May-June 2023</div>
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
  )
}

export default Banner