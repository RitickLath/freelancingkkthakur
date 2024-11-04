import React from "react";

const Marble3 = () => {
  return (
    <svg
      id="sw-js-marble3-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: "53%",
        left: "66%",
        width: "50px",
        height: "auto",
        transition: "0.3s",
      }}
    >
      {" "}
      <defs>
        {" "}
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          {" "}
          <stop
            id="stop1"
            stopColor="rgba(248, 117, 55, 1)"
            offset="0%"
          ></stop>{" "}
          <stop
            id="stop2"
            stopColor="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>{" "}
        </linearGradient>{" "}
      </defs>{" "}
      <path
        fill="#F87537"
        d="M16.8,-29.1C22,-26,26.7,-22.1,28.2,-17.1C29.7,-12.1,28,-6.1,29,0.6C30.1,7.3,33.9,14.5,30.3,15.9C26.8,17.3,15.8,12.8,9.5,11.5C3.2,10.2,1.6,12.1,-3.3,17.8C-8.1,23.5,-16.3,32.9,-21.5,33.6C-26.8,34.3,-29.2,26.3,-31.8,19.2C-34.3,12.2,-36.9,6.1,-36.9,0C-36.8,-6,-34.1,-12.1,-29,-14.8C-24,-17.5,-16.7,-16.8,-11.5,-20C-6.2,-23.2,-3.1,-30.1,1.3,-32.4C5.8,-34.7,11.5,-32.3,16.8,-29.1Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        style="transition: 0.3s;"
        stroke="url(#sw-gradient)"
      ></path>{" "}
    </svg>
  );
};

export default Marble3;
