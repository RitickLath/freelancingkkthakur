import React from "react";
import ParticlesComponent from "./SubComponent/ParticlesComponent";
import { motion } from "framer-motion";
import Marble1 from "./Marbles/Marble1";
import Marble2 from "./Marbles/Marble2";

const Hero = () => {
  return (
    <div className="z-10 flex flex-col items-center pt-12 min-h-screen">
      <ParticlesComponent />
      <Marble1 />
      <Marble2 />
      <motion.div
        transition={{ duration: 1, ease: "backInOut" }}
        animate={{ scale: [0, 0.5, 1] }}
      >
        <h3 className="text-base text-center pb-2 md:pb-0 text-[#A7A3AC] font-medium">
          Hola Visionary! Ready to Scale
          <span className="text-[#C68C33]"> New Heights?</span>
        </h3>

        <div className="text-center">
          <motion.h1
            animate={{
              backgroundImage: [
                "linear-gradient(90deg, #ff0055, #22cc88)",
                "linear-gradient(90deg, #22cc88, #ff0055)",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%", // Enlarge background to support gradient transitions
              WebkitBackgroundClip: "text", // Clip background to text
              display: "inline-block", // Ensure the gradient applies to text only
            }}
            className="heading text-4xl lg:text-5xl font-bold"
          >
            Fueling Innovation <br />
            Powering Your Success
          </motion.h1>
        </div>
        <h3 className="max-w-[450px] pt-2 lg:pl-8 text-sm font-medium text-[#A7A3AC] text-center mx-auto">
          From IT Excellence to Creative Brilliance – We’re Your Complete
          Solution to Drive Business Growth.
        </h3>

        <div className="flex justify-center pt-6">
          <button className="btn-grad px-4 py-2 rounded-2xl text-lg font-medium z-20">
            View in Instagram
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
