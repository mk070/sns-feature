import React from 'react';
import { Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      {/* <nav className="fixed top-0 left-0 w-full mx-11  z-50 shadow-md p-4 px-16 bg-white bg-opacity-90 backdrop-blur-lg"> */}
      <nav className="flex h-16 sticky top-0 shadow-md p-4 px-16 rounded-[60px] bg-white bg-opacity-50 mt-4 mx-8">

        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-2xl font-bold flex text-primary">
            <span>SNS Logo</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 font-bold">
            <li className="hover:text-blue-600">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-blue-600">
              <a href="#help">Help</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content for Nested Routes */}
      <Outlet />
    </>
  );
};

export default Nav;
