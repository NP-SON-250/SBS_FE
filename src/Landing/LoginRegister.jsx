import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon, PaperClipIcon } from '@heroicons/react/24/solid';  
import Logo from '../ReUsables/Logo';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(true); 

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleClick = () => {
    document.getElementById('file-upload').click();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeModal = () => {
    setIsOpen(false);
    window.location.reload();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative lg:mt-8 mt-14">
        {/* Close button */}
        <button className="absolute top-1 right-1 hover:shadow-xl hover:bg-yellow-100 rounded-full" onClick={closeModal}>
          <IoClose className="w-10 h-10 text-red-700 p-1" />
        </button>

        {isLogin ? (
          <>
            <div className='flex justify-center items-center gap-10'>
              <div className='-mt-3 pb-5'>
                <Logo />
              </div>
            </div>
            <form>
              <p className="text-gray-400 text-center text-sm p-2">Login to Alema Soft to get full access</p>
              <div className="mb-4">
                <label className="block text-gray-700 lg:text-sm text-xl font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full lg:text-sm text-xl px-3 py-2 border rounded-lg focus:outline-none focus:border-desired"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6 relative">
                <label className="block text-gray-700 lg:text-sm text-xl font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full lg:text-sm text-xl px-3 py-2 border rounded-lg focus:outline-none focus:border-desired"
                  placeholder="Enter your password"
                />
                <div className="absolute lg:top-[38px] top-[48px] right-0 pr-3 flex items-center text-xl leading-5">
                  {showPassword ? (
                    <EyeSlashIcon
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <EyeIcon
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-center lg:text-sm text-xl items-center lg:gap-12 gap-4 mb-4">
                <div className="forgot text-blue-500 underline"><Link to={"/resetpassword"}>Forgot password?</Link></div>
                <p className="mt-0  text-center text-gray-600">
              Use as{' '}
              <Link to={'/guests'}><button  className="text-blue-500 underline">
                Guest
              </button></Link>
            </p>
              </div>
              <div className='flex justify-center items-center'>
                <button
                  type="submit"
                  className="w-[150px] bg-tblue hover:bg-white hover:text-tblue text-white lg:text-sm text-xl font-bold py-1 rounded-xl shadow-slate-900 shadow-md transition-all"
                  >
                  Login
                </button>
              </div>
            </form>
            <p className="mt-4 lg:text-sm text-xl text-center text-gray-600">
              No account yet?{' '}
              <button onClick={toggleForm} className="text-blue-500 underline">
                Register
              </button>
            </p>
          </>
        ) : (
          <>
            <div className='flex justify-center items-center gap-10'>
              <Logo />
            </div>
            <form>
            <p className="text-gray-400 text-sm text-center p-1">Register to get an integrated solution to manage your business</p>

              <div className="mb-1">
                <label className="block text-gray-700 lg:text-sm text-xl font-bold mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full lg:text-sm text-xl px-3 py-2 border rounded-lg focus:outline-none focus:border-desired"
                  placeholder="Determine business name"
                />
              </div>
              <div className="mb-1">
                <label className="block text-gray-700 lg:text-sm text-xl font-bold mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full lg:text-sm text-xl px-3 py-2 border rounded-lg focus:outline-none focus:border-desired"
                  placeholder="Determine owner email"
                />
              </div>
              <div className="mb-1">
                <label className="block text-gray-700 lg:text-sm text-xl font-bold mb-1" htmlFor="category">
                  Category
                </label>
                <input
                  id="category"
                  type="text"
                  className="w-full lg:text-sm text-xl px-3 py-2 border rounded-lg focus:outline-none focus:border-desired"
                  placeholder="Search category for your business"
                />
              </div>
              <div className="lg:flex flex-col gap-5">
              <div className="mb-1 relative">
                <label className="block text-gray-700 lg:text-sm text-xl font-bold mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full lg:text-sm text-xl px-3 py-2 border rounded-lg focus:outline-none focus:border-desired"
                  placeholder="Enter your password"
                />
                <div className="absolute lg:top-[35px] top-[48px] right-0 pr-3 flex items-center text-xl leading-5">
                  {showPassword ? (
                    <EyeSlashIcon
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <EyeIcon
                      className="h-5 w-5 text-gray-500 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 lg:text-sm text-xl font-bold mb-1" htmlFor="profile">
                  Profile
                </label>
                <div className='flex cursor-pointer lg:w-28 w-28 border-desired' onClick={handleClick}>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <PaperClipIcon className="lg:w-6 lg:h-6 w-6 h-6 text-tblue mr-2" />
                  {selectedImage ? (
                    <img src={selectedImage} alt="Profile" className="lg:w-6 lg:h-6 w-10 h-12 rounded-full object-cover ml-2" />
                  ) : (
                    <span className="text-pcolor lg:text-sm lg:mt-3 mt-1 text-xl font-bold">Choose..</span>
                  )}
                </div>
              </div>
              </div>
              <div className='flex justify-center items-center'>
                <button
                  type="submit"
                  className="w-[150px] bg-tblue hover:bg-white hover:text-tblue text-white lg:text-sm text-xl font-bold py-1 rounded-xl shadow-slate-900 shadow-md transition-all"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="mt-4 lg:text-sm text-xl text-gray-500 text-center">
              Have an account?{' '}
              <button onClick={toggleForm} className="text-blue-500 underline">
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
