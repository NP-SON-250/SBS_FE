import React from 'react';
import Slider from './Slider';
import Testimonial from './Testimonials';
import About from '../assets/about.webp'; 
import ContactUs from '../ReUsables/ContactUs'

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Slider Section */}
      <Slider />

      {/* Mission Section */}
      <section className="py-16 bg-white" data-aos="fade-right">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold text-gray-400 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg lg:px-52" >
            We strive to empower businesses by providing the best management tools to streamline operations, enhance productivity, and achieve sustainable growth.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6 md:flex md:space-x-10">
          <div className="md:w-1/2" >
            <img
              src={About}
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4 text-center">About Us</h2>
            <p className="text-gray-600 text-lg">
              We are a team of passionate individuals committed to helping businesses thrive. Our platform offers an integrated solution to manage employees, stock, and transactions efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-400 mb-8 text-center" data-aos="fade-right">What Our Clients Say</h2>
          <Testimonial />
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-400 mb-8 text-center">Contact Us</h2>
          <ContactUs />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
