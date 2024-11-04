import React from "react";
import Hero from "./component/Hero";
import Why from "./component/Why";

const App = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 0% 0%, #57458D, #3e2f64 15%, #0F051D 35%, #140822 100%)",
      }}
      className="px-6 sm:px-10 md:px-12 lg:px-16 py-4 w-full min-h-screen text-white"
    >
      <Hero />
      <Why />
    </div>
  );
};

export default App;
