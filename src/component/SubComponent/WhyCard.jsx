import React from "react";

const WhyCard = ({ title, desc }) => {
  return (
    <div className="px-6 w-[300px] h-[230px] lg:w-[450px] lg:h-[160px] bg-[red] rounded-md flex justify-center items-center">
      <div>
        {/* <img src={image} alt="" /> */}
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
    </div>
  );
};

export default WhyCard;
