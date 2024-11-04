import React from "react";

const WhyCard = ({ title, desc, icon }) => {
  return (
    <div className="z-10 px-6 py-[25px] w-[300px] h-[230px] lg:w-[470px] lg:h-[200px] bg-[#1B1128] rounded-md flex">
      <div>
        {icon}
        <h1 className="font-bold text-2xl pt-2">{title}</h1>
        <h2 className="text-[#A7A3AC] pt-3">{desc}</h2>
      </div>
    </div>
  );
};

export default WhyCard;
