import Hero from "./component/Hero";
import ParticlesComponent from "./component/SubComponent/ParticlesComponent";
import Why from "./component/Why";

// App.jsx
const App = () => {
  return (
    <div className="px-6 sm:px-10 md:px-12 lg:px-16 py-4 w-full min-h-screen text-white">
      <div className="absolute h-screen overflow-hidden">
        <ParticlesComponent />
      </div>
      <Hero />
      <Why />
    </div>
  );
};

export default App;
