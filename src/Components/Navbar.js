import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
      {/* Logo */}
      <div className="cursor-pointer">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-4xl text-orange-600">
          Eatify
        </h1>
      </div>

      {/* Search & Login */}
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="flex justify-center bg-gray-200 h-10 rounded-md items-center sm:w-[400px] lg:w-[400px]">
          <input
            type="search"
            className="hidden sm:flex bg-transparent p-2 w-full focus:outline-none text-black placeholder-gray-500"
            placeholder="Search..."
          />
          <FiSearch
            size={20}
            className="bg-black text-white p-2 h-10 w-10 rounded-md cursor-pointer"
          />
        </div>

        {/* Login Button */}
        <button className="bg-black text-white px-5 py-1 rounded-md h-10 w-[100px] hover:bg-orange-600 transition-colors">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
