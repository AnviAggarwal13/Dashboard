import {React, useState, useEffect} from 'react'
import Chart from './chart'
import '../style.css';

const Activities = () => {
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
    <div>
        <div id="chart">
        Activities
        <div id="date2">May-June 2023</div>
        <Chart data ={data}/>
      </div>
    </div>
  )
}

export default Activities