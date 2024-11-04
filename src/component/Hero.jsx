import React from "react";
import Blob from "./Marbles/Blob";
import Stone from "./Marbles/Stone";
import ParticlesComponent from "./SubComponent/ParticlesComponent";

const Hero = () => {
  return (
    <div className="z-10 flex flex-col items-center pt-12 h-screen">
      <Blob />
      <Stone />
      <ParticlesComponent />
      <h3 className="text-base text-[#A7A3AC] font-medium">
        Hola Visionary! Ready to Scale{" "}
        <span className="text-[#C68C33]">New Heights?</span>
      </h3>
      <h1 className="text-4xl lg:text-5xl font-bold text-center">
        Fueling Innovation <br />
        Powering Your Success
      </h1>
      <h2 className="pt-6 text-sm font-medium text-center max-w-[400px] text-[#A7A3AC]">
        From IT Excellence to Creative Brilliance – We’re Your Complete Solution
        to Drive Business Growth.
      </h2>
      <div className="flex justify-center pt-6">
        <button className="btn-grad px-4 py-2 rounded-2xl text-lg font-medium">
          View in Instagram
        </button>
      </div>
    </div>
  );
};

export default Hero;
