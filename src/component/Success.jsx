import React from "react";

const Success = () => {
  return (
    <div className="md:flex justify-between py-16 text-white my-16 px-6 md:px-20 lg:px-32">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="pt-6 text-4xl md:text-5xl font-bold text-[#C68C33]">
          Trusted Results, <br /> Measurable Impact
        </h1>
      </div>

      {/* Stats Section */}
      <div className="md:w-[440px]">
        {/* Uptime Commitment */}
        <div className="pb-6 md:pt-6 border-b-[1px]">
          <h1 className="text-3xl md:text-5xl font-semibold">99.9%</h1>
          <h2 className="text-[#A7A3AC] text-lg mt-2">
            Uptime Commitment for reliable service.
          </h2>
        </div>

        {/* Services Covered */}
        <div className="py-6 border-b-[1px]">
          <h1 className="text-3xl md:text-5xl font-semibold">150+</h1>
          <h2 className="text-[#A7A3AC] text-lg mt-2">
            Services across IT, software, and design.
          </h2>
        </div>

        {/* Project Turnaround */}
        <div className="py-6 border-b-[1px]">
          <h1 className="text-3xl md:text-5xl font-semibold">Fast</h1>
          <h2 className="text-[#A7A3AC] text-lg mt-2">Fast project deployment for growth.</h2>
        </div>

        {/* End-to-End Service Commitment */}
        <div className="py-6 border-b-[1px]">
          <h1 className="text-3xl md:text-5xl font-semibold">End-to-End</h1>
          <h2 className="text-[#A7A3AC] text-lg mt-2">Full service from start to finish.</h2>
        </div>
      </div>
    </div>
  );
};

export default Success;
