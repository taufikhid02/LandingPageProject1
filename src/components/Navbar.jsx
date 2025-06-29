import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center text-white h-24 mx-auto px-4 bg-pink-50">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
      <ul className="hidden sm:flex">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/company">Company</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4">
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="sm:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r-2 border-r-gray-800 h-full ease-in-out duration-500 bg-black"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="p-4 uppercase text-white">
          <li className="p-4  border-b-2 border-gray-800">Home</li>
          <li className="p-4 border-b-2  border-gray-800" border-gray-800>
            Company
          </li>
          <li className="p-4 border-b-2 border-gray-800">About</li>
          <li className="p-4 border-b-2 border-gray-800">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
