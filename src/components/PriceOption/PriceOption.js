import React from 'react';
import { ArrowRightCircleIcon, } from "@heroicons/react/24/solid";
import Features from '../Features/Features';

const PriceOption = ({option}) => {
  const {features} = option;
  return (
    <div className="bg-indigo-300 mt-16 p-5 rounded-md">
      <div className="">
        <p>
          <span className="text-5xl font-bold text-white ">{option.price}</span>
          <span className="text-rose-500 font-bold">/Month</span>
        </p>
        <p>
          <span className="text-3xl font-bold ">{option.name}</span>
        </p>
      </div>
      {features.map((feature, idx) => (
        <Features key={idx} feature={feature}></Features>
      ))}

      <button className="bg-green-500 font-bold text-white mt-3 p-3 rounded-md w-full hover:bg-black">
        Buy Now 
      </button>
    </div>
  );
};

export default PriceOption;