import React from "react";
import WhyCard from "./SubComponent/WhyCard";
import { whyChooseUs } from "../constants/WhyChoose";

const Why = () => {
  return (
    <div className="z-10 flex flex-col items-center w-full mt-8">
      <h1 className="text-4xl md:text-4xl font-bold pb-8 text-center text-[#C68C33]">
        Why One Stop Solution?
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        {whyChooseUs.map((item, index) => (
          <WhyCard
            icon={item.icon}
            title={item.title}
            desc={item.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Why;
