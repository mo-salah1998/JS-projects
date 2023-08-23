import artificialIntelligence from "../assets/artificial-intelligence .png";
import {useState, useEffect} from "react";

let Header = () => {

    return (
        <header className="flex sm:flex-nowrap sm:justify-start z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
            <nav className="max-w-[75rem] w-full mx-auto px-6 sm:flex sm:items-center sm:justify-between" aria-label="Global">
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
                <div className="flex flex-row items-center mt-5 sm:justify-end sm:mt-0 sm:pl-5">

                    <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Login</a>
                </div>
            </nav>
        </header>
    )}

export default Header;
