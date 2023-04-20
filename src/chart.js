import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";
import './style.css';

export default function Chart({ data }) {
  return (
    <div id="cont">
    <ResponsiveContainer width={1050} height={200}>
      <LineChart id="lChart"
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
       <Legend wrapperStyle={{top: 10, left: 420}}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="name" fill="#8884d8" fontSize="12px" />
        <Line dataKey="priceUsd" fill="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}