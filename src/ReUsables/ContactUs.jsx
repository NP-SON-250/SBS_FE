import React from 'react';

const ContactUs = ({id}) => {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-0">
      {/* Left Side - Map */}
      <div className="md:w-1/2 lg:px-10 rounded">
        <h2 className="text-3xl font-semibold text-gray-400 mb-4 text-center">Find Us Here</h2>
        {/* Google Maps iframe */}
        <div className="h-72 bg-gray rounded-2xl space-y-1"
        data-aos="fade-up"
        data-aos-delay={id}
        key={id}
        >
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.776743024283!2d30.102113!3d-1.9600588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6955b4b1c4f%3A0xe19e865b07a73023!2sKigali%20Special%20Economic%20Zone!5e0!3m2!1sen!2srw!4v1697540913435!5m2!1sen!2srw"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius:10 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
        </div>

      </div>

      {/* Right Side - Contact Us Form */}
      <div className="md:w-1/2 lg:py-4 py-6"data-aos="fade-down"data-aos-delay="200">
        <form>
          <div className="mb-4" >
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-desired"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-desired"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-desired"
              placeholder="Your message"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-[200px] bg-tblue hover:bg-white hover:text-tblue text-white lg:text-base text-xl font-bold py-3 rounded-full shadow-slate-900 shadow-md transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
