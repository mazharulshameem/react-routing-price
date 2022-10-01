import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer,
} from "recharts";

const PriceChart = () => {
  const data = [
    {
      name: "i Month",
      price: 4000,
      time: 2400,
      break: 2400,
    },
    {
      name: "ii Month",
      price: 5000,
      time: 1398,
      break: 2210,
    },
    {
      name: "iii Month",
      price: 8000,
      time: 9800,
      break: 2290,
    },
    {
      name: "iv Month",
      price: 10780,
      time: 3908,
      break: 2000,
    },
    {
      name: "V Month",
      price: 1890,
      time: 4800,
      break: 2181,
    },
    {
      name: "Vi Month",
      price: 2390,
      time: 3800,
      break: 2500,
    },
    {
      name: "Vii Month",
      price: 3490,
      time: 4300,
      break: 2100,
    },
  ];
  return (
    <div className=' m-10 mt-5 pb-10 bg-rose-100'  >
      <h1 className=' mt-10 text-3xl font-bold p-5'> Price Chart Monthly</h1>
      <LineChart height={400} width={700} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        <Line type="monotone" dataKey="time" stroke="#82ca" />
        <Line type="monotone" dataKey="break" stroke="#82ca10" />
      </LineChart>
    </div>
  );
};

export default PriceChart;