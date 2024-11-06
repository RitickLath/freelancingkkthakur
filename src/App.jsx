import Header from "./component/Header";
import Hero from "./component/Hero";
import ParticlesComponent from "./component/SubComponent/ParticlesComponent";
import Success from "./component/Success";
import Why from "./component/Why";

// App.jsx
const App = () => {
  return (
    <div className="px-6 sm:px-10 md:px-12 lg:px-16 py-4 w-full min-h-screen text-white">
      <ParticlesComponent />
      <Header />
      <Hero />
      <Why />
      <Success />
    </div>
  );
};

export default App;
