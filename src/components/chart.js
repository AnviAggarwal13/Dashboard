import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";
import '../style.css';

export default function Chart() {
  const data = [
    {name: '', uv: 0, amt: 0},
    {name: 'Shirt', uv: 4000, amt: 2400},
    {name: 'Pants', uv: 1500, amt: 2210},
    {name: 'Caps', uv: 4500, amt: 2290},
];
const data2 = [
    {a: 'Shirt', pv: 3500, amt: 2400},
    {a: 'Pants', pv: 1398, amt: 2210},
    {a: 'Caps', pv: 4000, amt: 2290},
    {name: '', pv:1300, amt: 3400},
];
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
        <Line data={data} type="monotone" dataKey="uv" stroke="#ee8484"/>
        <Line data = {data2} type="monotone" dataKey="pv" stroke="#82ca9d"/> 
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}