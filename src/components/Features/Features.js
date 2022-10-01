import React from 'react';
import {
  CheckCircleIcon,} from "@heroicons/react/24/solid";

const Features = ({feature}) => {
  return (
      <div className=" flex m-2">
        <CheckCircleIcon className="h-6 w-6 text-black" />
        <p className=" font-bold text-white text-center">{feature}</p>
      </div>
  );
};

export default Features;