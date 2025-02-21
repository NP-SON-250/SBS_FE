// src/Slider.jsx
import React, { useState, useEffect } from 'react';
import Decsion from '../assets/decsion.jpeg'; 
import Solutions from '../assets/solution.jpeg'; 
import Transaction from '../assets/Transaction.png'; 
import LoginRegister from './LoginRegister';

const slides = [
  {
    image: Transaction,
    heading: 'Manage Transactions, Employees, and Stock with Ease',
    para: 'Get started to explore more....',
    button: 'Get started',
  },
  {
    image: Decsion,
    heading: 'Achieve Sustainable Growth with Data-Driven Decisions',
    para: 'Get started to explore more....',
    button: 'Get started',
  },
  {
    image: Solutions,
    heading: 'Empowering Businesses with Smart Solutions to maximize profit',
    para: 'Get started to explore more....',
    button: 'Get started',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleGetStartedClick = () => {
    setShowForm(true);
  };

  return (
    <div className="relative h-[400px] w-full overflow-hidden z[1000]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 -top-20 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center lg:px-40 px-5">
              {slide.heading}
            </h1>
            <p className="text-gray text-lg md:text-3xl lg:px-2 px-10 font-bold py-6">{slide.para}</p>
            <button
              className=" fixed top-80 w-[200px] bg-tblue hover:bg-white hover:text-tblue text-white lg:text-base text-xl font-bold py-3 rounded-full shadow-slate-900 shadow-md transition-all z-50"
              onClick={handleGetStartedClick}
            >
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      {/* Display Login/Register form when "Get Started" is clicked */}
      {showForm && <LoginRegister />}
    </div>
  );
};

export default Slider;
