import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-2 left-2 z-[999] rounded-lg bg-white p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`flex md:flex-row md:w-[80%] w-full flex-col fixed  z-50 flex items-center gap-5 bg-slate-800/10 px-6 py-3 backdrop-blur-md rounded-md text-dark_primary duration-300 ${
          showMenu ? "top-0" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <div className="flex flex-row gap-4">

          <a
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
          >
            <div className="flex">
            <div className="mt-1 pr-2">
            {createElement(item.icon)}
            </div>
            <div>
            {item.name}
            </div>
            </div>
          </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
