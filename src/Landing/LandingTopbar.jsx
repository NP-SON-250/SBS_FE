import React,{useState} from 'react';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../ReUsables/Logo';
import LoginRegister from './LoginRegister';
// Function to determine the greeting based on the current time
const getGreeting = () => {
  const now = new Date();
  const hour = now.getHours();
  return hour < 12 ? 'Good Morning' : 'Good Afternoon';
};

const LandingTopbar = ({ currentSection}) => {
  const greeting = getGreeting(); 
  const [showForm, setShowForm] = useState(false);

    const handleGetStartedClick = () => {
      setShowForm(true);
    };
  return (
    <div className="fixed top-0 right-0 w-full h-16 bg-white p-4 shadow z-[999]">
      {/* Large devices */}
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex gap-20">
            <div className='-mt-5'>
            <Link to={`/`} >
            <Logo />
          </Link>
            </div>
          <div className='flex gap-4'>
          <div>{greeting}</div>
          <div className="username">Dear</div>
          </div>
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
        <Link to={'/landing/notifications'}><FiBell className="text-tblue w-6 h-6 hover:text-black cursor-pointer" /></Link>
          <FiUser className="text-tblue w-6 h-6 hover:text-black cursor-pointer" onClick={handleGetStartedClick}/>
        </div>
      </div>

      {/* Mobile devices */}
      <div className="flex items-center justify-between -mt-2 px-5 lg:hidden">
      <Link to={`/`}>
            <Logo />
          </Link>

        <div className="text-lg font-bold text-gray-700">{currentSection}</div>
        <Link to={'/landing/notifications'}><FiBell className="text-tblue w-6 h-6 hover:text-black cursor-pointer" /></Link>
        <FiUser className="text-tblue w-6 h-6 hover:text-black cursor-pointer -mr-5" onClick={handleGetStartedClick}/>
      </div>
      {showForm && <LoginRegister />}
    </div>
  );
};

export default LandingTopbar;
