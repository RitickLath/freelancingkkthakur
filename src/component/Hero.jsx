import React from "react";
import Blob from "./Marbles/Blob";
import Stone from "./Marbles/Stone";
import ParticlesComponent from "./SubComponent/ParticleComponent";

const Hero = () => {
  return (
    <div className="flex justify-center pt-12 h-screen">
      <Blob />
      <Stone />
      <ParticlesComponent id="particles" />
      <div>
        <h1 className="text-4xl font-bold">
          Fueling Innovation <br />
          Powering Your Success
        </h1>
        <h2 className="pt-4 max-w-[500px] text-[#A7A3AC]">
          From IT Excellence to Creative Brilliance – We’re Your Complete
          Solution to Drive Business Growth.
        </h2>
        <div className="flex justify-center pt-6">
          <button className="text-lg font-medium">View in Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
