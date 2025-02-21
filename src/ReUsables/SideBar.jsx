import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  RiLogoutCircleRLine 
} from "react-icons/ri"; 
import { 
  MdPeople, MdOutlineInventory2, MdOutlineDashboard, 
  MdOutlineSettings 
} from 'react-icons/md';
import { GiExpense } from "react-icons/gi";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import Logo from './Logo';

const SideBar = ({ role = "managers", onSignOut }) => {
  const location = useLocation();
  const [showAll, setShowAll] = useState(false);

  // Define menu items for each role
  const menuItems = {
    owners: [
      { name: 'Dashboard', path: '/owners/dashboard', icon: <MdOutlineDashboard size={24} /> },
      { name: 'Employees', path: '/owners/employees', icon: <MdPeople size={24} /> },
      { name: 'Inventory', path: '/owners/inventory', icon: <MdOutlineInventory2 size={24} /> },
      { name: 'Expenses', path: '/owners/expenses', icon: <GiExpense size={24} /> },
      { name: 'Controls', path: '/owners/controls', icon: <FaRegFolderOpen size={24} /> },
      { name: 'Settings', path: '/owners/settings', icon: <MdOutlineSettings size={24} /> },
    ],
    managers: [
      { name: 'Dashboard', path: '/managers/dashboard', icon: <MdOutlineDashboard size={24} /> },
      { name: 'Employees', path: '/managers/employees', icon: <MdPeople size={24} /> },
      { name: 'Inventory', path: '/managers/inventory', icon: <MdOutlineInventory2 size={24} /> },
      { name: 'Expenses', path: '/managers/expenses', icon: <GiExpense size={24} /> },
      { name: 'Controls', path: '/managers/controls', icon: <FaRegFolderOpen size={24} /> },
      { name: 'Settings', path: '/managers/settings', icon: <MdOutlineSettings size={24} /> },
    ],
    cashiers: [
      { name: 'Dashboard', path: '/cashiers/dashboard', icon: <MdOutlineDashboard size={24} /> },
      { name: 'Inventory', path: '/cashiers/inventory', icon: <MdOutlineInventory2 size={24} /> },
      { name: 'Sales', path: '/cashiers/sales', icon: <FcSalesPerformance size={24} /> },
      { name: 'Expenses', path: '/cashiers/expenses', icon: <GiExpense size={24} /> },
      { name: 'Controls', path: '/cashiers/controls', icon: <FaRegFolderOpen size={24} /> },
      { name: 'Settings', path: '/cashiers/settings', icon: <MdOutlineSettings size={24} /> },
    ],
    servers: [
      { name: 'Dashboard', path: '/servers/dashboard', icon: <MdOutlineDashboard size={24} /> },
      { name: 'Inventory', path: '/servers/inventory', icon: <MdOutlineInventory2 size={24} /> },
      { name: 'Sales', path: '/servers/sales', icon: <FcSalesPerformance size={24} /> },
      { name: 'Controls', path: '/servers/controls', icon: <FaRegFolderOpen size={24} /> },
      { name: 'Settings', path: '/servers/settings', icon: <MdOutlineSettings size={24} /> },
    ],
  };

  const items = menuItems[role] || []; // Fetch relevant menu based on role
  const visibleItems = items.slice(0, 3); // First 3 items for mobile
  const hiddenItems = items.slice(3); // Remaining items

  return (
    <div className="container relative">
      {/* Sidebar for large devices */}
      <div className="w-52 bg-white h-screen px-4 overflow-y-auto shadow fixed top-0 left-0 md:block hidden z-[999]">
        <div className="flex justify-center items-center py-1">
          <Link to={`/${role}/dashboard`}>
            <Logo />
          </Link>
        </div>

        <ul>
          {items.map((item, index) => (
            <li key={index} className="py-[10px]">
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-2xl text-lg font-medium 
                  ${location.pathname === item.path ? ' border border-tblue text-tblue' : 'text-gray-700 border border-gray-700'}`}
              >
                <span className={`mr-3 ${location.pathname === item.path ? 'text-tblue' : 'text-black'}`}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            </li>
          ))}

          {/* Sign-out button */}
          <li className="absolute bottom-0 w-[175px]">
            <button
              onClick={onSignOut}
              className="flex items-center p-3 mt-10 rounded-2xl text-lg font-medium text-red-600 w-full"
            >
              <RiLogoutCircleRLine size={24} className="mr-3" />
              Sign Out
            </button>
          </li>
        </ul>
      </div>

      {/* Bottom Bar for Mobile Devices */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-400 py-3 px-1 md:hidden z-[999]">
        <ul className="flex justify-around items-center">
          {visibleItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex flex-col items-center text-lg p-0 rounded-2xl font-medium 
                  ${location.pathname === item.path ? 'text-tblue' : 'text-gray-700'}`}
              >
                <span className={`mr-3 ${location.pathname === item.path ? 'text-tblue bg-gray-400 border border-tblue px-3 py-3 rounded-full' : 'text-gray-700 bg-white border border-gray-700 px-3 py-3 rounded-full'}`}>
                  {item.icon}
                </span>
                <span className={`mr-3 ${location.pathname === item.path ? 'text-tblue font-bold ' : 'text-gray-700 '}`}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}

          {/* "More" Option */}
          <li>
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex flex-col items-center text-xl font-medium text-gray-700 pr-4 px-3 py-3 pt-5 rounded-full"
            >
              <div className="icon"><MdMoreHoriz size={40} /></div>
              <span>More</span>
            </button>
          </li>
        </ul>

        {showAll && (
          <ul className="fixed bottom-[106px] left-0 w-full bg-gray-100 py-3 px-1 grid grid-cols-3 gap-4 border-t border-gray bg-white">
            {hiddenItems.map((item, index) => (
              <li key={index} className="flex justify-center ">
                <Link to={item.path} className="flex flex-col items-center text-sm font-medium">
                  <span className={`mr-3 ${location.pathname === item.path ? 'text-tblue border bg-gray-400 border-tblue px-3 py-3 rounded-full' : 'border bg-white border-gray-700 text-gray-700 px-3 py-3 rounded-full'}`}>
                    {item.icon}
                  </span>
                  <span className={`mr-6 mt-1 text-xl ${location.pathname === item.path ? 'text-tblue font-bold' : 'text-gray-700'}`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}

            {/* Sign-out button for mobile */}
            <li className=" flex justify-center">
              <button
                onClick={onSignOut}
                className="flex flex-col items-center text-xl mt-2 font-medium text-red-600"
              >
                <RiLogoutCircleRLine size={24} className="mr-2 w-12 h-12 border border-red-600 text-red-600 px-3 py-3 rounded-full" />
                <p className="mr-6 text-xl mt-2 font-medium text-red-600">Sign Out</p>
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideBar;
