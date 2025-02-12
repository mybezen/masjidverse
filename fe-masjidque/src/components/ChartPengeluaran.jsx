import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    pemasukan: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    pemasukan: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    pemasukan: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    pemasukan: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    pemasukan: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    pemasukan: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    pemasukan: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-v3w7s9";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pemasukan" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
