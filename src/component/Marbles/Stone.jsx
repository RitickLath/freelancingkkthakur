import React from "react";

const Stone = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute", // Set position to absolute
        top: "73%",
        left: "16%",
        width: "50px", // Adjusts the size responsively
        height: "auto",
        transition: "0.3s", // Smooth transition on movement
      }}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(255, 82, 0, 1)" offset="0%"></stop>
          <stop id="stop2" stopColor="rgba(68, 43, 76, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M21.5,-15C27.4,-9.8,31.3,-0.9,28.6,4.8C25.9,10.4,16.6,12.8,9.2,14.7C1.8,16.6,-3.7,17.9,-11.4,16.8C-19.1,15.8,-28.9,12.3,-31.8,5.6C-34.7,-1.1,-30.6,-11.1,-24.1,-16.4C-17.7,-21.7,-8.8,-22.3,-0.5,-21.9C7.8,-21.5,15.7,-20.1,21.5,-15Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
      ></path>
    </svg>
  );
};

export default Stone;