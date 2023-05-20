import {React, useState, useEffect} from 'react'
import Chart from './chart'
import '../style.css';

const Activities = () => {


  return (
    <div>
        <div id="chart">
        Activities
        <div id="date2">May-June 2023</div>
        <Chart />
      </div>
    </div>
  )
}

export default Activities