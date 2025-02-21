// src/components/Testimonial.jsx
import React, { useState, useEffect } from 'react';
import John from '../assets/alechris.jpeg';
import Jane from '../assets/alejul.jpeg';
import Robert from '../assets/alex.jpeg';
import Emily from '../assets/painted.jpg';
import Chris from '../assets/chriss.jpg';
import Laura from '../assets/Jose.jpg';

const testimonials = [
  {
    text: "This system transformed how we manage our business. Highly recommend it!",
    name: "John Muhoza",
    role: "CEO, ABC Corp",
    profile:John,
  },
  {
    text: "Our operations have become more efficient, and tracking sales is now a breeze!",
    name: "Jane Mirembe",
    role: "Manager, XYZ Ltd",
    profile:Jane,
  },
  {
    text: "The best investment we've made in business management.",
    name: "Robert Kuzara",
    role: "Founder, Startup Co",
    profile:Robert,
  },
  {
    text: "Our team's productivity has skyrocketed with this system!",
    name: "Emily Bayisenge",
    role: "Operations Lead, Acme Inc",
    profile:Emily,
  },
  {
    text: "A powerful solution that makes everything run smoother.",
    name: "Chris Amich",
    role: "CTO, Future Corp",
    profile:Chris,
  },
  {
    text: "We now have full visibility of our business performance.",
    name: "Laura Mutamba",
    role: "Head of Sales, Acme Ltd",
    profile:Laura,
  },
];

const Testimonial = () => {
  const [currentBatch, setCurrentBatch] = useState(0);
  const [batchSize, setBatchSize] = useState(3);
  const totalBatches = Math.ceil(testimonials.length / batchSize);

  const updateBatchSize = () => {
    const width = window.innerWidth;
    setBatchSize(width < 640 ? 2 : 3); 
  };
  useEffect(() => {
    updateBatchSize();
    window.addEventListener('resize', updateBatchSize);
    return () => window.removeEventListener('resize', updateBatchSize);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBatch((prevBatch) => (prevBatch + 1) % totalBatches);
    }, 12000);
    return () => clearInterval(interval);
  }, [totalBatches]);

  const handleDotClick = (index) => setCurrentBatch(index);
  const currentTestimonials = testimonials.slice(
    currentBatch * batchSize,
    (currentBatch + 1) * batchSize
  );

  return (
    <div className="text-center" data-aos="fade-left">
      {/* Testimonial Content */}
      <div className={`grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-3`}>
        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className="p-8 bg-gray-50 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4 lg:text-base text-xl" >"{testimonial.text}"</p>
            <div className='flex gap-3'>
                <img src={testimonial.profile} alt="" className='w-10 h-10 rounded-full' />
                <div>
                <h4 className="mt-0 text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h4>
            <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dotted Slider Navigation */}
      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalBatches }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentBatch ? 'bg-tblue' : 'bg-gray-300' // Change active dot color to tblue
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
