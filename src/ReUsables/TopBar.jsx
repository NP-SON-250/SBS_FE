import React, { useState, useEffect } from "react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "./Logo";

// Function to determine the greeting based on the current time
const getGreeting = () => {
  const now = new Date();
  const hour = now.getHours();
  return hour < 12 ? "Good Morning" : "Good Afternoon";
};

const TopBar = ({ currentSection, role = "managers" }) => {
  const greeting = getGreeting();
  const [bgColor, setBgColor] = useState("bg-white");

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-white shadow-md transition-all duration-300");
      } else {
        setBgColor("bg-gray shadow-none");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 w-full lg:w-[calc(100%-210px)] h-16 p-4 shadow bg-white`}
      style={{ zIndex: 999 }}
    >
      {/* Large devices */}
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex gap-5 pl-20">
          <div>{greeting}</div>
          <div className="username">Alexis</div>
        </div>

        <div className="lg:flex items-center absolute right-60 bg-white border rounded-full px-3 py-1 mt-2 w-[330px] shadow-sm">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 bg-transparent outline-none w-full"
          />
        </div>

        <div className="flex items-center gap-20 px-10 mt-2 absolute right-0">
          <FiBell className="text-gray-600 w-5 h-5" />
          <FiUser className="text-gray-600 w-6 h-6" />
        </div>
      </div>

      {/* Mobile devices */}
      <div className="flex items-center justify-between -mt-2 px-5 lg:hidden">
        <Link to={`/${role}/dashboard`}>
          <Logo />
        </Link>

        <div className="text-lg font-bold text-gray-700">{currentSection}</div>
        <FiBell className="text-tblue w-6 h-6 hover:text-black cursor-pointer" />
      </div>
    </div>
  );
};

export default TopBar;
