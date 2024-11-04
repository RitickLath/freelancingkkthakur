import React from "react";

const Border1 = ({ children }) => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        // position: "absolute",
        // top: "40%",
        // left: "80%",
        width: "40px",
        height: "auto",
        transition: "0.3s",
      }}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>
          <stop
            id="stop2"
            stopColor="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="none"
        d="M22.1,-36.7C28.9,-34.3,34.9,-28.9,37.9,-22.3C41,-15.7,41.2,-7.9,38.9,-1.3C36.7,5.3,32,10.5,27,13.8C22.1,17.1,16.7,18.4,12.2,23.4C7.6,28.3,3.8,36.9,-0.7,38.1C-5.2,39.4,-10.5,33.3,-16.5,29.1C-22.5,25,-29.2,22.9,-31.8,18.4C-34.4,13.9,-32.8,6.9,-33.2,-0.2C-33.5,-7.4,-35.9,-14.7,-32.9,-18.4C-29.8,-22.2,-21.3,-22.2,-15,-24.9C-8.6,-27.7,-4.3,-33,1.7,-35.9C7.6,-38.8,15.2,-39.2,22.1,-36.7Z"
        width="30px"
        height="30px"
        transform="translate(50 50)"
        strokeWidth="1"
        stroke="url(#sw-gradient)"
      ></path>
      {children}
    </svg>
  );
};

export default Border1;
