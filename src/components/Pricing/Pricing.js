import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
  const PricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Mocking features ",
        "Socking features ",
        "Docking features ",
        "Docking features ",
        "Vocking features ",
        "Bocking features ",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 9.99,
      features: [
        "Mocking features ",
        "Socking features ",
        "locking features ",
        "Docking features ",
        "Vocking features ",
        "Bocking features ",
      ],
    },
    {
      id: 3,
      name: "Platinum",
      price: 29.99,
      features: [
        "Mocking features ",
        "Socking features ",
        "locking features ",
        "Docking features ",
        "Vocking features ",
        "Bocking features ",
      ],
    },
  ];
  return (
    <div className=" justify-center m-10 ">
      <h1 className="text-5xl bg-green-500 p-7 rounded-md">Best deal in Town</h1>
      <div className='grid md:grid-cols-3  gap-4'>
        {PricingOptions.map((option) => (
          <PriceOption 
          key={option.id} 
          option={option}
          ></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;