import React from "react";
import WhyCard from "./SubComponent/WhyCard";

const Why = () => {
  return (
    <div className="flex flex-col items-center w-full mt-8">
      <h1 className="text-4xl font-bold pb-8">Why Company Name?</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <WhyCard
          title="Affordable Price"
          desc="We provide websites to all startups at very affordable prices"
        />
        <WhyCard
          title="Affordable Price"
          desc="We provide websites to all startups at very affordable prices"
        />
        <WhyCard
          title="Affordable Price"
          desc="We provide websites to all startups at very affordable prices"
        />
        <WhyCard
          title="Affordable Price"
          desc="We provide websites to all startups at very affordable prices"
        />
      </div>
    </div>
  );
};

export default Why;
