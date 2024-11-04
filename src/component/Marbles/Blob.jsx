import React from "react";

const Blob = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: "40%",
        left: "80%",
        width: "40px",
        height: "auto",
        transition: "0.3s",
      }}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(129, 82, 60, 1)" offset="0%"></stop>
          <stop
            id="stop2"
            stopColor="rgba(150, 33, 188,1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M24.4,-19.3C29.7,-12.8,30.7,-2.8,29.4,8.1C28,18.9,24.1,30.5,15.9,35.3C7.7,40.2,-4.9,38.3,-16.4,33.1C-27.8,27.9,-38.1,19.5,-39.9,9.7C-41.6,-0.1,-34.8,-11.2,-26.8,-18.3C-18.7,-25.5,-9.3,-28.6,0.1,-28.7C9.5,-28.7,19.1,-25.8,24.4,-19.3Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        stroke="url(#sw-gradient)"
      />
    </svg>
  );
};

export default Blob;
