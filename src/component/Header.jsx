import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBriefcase,
  FiMap,
  FiThumbsUp,
  FiBookOpen,
  FiHelpCircle,
} from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]"
          />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white font-semibold hover:text-white">
            Home
          </a>
          <a
            href="#services"
            className="text-white font-semibold hover:text-white"
          >
            Services
          </a>
          <a
            href="#roadmap"
            className="text-white font-semibold hover:text-white"
          >
            Roadmap
          </a>
          <a
            href="#whyus"
            className="text-white font-semibold hover:text-white"
          >
            Why Us
          </a>
          <a href="#blog" className="text-white font-semibold hover:text-white">
            Blog
          </a>
        </nav>

        {/* WhatsApp Button */}
        <div className="hidden md:block">
          <button className="px-4 py-2 border border-white rounded-full text-white hover:text-white">
            Connect on WhatsApp
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleDrawer}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-40 md:hidden">
          <div className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-transparent p-6">
            <div className="bg-[#1B1128] shadow-lg p-6 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white"></h2>
                <button onClick={toggleDrawer} className="text-white">
                  <FiX size={24} />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                <a
                  href="#home"
                  onClick={toggleDrawer}
                  className="flex items-center text-white text-lg hover:text-white"
                >
                  <FiHome className="mr-2" /> Home
                </a>
                <a
                  href="#whyus"
                  onClick={toggleDrawer}
                  className="flex items-center text-white text-lg hover:text-white"
                >
                  <FiThumbsUp className="mr-2" /> Why Us
                </a>
                <a
                  href="#services"
                  onClick={toggleDrawer}
                  className="flex items-center text-white text-lg hover:text-white"
                >
                  <FiBriefcase className="mr-2" /> Services
                </a>
                <a
                  href="#roadmap"
                  onClick={toggleDrawer}
                  className="flex items-center text-white text-lg hover:text-white"
                >
                  <FiMap className="mr-2" /> Roadmap
                </a>
                <a
                  href="#blog"
                  onClick={toggleDrawer}
                  className="flex items-center text-white text-lg hover:text-white"
                >
                  <FiBookOpen className="mr-2" /> Blog
                </a>
                <a
                  href="#about"
                  onClick={toggleDrawer}
                  className="flex items-center text-white text-lg hover:text-white"
                >
                  <FiHelpCircle className="mr-2" /> FAQs
                </a>
              </nav>
              <div className="mt-6">
                <button className="w-full py-2 border border-white rounded-full text-white hover:text-white">
                  Connect on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
