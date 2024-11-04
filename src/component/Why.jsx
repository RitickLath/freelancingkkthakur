import React from "react";
import WhyCard from "./SubComponent/WhyCard";
import { whyChooseUs } from "../constants/WhyChoose";

const Why = () => {
  return (
    <div className="z-10 flex flex-col items-center w-full mt-8">
      <h1 className="text-4xl font-bold pb-8 text-center">Why Company Name?</h1>
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Moved the grid here and adjusted the gap */}
        {whyChooseUs.map((item, index) => (
          <WhyCard title={item.title} desc={item.description} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Why;
