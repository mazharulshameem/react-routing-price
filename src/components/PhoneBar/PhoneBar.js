import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PhoneBar = () => {
  const [phones, setPhones] = useState([])
  useEffect(()=>{
  axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
  .then(data=> {
  const phonesLoaded = data.data.data;
  const phoneData = phonesLoaded.map(phone=>{
     const parts = phone.slug.split('-');
     const price = parseInt(parts[1]);
     const singlePhone = {
      name: phone.phone_name,
      price:price
     }
     return singlePhone;
  })
  setPhones(phoneData)
   

  })

  },[])
  return (
    <div>
      <h1> Mobile Price chart</h1>
      <div className="m-10 mt-5 pb-10">
        <BarChart width={1000} height={500} data={phones}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#0FF74D" />
        </BarChart>
      </div>
    </div>
  );
};

export default PhoneBar;