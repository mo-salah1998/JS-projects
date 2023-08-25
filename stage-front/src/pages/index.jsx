import React, { useState, useEffect } from 'https://cdn.skypack.dev/react';
import artificialIntelligence from "../assets/artificial-intelligence .png";

let PageIndex = () => {
  return ( <header className=" sm:flex-nowrap sm:justify-start z-50 w-full bg-white text-sm py-4 h-screen block dark:bg-gray-800">
    <nav className="relative max-w-[85rem] w-full mx-auto px-6 flex items-center justify-between py-4 border-b-2" aria-label="Global">
      <div className="flex items-center justify-between">
        <a className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white" href="#">
          <img
              className="mx-auto h-12 w-auto"
              src={artificialIntelligence}
              alt="Your Company"
          />
          <h1>AI CV</h1>
        </a>
      </div>
      <div>
        <a className="font-medium text-xl text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-500" href="#">Login</a>
      </div>
    </nav>


  </header>)
};
export default PageIndex;
